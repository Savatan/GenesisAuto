<script setup>
import { ref } from 'vue'

const faqs = [
  { q: 'Как заказать автомобиль?', a: 'Сначала заключаем договор — прописываем характеристики и бюджет. Менеджер ежедневно присылает варианты с фото, характеристиками и переводом. Мы можем купить авто дешевле вашего бюджета, но не дороже. По прибытии в порт Владивостока занимаемся таможней и документами, вывозим авто и передаём вам или отправляем транспортной компанией. Полный цикл поддержки и гарантия безопасности сделки.' },
  { q: 'Какие документы я получу при покупке?', a: 'Декларацию соответствия Таможенного союза, ЭПТС, СБКТС, оригинал аукционного листа и счёт-спецификацию.' },
  { q: 'Как оплачивать авто?', a: 'Платить всю сумму сразу не нужно. Платежи разделены на три части: авансовый платёж, оплата стоимости автомобиля, таможенные платежи и взаиморасчёты.' },
  { q: 'Я передумал покупать авто, что делать?', a: 'Мы можем расторгнуть договор до покупки авто на аукционе и полностью вернём вам депозит.' },
  { q: 'Что такое проходной год автомобиля?', a: 'Авто старше 3 и младше 5 лет — проходные для физлиц, для юрлиц — старше 3 и младше 7 лет. В этих случаях таможенная пошлина минимальна. Купить машину вне ограничений тоже можно, но пошлина выйдет значительно больше.' },
]

const open = ref(-1)
function toggle(i) { open.value = open.value === i ? -1 : i }
</script>

<template>
  <section id="faq" class="relative py-28 md:py-44">
    <div class="mx-auto max-w-3xl px-5">
      <p class="reveal text-xs tracking-[0.3em] uppercase text-gold-soft text-center" v-reveal>FAQ</p>
      <h2 class="reveal mt-3 font-display font-bold text-3xl md:text-4xl text-center" v-reveal="100">Часто задаваемые вопросы</h2>

      <div class="mt-12 space-y-3">
        <div v-for="(f, i) in faqs" :key="i"
             class="rounded-2xl border border-line bg-graphite overflow-hidden transition-colors"
             :class="{ 'border-gold/40': open === i }">
          <button type="button" class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" @click="toggle(i)">
            <span class="font-display font-semibold text-cloud">{{ f.q }}</span>
            <span class="shrink-0 text-gold-soft transition-transform duration-300" :style="{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </button>
          <div class="overflow-hidden transition-all duration-300 ease-out"
               :style="{ maxHeight: open === i ? '1000px' : '0px', opacity: open === i ? 1 : 0 }">
            <p class="px-6 pb-6 text-fog leading-relaxed">{{ f.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
