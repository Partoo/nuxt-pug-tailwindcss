import { resolve } from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/style/tailwind.css',
    viewer: true,
  },
  css: [
    '~/assets/style/main.scss'
  ]
})
