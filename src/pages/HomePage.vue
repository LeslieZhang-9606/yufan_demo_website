<template>
  <div class="bg-white">
    <section id="hero" class="relative w-full h-[768px] overflow-hidden bg-gray-900 text-white">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <div class="absolute inset-0 bg-black/30 z-10"></div>
        <img :src="slide.image" class="absolute inset-0 w-full h-full object-cover transform scale-105" alt="Hero Background" />
        
        <div class="container-custom h-full flex items-center justify-end relative z-20">
          <div class="max-w-2xl pr-4 lg:pr-12 pt-20 flex flex-col items-start text-left">
            <div class="inline-block py-1 px-3 border border-blue-500 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-fade-in-up">
              {{ $t(slide.tagKey) }}
            </div>
            
            <h1 class="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-8 animate-fade-in-up delay-100 break-words w-full">
              {{ $t(slide.title1Key) }} <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white italic">
                {{ $t(slide.title2Key) }}
              </span>
            </h1>
            
            <p class="text-gray-200 text-lg leading-relaxed mb-12 max-w-lg border-l-4 border-blue-600 pl-6 animate-fade-in-up delay-200">
              {{ $t(slide.descKey) }}
            </p>
            
            <button class="bg-blue-600 hover:bg-white hover:text-blue-900 text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-blue-900/50 animate-fade-in-up delay-300">
              {{ $t(slide.btnKey) }}
            </button>
          </div>
        </div>
      </div>

      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        <button v-for="(slide, index) in slides" :key="'dot-'+index" @click="setSlide(index)" class="w-12 h-1 bg-white/20 transition-all duration-300" :class="currentSlide === index ? 'bg-blue-600 w-16' : 'hover:bg-white/40'"></button>
      </div>
      <button @click="prevSlide" class="absolute left-8 top-1/2 -translate-y-1/2 z-30 text-white/20 hover:text-white transition-colors">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button @click="nextSlide" class="absolute right-8 top-1/2 -translate-y-1/2 z-30 text-white/20 hover:text-white transition-colors">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
      </button>
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

    <section id="products" class="container-custom section-padding py-24">
      <div class="flex flex-col lg:flex-row justify-between items-end mb-16">
        <div>
          <span class="text-blue-600 text-[10px] font-black uppercase tracking-widest">{{ $t('homePage.products.title') }}</span>
          <h2 class="text-4xl font-black uppercase mt-4 tracking-tighter">Flagship <span class="italic text-gray-400">Series</span></h2>
        </div>
        <button class="text-xs font-bold uppercase border-b border-gray-900 pb-1">{{ $t('homePage.catalogButton') }}</button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="group relative bg-gray-900 rounded-[40px] p-10 overflow-hidden text-white h-[400px] flex flex-col justify-between cursor-pointer">
          <div class="z-10 relative">
            <span class="bg-blue-600 text-white text-[9px] font-bold px-2 py-1 rounded mb-4 inline-block uppercase">{{ $t('homePage.products.p1.tag') }}</span>
            <h3 class="text-3xl font-black italic mb-2">{{ $t('homePage.products.p1.name') }}</h3>
            <p class="text-gray-400 text-sm max-w-xs">{{ $t('homePage.products.p1.desc') }}</p>
          </div>
          <div class="absolute right-0 bottom-0 w-2/3 h-full bg-gradient-to-l from-blue-900/50 to-transparent"></div>
          <img src="https://images.unsplash.com/photo-1624705024411-db345c22119e?auto=format&fit=crop&w=500&q=80" class="absolute -right-10 top-1/2 -translate-y-1/2 w-3/4 opacity-50 group-hover:opacity-80 group-hover:scale-110 transition duration-500 mix-blend-luminosity" />
          <button class="z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors absolute bottom-10 right-10">↗</button>
        </div>

        <div class="group relative bg-gray-100 rounded-[40px] p-10 overflow-hidden text-gray-900 h-[400px] flex flex-col justify-between cursor-pointer">
          <div class="z-10 relative">
            <span class="bg-gray-200 text-gray-600 text-[9px] font-bold px-2 py-1 rounded mb-4 inline-block uppercase">{{ $t('homePage.products.p2.tag') }}</span>
            <h3 class="text-3xl font-black italic mb-2">{{ $t('homePage.products.p2.name') }}</h3>
            <p class="text-gray-500 text-sm max-w-xs">{{ $t('homePage.products.p2.desc') }}</p>
          </div>
          <img src="https://images.unsplash.com/photo-1558494949-ef2bb6db8744?auto=format&fit=crop&w=500&q=80" class="absolute -right-10 top-1/2 -translate-y-1/2 w-3/4 opacity-80 group-hover:scale-110 transition duration-500 grayscale group-hover:grayscale-0" />
          <button class="z-10 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors absolute bottom-10 right-10">↗</button>
        </div>
      </div>
    </section>

    <section id="solutions" class="bg-blue-600 text-white py-24 overflow-hidden">
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <div class="lg:w-1/2">
            <h2 class="text-4xl lg:text-5xl font-black uppercase mb-6 tracking-tighter">{{ $t('homePage.solutionsTitle') }}</h2>
            <p class="text-blue-100 text-sm leading-loose mb-10 max-w-md border-l border-blue-400 pl-6">
              {{ $t('homePage.solutionsDesc') }}
            </p>
            <div class="space-y-4">
              <div class="flex items-center gap-4 p-4 bg-blue-500/20 rounded-xl border border-blue-400/30">
                <div class="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xs">01</div>
                <div class="text-xs font-bold uppercase tracking-wider">Infiniband (IB) Network Design</div>
              </div>
              <div class="flex items-center gap-4 p-4 bg-blue-500/20 rounded-xl border border-blue-400/30">
                <div class="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xs">02</div>
                <div class="text-xs font-bold uppercase tracking-wider">ROCE v2 Low Latency Fabric</div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2">
             <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-xl">
                <img src="https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&w=800&q=80" class="rounded-lg opacity-80 mix-blend-overlay" />
             </div>
          </div>
        </div>
      </div>
    </section>

    <section id="global" class="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain"></div>
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

    <section class="py-16 border-b border-gray-100">
      <div class="container-custom">
        <p class="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-10">{{ $t('homePage.partnersTitle') }}</p>
        <div class="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div class="h-8 w-24 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400 text-xs">NVIDIA</div>
          <div class="h-8 w-24 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400 text-xs">DELL</div>
          <div class="h-8 w-24 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400 text-xs">LENOVO</div>
          <div class="h-8 w-24 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400 text-xs">CISCO</div>
          <div class="h-8 w-24 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400 text-xs">SUPERMICRO</div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-24 bg-white">
      <div class="container-custom max-w-4xl text-center">
        <h2 class="text-4xl font-black uppercase mb-4">{{ $t('leadForm.sectionTitle') }}</h2>
        <p class="text-gray-500 mb-10">{{ $t('leadForm.description') }}</p>
        <button class="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-xl">
          {{ $t('leadForm.submit') }}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 【修正】Script 部分的 Keys 也要全部由 home -> homePage
