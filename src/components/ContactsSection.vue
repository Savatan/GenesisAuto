<script setup>
import LeadFormCard from './LeadFormCard.vue'

const contacts = {
  phones: [
    { name: 'Андрей', number: '+7 (964) 440-31-72', raw: '79644403172' },
    { name: 'Ольга', number: '+7 (904) 627-86-86', raw: '79046278686' },
  ],
  telegram: 'https://t.me/avtomobil1244',
  whatsapp: 'https://wa.me/79644403172',
  gis: 'https://2gis.ru/vladivostok/geo/3519072864047023',
  address: 'Россия, Приморский край, г. Владивосток, ул. Днепровская, 21 В',
  hours: 'Пн–Пт, 10:00–19:00',
}

const GIS_WIDGET = 'https://makemap.2gis.ru/widget?data=eJw1kEtPwzAQhP_LcmxU7LwdqYfKQKEyVVJV4qUeotoEIzeOHIcSov53nBR83G9mvLMDaMOFEXwl9FFYI0UL2dsAtm8EZHAnStsZAR40RjfC2IkPcNBKG8evkJ_id99xK60aHWidF5ZTgthzYQkN0ctthdhN0doVRSxcOCkX7cHIxkpdO0N-v5yhNSs6Qk-I7YpuQ3vEkm3FR0NSdPJUofWu-OIUI3a9rTZ0hhhznMYuePvZL_tHTvucklNeLcYPfh5qLr4hw-j_nT2oLgX7cf2_drmWtXX6g3ZHkHVpp_I4wHPix5Efe2Ewx6GPo3TvAiSHLEri896DY9nkupWXBgOo0kI2aXESkBgHaRQRP_JAjfySlwQ4JCROMAndglofHUhdqjuFVurpQwj1Ok2t6cT5FyFqe5g" sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation'
</script>

<template>
  <section id="contacts" class="relative py-20 md:py-28 bg-white">
    <div class="mx-auto max-w-6xl px-5">
      <p class="reveal text-xs tracking-[0.3em] uppercase text-gold font-semibold" v-reveal>Связь</p>
      <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl text-cloud" v-reveal="100">Контактная информация</h2>
      <p class="reveal mt-3 max-w-xl text-fog" v-reveal="150">Для оперативной связи с нами вы можете воспользоваться удобными для вас способами.</p>

      <div class="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div class="space-y-9">
          <div class="reveal grid sm:grid-cols-2 gap-9" v-reveal="200">
            <div>
              <p class="font-display font-semibold text-lg text-cloud mb-4">Связаться с нами</p>
              <div class="space-y-3 text-sm">
                <a v-for="p in contacts.phones" :key="p.raw" :href="`tel:+${p.raw}`"
                   class="flex items-center gap-3 text-cloud hover:text-gold transition-colors">
                  <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">☎</span>
                  <span class="font-display font-semibold whitespace-nowrap">{{ p.number }}</span>
                  <span class="text-fog whitespace-nowrap">— {{ p.name }}</span>
                </a>
                <a :href="contacts.telegram" target="_blank" rel="noopener" class="flex items-center gap-3 text-cloud hover:text-gold transition-colors">
                  <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.3-.1-.5-.6-.2L6.5 13.6l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.3 1.4z"/></svg>
                  </span>
                  Написать в Telegram
                </a>
                <a href="#lead" class="flex items-center gap-3 text-cloud hover:text-gold transition-colors">
                  <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold text-[9px] font-bold">MAX</span>
                  Написать в MAX
                </a>
                <a :href="contacts.whatsapp" target="_blank" rel="noopener" class="flex items-center gap-3 text-cloud hover:text-gold transition-colors">
                  <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.3z"/></svg>
                  </span>
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <p class="font-display font-semibold text-lg text-cloud mb-4">Подписаться на нас</p>
              <div class="space-y-3 text-sm">
                <a :href="contacts.telegram" target="_blank" rel="noopener" class="flex items-center gap-3 text-cloud hover:text-gold transition-colors">
                  <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.3-.1-.5-.6-.2L6.5 13.6l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.3 1.4z"/></svg>
                  </span>
                  Telegram-канал
                </a>
                <a href="#contacts" class="flex items-center gap-3 text-cloud hover:text-gold transition-colors">
                  <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold text-[8px] font-bold">Авито</span>
                  Авито
                </a>
                <a :href="contacts.gis" target="_blank" rel="noopener" class="flex items-center gap-3 text-cloud hover:text-gold transition-colors">
                  <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold text-[9px] font-bold">2GIS</span>
                  2ГИС
                </a>
              </div>
            </div>
          </div>

          <div class="reveal grid sm:grid-cols-2 gap-6 text-sm" v-reveal="250">
            <div>
              <p class="text-fog mb-1.5">Адрес</p>
              <p class="font-display text-cloud">{{ contacts.address }}</p>
              <a :href="contacts.gis" target="_blank" rel="noopener" class="mt-2 inline-block text-gold hover:text-gold-soft transition-colors">Открыть в 2ГИС →</a>
            </div>
            <div>
              <p class="text-fog mb-1.5">Режим работы</p>
              <p class="font-display text-cloud">{{ contacts.hours }}</p>
            </div>
          </div>

          <div class="reveal rounded-2xl overflow-hidden border border-line bg-graphite-2" v-reveal="300">
            <iframe
              v-if="GIS_WIDGET"
              :src="GIS_WIDGET"
              width="100%" height="340" frameborder="0" loading="lazy"
              class="block w-full"
              title="Карта 2ГИС — адрес офиса"
            ></iframe>
            <a v-else :href="contacts.gis" target="_blank" rel="noopener"
               class="flex min-h-[300px] flex-col items-center justify-center gap-3 p-8 text-center transition-colors hover:bg-white">
              <span class="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold font-bold">2GIS</span>
              <span class="font-display font-semibold text-cloud">{{ contacts.address }}</span>
              <span class="text-sm text-gold">Посмотреть на карте 2ГИС →</span>
            </a>
          </div>
        </div>

        <div id="lead" class="reveal scroll-mt-28" v-reveal="250">
          <div class="mb-5">
            <h3 class="font-display font-bold text-2xl text-cloud">Оставить заявку</h3>
            <p class="mt-2 text-fog">Заполните бланк заказа — перезвоним и подберём авто под ваш бюджет.</p>
          </div>
          <LeadFormCard />
        </div>
      </div>
    </div>
  </section>
</template>