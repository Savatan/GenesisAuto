<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { openLead } from '../lead.js'

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'Главная', href: '#hero' },
  { label: 'Как мы работаем', href: '#how' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]
const phones = [
  { name: 'Андрей', display: '+7 (964) 440-31-72', raw: '79644403172' },
  { name: 'Ольга', display: '+7 (904) 627-86-86', raw: '79046278686' },
]

function onScroll() { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md border-b border-line shadow-sm' : 'bg-transparent'"
  >
    <div class="mx-auto max-w-6xl px-5 flex items-center justify-between h-16 md:h-20">
      <a href="#hero" class="flex items-center gap-2.5">
        <img src="/logo.png" alt="Genesis Auto" class="h-7 md:h-8 w-auto" />
        <span class="font-display font-semibold text-lg tracking-tight" :class="scrolled ? 'text-cloud' : 'text-white'">
          Genesis <span class="text-gold-soft">Auto</span>
        </span>
      </a>

      <nav class="hidden md:flex items-center gap-7">
        <a v-for="l in links" :key="l.href" :href="l.href"
           class="text-sm transition-colors"
           :class="scrolled ? 'text-fog hover:text-cloud' : 'text-white/80 hover:text-white'">{{ l.label }}</a>
      </nav>

      <div class="flex items-center gap-5">
        <div class="hidden lg:flex flex-col items-end leading-tight">
          <a :href="`tel:+${phones[0].raw}`" class="text-sm font-display font-semibold transition-colors hover:text-gold-soft" :class="scrolled ? 'text-cloud' : 'text-white'">{{ phones[0].display }}</a>
          <a :href="`tel:+${phones[1].raw}`" class="text-xs transition-colors hover:text-gold-soft" :class="scrolled ? 'text-fog' : 'text-white/70'">{{ phones[1].display }}</a>
        </div>
        <button @click="openLead"
           class="hidden md:inline-flex items-center rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white hover:bg-gold-soft transition-colors">
          Заказать
        </button>
        <button class="md:hidden" :class="scrolled ? 'text-cloud' : 'text-white'" @click="menuOpen = !menuOpen" aria-label="Меню">
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
      <nav v-if="menuOpen" class="md:hidden bg-white border-b border-line px-5 py-4 flex flex-col gap-4">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="menuOpen = false"
           class="text-fog hover:text-cloud">{{ l.label }}</a>
        <div class="flex flex-col gap-1 pt-2 border-t border-line">
          <a v-for="p in phones" :key="p.raw" :href="`tel:+${p.raw}`" class="font-display font-semibold text-cloud">{{ p.display }} <span class="text-fog text-sm font-normal">— {{ p.name }}</span></a>
        </div>
        <button @click="menuOpen = false; openLead()"
           class="rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-white">Заказать</button>
      </nav>
    </transition>
  </header>
</template>