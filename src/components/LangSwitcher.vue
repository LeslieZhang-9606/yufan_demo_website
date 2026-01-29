<template>
  <div class="relative" ref="switcherRef">
    <button 
      @click="toggleDropdown"
      class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-blue-600 transition-colors h-full py-2 outline-none"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>{{ currentLangName }}</span>
      <svg class="w-3 h-3 transition-transform duration-200" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isOpen" class="absolute right-0 top-full pt-2 w-32 z-[60]">
        <div class="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          <div class="py-1">
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
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)
const switcherRef = ref(null)

const languageOptions = [
  { name: 'English', code: 'en' },
  { name: '简体中文', code: 'zh' },
  { name: 'Русский', code: 'ru' }
]

const currentCode = computed(() => locale.value)
const currentLangName = computed(() => {
  return languageOptions.find(opt => opt.code === locale.value)?.name || 'English'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLang = (code) => {
  locale.value = code
  localStorage.setItem('user-locale', code)
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (switcherRef.value && !switcherRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', handleClickOutside))
onUnmounted(() => window.removeEventListener('click', handleClickOutside))
</script>