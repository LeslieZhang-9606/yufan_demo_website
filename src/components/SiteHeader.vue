<template>
  <header class="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50 transition-all duration-300">
    <div class="container-custom h-20 flex items-center justify-between">
      
      <nav class="hidden lg:flex space-x-12 text-[12px] font-bold uppercase tracking-widest text-gray-500 w-[40%] justify-start">
        
        <a
          href="#catalog"
          @click.prevent="switchPage('catalog')"
          class="hover:text-blue-600 transition-colors relative group"
          :class="{ 'text-blue-600': currentView === 'catalog' }" 
        >
          {{ $t('siteHeader.nav.products') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
        </a>

        <a
          href="#solutions"
          @click.prevent="switchPage('solutions')"
          class="hover:text-blue-600 transition-colors relative group"
          :class="{ 'text-blue-600': currentView === 'solutions' }"
        >
          {{ $t('siteHeader.nav.solutions') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
        </a>
      </nav>

      <div
        @click="switchPage('home')"
        class="text-2xl font-black uppercase cursor-pointer text-center tracking-tight flex items-center gap-1 group hover:scale-105 transition-transform duration-300"
      >
        <span>YUFAN</span>
        <span class="text-blue-600 italic">GROUP</span>
      </div>

      <nav class="hidden lg:flex space-x-12 text-[12px] font-bold uppercase tracking-widest text-gray-500 w-[40%] justify-end items-center">
        <a
          href="#services"
          @click.prevent="switchPage('services')"
          class="hover:text-blue-600 transition-colors relative group"
          :class="{ 'text-blue-600': currentView === 'services' }"
        >
          {{ $t('siteHeader.nav.services') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
        </a>
        
        <a
          href="#about"
          @click.prevent="switchPage('about')"
          class="hover:text-blue-600 transition-colors relative group"
          :class="{ 'text-blue-600': currentView === 'about' }"
        >
          {{ $t('siteHeader.nav.about') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
        </a>
        
        <div class="border-l border-gray-200 pl-6 ml-2">
          <LangSwitcher />
        </div>
      </nav>

      <button class="lg:hidden text-gray-900 p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import LangSwitcher from './LangSwitcher.vue'

defineProps(['currentView'])
const emit = defineEmits(['navigate'])

function switchPage(pageKey) {
  emit('navigate', pageKey)
}
</script>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>