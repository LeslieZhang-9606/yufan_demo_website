import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'
import ru from './ru' // <--- 解开这里

const messages = {
  zh,
  en,
  ru // <--- 解开这里
}

const localeFromStorage = localStorage.getItem('locale') || 'zh'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localeFromStorage,
  fallbackLocale: 'en',
  messages,
})