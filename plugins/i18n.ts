import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import ru from '@/locales/ru'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ru',
    messages: {
      ru, 
      en 
    }
  })

  vueApp.use(i18n)
})
