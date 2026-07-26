export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  function setupObserver() {
    observer.value?.disconnect()

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.value?.observe(el)
      }
    })
  }

  onMounted(() => {
    setupObserver()

    const router = useRouter()
    router.afterEach(() => {
      nextTick(() => {
        setupObserver()
      })
    })
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })
}
