<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--visible': visible }">
    <div class="navbar__inner">
      <NuxtLink :to="localePath('/')" class="navbar__brand">
        <img src="~/assets/images/icon.png" alt="ClawMate" class="navbar__logo" />
        <span class="navbar__name">ClawMate</span>
      </NuxtLink>
      <button class="navbar__download" @click="scrollToDownload">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>{{ $t('hero.cta') }}</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

const scrolled = ref(false)
const visible = ref(false)

function scrollToDownload() {
  const el = document.getElementById('download')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
  const onScroll = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 2rem;
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateY(-100%);
  opacity: 0;
}

.navbar--visible { transform: translateY(0); opacity: 1; }

.navbar--scrolled {
  background-color: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
}

.navbar__inner {
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
}

.navbar__brand {
  display: flex; align-items: center; gap: 0.75rem;
  text-decoration: none;
}

.navbar__logo {
  width: 2.25rem; height: 2.25rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.navbar__brand:hover .navbar__logo { transform: rotate(-8deg) scale(1.05); }

.navbar__name {
  font-size: 1.375rem; font-weight: 600; color: #fff;
  letter-spacing: -0.01em;
}

.navbar__download {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #3b82f6; color: #fff;
  padding: 0.5625rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 0.9375rem; font-weight: 500;
  border: none; cursor: pointer;
  transition: background 0.2s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
  position: relative; overflow: hidden;
}

.navbar__download::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
  opacity: 0; transition: opacity 0.3s;
}

.navbar__download:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.navbar__download:hover::before { opacity: 1; }
.navbar__download:active { transform: translateY(0) scale(0.97); }

@media (max-width: 48rem) {
  .navbar { padding: 0 1rem; }
  .navbar__download span { display: none; }
  .navbar__download { padding: 0.5625rem 0.75rem; }
}
</style>
