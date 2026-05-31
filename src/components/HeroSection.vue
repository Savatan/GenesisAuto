<script setup>
// Первый экран в стиле референса: гигантское название + авто внахлёст.
// /public/car.png — силуэт авто (можно заменить вырезанным PNG настоящего авто).
// /public/hero.jpg — тёмный фон.
const services = ['Заказать АВТО', 'Заказать МОТО', 'Заказать СПЕЦТЕХНИКУ', 'Автозапчасти']
</script>

<template>
  <section id="hero" class="relative min-h-screen flex flex-col justify-center overflow-hidden">
    <!-- Фон -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-cover bg-center opacity-70" style="background-image: url('/hero.jpg');"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink"></div>
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[55rem] h-[40rem] rounded-full bg-gold/12 blur-[170px]"></div>
    </div>

    <div class="relative z-10 w-full pt-20">
      <!-- Название + авто внахлёст -->
      <div class="relative text-center px-4">
        <h1 class="font-display font-extrabold uppercase leading-[0.88] tracking-tighter
                   text-6xl sm:text-8xl md:text-[7rem] lg:text-[9rem]
                   bg-gradient-to-b from-white via-white to-white/35 bg-clip-text text-transparent">
          Genesis Auto
        </h1>
        <img src="/car.png" alt="Авто под заказ"
             class="relative z-10 mx-auto w-[94%] max-w-4xl -mt-[7%] md:-mt-[6%]
                    drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />
      </div>

      <!-- Нижний контент -->
      <div class="mx-auto max-w-6xl px-5 mt-6 grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <h2 class="reveal font-display font-semibold text-3xl md:text-4xl leading-tight text-cloud" v-reveal>
            Авто из Китая, Кореи и Японии
          </h2>
          <div class="reveal mt-7 flex flex-wrap gap-3" v-reveal="150">
            <a v-for="(s, i) in services" :key="s" href="#lead"
               class="rounded-full px-6 py-3.5 text-sm font-semibold transition-colors"
               :class="i === 0
                 ? 'bg-gold text-white hover:bg-gold-soft'
                 : 'border border-white/15 bg-white/5 backdrop-blur text-cloud hover:border-gold/60'">
              {{ s }}
            </a>
          </div>
        </div>
        <div class="reveal md:text-right" v-reveal="250">
          <p class="text-lg text-cloud/75 leading-relaxed md:ml-auto md:max-w-sm">
            Заказ автомобилей, мотоциклов, спецтехники и автозапчастей под ключ — по официальному договору, без переплат посредникам.
          </p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cloud/40 animate-bounce">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </section>
</template>
