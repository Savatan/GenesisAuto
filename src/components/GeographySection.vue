<script setup>
const cities = ['Владивосток', 'Хабаровск', 'Благовещенск', 'Чита', 'Иркутск', 'Красноярск', 'Новосибирск', 'Омск', 'Екатеринбург', 'Казань', 'Москва', 'Санкт-Петербург']
</script>

<template>
  <section class="relative py-20 md:py-28 bg-graphite-2">
    <div class="mx-auto max-w-6xl px-5 text-center">
      <p class="reveal text-xs tracking-[0.3em] uppercase text-gold font-semibold" v-reveal>География</p>
      <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl text-cloud" v-reveal="100">Доставляем по всей России</h2>
      <div class="mx-auto mt-3 h-1 w-16 rounded bg-gold"></div>
      <p class="reveal mx-auto mt-5 max-w-2xl text-fog leading-relaxed" v-reveal="150">
        Хаб — порт Владивостока. После таможенного оформления передаём авто вам лично или отправляем транспортной компанией в любой регион.
      </p>

      <div class="reveal mt-10 flex flex-wrap justify-center gap-3" v-reveal="200">
        <span v-for="c in cities" :key="c"
              class="rounded-full bg-white border border-line px-5 py-2.5 text-sm font-semibold text-cloud shadow-sm">
          {{ c }}
        </span>
        <span class="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-sm">+ ваш город</span>
      </div>
    </div>
  </section>
</template>
