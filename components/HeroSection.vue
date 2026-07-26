<template>
  <section class="hero">
    <div class="hero__bg">
      <div class="hero__glow hero__glow--1"></div>
      <div class="hero__glow hero__glow--2"></div>
      <div class="hero__grid"></div>
    </div>
    <div class="hero__content">
      <h1 class="hero__title hero-anim" style="--delay: 0">{{ $t('hero.title') }}</h1>
      <p class="hero__subtitle hero-anim" style="--delay: 1">{{ $t('hero.subtitle') }}</p>
      <div class="hero__actions hero-anim" style="--delay: 2">
        <a href="#download" class="hero__cta">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {{ $t('hero.cta') }}
        </a>
      </div>
    </div>
    <div class="hero__scroll-hint">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes glowFloat1 {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-20px); }
}

@keyframes glowFloat2 {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-15px) translateX(10px); }
}

@keyframes scrollWheel {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(6px); opacity: 0; }
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7rem 2rem 4rem;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
}

.hero__glow--1 {
  width: 40rem;
  height: 40rem;
  background: #3b82f6;
  top: -10rem;
  left: 50%;
  transform: translateX(-50%);
  animation: glowFloat1 8s ease-in-out infinite;
}

.hero__glow--2 {
  width: 24rem;
  height: 24rem;
  background: #8b5cf6;
  bottom: -5rem;
  right: 10%;
  animation: glowFloat2 10s ease-in-out infinite;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent);
}

.hero__content {
  position: relative;
  max-width: 52rem;
  text-align: center;
}

.hero-anim {
  opacity: 0;
  animation: heroFadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(0.15s + var(--delay) * 0.15s);
}

.hero__title {
  font-size: 4.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.12;
  letter-spacing: -0.035em;
  margin: 0 0 1.5rem;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 60%, rgba(255, 255, 255, 0.6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: 1.3125rem;
  color: #9ca3af;
  line-height: 1.75;
  margin: 0 0 2.75rem;
  max-width: 38rem;
  margin-left: auto;
  margin-right: auto;
}

.hero__actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  background: #3b82f6;
  color: #fff;
  padding: 1rem 2.25rem;
  border-radius: 0.625rem;
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}

.hero__cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.hero__cta:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.35);
}

.hero__cta:hover::before {
  opacity: 1;
}

.hero__cta:active {
  transform: translateY(0) scale(0.98);
}

.hero__scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
}

.hero__scroll-mouse {
  width: 1.5rem;
  height: 2.25rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  padding-top: 0.375rem;
}

.hero__scroll-wheel {
  width: 2px;
  height: 6px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 1px;
  animation: scrollWheel 1.5s ease-in-out infinite;
}

@media (max-width: 48rem) {
  .hero {
    padding: 5.5rem 1.25rem 3rem;
  }

  .hero__title {
    font-size: 2.75rem;
  }

  .hero__subtitle {
    font-size: 1.125rem;
  }
}
</style>
