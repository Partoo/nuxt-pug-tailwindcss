import { resolve } from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  app : {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
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
