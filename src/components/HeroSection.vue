<script setup>
// Кинематографичный первый экран. Фон — /public/hero.jpg.
// Замени его качественным тёмным фото авто (например, чёрный спорткар на тёмном фоне).
const services = ['Заказать АВТО', 'Заказать МОТО', 'Заказать СПЕЦТЕХНИКУ', 'Автозапчасти']
</script>

<template>
  <section id="hero" class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Фон -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/hero.jpg');"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60"></div>
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-gold/10 blur-[160px]"></div>
    </div>

    <!-- Гигантское название -->
    <div class="relative z-10 flex-1 flex items-center justify-center px-4 pt-24">
      <h1 class="text-center font-display font-extrabold uppercase leading-[0.95] tracking-tight
                 text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem]
                 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent
                 drop-shadow-[0_8px_40px_rgba(4,106,253,0.25)]">
        Genesis<br class="sm:hidden" /> Auto
      </h1>
    </div>

    <!-- Нижний контент -->
    <div class="relative z-10 mx-auto max-w-6xl px-5 pb-14 md:pb-20 w-full">
      <div class="grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <span class="reveal inline-block text-xs tracking-[0.28em] uppercase text-gold-soft border border-gold/30 rounded-full px-4 py-1.5" v-reveal>
            Владивосток · под заказ
          </span>
          <h2 class="reveal mt-5 font-display font-semibold text-3xl md:text-4xl leading-tight" v-reveal="100">
            Авто из Китая, Кореи и Японии
          </h2>

          <div class="reveal mt-7 flex flex-wrap gap-3" v-reveal="200">
            <a v-for="(s, i) in services" :key="s" href="#lead"
               class="rounded-full px-6 py-3.5 text-sm font-semibold transition-colors"
               :class="i === 0
                 ? 'bg-gold text-white hover:bg-gold-soft'
                 : 'border border-white/20 bg-white/5 backdrop-blur text-cloud hover:border-gold/60 hover:bg-white/10'">
              {{ s }}
            </a>
          </div>
        </div>

        <div class="reveal md:text-right md:pb-1" v-reveal="300">
          <p class="text-fog leading-relaxed md:ml-auto md:max-w-sm">
            Заказ автомобилей, мотоциклов, спецтехники и автозапчастей под ключ — по официальному договору, без переплат посредникам.
          </p>
        </div>
      </div>
    </div>

    <!-- Подсказка прокрутки -->
    <div class="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-fog/60 animate-bounce">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </section>
</template>
