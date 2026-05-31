<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'Объявления', href: '#listings' },
  { label: 'Как мы работаем', href: '#how' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

function onScroll() { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-line' : 'bg-transparent'"
  >
    <div class="mx-auto max-w-6xl px-5 flex items-center justify-between h-16 md:h-20">
      <a href="#hero" class="flex items-center gap-2.5">
        <img src="/logo.png" alt="Genesis Auto" class="h-7 md:h-8 w-auto" />
        <span class="font-display font-semibold text-lg tracking-tight text-cloud">
          Genesis <span class="text-gold-soft">Auto</span>
        </span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a v-for="l in links" :key="l.href" :href="l.href"
           class="text-sm text-fog hover:text-cloud transition-colors">{{ l.label }}</a>
      </nav>

      <a href="#lead"
         class="hidden md:inline-flex items-center rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white hover:bg-gold-soft transition-colors">
        Заказать
      </a>

      <button class="md:hidden text-cloud" @click="menuOpen = !menuOpen" aria-label="Меню">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!menuOpen" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150" leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="menuOpen" class="md:hidden bg-ink/95 backdrop-blur-md border-b border-line px-5 py-4 flex flex-col gap-4">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="menuOpen = false"
           class="text-fog hover:text-cloud">{{ l.label }}</a>
        <a href="#lead" @click="menuOpen = false"
           class="rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-white">Заказать</a>
      </nav>
    </transition>
  </header>
</template>
