<template>
  <section class="features animate-on-scroll" id="features">
    <div class="features__inner">
      <h2 class="features__title">{{ $t('clawmate.title') }}</h2>
      <p class="features__desc">{{ $t('clawmate.desc') }}</p>
      <div class="features__grid">
        <div
          v-for="(item, index) in featureList"
          :key="item.key"
          class="feature-card animate-on-scroll"
          :style="{ '--stagger': index }"
        >
          <div class="feature-card__icon" v-html="item.icon" />
          <h3 class="feature-card__title">{{ $t(`clawmate.features.${item.key}.title`) }}</h3>
          <p class="feature-card__desc">{{ $t(`clawmate.features.${item.key}.desc`) }}</p>
        </div>
      </div>
      <div class="features__positioning animate-on-scroll">
        <span class="features__positioning-label">{{ $t('clawmate.positioning_label') }}</span>
        <span class="features__positioning-text">{{ $t('clawmate.positioning') }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const featureList = [
  {
    key: 'install',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  },
  {
    key: 'config',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  },
  {
    key: 'messaging',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  },
  {
    key: 'chat',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  },
  {
    key: 'automation',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  },
  {
    key: 'cross_platform',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  },
]
</script>

<style scoped>
.features {
  padding: 7rem 2rem;
}

.features__inner {
  max-width: 72rem;
  margin: 0 auto;
}

.features__title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1.5rem;
  letter-spacing: -0.025em;
}

.features__desc {
  text-align: center;
  font-size: 1.125rem;
  color: #9ca3af;
  line-height: 1.75;
  max-width: 48rem;
  margin: 0 auto 4rem;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  padding: 2.25rem;
  transition: background 0.3s, border-color 0.3s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
  opacity: 0;
  transform: translateY(24px);
}

.feature-card.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.3s,
              border-color 0.3s,
              box-shadow 0.3s;
  transition-delay: calc(var(--stagger, 0) * 0.08s);
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.08);
}

.feature-card__icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.375rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 0.75rem;
  padding: 0.5rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s;
}

.feature-card:hover .feature-card__icon {
  transform: scale(1.1);
  background: rgba(59, 130, 246, 0.15);
}

.feature-card__title {
  font-size: 1.3125rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.75rem;
}

.feature-card__desc {
  font-size: 1rem;
  color: #9ca3af;
  line-height: 1.7;
  margin: 0;
}

.features__positioning {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
  text-align: center;
}

.features__positioning-label {
  font-size: 0.875rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.features__positioning-text {
  font-size: 1.25rem;
  color: #d1d5db;
  font-weight: 500;
}

@media (max-width: 64rem) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 48rem) {
  .features {
    padding: 4.5rem 1.25rem;
  }

  .features__grid {
    grid-template-columns: 1fr;
  }

  .features__title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .features__desc {
    font-size: 1rem;
    margin-bottom: 2.75rem;
  }

  .features__positioning-text {
    font-size: 1.0625rem;
  }
}
</style>
