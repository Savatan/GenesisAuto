<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '', phone: '', city: '', car: '',
  country: '', budget: '', contact: '', consent: false,
})
const countries = ['Япония', 'Корея', 'Китай']
const contactWays = ['Телефон', 'Telegram', 'WhatsApp', 'MAX']
const cities = [
  'Владивосток', 'Уссурийск', 'Находка', 'Артём', 'Хабаровск', 'Комсомольск-на-Амуре',
  'Благовещенск', 'Чита', 'Улан-Удэ', 'Иркутск', 'Якутск', 'Южно-Сахалинск',
  'Красноярск', 'Новосибирск', 'Омск', 'Екатеринбург', 'Челябинск', 'Москва',
  'Санкт-Петербург', 'Краснодар', 'Казань', 'Самара', 'Тюмень',
]
const brands = [
  'Toyota', 'Lexus', 'Honda', 'Nissan', 'Mazda', 'Mitsubishi', 'Subaru', 'Suzuki', 'Daihatsu',
  'Hyundai', 'Kia', 'Genesis', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche', 'Land Rover',
  'Zeekr', 'Li (Lixiang)', 'BYD', 'Geely', 'Chery', 'Changan', 'Tank', 'Haval', 'Exeed', 'Hongqi', 'Voyah',
]

const errors = reactive({})
const status = ref('idle')

function formatPhone(value) {
  let d = value.replace(/\D/g, '')
  if (d.startsWith('8')) d = '7' + d.slice(1)
  if (d && d[0] !== '7') d = '7' + d
  d = d.slice(0, 11)
  if (!d) return ''
  let r = '+7'
  if (d.length > 1) r += ' (' + d.substring(1, 4)
  if (d.length >= 4) r += ') ' + d.substring(4, 7)
  if (d.length >= 7) r += '-' + d.substring(7, 9)
  if (d.length >= 9) r += '-' + d.substring(9, 11)
  return r
}
function formatBudget(value) {
  const d = value.replace(/\D/g, '')
  return d ? Number(d).toLocaleString('ru-RU') : ''
}

function validate() {
  const req = { name: 1, phone: 1, city: 1, car: 1, country: 1, contact: 1 }
  Object.keys(errors).forEach((k) => delete errors[k])
  for (const k in req) if (!String(form[k]).trim()) errors[k] = 'Поле обязательно для заполнения'
  if (form.phone && form.phone.replace(/\D/g, '').length < 11) errors.phone = 'Введите телефон полностью'
  if (!form.consent) errors.consent = 'Необходимо согласие'
  return Object.keys(errors).length === 0
}

async function submit() {
  if (!validate()) { status.value = 'error'; return }
  status.value = 'sending'
  try {
    const r = await fetch('/api/lead', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })
    if (!r.ok) throw new Error()
    status.value = 'success'
    Object.assign(form, { name: '', phone: '', city: '', car: '', country: '', budget: '', contact: '', consent: false })
  } catch { status.value = 'error' }
}

const baseCls = 'w-full rounded-xl border bg-graphite-2 px-4 py-3.5 text-cloud placeholder:text-fog/70 outline-none focus:bg-white transition-colors'
function cls(field) {
  return baseCls + (errors[field] ? ' border-red-400 focus:border-red-500' : ' border-line focus:border-gold')
}
const arrow = "background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%235b6675' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 1rem center;padding-right:2.5rem"
</script>

<template>
  <div class="rounded-3xl bg-white border border-line p-6 md:p-8 shadow-xl shadow-slate-900/10">
    <div class="grid gap-4 sm:grid-cols-2">
      <div>
        <label class="block text-sm text-fog mb-1.5">Имя <span class="text-gold">*</span></label>
        <input v-model="form.name" type="text" placeholder="Как к вам обращаться" :class="cls('name')" />
        <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
      </div>
      <div>
        <label class="block text-sm text-fog mb-1.5">Телефон <span class="text-gold">*</span></label>
        <input :value="form.phone" @input="form.phone = formatPhone($event.target.value)" type="tel" inputmode="tel" placeholder="+7 (___) ___-__-__" :class="cls('phone')" />
        <p v-if="errors.phone" class="mt-1 text-xs text-red-500">{{ errors.phone }}</p>
      </div>
      <div>
        <label class="block text-sm text-fog mb-1.5">Ваш город <span class="text-gold">*</span></label>
        <input v-model="form.city" list="ga-cities" type="text" placeholder="Начните вводить город" :class="cls('city')" />
        <datalist id="ga-cities"><option v-for="c in cities" :key="c" :value="c" /></datalist>
        <p v-if="errors.city" class="mt-1 text-xs text-red-500">{{ errors.city }}</p>
      </div>
      <div>
        <label class="block text-sm text-fog mb-1.5">Какой авто интересует? <span class="text-gold">*</span></label>
        <input v-model="form.car" list="ga-brands" type="text" placeholder="Марка и модель" :class="cls('car')" />
        <datalist id="ga-brands"><option v-for="b in brands" :key="b" :value="b" /></datalist>
        <p v-if="errors.car" class="mt-1 text-xs text-red-500">{{ errors.car }}</p>
      </div>
      <div>
        <label class="block text-sm text-fog mb-1.5">Из какой страны везём? <span class="text-gold">*</span></label>
        <select v-model="form.country" :class="cls('country') + ' appearance-none'" :style="arrow">
          <option value="" disabled>Выберите страну</option>
          <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
        </select>
        <p v-if="errors.country" class="mt-1 text-xs text-red-500">{{ errors.country }}</p>
      </div>
      <div>
        <label class="block text-sm text-fog mb-1.5">Бюджет, ₽</label>
        <input :value="form.budget" @input="form.budget = formatBudget($event.target.value)" type="text" inputmode="numeric" placeholder="2 000 000" :class="cls('budget')" />
      </div>
      <div class="sm:col-span-2">
        <label class="block text-sm text-fog mb-1.5">Как с вами лучше связаться? <span class="text-gold">*</span></label>
        <select v-model="form.contact" :class="cls('contact') + ' appearance-none'" :style="arrow">
          <option value="" disabled>Выберите способ</option>
          <option v-for="c in contactWays" :key="c" :value="c">{{ c }}</option>
        </select>
        <p v-if="errors.contact" class="mt-1 text-xs text-red-500">{{ errors.contact }}</p>
      </div>
    </div>

    <label class="mt-5 flex items-start gap-3 cursor-pointer">
      <input v-model="form.consent" type="checkbox" class="mt-0.5 h-5 w-5 shrink-0 accent-[#046afd]" />
      <span class="text-xs leading-relaxed" :class="errors.consent ? 'text-red-500' : 'text-fog'">
        Нажимая «Отправить», я даю согласие на обработку персональных данных в соответствии с ФЗ №152-ФЗ «О персональных данных». <span class="text-gold">*</span>
      </span>
    </label>

    <button @click="submit" :disabled="status === 'sending'"
            class="mt-6 group flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-gold/25 transition-all hover:bg-gold-soft hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0">
      {{ status === 'sending' ? 'Отправляем…' : 'Отправить заявку' }}
      <svg v-if="status !== 'sending'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>

    <p v-if="status === 'success'" class="mt-4 text-center text-green-600 font-medium">✓ Заявка отправлена! Скоро свяжемся с вами.</p>
    <p v-else-if="status === 'error'" class="mt-4 text-center text-red-500 font-medium">Заполните обязательные поля и поставьте согласие.</p>
  </div>
</template>