<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__copyright">{{ $t('footer.copyright') }}</p>
      <NuxtLink :to="localePath('/about')" class="footer__link">{{ $t('about.title') }}</NuxtLink>
      <div class="footer__records">
        <a class="footer__icp" href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">粤ICP备2026074525号-1</a>
        <a class="footer__icp" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030002013812" target="_blank" rel="noopener noreferrer">粤公网安备44030002013812号</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.footer {
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer__inner {
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
}

.footer__copyright {
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0 0 0.5rem;
}

.footer__link {
  display: inline-block;
  font-size: 0.9375rem;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s;
  margin-bottom: 0.5rem;
}

.footer__link:hover {
  color: #fff;
}

.footer__records {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.footer__icp {
  font-size: 0.875rem;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.footer__icp:hover {
  color: #9ca3af;
}
</style>
