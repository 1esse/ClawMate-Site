<template>
  <section class="hero">
    <div class="hero__bg">
      <div class="hero__grid"></div>
    </div>

    <div class="hero__content">
      <!-- 品牌名：SVG 手写动画 -->
      <div class="hero__brand">
        <svg class="hero__brand-svg" viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#60a5fa"/>
              <stop offset="35%" stop-color="#ffffff"/>
              <stop offset="50%" stop-color="#bfdbfe"/>
              <stop offset="65%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#60a5fa"/>
            </linearGradient>
          </defs>
          <text x="300" y="105" text-anchor="middle"
                class="hero__brand-text"
                font-family="'Pristina', 'Lucida Calligraphy', 'Apple Chancery', 'Segoe Script', cursive"
                font-size="115" font-weight="500">ClawMate</text>
        </svg>
      </div>

      <!-- 下方内容：纯 CSS 延迟动画 -->
      <h1 class="hero__title" style="--d: 2s">{{ $t('hero.title') }}</h1>
      <p class="hero__subtitle" style="--d: 2.1s">{{ $t('hero.subtitle') }}</p>

      <div class="hero__badges" style="--d: 2.2s">
        <span class="hero__badge">{{ $t('hero.tag1') }}</span>
        <span class="hero__badge">{{ $t('hero.tag2') }}</span>
        <span class="hero__badge">{{ $t('hero.tag3') }}</span>
      </div>

      <div class="hero__privacy" style="--d: 2.3s">
        <div class="hero__privacy-header animate-on-scroll">
          <div class="hero__privacy-shield">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h2 class="hero__privacy-title">{{ $t('privacy.title') }}</h2>
        </div>
        <div class="hero__privacy-grid">
          <div v-for="(item, index) in privacyPoints" :key="item.key" class="hero__privacy-item animate-on-scroll" :style="{ '--stagger': index }">
            <div class="hero__privacy-item-icon" v-html="item.icon" />
            <div class="hero__privacy-item-body">
              <h3 class="hero__privacy-item-title">{{ $t(`privacy.points.${item.key}.title`) }}</h3>
              <p class="hero__privacy-item-desc">{{ $t(`privacy.points.${item.key}.desc`) }}</p>
            </div>
          </div>
        </div>
        <div class="hero__privacy-note animate-on-scroll">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:0.125rem"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>{{ $t('privacy.note') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const privacyPoints = [
  { key: 'noregister', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>' },
  { key: 'zero', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>' },
  { key: 'local', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
  { key: 'apikey', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
  { key: 'audit', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' },
  { key: 'nocloud', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><line x1="9" y1="12" x2="9" y2="16"/><line x1="7" y1="14" x2="11" y2="14"/></svg>' },
]
</script>

<style scoped>
@keyframes drawBrand {
  0%   { stroke-dashoffset: 900; fill-opacity: 0; stroke-opacity: 1; }
  55%  { stroke-dashoffset: 0;   fill-opacity: 0; stroke-opacity: 1; }
  80%  { stroke-dashoffset: 0;   fill-opacity: 0.6; stroke-opacity: 0.3; }
  100% { stroke-dashoffset: 0;   fill-opacity: 1; stroke-opacity: 0; }
}

@keyframes belowFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes shieldPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
  50%      { box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.08); }
}

@keyframes badgeGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
  50%      { box-shadow: 0 0 12px 0 rgba(59, 130, 246, 0.12); }
}

.hero {
  position: relative;
  padding: 7rem 2rem 6rem;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero__bg { position: absolute; inset: 0; pointer-events: none; }

.hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 45%, black, transparent);
}

.hero__content {
  position: relative;
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
  width: 100%;
}

/* 品牌名 SVG */
.hero__brand {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.hero__brand-svg {
  width: 100%;
  max-width: 36rem;
  height: auto;
  overflow: visible;
}

.hero__brand-text {
  fill: url(#brandGrad);
  fill-opacity: 0;
  stroke: url(#brandGrad);
  stroke-width: 1;
  stroke-dasharray: 900;
  stroke-dashoffset: 900;
  animation: drawBrand 2.5s ease-in-out 0.5s forwards;
}

/* 下方内容：纯 CSS 延迟动画 */
.hero__title,
.hero__subtitle,
.hero__badges,
.hero__privacy {
  opacity: 0;
  animation: belowFadeIn 0.7s ease forwards;
  animation-delay: var(--d, 3s);
}

.hero__title {
  font-size: 2rem;
  font-weight: 600;
  color: #e5e7eb;
  line-height: 1.4;
  letter-spacing: 0.01em;
  margin: 0 0 1rem;
}

.hero__subtitle {
  font-size: 1.1875rem;
  color: #9ca3af;
  line-height: 1.7;
  margin: 0 0 1.5rem;
}

.hero__badges {
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  margin-bottom: 2.5rem;
}

.hero__badge {
  font-size: 0.9375rem;
  color: #60a5fa;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.22);
  padding: 0.4375rem 1rem;
  border-radius: 999px;
  font-weight: 500;
  letter-spacing: 0.02em;
  animation: badgeGlow 4s ease-in-out infinite;
  animation-delay: 3s;
}

.hero__badge:nth-child(2) { animation-delay: 3.3s; }
.hero__badge:nth-child(3) { animation-delay: 3.6s; }

/* 隐私承诺 */
.hero__privacy {
  margin-top: 0.5rem;
}

.hero__privacy-header {
  text-align: center;
  margin-bottom: 2rem;
}

.hero__privacy-shield {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.18);
  border-radius: 0.875rem;
  margin-bottom: 0.875rem;
  animation: shieldPulse 3s ease-in-out infinite;
  animation-delay: 2.8s;
}

.hero__privacy-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  letter-spacing: -0.02em;
}

.hero__privacy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.hero__privacy-item {
  background: rgba(59, 130, 246, 0.03);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease, background 0.2s, border-color 0.2s;
}

.hero__privacy-item.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: calc(var(--stagger, 0) * 0.07s);
}

.hero__privacy-item:hover {
  background: rgba(59, 130, 246, 0.06);
  border-color: rgba(59, 130, 246, 0.2);
}

.hero__privacy-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 0.5rem;
}

