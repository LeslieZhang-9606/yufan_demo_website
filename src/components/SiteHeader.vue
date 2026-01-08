<template>
  <header class="border-b border-gray-100 sticky top-0 bg-white z-50">
    <div class="container-custom h-20 flex items-center justify-between">
      <!-- 左侧导航 -->
      <nav class="hidden lg:flex space-x-12 text-[11px] font-bold uppercase tracking-widest text-gray-500 w-[40%]">
        <a
<a
  href="#"
  @click.prevent="emit('goCatalog')"
  :class="currentView === 'catalog' ? activeClass : ''"
  class="pb-1"
>
  产品目录
</a>


        <a
          href="#"
          @click.prevent="emit('goServices')"
          :class="currentView === 'services' ? activeClass : ''"
          class="pb-1"
        >交付与服务</a>
      </nav>

      <!-- 中间 Logo -->
      <div
        @click="emit('logoClick')"
        class="text-2xl font-black uppercase cursor-pointer w-[20%] text-center tracking-tighter"
      >
        Yufan <span class="text-blue-600 italic">Tech</span>
      </div>

      <!-- 右侧导航 -->
      <nav class="hidden lg:flex space-x-12 text-[11px] font-bold uppercase tracking-widest text-gray-500 w-[40%] justify-end items-center">
        <a
          href="#"
          @click.prevent="emit('goAbout')"
          :class="currentView === 'about' ? activeClass : ''"
          class="pb-1"
        >关于我们</a>

        <a
          href="#"
          @click.prevent="emit('goContact')"
          :class="currentView === 'contact' ? activeClass : ''"
          class="pb-1"
        >联系我们</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  currentView: { type: String, default: 'home' }
})

const emit = defineEmits([
  'goHome',
  'goCatalog',
  'goServices',
  'goAbout',
  'goContact',
  'logoClick'
])


const activeClass = 'text-blue-600 border-b-2 border-blue-600'
</script>
