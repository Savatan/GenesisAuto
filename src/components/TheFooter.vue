<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-graphite border-t border-line py-12">
    <div class="mx-auto max-w-6xl px-5">
      <div class="grid gap-8 md:grid-cols-3">
        <div>
          <span class="font-display font-semibold text-lg">
            Genesis <span class="text-gold">Auto</span>
          </span>
          <p class="mt-3 text-sm text-fog leading-relaxed">
            Авто, мото и спецтехника из Китая, Кореи и Японии под заказ. Владивосток.
          </p>
        </div>

        <div class="text-sm text-fog space-y-1.5">
          <p class="text-cloud font-semibold mb-2">Реквизиты</p>
          <p>ИП Калиниченко Ольга Вячеславовна</p>
          <p>ИНН: ____________</p>
          <p>ОГРНИП: ____________</p>
          <p>БИК: ____________</p>
          <p>Адрес: ____________</p>
        </div>

        <div class="text-sm text-fog space-y-1.5">
          <p class="text-cloud font-semibold mb-2">Документы</p>
          <a href="/privacy.html" class="block hover:text-gold transition-colors">Политика конфиденциальности</a>
          <div class="flex gap-3 pt-3">
            <a href="https://t.me/your_telegram" target="_blank" aria-label="Telegram"
               class="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-gold/60 hover:text-gold transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.3-.1-.5-.6-.2L6.5 13.6l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.3 1.4z"/></svg>
            </a>
            <a href="#lead" aria-label="MAX"
               class="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-gold/60 hover:text-gold transition-colors text-xs font-bold">
              MAX
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-line text-xs text-fog/70 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {{ year }} Genesis Auto. Все права защищены.</span>
      </div>
    </div>
  </footer>
</template>
