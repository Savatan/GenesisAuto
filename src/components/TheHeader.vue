<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'Услуги', href: '#categories' },
  { label: 'Объявления', href: '#listings' },
  { label: 'Как мы работаем', href: '#how' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent'"
  >
    <div class="mx-auto max-w-6xl px-5 flex items-center justify-between h-16 md:h-20">
      <!-- Логотип -->
      <a href="#hero" class="flex items-center gap-2.5 group">
        <img src="/logo.png" alt="Genesis Auto" class="h-7 md:h-8 w-auto" />
        <span class="font-display font-semibold text-lg tracking-tight transition-colors" :class="scrolled ? 'text-cloud' : 'text-white'">
          Genesis <span class="text-gold">Auto</span>
        </span>
      </a>

      <!-- Навигация (десктоп) -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-sm transition-colors"
          :class="scrolled ? 'text-fog hover:text-cloud' : 'text-white/80 hover:text-white'"
        >{{ l.label }}</a>
      </nav>

      <!-- CTA -->
      <a
        href="#lead"
        class="hidden md:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold-soft transition-colors"
      >Оставить заявку</a>

      <!-- Бургер (мобайл) -->
      <button class="md:hidden transition-colors" :class="scrolled ? 'text-cloud' : 'text-white'" @click="menuOpen = !menuOpen" aria-label="Меню">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!menuOpen" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <!-- Мобильное меню -->
    <transition
      enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150" leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="menuOpen" class="md:hidden bg-ink/95 backdrop-blur-md border-b border-line px-5 py-4 flex flex-col gap-4">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="menuOpen = false"
           class="text-fog hover:text-cloud">{{ l.label }}</a>
        <a href="#lead" @click="menuOpen = false"
           class="rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-ink">Оставить заявку</a>
      </nav>
    </transition>
  </header>
</template>
