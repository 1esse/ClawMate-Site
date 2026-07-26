<template>
  <section class="callback">
    <div class="callback__card">
      <div class="callback__icon">
        <div v-if="loading" class="callback__spinner"></div>
        <svg v-else-if="success" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <svg v-else width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
      <h1 class="callback__title">{{ title }}</h1>
      <p class="callback__desc">{{ $t('payment.desc') }}</p>
      <NuxtLink :to="localePath('/')" class="callback__home">
        {{ $t('payment.back_home') }}
      </NuxtLink>
      <p class="callback__support">{{ $t('payment.support') }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const loading = ref(true)
const success = ref(false)

const title = computed(() => {
  if (loading.value) return t('payment.processing')
  return success.value ? t('payment.success') : t('payment.processing')
})

onMounted(() => {
  const tradeNo = route.query.out_trade_no
  success.value = !!tradeNo
  setTimeout(() => {
    loading.value = false
  }, 1500)
})

useHead({
  title: t('payment.page_title') + ' — ClawMate',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.callback {
  min-height: calc(100vh - 10rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.callback__card {
  text-align: center;
  max-width: 28rem;
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.callback__icon {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.callback__spinner {
  width: 64px;
  height: 64px;
  border: 3px solid rgba(59, 130, 246, 0.15);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.callback__title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.callback__desc {
  font-size: 1.0625rem;
  color: #9ca3af;
  line-height: 1.7;
  margin: 0 0 2rem;
}

.callback__home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.callback__home:hover {
  color: #60a5fa;
}

.callback__support {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 2.5rem 0 0;
}
</style>
