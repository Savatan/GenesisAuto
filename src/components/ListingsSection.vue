<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const CHANNEL = 'avtomobil1244'
const channelUrl = `https://t.me/${CHANNEL}`

const posts = ref([])
const status = ref('loading') // loading | ok | fallback
const openItems = ref({})
let timer = null

function fmtDate(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
  } catch { return '' }
}

async function load() {
  try {
    const r = await fetch('/api/telegram')
    if (!r.ok) throw new Error()
    const data = await r.json()
    if (Array.isArray(data) && data.length) {
      posts.value = data.slice(0, 9)
      status.value = 'ok'
      return
    }
  } catch { /* запасной блок ниже */ }
  status.value = 'fallback'
}

onMounted(() => {
  load()
  timer = setInterval(load, 90000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="listings" class="relative py-28 md:py-44">
    <div class="mx-auto max-w-6xl px-5">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="reveal text-xs tracking-[0.3em] uppercase text-gold-soft" v-reveal>Каталог</p>
          <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl" v-reveal="100">Актуальные объявления</h2>
          <p class="reveal mt-3 text-fog" v-reveal="150">Свежие авто из нашего Telegram-канала.</p>
        </div>
        <a :href="channelUrl" target="_blank" rel="noopener"
           class="reveal text-gold-soft font-semibold hover:text-gold transition-colors" v-reveal="150">Открыть канал →</a>
      </div>

      <div v-if="status === 'loading'" class="mt-12 grid gap-5 sm:grid-cols-2">
        <div v-for="n in 2" :key="n" class="h-80 rounded-2xl bg-graphite border border-line animate-pulse"></div>
      </div>

      <div v-else-if="status === 'ok'" class="mt-12 grid gap-5 sm:grid-cols-2">
        <div v-for="(p, i) in posts" :key="p.id || i" class="flex flex-col overflow-hidden rounded-2xl glass">
          <div v-if="p.video" class="aspect-video bg-black overflow-hidden">
            <video :src="p.video" :poster="p.poster || undefined" controls preload="metadata" class="h-full w-full object-cover"></video>
          </div>
          <a v-else-if="p.photo || p.poster" :href="p.url" target="_blank" rel="noopener" class="block aspect-video overflow-hidden group">
            <img :src="p.photo || p.poster" alt="Объявление" loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </a>

          <div class="flex flex-1 flex-col p-6">
            <p class="text-cloud leading-relaxed whitespace-pre-line" :class="openItems[i] ? '' : 'line-clamp-4'">{{ p.text || 'Открыть объявление в Telegram' }}</p>
            <button v-if="(p.text || '').length > 160" @click="openItems[i] = !openItems[i]"
                    class="mt-3 self-start text-gold-soft font-semibold text-sm hover:text-gold transition-colors">
              {{ openItems[i] ? 'Свернуть' : 'Читать полностью' }}
            </button>
            <div class="mt-auto pt-4 border-t border-line flex items-center justify-between text-sm">
              <span class="text-fog">{{ fmtDate(p.date) }}</span>
              <a :href="p.url" target="_blank" rel="noopener" class="text-gold-soft font-semibold hover:text-gold transition-colors">Открыть в Telegram →</a>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="mt-12 rounded-3xl border border-line bg-graphite p-10 text-center">
        <p class="text-lg font-display font-semibold text-cloud">Объявления публикуются в нашем Telegram-канале</p>
        <p class="mt-2 text-fog">Там — свежие авто с фото, ценами и описанием.</p>
        <a :href="channelUrl" target="_blank" rel="noopener"
           class="mt-6 inline-flex rounded-full bg-gold px-8 py-4 font-semibold text-white hover:bg-gold-soft transition-colors">Смотреть объявления в Telegram</a>
      </div>
    </div>
  </section>
</template>