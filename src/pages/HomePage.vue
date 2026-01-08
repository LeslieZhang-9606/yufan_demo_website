<template>
  <div>
    <section class="container-custom section-padding flex flex-col lg:flex-row items-center gap-20">
      <div class="lg:w-1/2">
        <span class="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] border-b-2 border-blue-600 pb-2">高性能 IT 供应链</span>
        <h1 class="text-5xl lg:text-8xl font-black text-gray-900 leading-[0.9] uppercase mt-12 tracking-tighter">
          服务器与 <br/> <span class="text-blue-600 italic">GPU 算力系统</span>
        </h1>
        <p class="text-gray-500 mt-12 leading-relaxed max-w-xl text-base">
          我们从中国及香港直发高性能计算硬件。提供全套报关文件（GTD）、含增值税（NDS 20%）价格，并依托自有备件库提供本地化维保支持。
        </p>
        <div class="flex gap-6 mt-16">
          <button @click="emit('goCatalog')" class="btn-blue">浏览目录</button>
          <button @click="scrollTo('form')" class="btn-black">获取报价</button>
        </div>
      </div>

      <div class="lg:w-1/2 relative group">
        <img
          src="https://yes-telecom.ru/upload/iblock/c34/c3489814460012228516086884617062.jpg"
          class="w-full drop-shadow-3xl transform group-hover:scale-105 transition duration-700"
        >
        <div class="absolute -bottom-10 right-0 bg-white p-10 shadow-2xl rounded-[40px] border border-blue-50 max-w-xs">
          <div class="space-y-6">
            <div v-for="v in vps" :key="v.ru" class="flex flex-col items-end">
              <p class="text-blue-600 font-bold text-xs uppercase leading-none">{{ v.ru }}</p>
              <p class="text-[10px] text-gray-400 font-bold uppercase mt-1 italic">{{ v.cn }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 border-y border-gray-100 py-24 px-6">
      <div class="container-custom">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="cat in quickCats"
            :key="cat.name"
            class="bg-white p-12 rounded-[45px] border border-gray-100 hover:shadow-2xl transition-all cursor-pointer group text-center"
          >
            <div class="placeholder-icon mx-auto mb-8 group-hover:bg-blue-600 transition duration-500"></div>
            <h4 class="font-black text-sm uppercase tracking-tighter">{{ cat.name }}</h4>
            <p class="text-[10px] text-gray-300 uppercase mt-2 font-bold">{{ cat.cn }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="container-custom section-padding flex flex-col lg:flex-row gap-24">
      <div class="lg:w-1/3">
        <span class="text-[10px] font-black text-blue-600 uppercase border border-blue-600 px-3 py-1">关于我们</span>
        <h2 class="text-4xl lg:text-5xl font-black uppercase mt-8 leading-tight tracking-tighter">专业的 <br/> IT 设备贸易商</h2>
      </div>

      <div class="lg:w-2/3">
        <div class="text-gray-500 text-base leading-relaxed space-y-8 italic">
          <p>Yufan Tech 是您在高性能计算硬件领域的全球供应链合作伙伴。依托在中国和香港的深度资源，我们解决了大宗硬件采购中的交付和合规难题。</p>
          <p>我们不仅仅是搬运工，更通过在俄罗斯本地建立的备件仓库和技术支持团队，为客户提供 SLA 24/7 的维保服务，填补跨境贸易的售后空白。</p>
        </div>

        <div class="grid grid-cols-3 gap-12 mt-16 border-t pt-16 border-gray-50">
          <div>
            <p class="text-4xl font-black text-blue-600 tracking-tighter">8-12</p>
            <p class="text-[10px] text-gray-400 font-bold uppercase mt-2">天内航空直达</p>
          </div>
          <div>
            <p class="text-4xl font-black text-blue-600 tracking-tighter">100%</p>
            <p class="text-[10px] text-gray-400 font-bold uppercase mt-2">正规报关 (GTD)</p>
          </div>
          <div>
            <p class="text-4xl font-black text-blue-600 tracking-tighter">SLA</p>
            <p class="text-[10px] text-gray-400 font-bold uppercase mt-2">本地维保支持</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-24 bg-gray-900 text-white rounded-[60px] lg:rounded-[100px] px-12 my-12 mx-6">
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <div v-for="s in services" :key="s.title">
          <div class="placeholder-icon mb-10 opacity-20"></div>
          <h4 class="font-black text-blue-500 mb-6 uppercase tracking-tighter text-2xl italic">{{ s.title }}</h4>
          <p class="text-sm text-gray-400 leading-relaxed mb-10 h-20">{{ s.desc }}</p>
          <ul class="space-y-4">
            <li v-for="item in s.list" :key="item" class="text-[11px] font-black text-gray-500 uppercase flex items-center gap-5 tracking-widest">
              <div class="w-2 h-2 bg-blue-600 rounded-full"></div> {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  vps: { type: Array, default: () => [] },
  quickCats: { type: Array, default: () => [] },
  services: { type: Array, default: () => [] },
})
const emit = defineEmits(['goCatalog'])

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
