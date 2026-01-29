<template>
  <header class="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50 transition-all duration-300">
    <div class="container-custom h-20 flex items-center justify-between">
      
      <nav class="hidden lg:flex space-x-12 text-[12px] font-bold uppercase tracking-widest text-gray-500 w-[40%] justify-start">
        <a href="#catalog" @click.prevent="switchPage('catalog')" class="hover:text-blue-600 transition-colors relative group" :class="{ 'text-blue-600': currentView === 'catalog' }">
          {{ $t('siteHeader.nav.products') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
        </a>
        <a href="#solutions" @click.prevent="switchPage('solutions')" class="hover:text-blue-600 transition-colors relative group" :class="{ 'text-blue-600': currentView === 'solutions' }">
          {{ $t('siteHeader.nav.solutions') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
        </a>
      </nav>

      <div @click="switchPage('home')" class="text-2xl font-black uppercase cursor-pointer text-center tracking-tight flex items-center gap-1 group hover:scale-105 transition-transform duration-300">
        <span>YUFAN</span>
        <span class="text-blue-600 italic">GROUP</span>
      </div>

      <nav class="hidden lg:flex space-x-12 text-[12px] font-bold uppercase tracking-widest text-gray-500 w-[40%] justify-end items-center">
        <a href="#services" @click.prevent="switchPage('services')" class="hover:text-blue-600 transition-colors relative group" :class="{ 'text-blue-600': currentView === 'services' }">
          {{ $t('siteHeader.nav.services') }}
        </a>
        <a href="#about" @click.prevent="switchPage('about')" class="hover:text-blue-600 transition-colors relative group" :class="{ 'text-blue-600': currentView === 'about' }">
          {{ $t('siteHeader.nav.about') }}
        </a>
        <div class="border-l border-gray-200 pl-6 ml-2">
          <LangSwitcher />
        </div>
      </nav>

      <div class="flex items-center gap-4 lg:hidden">
        <LangSwitcher /> <button @click="isMenuOpen = !isMenuOpen" class="text-gray-900 p-2 focus:outline-none">
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMenuOpen" class="lg:hidden bg-white border-b border-gray-100 shadow-xl">
        <div class="flex flex-col space-y-4 px-8 py-8 font-bold uppercase text-[12px] tracking-widest text-gray-500">
          <a href="#catalog" @click.prevent="switchPage('catalog')" class="py-2" :class="{ 'text-blue-600': currentView === 'catalog' }">{{ $t('siteHeader.nav.products') }}</a>
          <a href="#solutions" @click.prevent="switchPage('solutions')" class="py-2" :class="{ 'text-blue-600': currentView === 'solutions' }">{{ $t('siteHeader.nav.solutions') }}</a>
          <a href="#services" @click.prevent="switchPage('services')" class="py-2" :class="{ 'text-blue-600': currentView === 'services' }">{{ $t('siteHeader.nav.services') }}</a>
          <a href="#about" @click.prevent="switchPage('about')" class="py-2" :class="{ 'text-blue-600': currentView === 'about' }">{{ $t('siteHeader.nav.about') }}</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import LangSwitcher from './LangSwitcher.vue'

defineProps(['currentView'])
const emit = defineEmits(['navigate'])

const isMenuOpen = ref(false)

function switchPage(pageKey) {
  emit('navigate', pageKey)
  isMenuOpen.value = false
}
</script>