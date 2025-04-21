// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  $test: { logLevel: "silent" },
  $development: { logLevel: "verbose" },
  $production: { logLevel: "info" },
  runtimeConfig: {
    apiServerUrl: ''
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
    }
  },
  css: [
    '~/assets/scss/main.scss'
  ],
})