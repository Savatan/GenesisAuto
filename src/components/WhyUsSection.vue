<script setup>
// Ссылку на договор замени: положи файл в /public/dogovor.pdf или укажи свою ссылку.
const CONTRACT_URL = '/dogovor.pdf'

const points = [
  {
    title: 'Работа по официальному договору',
    desc: 'Заключаем агентский договор — с возможностью перехода на договор купли-продажи. Все этапы прозрачны.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    contract: true,
  },
  {
    title: 'Без переплат посредникам',
    desc: 'Оплата авто проходит напрямую по инвойсу. Вы платите за машину, а не за длинную цепочку перекупов.',
    icon: 'M12 8c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2m0-8V6m0 12v-2m0-8c1.1 0 2.1.4 2.6 1M12 16c-1.1 0-2.1-.4-2.6-1',
  },
  {
    title: 'Оформление документов на ваше имя',
    desc: 'Весь пакет документов сразу на вас: ЭПТС, СБКТС, декларация соответствия и аукционный лист.',
    icon: 'M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z',
  },
]
</script>

<template>
  <section class="relative py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-5">
      <p class="reveal text-xs tracking-[0.3em] uppercase text-gold-soft" v-reveal>Мы гарантируем</p>
      <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl" v-reveal="100">Почему нам доверяют</h2>

      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <div v-for="(p, i) in points" :key="p.title" v-reveal="i * 120"
             class="reveal flex flex-col rounded-3xl border border-line bg-graphite p-8 transition-colors hover:border-gold/40">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 text-gold-soft">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path :d="p.icon" /></svg>
          </span>
          <h3 class="mt-5 font-display font-semibold text-lg leading-snug">{{ p.title }}</h3>
          <p class="mt-2 text-sm text-fog leading-relaxed">{{ p.desc }}</p>
          <a v-if="p.contract" :href="CONTRACT_URL" target="_blank" rel="noopener"
             class="mt-5 inline-flex w-fit items-center rounded-full border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold-soft hover:bg-gold hover:text-white transition-colors">
            Посмотреть договор
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
