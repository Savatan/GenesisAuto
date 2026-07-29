<script setup>
const items = [
  { title: 'Напрямую с аукционов', desc: 'Покупаем на аукционах Японии и авторынках Кореи и Китая — без цепочки перекупов.', icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6' },
  { title: 'Отлаженная логистика', desc: 'Морская доставка до порта Владивостока уже включена в стоимость авто.', icon: 'M3 17h13M16 17h5v-4l-3-4h-2M3 17V7h13v10M7.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { title: 'Полное сопровождение', desc: 'От подбора до передачи ключей: таможня, лаборатория, документы — всё берём на себя.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Фото- и видеоотчёты', desc: 'Детальный отчёт о состоянии, фото кузова и салона по каждому варианту.', icon: 'M23 7l-7 5 7 5V7zM14 5H3a2 2 0 00-2 2v10a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2z' },
  { title: 'Документы на ваше имя', desc: 'ЭПТС, СБКТС, декларация соответствия и аукционный лист — сразу на вас.', icon: 'M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z' },
  { title: 'Охраняемая стоянка', desc: 'После порта авто ждёт вас на бесплатной охраняемой стоянке во Владивостоке.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
]
</script>

<template>
  <section id="about" class="relative py-20 md:py-28 bg-graphite-2">
    <div class="mx-auto max-w-6xl px-5">
      <div class="text-center">
        <p class="reveal text-xs tracking-[0.3em] uppercase text-gold font-semibold" v-reveal>Почему мы</p>
        <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl text-cloud" v-reveal="100">Работаем напрямую, без посредников</h2>
        <div class="mx-auto mt-3 h-1 w-16 rounded bg-gold"></div>
      </div>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(it, i) in items" :key="it.title" v-reveal="i * 80" class="reveal rounded-3xl glass p-7">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path :d="it.icon" /></svg>
          </span>
          <h3 class="mt-4 font-display font-semibold text-lg text-cloud">{{ it.title }}</h3>
          <p class="mt-2 text-sm text-fog leading-relaxed">{{ it.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
