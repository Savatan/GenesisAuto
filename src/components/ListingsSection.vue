<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { catalogTab } from '../catalog.js'

const CHANNEL = 'avtomobil1244'
const channelUrl = `https://t.me/${CHANNEL}`

const q = ref('')
const tab = ref('Все')
watch(catalogTab, (v) => { if (tabs.includes(v)) tab.value = v })
const tabs = ['Все', 'Япония', 'Корея', 'Китай', 'Мото', 'Спецтехника']
const tabWords = {
  'Япония': ['япони', 'japan', 'аукцион'],
  'Корея': ['коре', 'korea'],
  'Китай': ['кита', 'china'],
  'Мото': ['мото', 'скутер', 'мопед'],
  'Спецтехника': ['спецтехн', 'экскават', 'погрузчик', 'самосвал', 'кран'],
}
const filtered = computed(() => {
  let list = posts.value
  if (tab.value !== 'Все') {
    const words = tabWords[tab.value] || []
    list = list.filter((p) => words.some((w) => (p.text || '').toLowerCase().includes(w)))
  }
  const query = q.value.trim().toLowerCase()
  if (query) list = list.filter((p) => (p.text || '').toLowerCase().includes(query))
  return list
})

const posts = ref([])
const status = ref('loading')
const openItems = ref({})
let timer = null

function fmtDate(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
  } catch { return '' }
}

function extractPrice(text) {
  if (!text) return null
  const mln = text.match(/(\d+(?:[.,]\d+)?)\s*млн/i)
  if (mln) return `${mln[1].replace('.', ',')} млн ₽`
  const m = text.match(/(\d{1,3}(?:[\s.]\d{3})+|\d{6,})\s*(?:₽|руб)/i)
  if (m) {
    const num = Number(m[1].replace(/[\s.]/g, ''))
    if (num >= 10000) return `${num.toLocaleString('ru-RU')} ₽`
  }
  return null
}

function postTitle(text) {
  if (!text) return ''
  const line = text.split('\n').map(s => s.trim()).find(Boolean) || ''
  return line.length > 80 ? line.slice(0, 77) + '…' : line
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
  } catch {}
  status.value = 'fallback'
}

onMounted(() => {
  load()
  timer = setInterval(load, 90000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="listings" class="relative py-20 md:py-28 bg-graphite-2">
    <div class="mx-auto max-w-6xl px-5">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="reveal text-xs tracking-[0.3em] uppercase text-gold font-semibold" v-reveal>Каталог</p>
          <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl text-cloud" v-reveal="100">Актуальные объявления</h2>
          <p class="reveal mt-3 text-fog" v-reveal="150">Свежие авто из нашего Telegram-канала.</p>
        </div>
        <a :href="channelUrl" target="_blank" rel="noopener"
           class="reveal text-gold font-semibold hover:text-gold-soft transition-colors" v-reveal="150">Открыть канал →</a>
      </div>

      <div v-if="status === 'loading'" class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="n in 3" :key="n" class="h-80 rounded-2xl bg-white border border-line animate-pulse"></div>
      </div>

      <div v-else-if="status === 'ok'">
        <div class="mt-8 flex flex-col md:flex-row md:items-center gap-4">
          <div class="flex flex-wrap gap-2">
            <button v-for="t in tabs" :key="t" @click="tab = t"
                    class="rounded-full border px-5 py-2 text-sm font-semibold transition-colors"
                    :class="tab === t ? 'border-gold bg-gold text-white' : 'border-line bg-white text-fog hover:border-gold/50 hover:text-cloud'">
              {{ t }}
            </button>
          </div>
          <input v-model="q" type="search" placeholder="Поиск: марка, модель…"
                 class="md:ml-auto w-full md:w-72 rounded-full border border-line bg-white px-5 py-2.5 text-sm text-cloud placeholder:text-fog/60 outline-none focus:border-gold transition-colors" />
        </div>

        <div v-if="!filtered.length" class="mt-10 rounded-3xl bg-white border border-line p-8 text-center text-fog">
          По этому фильтру объявлений нет — посмотрите все или откройте канал.
        </div>

        <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(p, i) in filtered" :key="p.id || i" class="flex flex-col overflow-hidden rounded-2xl glass">
          <div v-if="p.video" class="relative aspect-video bg-slate-900 overflow-hidden">
            <video :src="p.video" :poster="p.poster || undefined" controls preload="metadata" class="h-full w-full object-cover"></video>
            <span v-if="extractPrice(p.text)" class="absolute top-3 left-3 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-white shadow-lg">{{ extractPrice(p.text) }}</span>
          </div>
          <a v-else-if="p.photo || p.poster" :href="p.url" target="_blank" rel="noopener" class="relative block aspect-video overflow-hidden group">
            <img :src="p.photo || p.poster" alt="Объявление" loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <span v-if="extractPrice(p.text)" class="absolute top-3 left-3 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-white shadow-lg">{{ extractPrice(p.text) }}</span>
          </a>

          <div class="flex flex-1 flex-col p-6">
            <h3 v-if="postTitle(p.text)" class="font-display font-semibold text-cloud leading-snug">{{ postTitle(p.text) }}</h3>
            <p class="mt-2 text-sm text-fog leading-relaxed whitespace-pre-line" :class="openItems[i] ? '' : 'line-clamp-3'">{{ p.text || 'Открыть объявление в Telegram' }}</p>
            <button v-if="(p.text || '').length > 140" @click="openItems[i] = !openItems[i]"
                    class="mt-2 self-start text-gold font-semibold text-sm hover:text-gold-soft transition-colors">
              {{ openItems[i] ? 'Свернуть' : 'Читать полностью' }}
            </button>
            <div class="mt-auto pt-4 border-t border-line flex items-center justify-between text-sm">
              <span class="text-fog">{{ fmtDate(p.date) }}</span>
              <a :href="p.url" target="_blank" rel="noopener" class="text-gold font-semibold hover:text-gold-soft transition-colors">Открыть в Telegram →</a>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div v-else class="mt-12 rounded-3xl bg-white border border-line p-10 text-center shadow-sm">
        <p class="text-lg font-display font-semibold text-cloud">Объявления публикуются в нашем Telegram-канале</p>
        <p class="mt-2 text-fog">Там — свежие авто с фото, ценами и описанием.</p>
        <a :href="channelUrl" target="_blank" rel="noopener"
           class="mt-6 inline-flex rounded-full bg-gold px-8 py-4 font-semibold text-white hover:bg-gold-soft transition-colors">Смотреть объявления в Telegram</a>
      </div>
    </div>
  </section>
</template>
