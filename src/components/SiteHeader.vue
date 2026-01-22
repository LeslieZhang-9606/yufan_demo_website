<template>
  <header class="border-b border-gray-100 sticky top-0 bg-white z-50">
    <div class="container-custom h-20 flex items-center justify-between">
      <!-- 左侧导航 -->
      <nav class="flex space-x-12 text-[13px] font-bold uppercase tracking-widest text-gray-500 w-[40%]">
        <a
          href="#"
          @click.prevent="emit('goCatalog')"
          :class="currentView === 'catalog' ? activeClass : ''"
          class="pb-1"
        >
          {{ $t('common.nav.catalog') }}
        </a>

        <a
          href="#"
          @click.prevent="emit('goServices')"
          :class="currentView === 'services' ? activeClass : ''"
          class="pb-1"
        >
          {{ $t('common.nav.services') }}
        </a>
      </nav>

      <!-- 中间 Logo -->
      <div
        @click="emit('logoClick')"
        class="text-2xl font-black uppercase cursor-pointer text-center tracking-tight"
      >
        YUFAN <span class="text-blue-600 italic">TECH</span>
      </div>

      <!-- 右侧导航 + 语言切换 -->
      <nav class="flex space-x-12 text-[13px] font-bold uppercase tracking-widest text-gray-500 w-[40%] justify-end items-center">
        <a
          href="#"
          @click.prevent="emit('goAbout')"
          :class="currentView === 'about' ? activeClass : ''"
          class="pb-1"
        >
          {{ $t('common.nav.about') }}
        </a>

        <a
          href="#"
          @click.prevent="emit('goContact')"
          :class="currentView === 'contact' ? activeClass : ''"
          class="pb-1"
        >
          {{ $t('common.nav.contact') }}
        </a>

        <!-- 语言切换 下拉 -->
        <LangSwitcher />
      </nav>
    </div>
  </header>
</template>

<script setup>
import LangSwitcher from './LangSwitcher.vue'

const props = defineProps({
  currentView: { type: String, default: 'home' },
})

const emit = defineEmits([
  'goHome',
  'goCatalog',
  'goServices',
  'goAbout',
  'goContact',
  'logoClick',
])

const activeClass = 'text-blue-600 border-b-2 border-blue-600'
</script>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 增加响应式调节 */
@media (max-width: 1024px) {
  .container-custom {
    padding: 0 1rem;
  }
  nav {
    text-align: center;
    flex-wrap: wrap;
  }
  .text-2xl {
    font-size: 1.5rem;
  }
}
</style>
