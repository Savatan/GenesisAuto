<script setup>
import { watch } from 'vue'
import LeadFormCard from './LeadFormCard.vue'
import { leadOpen, closeLead } from '../lead.js'

function onKey(e) { if (e.key === 'Escape') closeLead() }
watch(leadOpen, (v) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = v ? 'hidden' : ''
  if (v) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <transition
    enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0"
    leave-active-class="transition duration-150 ease-in" leave-to-class="opacity-0"
  >
    <div v-if="leadOpen"
         class="fixed inset-0 z-[60] flex items-start sm:items-center justify-center overflow-y-auto bg-ink/80 backdrop-blur-sm p-4 sm:p-6"
         @click.self="closeLead">
      <div class="relative w-full max-w-lg my-8">
        <button @click="closeLead" aria-label="Закрыть"
                class="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-graphite border border-line text-cloud hover:text-gold-soft hover:border-gold/60 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>
        </button>
        <div class="text-center mb-5">
          <h3 class="font-display font-bold text-2xl md:text-3xl text-cloud">Оставить заявку</h3>
          <p class="mt-2 text-cloud/70">Перезвоним и подберём авто под ваш бюджет.</p>
        </div>
        <LeadFormCard />
      </div>
    </div>
  </transition>
</template>