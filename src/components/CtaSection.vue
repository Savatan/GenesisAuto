<script setup>
import { ref } from 'vue'
import { openLead } from '../lead.js'

const badges = [
  { label: 'ТГ', href: 'https://t.me/avtomobil1244' },
  { label: 'АВИТО', href: '#contacts' },
  { label: '2GIS', href: 'https://2gis.ru/vladivostok/firm/700000011147653292' },
  { label: 'МАХ', href: '#contacts' },
]

const shared = ref(false)
async function shareSite() {
  const url = typeof window !== 'undefined' ? window.location.origin : ''
  const data = { title: 'Genesis Auto', text: 'Авто из Китая, Кореи и Японии под заказ', url }
  try {
    if (navigator.share) { await navigator.share(data); return }
  } catch {}
  try {
    await navigator.clipboard.writeText(url)
    shared.value = true
    setTimeout(() => (shared.value = false), 2500)
  } catch {}
}
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-gold to-[#0347a8] py-16 md:py-24">
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center select-none" aria-hidden="true">
      <span class="font-display font-extrabold uppercase whitespace-nowrap text-[16vw] leading-none text-black/10">Genesis Auto</span>
    </div>
    <div class="absolute -top-24 right-0 w-[36rem] h-[36rem] rounded-full bg-white/10 blur-[140px] pointer-events-none"></div>

    <div class="relative mx-auto max-w-4xl px-5 text-center">
      <h2 class="reveal font-display font-extrabold text-3xl md:text-5xl text-white leading-tight" v-reveal>
        Закажи авто из Кореи и Китая
      </h2>
      <p class="reveal mx-auto mt-5 max-w-2xl text-lg text-white/85 leading-relaxed" v-reveal="100">
        Вы можете оставить заявку, а мы подберем для Вас автомобиль в Китае, с аукциона Кореи, рассчитаем стоимость под ключ и организуем доставку.
      </p>
      <div class="reveal mt-8 flex flex-wrap items-center justify-center gap-4" v-reveal="200">
        <button @click="openLead"
                class="rounded-full bg-white px-9 py-4 font-bold text-gold shadow-xl shadow-black/20 hover:-translate-y-0.5 transition-all">
          Оставить заявку
        </button>
        <a href="tel:+79644403172"
           class="rounded-full border-2 border-white/70 px-8 py-3.5 font-display font-bold text-white hover:bg-white hover:text-gold transition-colors">
          +7 (964) 440-31-72
        </a>
      </div>
      <div class="reveal mt-7 flex flex-wrap justify-center items-center gap-3" v-reveal="300">
        <a v-for="b in badges" :key="b.label" :href="b.href"
           :target="b.href.startsWith('http') ? '_blank' : undefined" rel="noopener"
           class="rounded-full border border-white/40 px-5 py-2 text-sm font-bold text-white hover:bg-white/15 transition-colors">
          {{ b.label }}
        </a>
        <button @click="shareSite"
                class="rounded-full border border-white/40 px-5 py-2 text-sm font-bold text-white hover:bg-white/15 transition-colors">
          {{ shared ? '✓ Ссылка скопирована' : 'Поделиться ссылкой' }}
        </button>
      </div>
    </div>
  </section>
</template>
