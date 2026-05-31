// Принимает заявку с сайта и отправляет её тебе в Telegram.
// На Vercel задай переменные окружения:
//   TG_BOT_TOKEN  — токен бота от @BotFather
//   TG_CHAT_ID    — твой chat_id (узнать через @userinfobot; боту нужно написать первым)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' })
    return
  }
  try {
    let body = req.body
    if (typeof body === 'string') { try { body = JSON.parse(body) } catch { body = {} } }
    body = body || {}

    const name = (body.name || '').toString().trim()
    const phone = (body.phone || '').toString().trim()
    const interest = (body.interest || '').toString().trim()
    const comment = (body.comment || '').toString().trim()

    if (!name || !phone) { res.status(400).json({ error: 'missing_fields' }); return }

    const token = process.env.TG_BOT_TOKEN
    const chatId = process.env.TG_CHAT_ID
    if (!token || !chatId) { res.status(500).json({ error: 'not_configured' }); return }

    const text =
      `🚗 Новая заявка — Genesis Auto\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      `🔧 Интересует: ${interest || '—'}\n` +
      `💬 Комментарий: ${comment || '—'}`

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
