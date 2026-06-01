<script setup>
const services = [
  { label: 'Заказать АВТО', paths: ['M5 13l1.5-4A2 2 0 0 1 8.4 8h7.2a2 2 0 0 1 1.9 1.3L19 13', 'M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z'] },
  { label: 'Заказать МОТО', paths: ['M6 17a3 3 0 1 0 0 .01M18 17a3 3 0 1 0 0 .01', 'M6 17l3-6h5l2 3M9 11h6'] },
  { label: 'Заказать СПЕЦТЕХНИКУ', paths: ['M3 7h11v8H3zM14 10h4l3 3v2h-7z', 'M7 18a2 2 0 1 0 .01 0M19 18a2 2 0 1 0 .01 0'] },
  { label: 'Автозапчасти', paths: ['M12 9a3 3 0 1 0 .01 0', 'M12 2v3M12 19v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M18.5 5.5l-2 2M7.5 16.5l-2 2'] },
]
const trust = ['Официальный договор', 'Без посредников', 'Владивосток']
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-navy">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/hero.jpg');"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/25"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl px-5 w-full pt-32 pb-20">
      <h1 class="anim-fade font-display font-extrabold uppercase leading-[0.9] tracking-tight
                 text-5xl sm:text-7xl md:text-8xl text-white" style="animation-delay:.1s">
        <span class="text-gold-soft">Genesis</span> Auto
      </h1>
      <p class="anim-up mt-3 font-display font-semibold text-2xl md:text-3xl text-white" style="animation-delay:.35s">
        Авто из Китая, Кореи и Японии
      </p>
      <p class="anim-up mt-4 max-w-md text-white/70 leading-relaxed" style="animation-delay:.5s">
        Заказ автомобилей, мотоциклов, спецтехники и автозапчастей под ключ — по официальному договору, без переплат посредникам.
      </p>

      <div class="anim-up mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl" style="animation-delay:.65s">
        <a v-for="s in services" :key="s.label" href="#lead"
           class="group flex flex-col items-center gap-2.5 rounded-2xl bg-gold px-3 py-5 text-center text-white shadow-lg shadow-gold/30 transition-all duration-300 hover:-translate-y-1 hover:bg-gold-soft">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path v-for="(d, i) in s.paths" :key="i" :d="d" />
          </svg>
          <span class="text-xs font-semibold leading-tight">{{ s.label }}</span>
        </a>
      </div>

      <div class="anim-up mt-8 flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-white/85" style="animation-delay:.8s">
        <span v-for="t in trust" :key="t" class="flex items-center gap-2"><span class="text-gold-soft">✓</span> {{ t }}</span>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 animate-bounce">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </section>
</template>

<style scoped>
@keyframes ga-fade { from { opacity: 0 } to { opacity: 1 } }
@keyframes ga-up { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
.anim-fade { opacity: 0; animation: ga-fade 1.6s ease forwards; }
.anim-up { opacity: 0; animation: ga-up 1.4s cubic-bezier(.16, 1, .3, 1) forwards; }
@media (prefers-reduced-motion: reduce) {
  .anim-fade, .anim-up { animation: none; opacity: 1; transform: none; }
}
</style>