<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { openLead } from '../lead.js'

const slides = [
  { tag: 'Подборка', title: 'Подборка автомобилей из Кореи и Китая до 160 л.с.', desc: 'Автомобили, которые не попадают под новый утильсбор.', image: '/slide1.jpg' },
  { tag: 'Аукцион', title: 'Авто из аукциона Кореи с доставкой до Владивостока', desc: 'Подбор, проверка и доставка под ключ.', image: '/slide2.jpg' },
  { tag: 'Новые авто', title: 'Новые автомобили от дилеров Китая', desc: 'Официально, с документами на ваше имя.', image: '/slide3.jpg' },
]
const active = ref(0)
let timer = null
function go(i) { active.value = (i + slides.length) % slides.length }
onMounted(() => { timer = setInterval(() => go(active.value + 1), 5000) })
onUnmounted(() => clearInterval(timer))

const messengers = [
  { label: 'ТГ', href: 'https://t.me/avtomobil1244' },
  { label: 'МАХ', href: '#contacts' },
  { label: '2GIS', href: 'https://2gis.ru/vladivostok/firm/70000001114765329' },
  { label: 'АВИТО', href: '#contacts' },
]

const services = [
  { label: 'Заказать АВТО', paths: ['M5 13l1.5-4A2 2 0 0 1 8.4 8h7.2a2 2 0 0 1 1.9 1.3L19 13', 'M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z'] },
  { label: 'Заказать МОТО', paths: ['M6 17a3 3 0 1 0 0 .01M18 17a3 3 0 1 0 0 .01', 'M6 17l3-6h5l2 3M9 11h6'] },
  { label: 'Заказать СПЕЦТЕХНИКУ', paths: ['M3 7h11v8H3zM14 10h4l3 3v2h-7z', 'M7 18a2 2 0 1 0 .01 0M19 18a2 2 0 1 0 .01 0'] },
  { label: 'Автозапчасти', paths: ['M12 9a3 3 0 1 0 .01 0', 'M12 2v3M12 19v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M18.5 5.5l-2 2M7.5 16.5l-2 2'] },
]
const trust = ['Официальный договор', 'Без посредников', 'Владивосток']
</script>

<template>
  <section id="hero" class="relative bg-ink pt-24 md:pt-32 pb-14 md:pb-20">
    <div class="mx-auto max-w-6xl px-5">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
        <div>
          <h1 class="anim-fade font-display font-extrabold uppercase leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl text-cloud" style="animation-delay:.05s">
            <span class="text-gold">Genesis</span> Auto
          </h1>
          <p class="anim-up mt-2 font-display font-semibold text-xl md:text-2xl text-cloud" style="animation-delay:.2s">
            Авто из Китая, Кореи и Японии
          </p>
          <div class="anim-up mt-4 flex flex-wrap items-center gap-3" style="animation-delay:.3s">
            <a href="tel:+79644403172" class="font-display font-bold text-lg text-cloud hover:text-gold transition-colors">+7 (964) 440-31-72</a>
            <div class="flex items-center gap-2">
              <a v-for="m in messengers" :key="m.label" :href="m.href"
                 :target="m.href.startsWith('http') ? '_blank' : undefined" rel="noopener"
                 class="rounded-full border border-line bg-white px-4 py-1.5 text-xs font-bold text-gold hover:border-gold/60 transition-colors">
                {{ m.label }}
              </a>
            </div>
          </div>
        </div>
        <button @click="openLead"
                class="anim-up self-start md:self-auto rounded-full bg-gold px-8 py-4 font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-soft hover:-translate-y-0.5 transition-all"
                style="animation-delay:.35s">
          Заявка на подбор авто
        </button>
      </div>

      <div class="anim-up relative mt-8 overflow-hidden rounded-3xl shadow-xl shadow-slate-900/15" style="animation-delay:.45s">
        <div class="flex transition-transform duration-700 ease-out" :style="{ transform: `translateX(-${active * 100}%)` }">
          <div v-for="s in slides" :key="s.title" class="relative w-full shrink-0 min-h-[380px] md:min-h-[440px] flex items-center">
            <img :src="s.image" :alt="s.title" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/10"></div>
            <div class="relative p-8 md:p-12 pb-16 md:pb-20">
              <span class="inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">{{ s.tag }}</span>
              <h2 class="mt-4 font-display font-bold text-3xl md:text-5xl text-white max-w-2xl leading-tight">{{ s.title }}</h2>
              <p class="mt-3 text-white/80 leading-relaxed max-w-md">{{ s.desc }}</p>
              <a href="#lead" class="mt-6 inline-flex rounded-full bg-gold px-7 py-3.5 font-semibold text-white hover:bg-gold-soft transition-colors shadow-lg shadow-gold/30">Оставить заявку</a>
            </div>
          </div>
        </div>

        <button @click="go(active - 1)" aria-label="Предыдущий слайд"
                class="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur text-white hover:bg-white/30 transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button @click="go(active + 1)" aria-label="Следующий слайд"
                class="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur text-white hover:bg-white/30 transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>

        <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <button v-for="(s, i) in slides" :key="i" @click="go(i)" :aria-label="`Слайд ${i + 1}`"
                  class="h-2.5 rounded-full transition-all duration-300"
                  :class="active === i ? 'w-7 bg-gold' : 'w-2.5 bg-white/50 hover:bg-white/80'"></button>
        </div>
      </div>

      <div class="anim-up mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3" style="animation-delay:.6s">
        <a v-for="s in services" :key="s.label" href="#lead"
           class="group flex items-center justify-center gap-3 rounded-2xl bg-white border border-line px-4 py-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/15">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="text-gold shrink-0">
            <path v-for="(d, i) in s.paths" :key="i" :d="d" />
          </svg>
          <span class="text-sm font-semibold text-cloud leading-tight">{{ s.label }}</span>
        </a>
      </div>

      <div class="anim-up mt-6 flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-fog" style="animation-delay:.75s">
        <span v-for="t in trust" :key="t" class="flex items-center gap-2"><span class="text-gold font-bold">✓</span> {{ t }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes ga-fade { from { opacity: 0 } to { opacity: 1 } }
@keyframes ga-up { from { opacity: 0; transform: translateY(26px) } to { opacity: 1; transform: translateY(0) } }
.anim-fade { opacity: 0; animation: ga-fade 1.4s ease forwards; }
.anim-up { opacity: 0; animation: ga-up 1.2s cubic-bezier(.16, 1, .3, 1) forwards; }
@media (prefers-reduced-motion: reduce) {
  .anim-fade, .anim-up { animation: none; opacity: 1; transform: none; }
}
</style>
