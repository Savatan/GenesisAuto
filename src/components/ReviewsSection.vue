<script setup>
import { reactive, ref } from 'vue'

const reviews = []

const form = reactive({ name: '', city: '', text: '' })
const status = ref('idle')

async function submitReview() {
  if (!form.name.trim() || !form.text.trim()) { status.value = 'error'; return }
  status.value = 'sending'
  try {
    const r = await fetch('/api/review', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })
    if (!r.ok) throw new Error()
    status.value = 'success'
    Object.assign(form, { name: '', city: '', text: '' })
  } catch { status.value = 'error' }
}
</script>

<template>
  <section id="reviews" class="relative py-20 md:py-28 bg-graphite-2">
    <div class="mx-auto max-w-6xl px-5">
      <div class="text-center">
        <p class="reveal text-xs tracking-[0.3em] uppercase text-gold font-semibold" v-reveal>Отзывы</p>
        <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl text-cloud" v-reveal="100">Что говорят наши клиенты</h2>
        <div class="mx-auto mt-3 h-1 w-16 rounded bg-gold"></div>
      </div>

      <div v-if="reviews.length" class="mt-12 grid gap-5 md:grid-cols-3">
        <div v-for="(r, i) in reviews" :key="i" v-reveal="i * 100" class="reveal rounded-3xl glass p-7 flex flex-col">
          <div class="flex text-gold text-lg">★★★★★</div>
          <p class="mt-3 text-fog leading-relaxed flex-1">{{ r.text }}</p>
          <div class="mt-5 pt-4 border-t border-line flex items-center justify-between text-sm">
            <span class="font-semibold text-cloud">{{ r.name }}</span>
            <span v-if="r.source" class="text-fog">{{ r.source }}</span>
          </div>
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
        <div class="reveal rounded-3xl bg-white border border-line p-8 shadow-sm" v-reveal="150">
          <h3 class="font-display font-semibold text-xl text-cloud">Читайте нас на площадках</h3>
          <p class="mt-2 text-fog leading-relaxed">Живые отзывы клиентов — в 2ГИС. Поделитесь и своим опытом после покупки.</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="https://2gis.ru/vladivostok/firm/70000001114765329"
               target="_blank" rel="noopener"
               class="rounded-full bg-gold px-7 py-3 font-semibold text-white hover:bg-gold-soft transition-colors">2ГИС →</a>
            <a href="#contacts" class="rounded-full border border-line px-7 py-3 font-semibold text-cloud hover:border-gold/60 transition-colors">Авито →</a>
          </div>
        </div>

        <div class="reveal rounded-3xl bg-white border border-line p-8 shadow-sm" v-reveal="250">
          <h3 class="font-display font-semibold text-xl text-cloud">Оставить отзыв</h3>
          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <input v-model="form.name" type="text" placeholder="Ваше имя"
                   class="w-full rounded-xl border border-line bg-graphite-2 px-4 py-3.5 text-cloud placeholder:text-fog/70 outline-none focus:bg-white focus:border-gold transition-colors" />
            <input v-model="form.city" type="text" placeholder="Город"
                   class="w-full rounded-xl border border-line bg-graphite-2 px-4 py-3.5 text-cloud placeholder:text-fog/70 outline-none focus:bg-white focus:border-gold transition-colors" />
          </div>
          <textarea v-model="form.text" rows="4" placeholder="Расскажите о вашем опыте покупки…"
                    class="mt-4 w-full resize-none rounded-xl border border-line bg-graphite-2 px-4 py-3.5 text-cloud placeholder:text-fog/70 outline-none focus:bg-white focus:border-gold transition-colors"></textarea>
          <button @click="submitReview" :disabled="status === 'sending'"
                  class="mt-5 w-full rounded-xl bg-gold px-6 py-3.5 font-semibold text-white hover:bg-gold-soft transition-colors disabled:opacity-60">
            {{ status === 'sending' ? 'Отправляем…' : 'Отправить отзыв' }}
          </button>
          <p v-if="status === 'success'" class="mt-3 text-center text-sm text-green-600 font-medium">✓ Спасибо! Отзыв отправлен и появится после проверки.</p>
          <p v-else-if="status === 'error'" class="mt-3 text-center text-sm text-red-500 font-medium">Заполните имя и текст отзыва.</p>
        </div>
      </div>
    </div>
  </section>
</template>
