<script setup>
import { ref } from 'vue'
import { openLead } from '../lead.js'
import { openCatalog } from '../catalog.js'

const menuOpen = ref(false)

const catalogLinks = [
  { label: 'Авто из Кореи', tab: 'Корея' },
  { label: 'Спецтехника', tab: 'Спецтехника' },
  { label: 'Авто из Китая', tab: 'Китай' },
]
const links = [
  { label: 'О нас', href: '#about' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
]
const phones = [
  { name: 'Андрей', display: '+7 (964) 440-31-72', raw: '79644403172' },
  { name: 'Ольга', display: '+7 (904) 627-86-86', raw: '79046278686' },
]
const socials = [
  { label: 'Telegram', href: 'https://t.me/avtomobil1244', icon: 'tg' },
  { label: 'MAX', href: '#contacts', icon: 'max' },
  { label: '2GIS', href: 'https://2gis.ru/vladivostok/firm/70000001114765329', icon: '2gis' },
  { label: 'Авито', href: '#contacts', icon: 'avito' },
]
</script>

<template>
 <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-line/70">
    <div class="mx-auto max-w-[1360px] px-4 flex items-center justify-between h-16 md:h-20 gap-3">
      <a href="#hero" class="flex items-center gap-2.5 shrink-0">
        <img src="/logo.png" alt="Genesis Auto" class="h-8 md:h-9 w-auto" />
        <span class="hidden sm:flex flex-col leading-tight">
          <span class="font-display font-bold text-lg tracking-tight text-cloud whitespace-nowrap">Genesis <span class="text-gold">Auto</span></span>
          <span class="hidden 2xl:block text-[11px] text-fog whitespace-nowrap">Авто из Китая, Кореи и Японии</span>
        </span>
      </a>

      <nav class="hidden lg:flex items-center gap-4 xl:gap-5">
        <a v-for="c in catalogLinks" :key="c.tab" href="#listings" @click="openCatalog(c.tab)"
           class="whitespace-nowrap text-[13px] xl:text-sm text-fog hover:text-cloud transition-colors">{{ c.label }}</a>
        <a v-for="l in links" :key="l.href" :href="l.href"
           class="whitespace-nowrap text-[13px] xl:text-sm text-fog hover:text-cloud transition-colors">{{ l.label }}</a>
      </nav>

      <div class="flex items-center gap-4">
        <div class="hidden xl:flex items-center gap-2">
          <a v-for="s in socials" :key="s.label" :href="s.href" :aria-label="s.label" :title="s.label"
             :target="s.href.startsWith('http') ? '_blank' : undefined" rel="noopener"
             class="flex h-9 w-9 items-center justify-center rounded-full border border-line text-gold hover:border-gold/60 transition-all hover:-translate-y-0.5">
            <svg v-if="s.icon === 'tg'" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.3-.1-.5-.6-.2L6.5 13.6l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.3 1.4z"/></svg>
            <span v-else-if="s.icon === 'max'" class="text-[9px] font-bold">MAX</span>
            <span v-else-if="s.icon === '2gis'" class="text-[9px] font-bold">2GIS</span>
            <span v-else class="text-[8px] font-bold">Авито</span>
          </a>
        </div>

        <div class="hidden 2xl:flex flex-col items-end leading-tight">
          <a :href="`tel:+${phones[0].raw}`" class="text-sm font-display font-bold text-cloud hover:text-gold transition-colors whitespace-nowrap">{{ phones[0].display }}</a>
          <a :href="`tel:+${phones[1].raw}`" class="text-xs text-fog hover:text-gold transition-colors whitespace-nowrap">{{ phones[1].display }}</a>
        </div>
        <button @click="openLead"
           class="hidden md:inline-flex items-center whitespace-nowrap rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white hover:bg-gold-soft transition-colors">
          Заявка на подбор
        </button>
        <button class="lg:hidden text-cloud" @click="menuOpen = !menuOpen" aria-label="Меню">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path v-if="!menuOpen" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150" leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="menuOpen" class="lg:hidden bg-white border-b border-line px-5 py-4 flex flex-col gap-4">
        <a v-for="c in catalogLinks" :key="c.tab" href="#listings" @click="menuOpen = false; openCatalog(c.tab)"
           class="text-fog hover:text-cloud">{{ c.label }}</a>
        <a v-for="l in links" :key="l.href" :href="l.href" @click="menuOpen = false"
           class="text-fog hover:text-cloud">{{ l.label }}</a>
        <div class="flex flex-col gap-1 pt-2 border-t border-line">
          <a v-for="p in phones" :key="p.raw" :href="`tel:+${p.raw}`" class="font-display font-semibold text-cloud">{{ p.display }} <span class="text-fog text-sm font-normal">— {{ p.name }}</span></a>
        </div>
        <button @click="menuOpen = false; openLead()"
           class="rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-white">Заявка на подбор</button>
      </nav>
    </transition>
  </header>
</template>
