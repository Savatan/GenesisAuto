<script setup>
const steps = [
  { n: '01', title: 'Заявка', desc: 'Вы оставляете заявку на сайте, напишите нам в мессенджер, позвоните или приезжайте в офис во Владивостоке.' },
  { n: '02', title: 'Оформление договора', desc: 'Обсуждаем нюансы заказа, заключаем агентский договор. Затем вы оплачиваете комиссию, а мы начинаем поиски подходящего авто. Договор можно заключить как в нашем офисе, так и удаленно, если вы находитесь в другом регионе.'},
  { n: '03', title: 'Поиск автомобиля', desc: 'Мы осуществляем подбор автомобиля на аукционах Японии, а также на авторынках Китая и Кореи, соответствующий вашим требованиям. Наши агенты предоставят вам детальный отчет о техническом состоянии транспортного средства и комплект фотографии кузова и салона.' },
  { n: '04', title: 'Покупка', desc: 'Депозит и таможенное оформление можно оплатить через расчетный счет компании, а оплата авто проходит напрямую — по инвойсу. В сумму уже включена стоимость доставки до порта во Владивостоке и услуги лаборатории.' },
  { n: '05', title: 'Доставка', desc: 'После доставки в порт Владивостока, прохождения таможенного контроля, лаборатории и оформления всех необходимых документов, мы перегоняем автомобиль на бесплатную охраняемую стоянку, где он дожидается вас или согласования отправки в другой регион.' },
]
</script>

<template>
  <section id="how" class="relative py-24 md:py-32">
    <div class="mx-auto max-w-4xl px-5">
      <p class="reveal text-xs tracking-[0.3em] uppercase text-gold" v-reveal>Процесс</p>
      <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl" v-reveal="100">Как мы работаем</h2>

      <div class="mt-14 relative">
        <div class="absolute left-[27px] top-2 bottom-2 w-px bg-line md:left-[31px]"></div>
        <div class="space-y-10">
          <div v-for="(s, i) in steps" :key="s.n" v-reveal="i * 80" class="reveal relative flex gap-6 md:gap-8">
            <div class="relative z-10 shrink-0">
              <span class="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink font-display font-bold text-gold md:h-16 md:w-16">
                {{ s.n }}
              </span>
            </div>
            <div class="pt-2">
              <h3 class="font-display font-semibold text-xl">{{ s.title }}</h3>
              <p class="mt-2 text-fog leading-relaxed">{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="reveal mt-12 text-center" v-reveal>
        <a href="#lead" class="inline-flex rounded-full bg-gold px-8 py-4 font-semibold text-white hover:bg-gold-soft transition-colors">
          Начать с заявки
        </a>
      </div>
    </div>
  </section>
</template>
