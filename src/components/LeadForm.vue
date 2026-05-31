<script setup>
import { onMounted } from 'vue'

const YANDEX_FORM_ID = '6a1bfac949af47c763fd9e17'

onMounted(() => {
  // авто-подгон высоты формы под содержимое
  if (!document.getElementById('ya-forms-embed')) {
    const s = document.createElement('script')
    s.id = 'ya-forms-embed'
    s.src = 'https://forms.yandex.ru/_static/embed.js'
    s.async = true
    document.body.appendChild(s)
  }
})
</script>

<template>
  <section id="lead" class="relative py-24 md:py-32">
    <div class="mx-auto max-w-2xl px-5">
      <div class="reveal rounded-3xl border border-line bg-graphite p-6 md:p-10" v-reveal>
        <h2 class="font-display font-bold text-3xl md:text-4xl">Оставить заявку</h2>
        <p class="mt-3 text-fog">Заполните форму — перезвоним и подберём варианты под ваш бюджет.</p>

        <div class="mt-8 rounded-2xl overflow-hidden border border-line bg-white">
          <iframe
            :src="`https://forms.yandex.ru/u/${YANDEX_FORM_ID}/?iframe=1`"
            :name="`ya-form-${YANDEX_FORM_ID}`"
            frameborder="0"
            width="100%"
            style="min-height: 880px;"
            class="w-full block"
            title="Форма заявки"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>