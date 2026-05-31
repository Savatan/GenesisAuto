<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', phone: '', interest: 'Авто', comment: '' })
const interests = ['Авто', 'Мото', 'Спецтехника', 'Запчасти']
const status = ref('idle') // idle | sending | success | error

async function submit() {
  if (!form.name.trim() || !form.phone.trim()) { status.value = 'error'; return }
  status.value = 'sending'
  try {
    const r = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })
    if (!r.ok) throw new Error()
    status.value = 'success'
    form.name = form.phone = form.comment = ''
    form.interest = 'Авто'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="lead" class="relative py-24 md:py-32 bg-graphite/40">
    <div class="mx-auto max-w-2xl px-5">
      <div class="reveal rounded-3xl border border-line bg-graphite p-6 md:p-10" v-reveal>
        <h2 class="font-display font-bold text-3xl md:text-4xl">Оставить заявку</h2>
        <p class="mt-3 text-fog">Перезвоним и подберём варианты под ваш бюджет.</p>

        <div class="mt-8 space-y-5">
          <div>
            <label class="block text-sm text-fog mb-2">Имя</label>
            <input v-model="form.name" type="text" placeholder="Как к вам обращаться"
                   class="w-full rounded-xl border border-line bg-ink px-4 py-3 text-cloud placeholder:text-fog/60 outline-none focus:border-gold transition-colors" />
          </div>
          <div>
            <label class="block text-sm text-fog mb-2">Телефон</label>
            <input v-model="form.phone" type="tel" placeholder="+7 ___ ___ __ __"
                   class="w-full rounded-xl border border-line bg-ink px-4 py-3 text-cloud placeholder:text-fog/60 outline-none focus:border-gold transition-colors" />
          </div>
          <div>
            <label class="block text-sm text-fog mb-2">Что хотите заказать</label>
            <div class="flex flex-wrap gap-2">
              <button v-for="opt in interests" :key="opt" @click="form.interest = opt"
                      class="rounded-full border px-4 py-2 text-sm transition-colors"
                      :class="form.interest === opt ? 'border-gold bg-gold text-white font-semibold' : 'border-line text-fog hover:border-gold/50'">
                {{ opt }}
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm text-fog mb-2">Комментарий</label>
            <textarea v-model="form.comment" rows="3" placeholder="Марка, бюджет, пожелания…"
                      class="w-full resize-none rounded-xl border border-line bg-ink px-4 py-3 text-cloud placeholder:text-fog/60 outline-none focus:border-gold transition-colors"></textarea>
          </div>

          <button @click="submit" :disabled="status === 'sending'"
                  class="w-full rounded-xl bg-gold px-6 py-4 font-semibold text-white hover:bg-gold-soft transition-colors disabled:opacity-60">
            {{ status === 'sending' ? 'Отправляем…' : 'Отправить заявку' }}
          </button>

          <p v-if="status === 'success'" class="text-center text-sm text-green-400 font-medium">✓ Заявка отправлена! Скоро свяжемся с вами.</p>
          <p v-if="status === 'error'" class="text-center text-sm text-red-400 font-medium">Проверьте имя и телефон или напишите нам в мессенджер.</p>
        </div>
      </div>
    </div>
  </section>
</template>
