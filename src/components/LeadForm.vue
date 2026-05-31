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

const inputCls =
  'w-full rounded-2xl border border-line bg-ink/60 px-5 py-4 text-cloud placeholder:text-fog/50 outline-none focus:border-gold focus:bg-ink transition-colors'
</script>

<template>
  <section id="lead" class="relative py-28 md:py-44 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gold/10 blur-[160px]"></div>

    <div class="relative mx-auto max-w-2xl px-5">
      <div class="text-center mb-10">
        <p class="reveal text-xs tracking-[0.3em] uppercase text-gold-soft" v-reveal>Заявка</p>
        <h2 class="reveal mt-4 font-display font-bold text-4xl md:text-5xl text-cloud" v-reveal="100">Оставить заявку</h2>
        <p class="reveal mt-4 text-lg text-cloud/70" v-reveal="150">Перезвоним и подберём авто под ваш бюджет.</p>
      </div>

      <div class="reveal rounded-[2rem] border border-line bg-gradient-to-b from-graphite to-ink p-7 md:p-10 shadow-2xl shadow-black/40" v-reveal="200">
        <div class="grid gap-5 sm:grid-cols-2">
          <div>
            <label class="block text-sm text-cloud/80 mb-2">Имя</label>
            <input v-model="form.name" type="text" placeholder="Как к вам обращаться" :class="inputCls" />
          </div>
          <div>
            <label class="block text-sm text-cloud/80 mb-2">Телефон</label>
            <input v-model="form.phone" type="tel" placeholder="+7 ___ ___ __ __" :class="inputCls" />
          </div>
        </div>

        <div class="mt-5">
          <label class="block text-sm text-cloud/80 mb-3">Что хотите заказать</label>
          <div class="flex flex-wrap gap-2.5">
            <button v-for="opt in interests" :key="opt" @click="form.interest = opt"
                    class="rounded-full border px-5 py-2.5 text-sm transition-colors"
                    :class="form.interest === opt ? 'border-gold bg-gold text-white font-semibold' : 'border-line text-cloud/70 hover:border-gold/50 hover:text-cloud'">
              {{ opt }}
            </button>
          </div>
        </div>

        <div class="mt-5">
          <label class="block text-sm text-cloud/80 mb-2">Комментарий</label>
          <textarea v-model="form.comment" rows="3" placeholder="Марка, бюджет, пожелания…" :class="inputCls + ' resize-none'"></textarea>
        </div>

        <button @click="submit" :disabled="status === 'sending'"
                class="mt-7 group flex w-full items-center justify-center gap-2 rounded-2xl bg-gold px-6 py-4 text-lg font-semibold text-white hover:bg-gold-soft transition-colors disabled:opacity-60">
          {{ status === 'sending' ? 'Отправляем…' : 'Отправить заявку' }}
          <svg v-if="status !== 'sending'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>

        <p v-if="status === 'success'" class="mt-4 text-center text-green-400 font-medium">✓ Заявка отправлена! Скоро свяжемся с вами.</p>
        <p v-else-if="status === 'error'" class="mt-4 text-center text-red-400 font-medium">Проверьте имя и телефон или напишите нам в мессенджер.</p>
        <p v-else class="mt-4 text-center text-sm text-fog">Нажимая «Отправить», вы соглашаетесь на обработку данных.</p>
      </div>
    </div>
  </section>
</template>
