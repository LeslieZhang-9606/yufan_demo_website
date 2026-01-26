<template>
  <div class="relative group">
    <button class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-blue-600 transition-colors h-full py-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      
      <span>{{ currentLangName }}</span>
    </button>

    <div class="absolute right-0 top-full pt-4 w-32 hidden group-hover:block z-[60]">
      
      <div class="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
        <div class="py-2">
          <button 
            v-for="lang in languageOptions" 
            :key="lang.code"
            @click="switchLang(lang.code)"
            class="block w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
            :class="currentCode === lang.code ? 'text-blue-600 bg-blue-50' : 'text-gray-500'"
          >
            {{ lang.name }}
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// 语言选项 (固定显示母语名称)
const languageOptions = [
  { code: 'zh', name: '简体中文' },
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' }
]

const currentCode = computed(() => locale.value)

const currentLangName = computed(() => {
  const found = languageOptions.find(l => l.code === locale.value)
  return found ? found.name : 'English'
})

function switchLang(code) {
  locale.value = code
  localStorage.setItem('locale', code)
  // 如果需要强制刷新页面以更新某些硬编码数据，可以取消下面注释
  // window.location.reload()
}
</script>