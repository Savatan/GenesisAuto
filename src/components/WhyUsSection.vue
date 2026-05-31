<script setup>
const points = [
  {
    title: 'Работа по официальному договору',
    desc: 'Заключаем агентский договор — с возможностью перехода на договор купли-продажи. Все этапы прозрачны.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Без переплат посредникам',
    desc: 'Оплата авто проходит напрямую по инвойсу. Вы платите за машину, а не за длинную цепочку перекупов.',
    icon: 'M12 8c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2m0-8V6m0 12v-2m0-8c1.1 0 2.1.4 2.6 1M12 16c-1.1 0-2.1-.4-2.6-1',
  },
  {
    title: 'Документы на ваше имя',
    desc: 'Оформляем весь пакет документов сразу на вас: ЭПТС, СБКТС, декларация соответствия и аукционный лист.',
    icon: 'M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z',
  },
]
</script>

<template>
  <section class="relative py-12 md:py-20">
    <div class="mx-auto max-w-6xl px-5">
      <div class="reveal rounded-3xl border border-line bg-gradient-to-b from-graphite to-ink p-8 md:p-14" v-reveal>
        <p class="text-xs tracking-[0.3em] uppercase text-gold">Мы гарантируем</p>
        <h2 class="mt-3 font-display font-bold text-3xl md:text-4xl">Почему нам доверяют</h2>

        <div class="mt-10 grid gap-8 md:grid-cols-3">
          <div v-for="(p, i) in points" :key="p.title" v-reveal="i * 120" class="reveal">
            <span class="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 text-gold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path :d="p.icon" />
              </svg>
            </span>
            <h3 class="mt-5 font-display font-semibold text-lg leading-snug">{{ p.title }}</h3>
            <p class="mt-2 text-sm text-fog leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
