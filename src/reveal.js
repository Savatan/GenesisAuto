// Кастомная директива v-reveal — добавляет класс is-visible,
// когда элемент попадает в зону видимости (без сторонних библиотек).
// Использование: <div v-reveal class="reveal"> ... </div>
//                <div v-reveal="200" class="reveal">  (задержка 200мс)
export const reveal = {
  mounted(el, binding) {
    const delay = Number(binding.value) || 0
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('is-visible'), delay)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
  },
}
