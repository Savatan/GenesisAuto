<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const CHANNEL = 'avtomobil1244'
const channelUrl = `https://t.me/${CHANNEL}`

const posts = ref([])
const status = ref('loading') // loading | ok | fallback
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
  } catch { /* ниже покажем запасной блок */ }
  status.value = 'fallback'
}

onMounted(() => {
  load()
  timer = setInterval(load, 90000) // обновление каждые 1.5 мин
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="listings" class="relative py-24 md:py-32 bg-graphite">
    <div class="mx-auto max-w-6xl px-5">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="reveal text-xs tracking-[0.3em] uppercase text-gold" v-reveal>Каталог</p>
          <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl" v-reveal="100">
            Актуальные объявления
          </h2>
          <p class="reveal mt-3 text-fog" v-reveal="150">Свежие авто из нашего Telegram-канала.</p>
        </div>
        <a :href="channelUrl" target="_blank" rel="noopener"
           class="reveal text-gold font-semibold hover:text-gold-soft transition-colors" v-reveal="150">
          Открыть канал →
        </a>
      </div>

      <!-- Загрузка -->
      <div v-if="status === 'loading'" class="mt-12 grid gap-5 sm:grid-cols-2">
        <div v-for="n in 2" :key="n" class="h-72 rounded-2xl bg-white border border-line animate-pulse"></div>
      </div>

      <!-- Лента постов -->
      <div v-else-if="status === 'ok'" class="mt-12 grid gap-5 sm:grid-cols-2 items-start">
        <div
          v-for="(p, i) in posts" :key="p.id || i"
          class="flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
        >
          <!-- Видео (играет прямо на сайте) -->
          <div v-if="p.video" class="bg-black">
            <video :src="p.video" :poster="p.poster || undefined" controls preload="metadata"
                   class="w-full max-h-[460px] mx-auto block"></video>
          </div>
          <!-- Иначе фото -->
          <a v-else-if="p.photo || p.poster" :href="p.url" target="_blank" rel="noopener"
             class="block aspect-[3/2] overflow-hidden group">
            <img :src="p.photo || p.poster" alt="Объявление" loading="lazy"
                 class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </a>

          <div class="flex flex-1 flex-col p-6">
            <p class="text-cloud leading-relaxed whitespace-pre-line">{{ p.text || 'Открыть объявление в Telegram' }}</p>
            <div class="mt-5 pt-4 border-t border-line flex items-center justify-between text-sm">
              <span class="text-fog">{{ fmtDate(p.date) }}</span>
              <a :href="p.url" target="_blank" rel="noopener" class="text-gold font-semibold hover:text-gold-soft transition-colors">
                Открыть в Telegram →
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Запасной блок -->
      <div v-else class="mt-12 rounded-3xl border border-line bg-white p-10 text-center">
        <p class="text-lg font-display font-semibold text-cloud">Объявления публикуются в нашем Telegram-канале</p>
        <p class="mt-2 text-fog">Там — свежие авто с фото, ценами и описанием.</p>
        <a :href="channelUrl" target="_blank" rel="noopener"
           class="mt-6 inline-flex rounded-full bg-gold px-8 py-4 font-semibold text-white hover:bg-gold-soft transition-colors">
          Смотреть объявления в Telegram
        </a>
      </div>
    </div>
  </section>
</template>