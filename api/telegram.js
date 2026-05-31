import { parse } from 'node-html-parser'


const DEFAULT_CHANNEL = process.env.TG_CHANNEL || 'genesis_auto'

export default async function handler(req, res) {
  try {
    const raw = (req.query?.channel || DEFAULT_CHANNEL).toString()
    const channel = raw.replace('@', '').trim()

    const resp = await fetch(`https://t.me/s/${channel}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
    })
    if (!resp.ok) throw new Error('tg fetch failed')
    const html = await resp.text()

    const root = parse(html)
    const messages = root.querySelectorAll('.tgme_widget_message')

    const posts = messages.map((m) => {
      const dataPost = m.getAttribute('data-post') || '' // "channel/123"
      const textEl = m.querySelector('.tgme_widget_message_text')
      const text = textEl ? (textEl.structuredText || textEl.text || '') : ''

      let photo = null
      const photoEl = m.querySelector('.tgme_widget_message_photo_wrap')
      if (photoEl) {
        const style = photoEl.getAttribute('style') || ''
        const mm = style.match(/url\(['"]?(.*?)['"]?\)/)
        if (mm) photo = mm[1]
      }

      const timeEl = m.querySelector('time')
      const date = timeEl ? timeEl.getAttribute('datetime') : null

      return {
        id: dataPost,
        url: dataPost ? `https://t.me/${dataPost}` : null,
        text: text.trim(),
        photo,
        date,
      }
    }).filter((p) => p.text || p.photo)

    posts.reverse() 

    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600')
    res.status(200).json(posts)
  } catch (e) {
    res.status(500).json({ error: 'failed' })
  }
}
