<script setup>
const rows = []
const FILE_URL = '/utilsbor.pdf'
</script>

<template>
  <section class="relative py-20 md:py-28 bg-graphite-2">
    <div class="mx-auto max-w-5xl px-5">
      <div class="text-center">
        <p class="reveal text-xs tracking-[0.3em] uppercase text-gold font-semibold" v-reveal>Полезное</p>
        <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl text-cloud" v-reveal="100">Ставки утильсбора</h2>
        <div class="mx-auto mt-3 h-1 w-16 rounded bg-gold"></div>
        <p class="reveal mx-auto mt-5 max-w-2xl text-fog leading-relaxed" v-reveal="150">
          Размер утилизационного сбора зависит от объёма двигателя, возраста автомобиля и статуса покупателя. Точную сумму по вашему авто рассчитает менеджер при подборе.
        </p>
      </div>

      <div v-if="rows.length" class="reveal mt-10 overflow-x-auto rounded-3xl bg-white border border-line shadow-sm" v-reveal="200">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line text-left text-fog">
              <th class="px-6 py-4 font-semibold">Объём двигателя</th>
              <th class="px-6 py-4 font-semibold">Авто до 3 лет</th>
              <th class="px-6 py-4 font-semibold">Авто 3–5 лет</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in rows" :key="r.engine" class="border-b border-line last:border-0">
              <td class="px-6 py-4 font-semibold text-cloud">{{ r.engine }}</td>
              <td class="px-6 py-4 text-cloud">{{ r.newer }}</td>
              <td class="px-6 py-4 text-cloud">{{ r.older }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="reveal mt-8 flex flex-wrap justify-center gap-4" v-reveal="250">
        <a :href="FILE_URL" target="_blank" rel="noopener"
           class="rounded-full bg-gold px-8 py-3.5 font-semibold text-white hover:bg-gold-soft transition-colors">
          Скачать таблицу ставок
        </a>
        <a href="#lead" class="rounded-full border border-line bg-white px-8 py-3.5 font-semibold text-cloud hover:border-gold/60 transition-colors">
          Рассчитать для моего авто
        </a>
      </div>
    </div>
  </section>
</template>
