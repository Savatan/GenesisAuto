import { parse } from 'node-html-parser'

const DEFAULT_CHANNEL = process.env.TG_CHANNEL || 'genesis_auto'

let cache = null
let cacheTime = 0

const CACHE_TTL = 5 * 60 * 1000 // 5 минут

async function getPosts(channel) {
  const resp = await fetch(`https://t.me/s/${channel}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
  })

  if (!resp.ok) {
    throw new Error('tg fetch failed')
  }

  const html = await resp.text()

  const root = parse(html)

  const messages = root
    .querySelectorAll('.tgme_widget_message')
    .slice(-12)

  return messages
    .map((m) => {
      const dataPost = m.getAttribute('data-post') || ''

      const textEl = m.querySelector('.tgme_widget_message_text')
      const text = textEl
        ? (textEl.structuredText || textEl.text || '')
        : ''

      let photo = null

      const photoEl = m.querySelector('.tgme_widget_message_photo_wrap')

      if (photoEl) {
        const style = photoEl.getAttribute('style') || ''
        const match = style.match(/url\(['"]?(.*?)['"]?\)/)

        if (match) {
          photo = match[1]
        }
      }

      const timeEl = m.querySelector('time')

      return {
        id: dataPost,
        url: dataPost ? `https://t.me/${dataPost}` : null,
        text: text.trim(),
        photo,
        date: timeEl?.getAttribute('datetime') || null,
      }
    })
    .filter((p) => p.text || p.photo)
    .reverse()
}

export default async function handler(req, res) {
  try {
    const raw = (req.query?.channel || DEFAULT_CHANNEL)
      .toString()
      .replace('@', '')
      .trim()

    const now = Date.now()

    if (cache && now - cacheTime < CACHE_TTL) {
      res.setHeader(
        'Cache-Control',
        's-maxage=300, stale-while-revalidate=600'
      )

      return res.status(200).json(cache)
    }

    const posts = await getPosts(raw)

    cache = posts
    cacheTime = now

    res.setHeader(
      'Cache-Control',
      's-maxage=300, stale-while-revalidate=600'
    )

    return res.status(200).json(posts)
  } catch (e) {
    console.error('telegram api error:', e)

    if (cache) {
      return res.status(200).json(cache)
    }

    return res.status(500).json({
      error: 'failed',
    })
  }
}