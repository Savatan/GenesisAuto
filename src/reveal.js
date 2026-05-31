
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
