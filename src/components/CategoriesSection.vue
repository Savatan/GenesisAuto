<script setup>
// SVG-иконки прямо в массиве — без сторонних библиотек.
const items = [
  {
    title: 'Заказать авто',
    desc: 'Легковые автомобили с аукционов Японии и авторынков Китая и Кореи.',
    icon: 'M3 13l2-5a3 3 0 012.8-2h8.4A3 3 0 0119 8l2 5m-18 0h18m-18 0v4a1 1 0 001 1h1a1 1 0 001-1v-1m14 1v-4m0 4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1M7 16h.01M17 16h.01',
  },
  {
    title: 'Заказать мото',
    desc: 'Мотоциклы и мототехника под ваш бюджет и требования.',
    icon: 'M5 16a3 3 0 100 6 3 3 0 000-6zm14 0a3 3 0 100 6 3 3 0 000-6zM5 16l4-7h6l3 7M9 9l2-4h3',
  },
  {
    title: 'Спецтехника',
    desc: 'Погрузчики, экскаваторы и коммерческий транспорт.',
    icon: 'M3 17h11v-5H7l-2 2H3v3zm0 0a2 2 0 104 0m7 0a2 2 0 104 0M14 12V7h4l3 5v5h-2',
  },
  {
    title: 'Автозапчасти',
    desc: 'Оригинальные и контрактные запчасти под заказ.',
    icon: 'M10.3 3.3l1.4 2.4a8 8 0 012.6 0l1.4-2.4 2.6 1.5-1 2.6c.6.6 1.1 1.4 1.5 2.2l2.7.3v3l-2.7.3c-.4.8-.9 1.6-1.5 2.2l1 2.6-2.6 1.5-1.4-2.4a8 8 0 01-2.6 0l-1.4 2.4-2.6-1.5 1-2.6a8 8 0 01-1.5-2.2L3.2 13v-3l2.7-.3c.4-.8.9-1.6 1.5-2.2l-1-2.6 2.6-1.5zM12 10a2 2 0 100 4 2 2 0 000-4z',
  },
]
</script>

<template>
  <section id="categories" class="relative py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-5">
      <h2 class="reveal font-display font-bold text-3xl md:text-4xl" v-reveal>
        Что мы привозим
      </h2>
      <p class="reveal mt-3 text-fog max-w-lg" v-reveal="100">
        Полный цикл — от заявки до выдачи на охраняемой стоянке во Владивостоке.
      </p>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="(item, i) in items"
          :key="item.title"
          href="#lead"
          v-reveal="i * 100"
          class="reveal group relative rounded-2xl border border-line bg-graphite p-7 transition-all duration-300 hover:bg-graphite-2 hover:-translate-y-1 hover:border-gold/50"
        >
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path :d="item.icon" />
            </svg>
          </span>
          <h3 class="mt-5 font-display font-semibold text-lg">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-fog leading-relaxed">{{ item.desc }}</p>
          <span class="mt-5 inline-flex items-center gap-1 text-sm text-gold opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
            Заказать →
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
