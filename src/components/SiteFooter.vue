<template>
  <footer id="contacts" class="bg-gray-900 text-white mt-20">
    <div class="container-custom py-16 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div class="lg:col-span-4 space-y-8">
          <div class="text-3xl font-black uppercase tracking-tighter">
            YUFAN <span class="text-blue-500 italic">TECH</span>
          </div>
          <div class="space-y-4">
            <div class="text-xl font-bold text-blue-400">info@yufantech.ru</div>
            <p class="text-sm text-gray-400 leading-relaxed max-w-sm">
              直供高性能 IT 硬件。合规清关（GTD）与含税（NDS）供货，支持本地 SLA 维保。
            </p>
          </div>
          <div class="flex gap-4">
            <div v-for="i in 5" :key="i" class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <span class="text-xs">TG</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4">
          <h4 class="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">Global Contacts</h4>
          <div class="space-y-6">
            <div v-for="loc in locations" :key="loc.city" class="flex justify-between items-end border-b border-gray-800 pb-2">
              <div class="text-sm font-bold">{{ loc.phone }}</div>
              <div class="text-[10px] text-gray-500 uppercase tracking-widest">{{ loc.city }}</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 grid grid-cols-2 gap-8">
          <div>
            <h4 class="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">Navigation</h4>
            <ul class="space-y-4 text-sm font-medium text-gray-400">
              <li><button @click="emit('navigate', '产品目录')" class="hover:text-blue-400 transition">产品目录</button></li>
              <li><button @click="emit('navigate', '供应链代采')" class="hover:text-blue-400 transition">供应链代采</button></li>
              <li><button @click="emit('navigate', '关于我们')" class="hover:text-blue-400 transition">关于我们</button></li>
              <li><button @click="emit('navigate', '联系我们')" class="hover:text-blue-400 transition">联系我们</button></li>
            </ul>
          </div>
          <div>
            <h4 class="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">Categories</h4>
            <ul class="space-y-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              <li>GPU Servers</li>
              <li>Routers</li>
              <li>Switches</li>
              <li>Storage</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-20 pt-12 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-10 text-[11px] text-gray-500 leading-relaxed uppercase tracking-wider">
        <div>
          <p>法定地址: 109316, 莫斯科, 纺织区内, 伏尔加格拉德大街43号3号楼</p>
          <p>实际地址: 莫斯科东南行政区伏尔加格拉德大街43号3号楼 (阿维隆广场商务中心)</p>
        </div>
        <div class="flex flex-wrap gap-x-8 gap-y-2">
          <span>INN: 9715383990</span>
          <span>KPP: 772201001</span>
          <span>OGRN: 1207700176320</span>
        </div>
      </div>
    </div>

    <div class="bg-black py-8">
      <div class="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div class="h-6 w-24 bg-white/20 rounded"></div> 
          <div class="h-6 w-20 bg-white/20 rounded text-[10px] flex items-center justify-center font-bold">NVIDIA ELITE</div>
          <div class="h-6 w-16 bg-white/20 rounded"></div>
        </div>
        <div class="text-[10px] font-bold text-gray-600 uppercase tracking-[0.4em]">
          © 2026 YUFAN-TECH.RU. 所有产品价格并非公开要约。
        </div>
      </div>
    </div>

    <div class="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
      <div class="bg-white rounded-3xl p-4 shadow-2xl flex items-center gap-4 max-w-xs animate-bounce-subtle border border-blue-100">
        <div class="w-12 h-12 rounded-full bg-blue-100 overflow-hidden shrink-0 border-2 border-white shadow-md">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Daria" alt="Daria" />
        </div>
        <div>
          <div class="text-xs font-black text-gray-900">达莉娅 (Daria)</div>
          <div class="text-[10px] text-gray-500 leading-tight">您好！所有产品均为工厂组装。您对哪款型号感兴趣？</div>
        </div>
      </div>
      <button @click="emit('openLead')" class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 shadow-blue-400">
        <span class="text-2xl">💬</span>
      </button>
    </div>
  </footer>
</template>

<script setup>
const emit = defineEmits(['navigate', 'legal', 'openLead'])

const locations = [
  { city: 'Moscow', phone: '+7 926 225 25 07' },
  { city: 'Guangzhou', phone: '+86 189 287 93 737' },
  { city: 'Shenzhen', phone: '+86 135 225 12 374' },
  { city: 'Beijing', phone: '+86 189 287 93 737' },
  { city: 'Hong Kong', phone: '+852 XXXX XXXX' }
]
</script>

<style scoped>
.animate-bounce-subtle {
  animation: bounce-subtle 3s infinite ease-in-out;
}
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>