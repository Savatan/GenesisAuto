

async function sendToTelegram({ name, phone, city, car, country, budget, contact }) {
  const token = process.env.TG_BOT_TOKEN
  const chatId = process.env.TG_CHAT_ID
  if (!token || !chatId) return

  const text =
    `🚗 Новая заявка — Genesis Auto\n\n` +
    `👤 Имя: ${name}\n` +
    `📞 Телефон: ${phone}\n` +
    `🏙 Город: ${city || '—'}\n` +
    `🚘 Интересует: ${car || '—'}\n` +
    `🌏 Страна: ${country || '—'}\n` +
    `💰 Бюджет: ${budget || '—'}\n` +
    `📨 Связь: ${contact || '—'}`

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  })
}

async function sendToBitrix({ name, phone, city, car, country, budget, contact }) {
  const hook = process.env.BITRIX_WEBHOOK
  if (!hook) return

  const comments =
    `Город: ${city || '—'}\n` +
    `Интересует: ${car || '—'}\n` +
    `Страна: ${country || '—'}\n` +
    `Бюджет: ${budget || '—'}\n` +
    `Способ связи: ${contact || '—'}`

  await fetch(`${hook}crm.lead.add.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        TITLE: `Заявка с сайта — ${name}`,
        NAME: name,
        SOURCE_ID: 'WEB',
        PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
        COMMENTS: comments,
      },
      params: { REGISTER_SONET_EVENT: 'Y' },
    }),
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' })
    return
  }
  try {
    let body = req.body
    if (typeof body === 'string') { try { body = JSON.parse(body) } catch { body = {} } }
    body = body || {}

    const g = (k) => (body[k] || '').toString().trim()
    const data = {
      name: g('name'),
      phone: g('phone'),
      city: g('city'),
      car: g('car'),
      country: g('country'),
      budget: g('budget'),
      contact: g('contact'),
    }

    if (!data.name || !data.phone) {
      res.status(400).json({ error: 'missing_fields' })
      return
    }


    const results = await Promise.allSettled([
      sendToTelegram(data),
      sendToBitrix(data),
    ])


    const allFailed = results.every((r) => r.status === 'rejected')
    if (allFailed) throw new Error('all_channels_failed')

    res.status(200).json({ ok: true })
  } catch (e) {
    res.status(500).json({ error: 'failed' })
  }
}