<script setup>
const CONTRACT_URL = '/dogovor.pdf'
const contacts = {
  telegram: 'https://t.me/avtomobil1244',
  whatsapp: 'https://wa.me/79644403172',
  phone: 'tel:+79644403172',
}

const steps = [
  { n: '01', title: 'Заявка', desc: 'Оставляете заявку на сайте, пишете в мессенджер, звоните или приезжаете в офис во Владивостоке.', contacts: true },
  { n: '02', title: 'Оформление договора', desc: 'Обсуждаем нюансы заказа и заключаем агентский договор — в офисе или удалённо. После оплаты комиссии начинаем поиск авто.', contract: true },
  { n: '03', title: 'Поиск автомобиля', desc: 'Подбираем авто на аукционах Японии и рынках Китая и Кореи. Присылаем детальный отчёт о техсостоянии и фото кузова и салона.' },
  { n: '04', title: 'Покупка', desc: 'Депозит и таможню оплачиваете через расчётный счёт, авто — напрямую по инвойсу. В сумму включена доставка до порта и услуги лаборатории.' },
  { n: '05', title: 'Доставка', desc: 'После порта, таможни, лаборатории и оформления документов перегоняем авто на бесплатную охраняемую стоянку — ждём вас или отправляем в ваш регион.' },
]
</script>

<template>
  <section id="how" class="relative py-20 md:py-28 bg-graphite-2">
    <div class="mx-auto max-w-6xl px-5">
      <div class="text-center">
        <p class="reveal text-xs tracking-[0.3em] uppercase text-gold font-semibold" v-reveal>Процесс</p>
        <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl text-cloud" v-reveal="100">Как мы работаем</h2>
        <div class="mx-auto mt-3 h-1 w-16 rounded bg-gold"></div>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-2">
        <div
          v-for="(s, i) in steps" :key="s.n" v-reveal="i * 80"
          class="reveal flex flex-col rounded-3xl glass p-8"
          :class="{ 'md:col-span-2': s.contacts }"
        >
          <div class="flex items-center gap-4">
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 font-display font-bold text-xl text-gold-soft">{{ s.n }}</span>
            <h3 class="font-display font-semibold text-xl text-cloud">{{ s.title }}</h3>
          </div>
          <p class="mt-4 text-fog leading-relaxed">{{ s.desc }}</p>

          <div v-if="s.contacts" class="mt-6 flex flex-wrap gap-3">
            <a :href="contacts.telegram" target="_blank" rel="noopener" class="rounded-full border border-line px-5 py-2.5 text-sm text-cloud hover:border-gold/60 transition-colors">Telegram</a>
            <a :href="contacts.whatsapp" target="_blank" rel="noopener" class="rounded-full border border-line px-5 py-2.5 text-sm text-cloud hover:border-gold/60 transition-colors">WhatsApp</a>
            <a href="#contacts" class="rounded-full border border-line px-5 py-2.5 text-sm text-cloud hover:border-gold/60 transition-colors">MAX</a>
            <a :href="contacts.phone" class="rounded-full border border-line px-5 py-2.5 text-sm text-cloud hover:border-gold/60 transition-colors">Позвонить</a>
            <a href="#contacts" class="rounded-full border border-line px-5 py-2.5 text-sm text-cloud hover:border-gold/60 transition-colors">Адрес и офис</a>
          </div>

          <a v-if="s.contract" :href="CONTRACT_URL" target="_blank" rel="noopener"
             class="mt-6 inline-flex w-fit items-center rounded-full border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold-soft hover:bg-gold hover:text-white transition-colors">
            Посмотреть договор
          </a>
        </div>
      </div>

      <div class="reveal mt-10 text-center" v-reveal>
        <a href="#lead" class="inline-flex rounded-full bg-gold px-8 py-4 font-semibold text-white hover:bg-gold-soft transition-colors">Начать с заявки</a>
      </div>
    </div>
  </section>
</template>