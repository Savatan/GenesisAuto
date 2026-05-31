<script setup>
const contacts = {
  phones: [
    { name: 'Андрей', number: '+7 964 440-31-72', raw: '79644403172' },
    { name: 'Ольга', number: '+7 904 627-86-86', raw: '79046278686' },
  ],
  telegram: 'https://t.me/your_telegram',   // ← ваш ник
  whatsapp: 'https://wa.me/79644403172',     // ← ваш номер
  address: 'г. Владивосток, ул. ______, д. __',
  hours: 'Пн–Пт, 10:00–19:00',
}
</script>

<template>
  <section id="contacts" class="relative py-28 md:py-44">
    <div class="mx-auto max-w-6xl px-5">
      <p class="reveal text-xs tracking-[0.3em] uppercase text-gold" v-reveal>Связь</p>
      <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl" v-reveal="100">Контакты</h2>

      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <div class="reveal space-y-7" v-reveal="150">
          <div>
            <p class="text-sm text-fog mb-3">Телефоны</p>
            <div class="space-y-2">
              <a v-for="p in contacts.phones" :key="p.raw" :href="`tel:+${p.raw}`"
                 class="flex items-center gap-3 text-lg hover:text-gold transition-colors">
                <span class="text-gold">☎</span>
                <span class="font-display font-semibold">{{ p.number }}</span>
                <span class="text-fog text-sm">— {{ p.name }}</span>
              </a>
            </div>
          </div>

          <div>
            <p class="text-sm text-fog mb-3">Мессенджеры</p>
            <div class="flex flex-wrap gap-3">
              <a :href="contacts.telegram" target="_blank"
                 class="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 hover:border-gold/60 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-gold"><path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.3-.1-.5-.6-.2L6.5 13.6l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.3 1.4z"/></svg>
                Telegram
              </a>
              <a :href="contacts.whatsapp" target="_blank"
                 class="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 hover:border-gold/60 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-gold"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.3z"/></svg>
                WhatsApp
              </a>
              <a href="#lead"
                 class="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 hover:border-gold/60 transition-colors">
                MAX
              </a>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <p class="text-sm text-fog mb-2">Адрес</p>
              <p class="font-display">{{ contacts.address }}</p>
            </div>
            <div>
              <p class="text-sm text-fog mb-2">Режим работы</p>
              <p class="font-display">{{ contacts.hours }}</p>
            </div>
          </div>
        </div>

        <div class="reveal rounded-2xl overflow-hidden border border-line min-h-[320px] bg-graphite" v-reveal="250">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=131.886%2C43.115&z=12"
            width="100%" height="100%" frameborder="0" loading="lazy"
            class="min-h-[320px] w-full grayscale-[20%]"
            title="Карта — Владивосток"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
