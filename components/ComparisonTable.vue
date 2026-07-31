<template>
  <section class="comparison animate-on-scroll" id="comparison">
    <div class="comparison__inner">
      <h2 class="comparison__title">{{ $t('comparison.title') }}</h2>
      <p class="comparison__subtitle">{{ $t('comparison.subtitle') }}</p>
      <div class="comparison__table-wrap">
        <table class="comparison__table">
          <thead>
            <tr>
              <th class="comparison__th">{{ $t('comparison.headers.dimension') }}</th>
              <th class="comparison__th comparison__th--clawmate">{{ $t('comparison.headers.clawmate') }}</th>
              <th class="comparison__th">{{ $t('comparison.headers.trae') }}</th>
              <th class="comparison__th">{{ $t('comparison.headers.workbuddy') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="key in rowKeys"
              :key="key"
              class="comparison__row"
              :class="{ 'comparison__row--compact': key === 'diff' || key === 'scene' }"
            >
              <td class="comparison__td comparison__td--label">{{ $t(`comparison.rows.${key}.label`) }}</td>
              <td class="comparison__td comparison__td--clawmate">{{ $t(`comparison.rows.${key}.clawmate`) }}</td>
              <td class="comparison__td">{{ $t(`comparison.rows.${key}.trae`) }}</td>
              <td class="comparison__td">{{ $t(`comparison.rows.${key}.workbuddy`) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const rowKeys = ['opensource', 'register', 'data', 'runtime', 'apikey', 'cloud', 'pricing', 'im', 'diff', 'scene'] as const
</script>

<style scoped>
.comparison {
  padding: 7rem 2rem;
}

.comparison__inner {
  max-width: 60rem;
  margin: 0 auto;
}

.comparison__title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: -0.025em;
}

.comparison__subtitle {
  text-align: center;
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0 0 3rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.comparison__table-wrap {
  overflow-x: auto;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
}

.comparison__table {
  width: 100%;
  border-collapse: collapse;
}

.comparison__th {
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  font-size: 0.9375rem;
  color: #fff;
  font-weight: 600;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  white-space: nowrap;
}

.comparison__th--clawmate {
  background: rgba(59, 130, 246, 0.08);
  color: #fff;
}

.comparison__td {
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.9375rem;
  color: #9ca3af;
  line-height: 1.6;
  vertical-align: top;
}

.comparison__row:last-child .comparison__td {
  border-bottom: none;
}

.comparison__td--label {
  font-weight: 600;
  color: #6b7280;
  white-space: nowrap;
}

.comparison__td--clawmate {
  background: rgba(59, 130, 246, 0.05);
  color: #d1d5db;
  font-weight: 500;
}

.comparison__row--compact .comparison__td {
  font-size: 0.875rem;
}

@media (max-width: 48rem) {
  .comparison {
    padding: 4.5rem 1.25rem;
  }

  .comparison__title {
    font-size: 1.75rem;
  }

  .comparison__subtitle {
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }

  .comparison__table {
    min-width: 40rem;
  }
}
</style>
