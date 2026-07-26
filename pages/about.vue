<template>
  <section class="about-page">
    <div class="about-page__inner">
      <h1 class="about-page__title">{{ $t('about.title') }}</h1>
      <div class="about-page__card">
        <p class="about-page__desc">{{ $t('about.desc') }}</p>
        <div class="about-page__details">
          <div class="about-page__item">
            <span class="about-page__label">{{ $t('about.scope_label') }}</span>
            <span class="about-page__value">{{ $t('about.scope') }}</span>
          </div>
          <div class="about-page__item">
            <span class="about-page__label">{{ $t('about.mode_label') }}</span>
            <span class="about-page__value">{{ $t('about.mode') }}</span>
          </div>
        </div>
        <div class="about-page__contact">
          <div class="about-page__item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>深圳市宝安区（线上办公）</span>
          </div>
          <div class="about-page__item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>17841086421</span>
          </div>
        </div>
      </div>
      <NuxtLink :to="localePath('/')" class="about-page__back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        {{ $t('about.back_home') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('about.title') + ' — ClawMate',
  meta: [
    { name: 'description', content: t('about.desc') },
  ],
})
</script>

<style scoped>
.about-page {
  min-height: calc(100vh - 10rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
}

.about-page__inner {
  max-width: 40rem;
  width: 100%;
}

.about-page__title {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 2.5rem;
  letter-spacing: -0.02em;
}

.about-page__card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  padding: 2.5rem;
}

.about-page__desc {
  font-size: 1.0625rem;
  color: #9ca3af;
  line-height: 1.8;
  margin: 0 0 2rem;
}

.about-page__details {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.about-page__item {
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
}

.about-page__label {
  font-size: 0.9375rem;
  color: #6b7280;
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 5.5rem;
}

.about-page__value {
  font-size: 0.9375rem;
  color: #d1d5db;
  line-height: 1.6;
}

.about-page__contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.about-page__contact .about-page__item {
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  color: #9ca3af;
}

.about-page__back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  margin-top: 2rem;
  transition: color 0.2s;
}

.about-page__back:hover {
  color: #60a5fa;
}

@media (max-width: 48rem) {
  .about-page {
    padding: 4rem 1.25rem;
  }

  .about-page__title {
    font-size: 1.5rem;
  }

  .about-page__card {
    padding: 1.75rem;
  }

  .about-page__item {
    flex-direction: column;
    gap: 0.25rem;
  }

  .about-page__contact .about-page__item {
    flex-direction: row;
  }
}
</style>