const servicesLocal = [
  { 
    id: 'hardware', 
    icon: 'GPU', 
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=500&q=80',
    // 修正这里：
    titleKey: 'homePage.services.hardware.title', 
    descKey: 'homePage.services.hardware.desc' 
  },
  { 
    id: 'custom', 
    icon: 'R&D', 
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&w=500&q=80',
    titleKey: 'homePage.services.solutions.title', 
    descKey: 'homePage.services.solutions.desc' 
  },
]

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=2070&auto=format&fit=crop',
    // 修正这里：
    tagKey: 'homePage.hero.s1.tag',
    title1Key: 'homePage.hero.s1.title1',
    title2Key: 'homePage.hero.s1.title2',
    descKey: 'homePage.hero.s1.desc',
    btnKey: 'homePage.hero.s1.btn'
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2070&auto=format&fit=crop',
    tagKey: 'homePage.hero.s2.tag',
    title1Key: 'homePage.hero.s2.title1',
    title2Key: 'homePage.hero.s2.title2',
    descKey: 'homePage.hero.s2.desc',
    btnKey: 'homePage.hero.s2.btn'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop',
    tagKey: 'homePage.hero.s3.tag',
    title1Key: 'homePage.hero.s3.title1',
    title2Key: 'homePage.hero.s3.title2',
    descKey: 'homePage.hero.s3.desc',
    btnKey: 'homePage.hero.s3.btn'
  }
]

const currentSlide = ref(0)
let timer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const setSlide = (index) => {
  currentSlide.value = index
  clearInterval(timer)
  timer = setInterval(nextSlide, 5000)
}

onMounted(() => {
  timer = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
</style>