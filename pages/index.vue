<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <WhatIsOpenClaw />
    <RelationshipSection />
    <ComparisonTable />
    <UseCasesSection />
    <DownloadSection />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('hero.title') + ' — ClawMate',
  meta: [
    { name: 'description', content: t('hero.subtitle') },
    { property: 'og:title', content: t('hero.title') + ' — ClawMate' },
    { property: 'og:description', content: t('hero.subtitle') },
    { property: 'og:image', content: 'https://clawmate.site/og-image.png' },
    { name: 'twitter:title', content: t('hero.title') + ' — ClawMate' },
    { name: 'twitter:description', content: t('hero.subtitle') },
  ],
})
</script>
