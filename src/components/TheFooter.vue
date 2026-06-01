<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative overflow-hidden border-t border-white/10">
    <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-gold/8 blur-[180px] pointer-events-none"></div>

    <div class="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div class="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div class="max-w-md">
          <span class="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Genesis <span class="text-gold-soft">Auto</span>
          </span>
          <p class="mt-4 text-cloud/70 leading-relaxed">
            Авто, мото и спецтехника из Китая, Кореи и Японии под заказ. По официальному договору, без переплат посредникам. Владивосток.
          </p>
        </div>
        <a href="#lead" class="group inline-flex items-center gap-2 self-start rounded-full bg-gold px-8 py-4 font-semibold text-white shadow-lg shadow-gold/30 transition-all hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/50">
          Оставить заявку
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>

      <div class="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

      <div class="grid gap-10 md:grid-cols-3">
        <div class="space-y-2 text-sm text-cloud/65 leading-relaxed">
          <p class="text-cloud font-semibold text-base mb-3">Реквизиты</p>
          <p>ИП Калиниченко Ольга Вячеславовна</p>
          <p>ИНН: ____________</p>
          <p>ОГРНИП: ____________</p>
          <p>БИК: ____________</p>
          <p>Адрес: ____________</p>
        </div>

        <div class="space-y-2 text-sm text-cloud/65">
          <p class="text-cloud font-semibold text-base mb-3">Контакты</p>
          <a href="tel:+79644403172" class="block hover:text-gold-soft transition-colors">+7 964 440-31-72 — Андрей</a>
          <a href="tel:+79046278686" class="block hover:text-gold-soft transition-colors">+7 904 627-86-86 — Ольга</a>
          <p>Пн–Пт, 10:00–19:00</p>
          <a href="#contacts" class="block hover:text-gold-soft transition-colors">Адрес и карта →</a>
        </div>

        <div class="space-y-3 text-sm text-cloud/65">
          <p class="text-cloud font-semibold text-base mb-3">Документы</p>
          <a href="/privacy.html" class="block hover:text-gold-soft transition-colors">Политика конфиденциальности</a>
          <div class="flex gap-3 pt-3">
            <a href="https://t.me/avtomobil1244" target="_blank" rel="noopener" aria-label="Telegram"
               class="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 hover:border-gold/60 hover:text-gold-soft hover:-translate-y-0.5 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.3-.1-.5-.6-.2L6.5 13.6l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.3 1.4z"/></svg>
            </a>
            <a href="#lead" aria-label="MAX"
               class="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 hover:border-gold/60 hover:text-gold-soft hover:-translate-y-0.5 transition-all text-xs font-bold">
              MAX
            </a>
          </div>
        </div>
      </div>

      <div class="mt-14 pt-6 border-t border-white/10 text-xs text-cloud/40 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {{ year }} Genesis Auto. Все права защищены.</span>
        <span>Авто из Китая, Кореи и Японии</span>
      </div>
    </div>
  </footer>
</template>