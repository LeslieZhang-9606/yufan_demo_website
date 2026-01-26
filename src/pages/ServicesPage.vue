<template>
  <div class="bg-white min-h-screen font-sans">
    
    <div class="bg-gray-900 text-white pt-32 pb-24 rounded-b-[60px] relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
      
      <div class="container-custom relative z-10 text-center">
        <span class="inline-block py-1 px-3 border border-green-500 text-green-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-full">
          {{ $t('servicesPage.header.subTitle') }}
        </span>
        <h1 class="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8">
          {{ $t('servicesPage.header.title') }}
        </h1>
        <p class="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          {{ $t('servicesPage.header.desc') }}
        </p>
      </div>
    </div>

    <div class="container-custom py-24 space-y-32">
      
      <section class="flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2 relative group">
          <div class="absolute -inset-4 bg-blue-100 rounded-[40px] -rotate-2 transition-transform group-hover:rotate-0"></div>
          <div class="relative rounded-[32px] overflow-hidden shadow-2xl h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" 
              class="w-full h-full object-cover"
              alt="Global Supply Chain"
            />
            <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-blue-50">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <div class="text-xs font-bold text-gray-500 uppercase tracking-wider">Compliance</div>
                  <div class="font-black text-gray-900">GTD + VAT Invoice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2">
          <div class="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">01 / LOGISTICS</div>
          <h2 class="text-3xl lg:text-4xl font-black mb-6">{{ $t('servicesPage.supply.title') }}</h2>
          <p class="text-gray-500 mb-10 leading-relaxed">{{ $t('servicesPage.supply.desc') }}</p>
          
          <div class="space-y-6">
            <div v-for="(feat, i) in supplyFeatures" :key="i" class="flex gap-4 group">
              <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span class="font-black text-sm">{{ i + 1 }}</span>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">{{ feat.title }}</h4>
                <p class="text-sm text-gray-500 mt-1 leading-relaxed">{{ feat.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div class="lg:w-1/2 relative group">
          <div class="absolute -inset-4 bg-purple-100 rounded-[40px] rotate-2 transition-transform group-hover:rotate-0"></div>
          <div class="relative rounded-[32px] overflow-hidden shadow-2xl h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80" 
              class="w-full h-full object-cover"
              alt="Chip Repair"
            />
            <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-purple-50">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <div>
                  <div class="text-xs font-bold text-gray-500 uppercase tracking-wider">Lab Capability</div>
                  <div class="font-black text-gray-900">BGA / CSP Precision Repair</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2">
          <div class="text-purple-600 font-black text-xs uppercase tracking-widest mb-2">02 / MAINTENANCE</div>
          <h2 class="text-3xl lg:text-4xl font-black mb-6">{{ $t('servicesPage.repair.title') }}</h2>
          <p class="text-gray-500 mb-10 leading-relaxed">{{ $t('servicesPage.repair.desc') }}</p>
          
          <div class="space-y-6">
            <div v-for="(feat, i) in repairFeatures" :key="i" class="flex gap-4 group">
              <div class="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <span class="font-black text-sm">{{ i + 1 }}</span>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">{{ feat.title }}</h4>
                <p class="text-sm text-gray-500 mt-1 leading-relaxed">{{ feat.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

    <div class="bg-gray-900 py-24 text-center text-white border-t border-gray-800">
      <div class="container-custom">
        <h2 class="text-3xl font-black uppercase mb-8">{{ $t('servicesPage.cta.title') }}</h2>
        <button 
          @click="$emit('openLead')"
          class="bg-white text-gray-900 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all shadow-xl active:scale-95"
        >
          {{ $t('servicesPage.cta.btn') }}
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
const supplyFeatures = computed(() => tm('servicesPage.supply.features'))
const repairFeatures = computed(() => tm('servicesPage.repair.features'))
</script>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>