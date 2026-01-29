<template>
  <div class="bg-white">
    <section id="hero" class="relative w-full h-[768px] overflow-hidden bg-gray-900 text-white group">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        
        <img :src="slide.image" class="absolute inset-0 w-full h-full object-cover transform scale-105" alt="Hero Background" />
        
        <div class="container-custom h-full flex items-center relative z-20">
          <div class="max-w-3xl pt-20 flex flex-col items-start text-left pl-4 lg:pl-0">
            <div class="inline-block py-1 px-3 border border-blue-500 bg-blue-900/30 backdrop-blur-sm text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
              {{ $t(slide.tagKey) }}
            </div>
            
            <h1 class="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-6 animate-fade-in-up delay-100 break-words w-full shadow-black drop-shadow-lg">
              {{ $t(slide.title1Key) }} <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white italic">
                {{ $t(slide.title2Key) }}
              </span>
            </h1>
            
            <p class="text-gray-200 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl border-l-4 border-blue-600 pl-6 animate-fade-in-up delay-200 bg-black/20 backdrop-blur-sm py-2 rounded-r-lg">
              {{ $t(slide.descKey) }}
            </p>
            
            <button class="bg-blue-600 hover:bg-white hover:text-blue-900 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-blue-900/50 hover:shadow-blue-500/30 animate-fade-in-up delay-300 flex items-center gap-2">
              {{ $t(slide.btnKey) }}
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <button 
        @click="prevSlide" 
        class="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        @click="nextSlide" 
        class="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[20px] group-hover:translate-x-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        <button 
          v-for="(slide, index) in slides" 
          :key="'dot-'+index" 
          @click="setSlide(index)" 
          class="h-1 rounded-full transition-all duration-300" 
          :class="currentSlide === index ? 'bg-blue-500 w-12' : 'bg-white/30 w-8 hover:bg-white/60'"
        ></button>
      </div>
    </section>

    <section id="services" class="bg-gray-50 py-24">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="s in servicesLocal" :key="s.id" class="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 flex flex-col h-full">
            <div class="h-64 w-full bg-gray-200 relative overflow-hidden">
              <img :src="s.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Service Image" />
              <div class="absolute bottom-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-blue-600 shadow-lg z-10">
                <span class="font-black text-xs">{{ s.icon }}</span>
              </div>
            </div>
            <div class="p-8 flex flex-col flex-grow">
              <h3 class="text-lg font-black uppercase tracking-tight mb-4 text-gray-900 leading-tight min-h-[48px]">
                {{ $t(s.titleKey) }}
              </h3>
              <p class="text-xs text-gray-500 leading-relaxed mb-6 flex-grow">
                {{ $t(s.descKey) }}
              </p>
              <div class="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                <span class="text-[10px] font-bold uppercase text-blue-600 tracking-widest group-hover:underline">{{ $t('common.action.viewDetails') }}</span>
                <span class="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] group-hover:bg-blue-600 group-hover:text-white transition-colors">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<section id="products" class="container-custom pt-24 pb-48 overflow-hidden bg-white">
      <div class="flex flex-col lg:flex-row justify-between items-end mb-20">
        <div>
          <span class="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">{{ $t('homePage.products.title') }}</span>
          <h2 class="text-4xl lg:text-5xl font-black uppercase mt-4 tracking-tighter leading-none">Flagship <span class="italic text-gray-400">Inventory</span></h2>
        </div>
        <div class="flex gap-4 mt-8 lg:mt-0">
          <button @click="prevFeature" class="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all text-xl shadow-sm">←</button>
          <button @click="nextFeature" class="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all text-xl shadow-sm">→</button>
        </div>
      </div>

      <div class="relative mb-20">
        <div 
          class="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] gap-10"
          :style="{ transform: `translateX(-${featureIndex * (100 / itemsToShow)}%)` }"
        >
          <div 
            v-for="product in featuredProducts" 
            :key="product.id"
            class="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-1.25rem)] group relative rounded-[48px] p-12 overflow-hidden h-[500px] flex flex-col justify-between cursor-pointer transition-all duration-700 bg-gray-50 border border-gray-100 hover:shadow-2xl"
          >
            <div class="z-10 relative">
              <span class="text-[9px] font-black px-4 py-1.5 rounded-full mb-6 inline-block uppercase tracking-[0.2em] bg-white text-blue-600 shadow-sm">
                {{ product.brand }}
              </span>
              <h3 class="text-4xl font-black italic mb-4 uppercase tracking-tighter leading-none text-gray-900 break-words max-w-[80%]">
                {{ product.name }}
              </h3>
              
              <div class="flex flex-wrap gap-8 mt-8">
                <div 
                  v-for="(value, key) in Object.fromEntries(Object.entries(product.specs).slice(0, 2))" 
                  :key="key" 
                  class="flex flex-col"
                >
                  <span class="text-[8px] uppercase opacity-40 font-black mb-1 tracking-widest text-gray-500">{{ key }}</span>
                  <span class="text-xs font-black tracking-tight text-gray-900">{{ value }}</span>
                </div>
              </div>
            </div>

            <img :src="product.img || 'https://via.placeholder.com/800x600?text=Product'" class="absolute -right-12 top-1/2 -translate-y-1/2 w-[80%] transition duration-1000 group-hover:scale-110 group-hover:-translate-x-8 object-contain pointer-events-none opacity-90" />

            <div class="z-10 flex justify-between items-end border-t border-gray-200 pt-8">
               <div class="flex flex-col">
                 <span class="text-[9px] font-black uppercase opacity-40 tracking-[0.3em] mb-2 text-gray-500">Status</span>
                 <div class="text-2xl font-black tracking-tighter text-blue-600 uppercase flex items-center gap-2">
                    Check Stock <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 </div>
               </div>
               <button @click="$emit('openLead', product)" class="w-16 h-16 rounded-full border border-gray-900 text-gray-900 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all text-2xl">↗</button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center lg:justify-end">
        <button 
          @click="$emit('goCatalog')" 
          class="group flex items-center gap-6 text-sm font-black uppercase tracking-[0.3em] text-gray-900 hover:text-blue-600 transition-all"
        >
          View Full Inventory
          <span class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">→</span>
        </button>
      </div>
    </section>
    <section id="solutions" class="py-12 bg-white overflow-hidden">
      <div class="container-custom">
        <div class="bg-gray-100 rounded-[40px] p-6 lg:p-12 relative flex flex-col lg:flex-row items-center gap-8 lg:gap-8 border border-gray-200/50">
          
          <div class="lg:w-[45%] relative z-10 text-left pl-2">
            <h2 class="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {{ $t('homePage.solutionsTitle') }}
            </h2>
            <p class="text-gray-600 text-base lg:text-lg mb-8 max-w-sm font-medium leading-relaxed">
              {{ $t('homePage.solutionsDesc') }}
            </p>
            
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-3 group">
              Select Project Server
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div class="lg:w-[55%] relative w-full flex justify-center lg:justify-end pr-0 lg:pr-4">
            <div class="relative w-full max-w-[500px]">
               <img :src="`${basePath}images/Server_render.png`" class="w-full h-auto object-contain drop-shadow-2xl relative z-10" alt="Server Configuration" />
               
