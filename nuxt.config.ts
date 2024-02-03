import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: '/<rootDir></rootDir>'
  },
  ssr: false,
  css: [
    '~/assets/style/main.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify', 'vue-i18n'],
  },
  vite: { 
    plugins: [ 
      VueI18nVitePlugin({ 
        include: [ 
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*/*.ts') 
        ] 
      }) 
    ] 
  } 
})
