<script setup>
import LeadFormCard from './LeadFormCard.vue'
</script>

<template>
  <section id="lead" class="relative py-20 md:py-28 bg-navy overflow-hidden">
    <div class="relative mx-auto max-w-2xl px-5">
      <div class="text-center mb-10">
        <p class="reveal text-xs tracking-[0.3em] uppercase text-gold-soft font-semibold" v-reveal>Заявка</p>
        <h2 class="reveal mt-4 font-display font-bold text-4xl md:text-5xl text-white" v-reveal="100">Оставить заявку</h2>
        <p class="reveal mt-4 text-lg text-white/70" v-reveal="150">Перезвоним и подберём авто под ваш бюджет.</p>
      </div>
      <div class="reveal" v-reveal="200">
        <LeadFormCard />
      </div>
    </div>
  </section>
</template>