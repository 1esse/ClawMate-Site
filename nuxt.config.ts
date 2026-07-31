export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/en', '/payment/callback', '/about', '/en/about'],
    },
  },

  css: ['~/assets/css/global.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'zh' },
      script: [
        {
          innerHTML: `(function(){function r(){var w=document.documentElement.clientWidth;var f=Math.max(Math.min(w/1920*16,16),10);document.documentElement.style.fontSize=f+'px'}r();window.addEventListener('resize',r)})()`,
          type: 'text/javascript',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'ClawMate, OpenClaw, AI Agent, Desktop Manager, AI助手, 智能体, 开源' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'ClawMate' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
  ],

  i18n: {
    locales: [
      { code: 'zh', name: '中文', language: 'zh-CN', file: 'zh.json' },
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  sitemap: {
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
  },

  site: {
    url: 'https://clawmate.site',
    name: 'ClawMate',
  },

  compatibilityDate: '2026-05-25',

  experimental: {
    appManifest: false,
  },
})
