// Принимает заявку и отправляет тебе в Telegram.
// Переменные на Vercel: TG_BOT_TOKEN (от @BotFather), TG_CHAT_ID (твой Id от @userinfobot).

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).json({ error: 'method_not_allowed' }); return }
  try {
    let body = req.body
    if (typeof body === 'string') { try { body = JSON.parse(body) } catch { body = {} } }
    body = body || {}

    const g = (k) => (body[k] || '').toString().trim()
    const name = g('name'), phone = g('phone'), city = g('city'), car = g('car'),
          country = g('country'), budget = g('budget'), contact = g('contact')

    if (!name || !phone) { res.status(400).json({ error: 'missing_fields' }); return }

    const token = process.env.TG_BOT_TOKEN
    const chatId = process.env.TG_CHAT_ID
    if (!token || !chatId) { res.status(500).json({ error: 'not_configured' }); return }

    const text =
      `🚗 Новая заявка — Genesis Auto\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      `🏙 Город: ${city || '—'}\n` +
      `🚘 Интересует: ${car || '—'}\n` +
      `🌏 Страна: ${country || '—'}\n` +
      `💰 Бюджет: ${budget || '—'}\n` +
      `📨 Связь: ${contact || '—'}`

    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    })
    if (!tg.ok) throw new Error('tg_failed')

    res.status(200).json({ ok: true })
  } catch (e) {
    res.status(500).json({ error: 'failed' })
  }
}
