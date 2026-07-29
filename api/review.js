export default async function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).json({ error: 'method_not_allowed' }); return }
  try {
    let body = req.body
    if (typeof body === 'string') { try { body = JSON.parse(body) } catch { body = {} } }
    body = body || {}
    const g = (k) => (body[k] || '').toString().trim()
    const name = g('name'), city = g('city'), text = g('text')
    if (!name || !text) { res.status(400).json({ error: 'missing_fields' }); return }

    const token = process.env.TG_BOT_TOKEN
    const chatId = process.env.TG_CHAT_ID
    if (!token || !chatId) { res.status(500).json({ error: 'not_configured' }); return }

    const msg =
      `⭐ Новый отзыв — Genesis Auto\n\n` +
      `👤 ${name}${city ? ', ' + city : ''}\n\n` +
      `«${text.slice(0, 1500)}»`

    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: msg }),
    })
    if (!tg.ok) throw new Error('tg_failed')
    res.status(200).json({ ok: true })
  } catch (e) {
    res.status(500).json({ error: 'failed' })
  }
}
