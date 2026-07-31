<template>
  <section class="usecases animate-on-scroll" id="usecases">
    <div class="usecases__inner">
      <h2 class="usecases__title">{{ $t('usecases.title') }}</h2>
      <ul class="usecases__list">
        <li
          v-for="(item, index) in useCases"
          :key="item.key"
          class="usecases__item animate-on-scroll"
          :style="{ '--stagger': index }"
        >
          <span class="usecases__num">{{ item.num }}</span>
          <span class="usecases__text">{{ $t(`usecases.items.${item.key}`) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const useCases = [
  { key: 'privacy', num: 1 },
  { key: 'longterm', num: 2 },
  { key: 'nogui', num: 3 },
  { key: 'automation', num: 4 },
]
</script>

<style scoped>
.usecases {
  padding: 6rem 2rem;
}

.usecases__inner {
  max-width: 48rem;
  margin: 0 auto;
}

.usecases__title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 3rem;
  letter-spacing: -0.025em;
}

.usecases__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.usecases__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.usecases__item.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: calc(var(--stagger, 0) * 0.08s);
}

.usecases__num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  font-weight: 600;
  font-size: 0.9375rem;
  flex-shrink: 0;
}

.usecases__text {
  color: #9ca3af;
  font-size: 1.0625rem;
  line-height: 1.6;
}

@media (max-width: 48rem) {
  .usecases {
    padding: 4rem 1.25rem;
  }

  .usecases__title {
    font-size: 1.625rem;
    margin-bottom: 2.25rem;
  }

  .usecases__text {
    font-size: 1rem;
  }
}
</style>
