<script setup>
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/hero.jpg');"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#070d1c]/95 via-[#070d1c]/75 to-[#070d1c]/30"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#070d1c] via-transparent to-[#070d1c]/40"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl px-5 pt-28 pb-16 w-full">
      <div class="reveal flex items-center gap-3" v-reveal>
        <img src="/logo.png" alt="Genesis Auto" class="h-11 w-auto bg-white rounded-lg p-1.5" />
        <span class="text-xs tracking-[0.28em] uppercase text-gold-soft border border-white/20 rounded-full px-4 py-1.5 text-white/90">
          Владивосток · под заказ
        </span>
      </div>

      <h1 class="reveal mt-7 font-display font-extrabold leading-[1.04] text-5xl sm:text-6xl md:text-7xl text-white" v-reveal="100">
        Genesis <span class="text-gold-soft">Auto</span>
      </h1>

      <p class="reveal mt-5 max-w-xl text-lg md:text-xl text-white/75" v-reveal="200">
        Автомобили, мотоциклы и спецтехника из
        <span class="text-white font-medium">Китая, Кореи и Японии</span> — подбор и доставка под ключ.
      </p>

      <div class="reveal mt-9 flex flex-wrap gap-4" v-reveal="300">
        <a href="#lead" class="rounded-full bg-gold px-8 py-4 font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-soft transition-colors">
          Заказать авто
        </a>
        <a href="#how" class="rounded-full border border-white/25 bg-white/5 backdrop-blur px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
          Как мы работаем
        </a>
      </div>

      <!-- Гарантии (из ТЗ) -->
      <div class="reveal mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/80" v-reveal="400">
        <span class="flex items-center gap-2"><span class="text-gold-soft">●</span> Работа по официальному договору (с переходом на договор)</span>
        <span class="flex items-center gap-2"><span class="text-gold-soft">●</span> Без переплат посредникам</span>
        <span class="flex items-center gap-2"><span class="text-gold-soft">●</span> Оформление документов на ваше имя</span>
      </div>
    </div>
  </section>
</template>