<div class="absolute top-[25%] right-[25%] z-20 animate-float duration-7000">
  <div class="bg-[#1a202c] text-white text-[10px] lg:text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-gray-700/50">
    <span>4 or 8 GPU?</span>
  </div>
</div>

<div class="absolute top-[50%] -translate-y-1/2 left-[2%] z-20 animate-float duration-6000 delay-1000">
  <div class="bg-[#00C853] text-white text-[10px] lg:text-xs font-bold px-4 py-2 rounded-full shadow-lg border-none">
    <span>Add RAM?</span>
  </div>
</div>

<div class="absolute top-[55%] right-[5%] z-20 animate-float duration-8000 delay-2000">
  <div class="bg-[#2979FF] text-white text-[10px] lg:text-xs font-bold px-4 py-2 rounded-full shadow-lg border-none">
    <span>For AI & ML?</span>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="global" class="py-32 bg-gray-900 text-white relative overflow-hidden">
      <div class="container-custom relative z-10 text-center">
        <h2 class="text-3xl font-black uppercase tracking-widest mb-16">{{ $t('homePage.globalTitle') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-700">
          <div class="p-4">
            <div class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-2">20+</div>
            <div class="text-[10px] uppercase tracking-[0.2em] text-gray-400">{{ $t('homePage.stat1') }}</div>
          </div>
          <div class="p-4">
            <div class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-2">112</div>
            <div class="text-[10px] uppercase tracking-[0.2em] text-gray-400">{{ $t('homePage.stat2') }}</div>
          </div>
          <div class="p-4">
            <div class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-2">4H</div>
            <div class="text-[10px] uppercase tracking-[0.2em] text-gray-400">{{ $t('homePage.stat3') }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 border-b border-gray-100 bg-white overflow-hidden">
      <div class="container-custom">
        <div class="flex justify-between items-end mb-12">
          <div>
            <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">
              {{ $t('homePage.partnersTitle') }}
            </p>
            <h2 class="text-3xl font-black uppercase tracking-tighter text-gray-900">
              Trusted <span class="text-gray-300 italic">Network</span>
            </h2>
          </div>
          
          <div class="flex gap-2">
             <div v-for="i in totalBrandPages" :key="i" 
                  class="h-1 w-8 transition-all duration-300 rounded-full cursor-pointer"
                  :class="brandPage === (i-1) ? 'bg-blue-600' : 'bg-gray-200'"
                  @click="setBrandPage(i-1)">
             </div>
          </div>
        </div>
        
        <div class="relative min-h-[280px]"> 
          <Transition mode="out-in" name="fade-slide">
            <div :key="brandPage" class="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-6">
              <div 
                v-for="brand in visibleBrands" 
                :key="brand.name" 
                class="group flex flex-col items-center justify-center h-32 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all duration-500 cursor-pointer bg-white p-4"
              >
                <img 
                  :src="brand.logo" 
                  :alt="brand.name"
                  class="w-full h-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                  @error="(e) => { e.target.style.display='none'; e.target.nextElementSibling.style.display='block'; }"
                />
                
                <span class="hidden text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-blue-600 transition-colors truncate w-3/4 text-center">
                  {{ brand.name }}
                </span>
              </div>
            </div>
          </Transition>
        </div>

        <div class="flex justify-center mt-12">
            <button class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-blue-600 border-b border-transparent hover:border-blue-600 pb-1 transition-all">
                View All Partners & Cases →
            </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { siteData } from '../data/siteData.js'

// 获取基础路径（自动适配本地和线上）
const basePath = import.meta.env.BASE_URL

const emit = defineEmits(['openLead', 'goCatalog'])

// --- 联动逻辑：旗舰库存 ---
const products = siteData.products
const featuredProducts = computed(() => {
  return siteData.featuredIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean)
})

const featureIndex = ref(0)
const itemsToShow = ref(2)
const updateItemsToShow = () => { itemsToShow.value = window.innerWidth < 768 ? 1 : 2 }

const nextFeature = () => {
  const max = featuredProducts.value.length - itemsToShow.value
  featureIndex.value = featureIndex.value >= max ? 0 : featureIndex.value + 1
}
const prevFeature = () => {
  const max = featuredProducts.value.length - itemsToShow.value
  featureIndex.value = featureIndex.value <= 0 ? max : featureIndex.value - 1
}

// --- 品牌墙逻辑 ---
const rawBrandNames = [
  'HUAWEI', 'xFusion', 'H3C', 'WUZHOU', 'Great Wall', 'Lenovo', 
  'KunLun', 'DELL', 'Changjiang', 'HP', 'IBM', 'Juniper',
  'BIOBASE', 'PowerLeader', 'NVIDIA', 'Tongfang', 'AMD', 'Apple',
  'Intel', 'KunTai', 'CISCO', 'Acer', 'BROADCOM', 
  'Seagate', 'Microsoft', 'ASUS', 'SAMSUNG', 'TOSHIBA', 'Inspur'
]

// 自动生成图片路径，前面拼接了 basePath
const brandList = rawBrandNames.map(name => ({
  name: name,
  logo: `${basePath}logos/${name.toLowerCase().replace(/\s+/g, '')}.png`
}))

const brandPage = ref(0)
const itemsPerPage = 8 
const totalBrandPages = computed(() => Math.ceil(brandList.length / itemsPerPage))

const visibleBrands = computed(() => {
  const start = brandPage.value * itemsPerPage
  return brandList.slice(start, start + itemsPerPage)
})

let brandTimer = null
const nextBrandPage = () => {
  brandPage.value = (brandPage.value + 1) % totalBrandPages.value
}
const setBrandPage = (index) => {
  brandPage.value = index
  clearInterval(brandTimer)
  brandTimer = setInterval(nextBrandPage, 4000)
}

// --- Hero Banner 逻辑 ---
const slides = [
  { 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', 
    tagKey: 'homePage.hero.s1.tag', 
    title1Key: 'homePage.hero.s1.title1', 
    title2Key: 'homePage.hero.s1.title2', 
    descKey: 'homePage.hero.s1.desc', 
    btnKey: 'homePage.hero.s1.btn' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2070&auto=format&fit=crop', 
    tagKey: 'homePage.hero.s2.tag', 
    title1Key: 'homePage.hero.s2.title1', 
    title2Key: 'homePage.hero.s2.title2', 
    descKey: 'homePage.hero.s2.desc', 
    btnKey: 'homePage.hero.s2.btn' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop', 
    tagKey: 'homePage.hero.s3.tag', 
    title1Key: 'homePage.hero.s3.title1', 
    title2Key: 'homePage.hero.s3.title2', 
    descKey: 'homePage.hero.s3.desc', 
    btnKey: 'homePage.hero.s3.btn' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2070&auto=format&fit=crop', 
    tagKey: 'homePage.hero.s4.tag', 
    title1Key: 'homePage.hero.s4.title1', 
    title2Key: 'homePage.hero.s4.title2', 
    descKey: 'homePage.hero.s4.desc', 
    btnKey: 'homePage.hero.s4.btn' 
  }
]

// 数据数组里的本地图片，全都加上了 ${basePath}
const servicesLocal = [
  { 
    id: 'hardware', 
    icon: 'GPU', 
    image: `${basePath}/images/Parts_supply.png`, 
    titleKey: 'homePage.services.hardware.title', 
    descKey: 'homePage.services.hardware.desc' 
  },
  { 
    id: 'custom', 
    icon: 'R&D', 
    image: `${basePath}/images/H100_module.png`, 
    titleKey: 'homePage.services.custom.title', 
    descKey: 'homePage.services.custom.desc' 
  },
  { 
    id: 'maintenance', 
    icon: 'FIX', 
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=500&q=80', 
    titleKey: 'homePage.services.maintenance.title', 
    descKey: 'homePage.services.maintenance.desc' 
  },
  { 
    id: 'solutions', 
    icon: 'NET', 
    image: `${basePath}/images/Server_3D_render.jpg`, 
    titleKey: 'homePage.services.solutions.title', 
    descKey: 'homePage.services.solutions.desc' 
  },
]

const currentSlide = ref(0)
let timer = null

const resetTimer = () => {
  clearInterval(timer)
  timer = setInterval(nextSlide, 6000)
}

const nextSlide = () => { 
  currentSlide.value = (currentSlide.value + 1) % slides.length 
  resetTimer()
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
  resetTimer()
}

const setSlide = (i) => { 
  currentSlide.value = i
  resetTimer()
}

onMounted(() => {
  timer = setInterval(nextSlide, 6000)
  brandTimer = setInterval(nextBrandPage, 4000)
  updateItemsToShow()
  window.addEventListener('resize', updateItemsToShow)
})

onUnmounted(() => {
  clearInterval(timer)
  clearInterval(brandTimer)
  window.removeEventListener('resize', updateItemsToShow)
})
</script>

<style scoped>
.container-custom { max-width: 1440px; margin: 0 auto; padding: 0 2rem; }
@keyframes fadeInUp { from { opacity: 0; transform: translate3d(0, 20px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 核心动画：慢速、微动悬浮 */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* 仅移动10px，更稳重 */
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.duration-6000 { animation-duration: 6s; }
.duration-7000 { animation-duration: 7s; }
.duration-8000 { animation-duration: 8s; }

.delay-1000 { animation-delay: 1s; }
.delay-2000 { animation-delay: 2s; }
</style>