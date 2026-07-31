<template>
  <section class="relationship animate-on-scroll" id="relationship">
    <div class="relationship__inner">
      <h2 class="relationship__title">{{ $t('relationship.title') }}</h2>
      <blockquote class="relationship__quote">
        {{ $t('relationship.quote') }}
      </blockquote>
      <p class="relationship__desc">{{ $t('relationship.desc') }}</p>
      <ul class="relationship__points">
        <li
          v-for="(point, index) in pointKeys"
          :key="point"
          class="relationship__point animate-on-scroll"
          :style="{ '--stagger': index }"
        >
          <span class="relationship__point-dot" />
          <span class="relationship__point-text">{{ $t(`relationship.points.${point}`) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const pointKeys = ['websocket', 'local', 'config'] as const
</script>

<style scoped>
.relationship {
  padding: 7rem 2rem;
}

.relationship__inner {
  max-width: 48rem;
  margin: 0 auto;
}

.relationship__title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 2.5rem;
  letter-spacing: -0.025em;
}

.relationship__quote {
  border-left: 4px solid #3b82f6;
  padding-left: 1.5rem;
  font-size: 1.75rem;
  font-style: italic;
  color: #d1d5db;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
}

.relationship__desc {
  color: #9ca3af;
  line-height: 1.8;
  margin: 1.5rem 0 2.5rem;
  font-size: 1rem;
}

.relationship__points {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.relationship__point {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.relationship__point.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: calc(var(--stagger, 0) * 0.08s);
}

.relationship__point-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #3b82f6;
  flex-shrink: 0;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
}

.relationship__point-text {
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.7;
}

@media (max-width: 48rem) {
  .relationship {
    padding: 4.5rem 1.25rem;
  }

  .relationship__title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .relationship__quote {
    font-size: 1.375rem;
    padding-left: 1.25rem;
  }
}
</style>
