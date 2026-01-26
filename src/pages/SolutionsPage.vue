<template>
  <div class="bg-white min-h-screen font-sans">
    
    <div class="bg-gray-900 text-white pt-32 pb-24 rounded-b-[60px] relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
      
      <div class="container-custom relative z-10 text-center">
        <span class="inline-block py-1 px-3 border border-blue-500 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-full">
          {{ $t('solutionsPage.header.subTitle') }}
        </span>
        <h1 class="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8">
          {{ $t('solutionsPage.header.title') }}
        </h1>
        <p class="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          {{ $t('solutionsPage.header.desc') }}
        </p>
      </div>
    </div>

    <div class="container-custom py-24 space-y-32">
      
      <section class="flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2 relative group">
          <div class="absolute -inset-4 bg-blue-100 rounded-[40px] -rotate-2 transition-transform group-hover:rotate-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
            class="relative rounded-[32px] shadow-2xl w-full object-cover h-[400px]"
            alt="Custom Hardware"
          />
        </div>
        <div class="lg:w-1/2">
          <div class="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">01 / OEM & ODM</div>
          <h2 class="text-3xl lg:text-4xl font-black mb-6">{{ $t('solutionsPage.custom.title') }}</h2>
          <p class="text-gray-500 mb-10 leading-relaxed">{{ $t('solutionsPage.custom.desc') }}</p>
          
          <div class="grid gap-6">
            <div v-for="(feat, i) in customFeatures" :key="i" class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                {{ feat.title }}
              </h3>
              <p class="text-xs text-gray-500 pl-4">{{ feat.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div class="lg:w-1/2 relative group">
          <div class="absolute -inset-4 bg-purple-100 rounded-[40px] rotate-2 transition-transform group-hover:rotate-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef2bb6db8744?auto=format&fit=crop&w=800&q=80" 
            class="relative rounded-[32px] shadow-2xl w-full object-cover h-[400px]"
            alt="Compute Leasing"
          />
        </div>
        <div class="lg:w-1/2">
          <div class="text-purple-600 font-black text-xs uppercase tracking-widest mb-2">02 / LEASING</div>
          <h2 class="text-3xl lg:text-4xl font-black mb-6">{{ $t('solutionsPage.leasing.title') }}</h2>
          <p class="text-gray-500 mb-10 leading-relaxed">{{ $t('solutionsPage.leasing.desc') }}</p>
          
          <div class="grid gap-6">
            <div v-for="(feat, i) in leasingFeatures" :key="i" class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-purple-600"></span>
                {{ feat.title }}
              </h3>
              <p class="text-xs text-gray-500 pl-4">{{ feat.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2 relative group">
          <div class="absolute -inset-4 bg-emerald-100 rounded-[40px] -rotate-2 transition-transform group-hover:rotate-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
            class="relative rounded-[32px] shadow-2xl w-full object-cover h-[400px]"
            alt="Cluster Networking"
          />
        </div>
        <div class="lg:w-1/2">
          <div class="text-emerald-600 font-black text-xs uppercase tracking-widest mb-2">03 / NETWORK</div>
          <h2 class="text-3xl lg:text-4xl font-black mb-6">{{ $t('solutionsPage.network.title') }}</h2>
          <p class="text-gray-500 mb-10 leading-relaxed">{{ $t('solutionsPage.network.desc') }}</p>
          
          <div class="grid gap-6">
            <div v-for="(feat, i) in networkFeatures" :key="i" class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
              <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                {{ feat.title }}
              </h3>
              <p class="text-xs text-gray-500 pl-4">{{ feat.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div class="lg:w-1/2 relative group">
          <div class="absolute -inset-4 bg-indigo-100 rounded-[40px] rotate-2 transition-transform group-hover:rotate-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&w=800&q=80" 
            class="relative rounded-[32px] shadow-2xl w-full object-cover h-[400px]"
            alt="Remote O&M"
          />
        </div>
        <div class="lg:w-1/2">
          <div class="text-indigo-600 font-black text-xs uppercase tracking-widest mb-2">04 / O&M SUPPORT</div>
          <h2 class="text-3xl lg:text-4xl font-black mb-6">{{ $t('solutionsPage.ops.title') }}</h2>
          <p class="text-gray-500 mb-10 leading-relaxed">{{ $t('solutionsPage.ops.desc') }}</p>
          
          <div class="grid gap-6">
            <div v-for="(feat, i) in opsFeatures" :key="i" class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all">
              <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
                {{ feat.title }}
              </h3>
              <p class="text-xs text-gray-500 pl-4">{{ feat.text }}</p>
            </div>
          </div>
        </div>
      </section>

    </div>

    <div class="bg-blue-600 py-24 text-center text-white">
      <div class="container-custom">
        <h2 class="text-3xl font-black uppercase mb-8">{{ $t('solutionsPage.cta.title') }}</h2>
        <button 
          @click="$emit('openLead')"
          class="bg-white text-blue-600 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl active:scale-95"
        >
          {{ $t('solutionsPage.cta.btn') }}
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const emit = defineEmits(['openLead'])

// 获取列表数据
const customFeatures = computed(() => tm('solutionsPage.custom.features'))
const leasingFeatures = computed(() => tm('solutionsPage.leasing.features'))
const networkFeatures = computed(() => tm('solutionsPage.network.features'))
const opsFeatures = computed(() => tm('solutionsPage.ops.features'))
</script>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>