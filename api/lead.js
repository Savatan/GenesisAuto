export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body

    const {
      name = 'Не указано',
      phone = 'Не указан',
      city = 'Не указан',
      car = 'Не указан',
      country = 'Не указан',
      budget,
      contact = 'Не указан',
    } = body || {}

    // =========================
    // TELEGRAM
    // =========================

    const tgMessage = `
🚘 Новая заявка Genesis Auto

👤 Имя: ${name}
📞 Телефон: ${phone}
🏙 Город: ${city}

🚗 Автомобиль: ${car}
🌍 Страна: ${country}
💰 Бюджет: ${budget || 'Не указан'}

📲 Способ связи: ${contact}
`

    await fetch(
      `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TG_CHAT_ID,
          text: tgMessage,
        }),
      }
    )

    // =========================
    // BITRIX CRM (WEBHOOK ВСТРОЕН)
    // =========================

    await fetch(
      `https://b24-cq1qom.bitrix24.ru/rest/1/5vaga30iglkrs6ep/crm.lead.add.json`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            TITLE: 'Заявка с сайта Genesis Auto',
            NAME: name,
            PHONE: [
              {
                VALUE: phone,
                VALUE_TYPE: 'WORK',
              },
            ],
            COMMENTS: `
Город: ${city}

Автомобиль: ${car}

Страна: ${country}

Бюджет: ${budget || 'Не указан'}

Способ связи: ${contact}
            `,
            SOURCE_DESCRIPTION: 'Сайт Genesis Auto',
          },
        }),
      }
    )

    return res.status(200).json({ success: true })
  } catch (e) {
    console.error(e)

    return res.status(500).json({ error: 'Server error' })
  }
}