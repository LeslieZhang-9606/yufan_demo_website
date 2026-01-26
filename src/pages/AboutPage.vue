<template>
  <div class="bg-white min-h-screen font-sans">
    
    <div class="bg-gray-900 text-white pt-32 pb-24 rounded-b-[60px] relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
      
      <div class="container-custom relative z-10 text-center">
        <span class="inline-block py-1 px-3 border border-gray-600 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-full">
          {{ $t('aboutPage.header.subTitle') }}
        </span>
        <h1 class="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8">
          {{ $t('aboutPage.header.title') }}
        </h1>
        <p class="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          {{ $t('aboutPage.header.desc') }}
        </p>
      </div>
    </div>

    <section class="py-24 overflow-hidden">
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row gap-20 items-center">
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-black uppercase mb-8 leading-tight">
              {{ $t('aboutPage.intro.title') }}
            </h2>
            <div class="space-y-6 text-gray-500 leading-relaxed text-justify">
              <p>{{ $t('aboutPage.intro.p1') }}</p>
              <p>{{ $t('aboutPage.intro.p2') }}</p>
            </div>
            
            <div class="grid grid-cols-3 gap-8 mt-12 border-t border-gray-100 pt-8">
              <div>
                <div class="text-4xl font-black text-blue-600 mb-1">2003</div>
                <div class="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Founded</div>
              </div>
              <div>
                <div class="text-4xl font-black text-blue-600 mb-1">112</div>
                <div class="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Cities</div>
              </div>
              <div>
                <div class="text-4xl font-black text-blue-600 mb-1">1000㎡</div>
                <div class="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Lab</div>
              </div>
            </div>
          </div>

          <div class="lg:w-1/2 relative">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" class="w-full opacity-10" />
            
            <div class="absolute top-[42%] left-[72%] w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
            <div class="absolute top-[42%] left-[72%] w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
            
            <div class="absolute top-[22%] left-[58%] w-3 h-3 bg-gray-400 rounded-full"></div>
            
            <div class="absolute top-[35%] left-[18%] w-3 h-3 bg-gray-400 rounded-full"></div>

            <div class="absolute bottom-0 right-0 bg-white/80 backdrop-blur p-4 rounded-xl border border-gray-100 text-xs">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                <span class="font-bold">Shenzhen (HQ)</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                <span class="text-gray-500">Global Hubs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-24">
      <div class="container-custom">
        <h2 class="text-center text-3xl font-black uppercase mb-16">{{ $t('aboutPage.history.title') }}</h2>
        
        <div class="relative max-w-4xl mx-auto">
          <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>
          
          <div v-for="(item, index) in historySteps" :key="index" class="relative mb-12 md:mb-0 md:h-48">
            <div class="absolute left-1/2 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 border-4 border-white shadow-md hidden md:block z-10"></div>
            <div class="md:w-1/2 relative" :class="index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'">
              <div class="text-6xl font-black text-gray-200 absolute -top-4 opacity-50 select-none z-0" :class="index % 2 === 0 ? 'right-12' : 'left-12'">
                {{ item.year }}
              </div>
              <div class="relative z-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div class="text-blue-600 font-black text-xl mb-2 md:hidden">{{ item.year }}</div>
                <h3 class="font-bold text-gray-900 text-lg mb-2">{{ item.title }}</h3>
                <p class="text-sm text-gray-500 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-24 bg-white text-gray-900">
      <div class="container-custom text-center">
        <div class="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">
          {{ $t('aboutPage.contact.subTitle') }}
        </div>
        <h2 class="text-4xl lg:text-5xl font-black uppercase mb-16 tracking-tighter">
          {{ $t('aboutPage.contact.title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group cursor-pointer">
            <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div class="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{{ $t('aboutPage.contact.emailLabel') }}</div>
            <a :href="'mailto:' + $t('aboutPage.contact.email')" class="text-lg font-black text-gray-900 hover:text-blue-600 transition-colors break-all">
              {{ $t('aboutPage.contact.email') }}
            </a>
          </div>

          <div class="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group cursor-pointer">
             <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </div>
            <div class="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{{ $t('aboutPage.contact.telegramLabel') }}</div>
            <a :href="$t('aboutPage.contact.telegramLink')" target="_blank" class="text-lg font-black text-gray-900 hover:text-blue-600 transition-colors">
              {{ $t('aboutPage.contact.telegram') }}
            </a>
          </div>

          <div class="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group cursor-pointer">
             <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <div class="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{{ $t('aboutPage.contact.phoneLabel') }}</div>
            <div class="text-lg font-black text-gray-900">
              {{ $t('aboutPage.contact.phone') }}
            </div>
          </div>
        </div>

        <div class="mt-16 pt-16 border-t border-gray-100">
           <div class="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">{{ $t('aboutPage.contact.addressLabel') }}</div>
           <p class="text-gray-500 max-w-xl mx-auto leading-relaxed font-medium">
             {{ $t('aboutPage.contact.addressText') }}
           </p>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const historySteps = computed(() => tm('aboutPage.history.steps'))
</script>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>