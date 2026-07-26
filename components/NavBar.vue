<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--visible': visible }">
    <div class="navbar__inner">
      <NuxtLink :to="localePath('/')" class="navbar__brand">
        <img src="~/assets/images/icon.png" alt="ClawMate" class="navbar__logo" />
        <span class="navbar__name">ClawMate</span>
      </NuxtLink>

    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const scrolled = ref(false)
const visible = ref(false)

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
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 2rem;
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateY(-100%);
  opacity: 0;
}

.navbar--visible {
  transform: translateY(0);
  opacity: 1;
}

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
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.navbar__logo {
  width: 2.25rem;
  height: 2.25rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.navbar__brand:hover .navbar__logo {
  transform: rotate(-8deg) scale(1.05);
}

.navbar__name {
  font-size: 1.375rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.01em;
}

@media (max-width: 48rem) {
  .navbar {
    padding: 0 1rem;
  }
}
</style>
