<script setup>
import LeadFormCard from './LeadFormCard.vue'
</script>

<template>
  <section id="lead" class="relative py-28 md:py-44 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gold/10 blur-[160px]"></div>

    <div class="relative mx-auto max-w-2xl px-5">
      <div class="text-center mb-10">
        <p class="reveal text-xs tracking-[0.3em] uppercase text-gold-soft" v-reveal>Заявка</p>
        <h2 class="reveal mt-4 font-display font-bold text-4xl md:text-5xl text-cloud" v-reveal="100">Оставить заявку</h2>
        <p class="reveal mt-4 text-lg text-cloud/70" v-reveal="150">Перезвоним и подберём авто под ваш бюджет.</p>
      </div>
      <div class="reveal" v-reveal="200">
        <LeadFormCard />
      </div>
    </div>
  </section>
</template>