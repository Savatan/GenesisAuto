<script setup>
const services = [
  { label: 'АВТО', primary: true, paths: ['M5 13l1.5-4A2 2 0 0 1 8.4 8h7.2a2 2 0 0 1 1.9 1.3L19 13', 'M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z'] },
  { label: 'МОТО', paths: ['M6 17a3 3 0 1 0 0 .01M18 17a3 3 0 1 0 0 .01', 'M6 17l3-6h5l2 3M9 11h6'] },
  { label: 'СПЕЦТЕХНИКА', paths: ['M3 7h11v8H3zM14 10h4l3 3v2h-7z', 'M7 18a2 2 0 1 0 .01 0M19 18a2 2 0 1 0 .01 0'] },
  { label: 'ЗАПЧАСТИ', paths: ['M12 9a3 3 0 1 0 .01 0', 'M12 2v3M12 19v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M18.5 5.5l-2 2M7.5 16.5l-2 2'] },
]
</script>

<template>
  <section id="hero" class="relative min-h-screen flex flex-col justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-cover bg-center opacity-70" style="background-image: url('/hero.jpg');"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink"></div>
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[55rem] h-[40rem] rounded-full bg-gold/12 blur-[170px]"></div>
    </div>

    <div class="relative z-10 w-full pt-20">
      <div class="relative text-center px-4">
        <h1 class="anim-fade font-display font-extrabold uppercase leading-[0.82] tracking-tighter
                   text-7xl sm:text-8xl md:text-[8.5rem] lg:text-[10.5rem]
                   bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
            style="animation-delay:.1s">
          Genesis Auto
        </h1>
        <img src="/car.png" alt="Авто под заказ"
             class="anim-up relative z-10 mx-auto w-[94%] max-w-4xl -mt-[7%] md:-mt-[6%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
             style="animation-delay:.6s" />
      </div>

      <div class="mx-auto max-w-6xl px-5 mt-6 grid gap-10 md:grid-cols-2 md:items-end">
        <div class="anim-up" style="animation-delay:1s">
          <h2 class="font-display font-semibold text-3xl md:text-4xl leading-tight text-cloud">
            Авто из Китая, Кореи и Японии
          </h2>

          <div class="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            <a v-for="s in services" :key="s.label" href="#lead"
               class="group flex flex-col items-center gap-2.5 rounded-2xl border px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1"
               :class="s.primary
                 ? 'border-gold/60 bg-gold/15 text-cloud shadow-lg shadow-gold/20'
                 : 'border-white/12 bg-white/5 backdrop-blur text-cloud/85 hover:border-gold/50 hover:text-cloud'">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
                   :class="s.primary ? 'text-gold-soft' : 'text-cloud/70 group-hover:text-gold-soft'">
                <path v-for="(d, i) in s.paths" :key="i" :d="d" />
              </svg>
              <span class="text-xs font-semibold tracking-wide">{{ s.label }}</span>
            </a>
          </div>

          <div class="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-cloud/80">
            <span class="flex items-center gap-2"><span class="text-gold-soft">✓</span> Официальный договор</span>
            <span class="flex items-center gap-2"><span class="text-gold-soft">✓</span> Без посредников</span>
            <span class="flex items-center gap-2"><span class="text-gold-soft">✓</span> Владивосток</span>
          </div>
        </div>

        <div class="anim-up md:text-right" style="animation-delay:1.25s">
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

<style scoped>
@keyframes ga-fade { from { opacity: 0 } to { opacity: 1 } }
@keyframes ga-up { from { opacity: 0; transform: translateY(36px) } to { opacity: 1; transform: translateY(0) } }
.anim-fade { opacity: 0; animation: ga-fade 1.8s ease forwards; }
.anim-up { opacity: 0; animation: ga-up 1.5s cubic-bezier(.16, 1, .3, 1) forwards; }
@media (prefers-reduced-motion: reduce) {
  .anim-fade, .anim-up { animation: none; opacity: 1; transform: none; }
}
</style>