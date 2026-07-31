<template>
  <section class="openclaw animate-on-scroll" id="openclaw">
    <div class="openclaw__inner">
      <h2 class="openclaw__title">{{ $t('openclaw.title') }}</h2>
      <p class="openclaw__desc">{{ $t('openclaw.desc') }}</p>
      <div class="openclaw__grid">
        <div
          v-for="(item, index) in capabilities"
          :key="item.key"
          class="openclaw__card animate-on-scroll"
          :style="{ '--stagger': index }"
        >
          <div class="openclaw__card-head">
            <div class="openclaw__card-icon" v-html="item.icon" />
            <h3 class="openclaw__card-title">{{ $t(`openclaw.capabilities.${item.key}.title`) }}</h3>
          </div>
          <p class="openclaw__card-desc">{{ $t(`openclaw.capabilities.${item.key}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const capabilities = [
  { key: 'channels', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' },
  { key: 'models', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>' },
  { key: 'agents', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg>' },
  { key: 'extensions', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>' },
  { key: 'automation', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
  { key: 'opensource', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>' },
]
</script>

<style scoped>
.openclaw {
  padding: 7rem 2rem;
}

.openclaw__inner {
  max-width: 72rem;
  margin: 0 auto;
}

.openclaw__title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1.5rem;
  letter-spacing: -0.025em;
}

.openclaw__desc {
  text-align: center;
  font-size: 1.125rem;
  color: #9ca3af;
  line-height: 1.75;
  max-width: 48rem;
  margin: 0 auto 4rem;
}

.openclaw__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.openclaw__card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid rgba(59, 130, 246, 0.3);
  border-radius: 1rem;
  padding: 1.75rem 2rem;
  transition: background 0.3s, border-color 0.3s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
  opacity: 0;
  transform: translateY(24px);
}

.openclaw__card.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.3s,
              border-color 0.3s,
              box-shadow 0.3s;
  transition-delay: calc(var(--stagger, 0) * 0.08s);
}

.openclaw__card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.08);
}

.openclaw__card-head {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 0.75rem;
}

.openclaw__card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 0.625rem;
  padding: 0.375rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s;
}

.openclaw__card:hover .openclaw__card-icon {
  transform: scale(1.1);
  background: rgba(59, 130, 246, 0.15);
}

.openclaw__card-title {
  font-size: 1.1875rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.openclaw__card-desc {
  font-size: 1rem;
  color: #9ca3af;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 64rem) {
  .openclaw__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 48rem) {
  .openclaw {
    padding: 4.5rem 1.25rem;
  }

  .openclaw__grid {
    grid-template-columns: 1fr;
  }

  .openclaw__title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .openclaw__desc {
    font-size: 1rem;
    margin-bottom: 2.75rem;
  }
}
</style>
