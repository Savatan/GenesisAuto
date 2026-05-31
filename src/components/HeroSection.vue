<script setup>
const secondary = ['МОТО', 'СПЕЦТЕХНИКА', 'ЗАПЧАСТИ']
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
        <h1 class="anim-fade font-display font-extrabold uppercase leading-[0.88] tracking-tighter
                   text-6xl sm:text-8xl md:text-[7rem] lg:text-[9rem]
                   bg-gradient-to-b from-white via-white to-white/35 bg-clip-text text-transparent"
            style="animation-delay:.05s">
          Genesis Auto
        </h1>
        <img src="/car.png" alt="Авто под заказ"
             class="anim-up relative z-10 mx-auto w-[94%] max-w-4xl -mt-[7%] md:-mt-[6%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
             style="animation-delay:.3s" />
      </div>

      <div class="mx-auto max-w-6xl px-5 mt-6 grid gap-10 md:grid-cols-2 md:items-end">
        <div class="anim-up" style="animation-delay:.5s">
          <h2 class="font-display font-semibold text-3xl md:text-4xl leading-tight text-cloud">
            Авто из Китая, Кореи и Японии
          </h2>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <a href="#lead"
               class="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-white
                      shadow-lg shadow-gold/30 transition-all duration-300
                      hover:bg-gold-soft hover:shadow-xl hover:shadow-gold/50 hover:-translate-y-0.5">
              Заказать АВТО
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <a v-for="s in secondary" :key="s" href="#lead"
               class="rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 py-3.5 text-sm font-semibold text-cloud/90 transition-colors hover:border-gold/60 hover:text-cloud">
              {{ s }}
            </a>
          </div>

          <div class="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-cloud/80">
            <span class="flex items-center gap-2"><span class="text-gold-soft">✓</span> Официальный договор</span>
            <span class="flex items-center gap-2"><span class="text-gold-soft">✓</span> Без посредников</span>
            <span class="flex items-center gap-2"><span class="text-gold-soft">✓</span> Владивосток</span>
          </div>
        </div>

        <div class="anim-up md:text-right" style="animation-delay:.65s">
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
.anim-fade { opacity: 0; animation: ga-fade 2.8s ease forwards; }
.anim-up { opacity: 0; animation: ga-up 2.5s cubic-bezier(.16, 1, .3, 1) forwards; }
@media (prefers-reduced-motion: reduce) {
  .anim-fade, .anim-up { animation: none; opacity: 1; transform: none; }
}
</style>