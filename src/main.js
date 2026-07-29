import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

app.directive('reveal', {
  mounted(el, binding) {
    const delay = Number(binding.value) || 0
    el.style.transitionDelay = `${delay}ms`
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('is-visible')
          io.unobserve(el)
        }
      })
    }, { threshold: 0.12 })
    io.observe(el)
  },
})

app.mount('#app')