.hero__privacy-item-body { flex: 1; min-width: 0; }

.hero__privacy-item-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.25rem;
}

.hero__privacy-item-desc {
  font-size: 0.8125rem;
  color: #9ca3af;
  line-height: 1.5;
  margin: 0;
}

.hero__privacy-note {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.12);
  border-radius: 0.625rem;
  padding: 0.875rem 1.25rem;
  color: #9ca3af;
  font-size: 0.8125rem;
  line-height: 1.6;
  text-align: left;
}

@media (prefers-reduced-motion: reduce) {
  .hero__brand-text {
    stroke-dashoffset: 0;
    fill-opacity: 1;
    stroke-opacity: 0;
    animation: none;
  }
  .hero__title, .hero__subtitle, .hero__badges, .hero__privacy {
    opacity: 1;
    animation: none;
  }
  .hero__badge, .hero__privacy-shield { animation: none; }
}

@media (max-width: 64rem) {
  .hero__privacy-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 48rem) {
  .hero { padding: 5.5rem 1.25rem 4rem; min-height: auto; }
  .hero__brand-svg { max-width: 22rem; }
  .hero__title { font-size: 1.375rem; }
  .hero__subtitle { font-size: 1rem; }
  .hero__badge { font-size: 0.8125rem; padding: 0.3125rem 0.75rem; }
  .hero__privacy-title { font-size: 1.25rem; }
  .hero__privacy-grid { grid-template-columns: 1fr; }
  .hero__privacy-item { padding: 1rem 1.25rem; }
}
</style>
