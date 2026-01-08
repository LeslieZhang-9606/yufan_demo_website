<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['openLead'])
const props = defineProps({
  products: { type: Array, default: () => [] },
})

/**
 * 筛选状态
 * filterType: 'category' | 'brand'
 * filterId: 选中的具体值
 */
const filterType = ref('category')
const filterId = ref('Servers')

// 1. 完整品类列表（参考 image_3ccc5e.jpg）
const categoryList = [
  'Routers', 'Switches', 'Servers', 'High-performance servers', 
  'Linear maps', 'Interface modules', 'Firewalls', 'Power supplies', 
  'storage', 'Base stations', 'Laptops/Mobile Servers', 'Server platforms', 
  'Tape Libraries', 'Workstations', 'GPU/Video Cards', 'Access points', 
  'WLAN controllers', 'Multiplexers'
]

// 2. 完整品牌列表（参考 image_3cd349.png）
const brandList = [
  'Juniper', 'Huawei', 'Dell', 'Lenovo', 'Arista', 'HPE', 'Nokia', 
  'Getac', 'Supermicro', 'Ericsson', 'Fujitsu', 'NVIDIA', 'Inspur', 
  'Asus', 'Gooxi', 'NetApp'
]

// 3. 模拟 20 个产品数据
const mockProducts = computed(() => {
  const items = []
  const brands = brandList
  const categories = categoryList
  
  for (let i = 1; i <= 20; i++) {
    // 固定的前几个产品以匹配截图
    if (i === 1) {
      items.push({ id: 1, name: 'NVIDIA DGX H800', brand: 'NVIDIA', category: 'High-performance servers', price: '32,800,000.00', img: 'https://via.placeholder.com/400x300?text=DGX+H800' })
    } else if (i === 2) {
      items.push({ id: 2, name: 'Dell R760 (1)', brand: 'Dell', category: 'Servers', price: '1,430,660.00', img: 'https://via.placeholder.com/400x300?text=Dell+R760' })
    } else if (i === 3) {
      items.push({ id: 3, name: 'Juniper MX204-HW-BASE', brand: 'Juniper', category: 'Routers', price: '720,348.00', img: 'https://via.placeholder.com/400x300?text=MX204' })
    } else {
      items.push({
        id: i,
        name: `${brands[i % brands.length]} System Model ${100 + i}`,
        brand: brands[i % brands.length],
        category: categories[i % categories.length],
        price: (Math.random() * 1000000 + 50000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
        img: 'https://via.placeholder.com/400x300?text=Hardware+Device'
      })
    }
  }
  return items
})

// 过滤逻辑
const filteredProducts = computed(() => {
  return mockProducts.value.filter(p => {
    if (filterType.value === 'category') return p.category === filterId.value
    return p.brand === filterId.value
  })
})

function setFilter(type, id) {
  filterType.value = type
  filterId.value = id
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="container-custom py-12 lg:py-20">
    <div class="mb-16">
      <h1 class="text-7xl font-black tracking-tighter text-blue-600 uppercase opacity-10">
        CATALOG
      </h1>
      <div class="-mt-10">
        <h2 class="text-4xl font-black tracking-tight text-gray-900">产品目录</h2>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-12">
      <aside class="w-full lg:w-64 shrink-0 border-r border-gray-50 pr-8">
        
        <div class="mb-12">
          <h3 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Product categories</h3>
          <nav class="flex flex-col gap-1">
            <button
              v-for="c in categoryList"
              :key="c"
              @click="setFilter('category', c)"
              class="group flex items-center justify-between py-2 text-left transition-all"
              :class="filterType === 'category' && filterId === c ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-900'"
            >
              <span class="text-sm">{{ c }}</span>
              <span v-if="filterType === 'category' && filterId === c" class="text-[10px]">▶</span>
            </button>
          </nav>
        </div>

        <div>
          <h3 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 border-t border-gray-100 pt-8">Brands</h3>
          <nav class="flex flex-col gap-1">
            <button
              v-for="b in brandList"
              :key="b"
              @click="setFilter('brand', b)"
              class="group flex items-center justify-between py-2 text-left transition-all"
              :class="filterType === 'brand' && filterId === b ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-900'"
            >
              <span class="text-sm">{{ b }}</span>
              <span v-if="filterType === 'brand' && filterId === b" class="text-[10px]">▶</span>
            </button>
          </nav>
        </div>
      </aside>

      <main class="flex-1">
        <div class="mb-10 pb-6 border-b border-gray-50 flex items-end justify-between">
          <div>
            <p class="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Current selection</p>
            <h4 class="text-2xl font-black text-gray-900">{{ filterId }}</h4>
          </div>
          <p class="text-xs text-gray-400">Showing {{ filteredProducts.length }} items</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
          <div v-for="p in filteredProducts" :key="p.id" class="flex flex-col group">
            
            <button 
              @click="emit('openLead')"
              class="self-start mb-6 border border-blue-600 text-blue-600 text-[10px] px-4 py-1.5 rounded-full uppercase font-black hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Request a quote
            </button>

            <div class="aspect-square bg-white border border-gray-50 rounded-[45px] mb-8 flex items-center justify-center p-12 group-hover:shadow-xl transition-all duration-500">
              <img :src="p.img" class="max-h-full object-contain group-hover:scale-110 transition duration-700" />
            </div>

            <h3 class="text-lg font-black text-gray-900 leading-tight mb-2 min-h-[56px]">
              {{ p.name }}
            </h3>
            
            <p class="text-xs text-gray-400 uppercase tracking-widest mb-6">
              {{ p.brand }} · {{ p.category }}
            </p>
            
            <div class="mt-auto pt-6 border-t border-gray-50 flex items-baseline gap-2">
              <span class="text-2xl font-black text-blue-600 tracking-tighter">{{ p.price }}</span>
              <span class="text-sm text-blue-600 font-bold">₽</span>
            </div>
          </div>
        </div>

        <div v-if="!filteredProducts.length" class="py-40 text-center bg-gray-50 rounded-[50px] mt-10">
          <p class="text-gray-400 font-bold italic">No products found in this category/brand.</p>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 隐藏滚动条但保留功能 */
aside::-webkit-scrollbar {
  display: none;
}
aside {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>