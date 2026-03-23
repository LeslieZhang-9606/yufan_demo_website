import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'
import ru from './ru' 

const messages = {
  zh,
  en,
  ru 
}

// 1. 获取浏览器默认语言的前两位（例如将 'ru-RU' 截取为 'ru'，'zh-CN' 截取为 'zh'）
const browserLang = (navigator.language || navigator.userLanguage).substring(0, 2).toLowerCase()

// 2. 检查浏览器语言是否在支持的语言列表内，如果不在，则默认使用 'ru'（或你希望的其他语言）
const defaultLang = Object.keys(messages).includes(browserLang) ? browserLang : 'ru'

// 3. 优先读取用户的本地设置（localStorage），如果没有则使用上面计算出的默认语言
const localeFromStorage = localStorage.getItem('locale') || defaultLang

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localeFromStorage,
  fallbackLocale: 'en', // 某个翻译缺失时，默认回退到英文查找
  messages,
})