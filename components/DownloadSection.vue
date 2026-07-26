<template>
  <section class="download animate-on-scroll" id="download">
    <div class="download__inner">
      <h2 class="download__title">{{ $t('download.title') }}</h2>
      <p class="download__subtitle">{{ $t('download.subtitle') }}</p>
      <div class="download__cards">
        <div class="download__card animate-on-scroll" style="--stagger: 0">
          <div class="download__card-header">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#9ca3af" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span class="download__card-label">macOS</span>
          </div>
          <div class="download__card-buttons">
            <a
              :href="urls.macSilicon"
              class="download__btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {{ $t('download.mac_silicon') }}
            </a>
            <a
              :href="urls.macIntel"
              class="download__btn download__btn--secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {{ $t('download.mac_intel') }}
            </a>
          </div>
        </div>
        <div class="download__card animate-on-scroll" style="--stagger: 1">
          <div class="download__card-header">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span class="download__card-label">Windows</span>
          </div>
          <div class="download__card-buttons">
            <a
              :href="urls.windows"
              class="download__btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {{ $t('download.windows') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DOWNLOAD_URLS } from '~/config/downloads'

const urls = DOWNLOAD_URLS
</script>

<style scoped>
.download {
  padding: 7rem 2rem;
}

.download__inner {
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
}

.download__title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: -0.025em;
}

.download__subtitle {
  font-size: 1.1875rem;
  color: #9ca3af;
  margin: 0 0 3.5rem;
}

.download__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.download__card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  opacity: 0;
  transform: translateY(24px);
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.download__card.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.3s,
              border-color 0.3s,
              box-shadow 0.3s;
  transition-delay: calc(var(--stagger, 0) * 0.12s);
}

.download__card:hover {
  border-color: rgba(59, 130, 246, 0.15);
  box-shadow: 0 8px 40px rgba(59, 130, 246, 0.06);
}

.download__card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
}

.download__card-label {
  font-size: 1.3125rem;
  font-weight: 600;
  color: #fff;
}

.download__card-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.download__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  background: #3b82f6;
  color: #fff;
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.download__btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.download__btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);
}

.download__btn:hover::after {
  opacity: 1;
}

.download__btn:active {
  transform: translateY(0) scale(0.98);
}

.download__btn--secondary {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.download__btn--secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.05);
}

@media (max-width: 48rem) {
  .download {
    padding: 4.5rem 1.25rem;
  }

  .download__cards {
    grid-template-columns: 1fr;
  }

  .download__title {
    font-size: 1.75rem;
  }
}
</style>
