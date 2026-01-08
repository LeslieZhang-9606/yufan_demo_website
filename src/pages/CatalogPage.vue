<template>
  <div class="bg-white min-h-screen font-sans selection:bg-blue-100">
    <div class="max-w-[1440px] mx-auto px-8 py-12 lg:py-20">
      
      <!-- 页面头部 -->
      <header class="mb-16 border-b border-gray-100 pb-10">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 class="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Hardware Inventory</h1>
            <h2 class="text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase">产品目录汇总</h2>
          </div>
          <div class="text-right">
            <p class="text-gray-400 text-sm max-w-sm leading-relaxed italic mb-4">
              实时汇总全球主流算力硬件。价格随汇率波动，请点击“发起询价”获取最新 DDP/DAP 报价。
            </p>
            <!-- 视图切换 -->
            <div class="flex items-center justify-end gap-4">
              <div class="flex bg-gray-100 p-1 rounded-xl">
                <button 
                  @click="viewMode = 'grid'" 
                  :class="viewMode === 'grid' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'"
                  class="px-3 py-1.5 rounded-lg transition-all text-[10px] font-bold uppercase"
                >Grid</button>
                <button 
                  @click="viewMode = 'list'" 
                  :class="viewMode === 'list' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'"
                  class="px-3 py-1.5 rounded-lg transition-all text-[10px] font-bold uppercase"
                >List</button>
              </div>
              <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                已同步: {{ filteredProducts.length }} 型号
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row gap-16">
        <!-- 左侧筛选栏 -->
        <aside class="w-full lg:w-64 shrink-0">
          <div class="sticky top-10 space-y-12">
            
            <!-- 按品类 -->
            <div>
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300">Categories</h3>
                <button @click="resetFilter" class="text-[10px] text-blue-600 font-bold">Reset</button>
              </div>
              <nav class="flex flex-col gap-1">
                <button
                  v-for="cat in categoryList"
                  :key="cat"
                  @click="handleFilter('category', cat)"
                  class="flex items-center justify-between py-2.5 px-4 rounded-xl text-left transition-all"
                  :class="filterValue === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'"
                >
                  <span class="text-sm font-bold uppercase tracking-tight">{{ cat }}</span>
                </button>
              </nav>
            </div>

            <!-- 按品牌 -->
            <div>
              <h3 class="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 mb-6 border-t border-gray-100 pt-8">Brands</h3>
              <div class="grid grid-cols-2 gap-2">
                <button
                  v-for="brand in brandList"
                  :key="brand"
                  @click="handleFilter('brand', brand)"
                  class="py-2 px-3 rounded-lg border text-[10px] font-black transition-all uppercase text-center"
                  :class="filterValue === brand ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-gray-100 text-gray-400 hover:border-gray-300'"
                >
                  {{ brand }}
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- 右侧产品网格/列表 -->
        <main class="flex-1">
          <!-- 网格模式 -->
          <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 mb-16">
            <div 
              v-for="product in currentItems" 
              :key="product.id" 
              class="flex flex-col group bg-white border border-gray-100 p-6 rounded-[40px] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div class="aspect-[4/3] mb-8 flex items-center justify-center p-6 bg-gray-50 rounded-[30px] overflow-hidden relative">
                <img :src="product.img" :alt="product.name" class="max-h-full max-w-full object-contain group-hover:scale-110 transition duration-700" />
                <div class="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black uppercase text-blue-600 border border-blue-50">
                  {{ product.brand }}
                </div>
              </div>
              <div class="mb-4">
                <h3 class="text-lg font-black text-gray-900 leading-[1.2] h-14 overflow-hidden uppercase tracking-tighter">{{ product.name }}</h3>
              </div>
              <!-- 动态规格 -->
              <div class="space-y-2 mb-8 border-t border-gray-50 pt-6">
                <div v-for="(value, key) in product.specs" :key="key" class="flex justify-between items-start text-[11px] leading-tight pb-1 border-b border-gray-50/50 last:border-0">
                  <span class="text-gray-400 font-medium w-1/3 shrink-0 uppercase tracking-tighter">{{ key }}</span>
                  <span class="text-gray-900 font-bold text-right ml-4">{{ value }}</span>
                </div>
              </div>
              <div class="mt-auto">
                <div class="flex items-baseline gap-1 mb-6">
                  <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Est. Price:</span>
                  <span class="text-2xl font-black text-blue-600 tracking-tighter tabular-nums">{{ product.price }}</span>
                  <span v-if="product.price !== '咨询获取'" class="text-sm font-bold text-blue-600 ml-1">₽</span>
                </div>
                <button @click="$emit('openLead', product)" class="w-full bg-gray-900 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-600 transition-all">发起询价</button>
              </div>
            </div>
          </div>

          <!-- 列表模式 -->
          <div v-else class="space-y-4 mb-16">
            <div v-for="product in currentItems" :key="product.id" class="flex items-center gap-8 bg-white border border-gray-100 p-6 rounded-3xl hover:border-blue-600 transition-all">
              <div class="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center p-2"><img :src="product.img" class="max-h-full object-contain" /></div>
              <div class="flex-1">
                <div class="text-[10px] font-black text-blue-600 uppercase mb-1">{{ product.brand }}</div>
                <h3 class="text-lg font-black text-gray-900 uppercase tracking-tighter">{{ product.name }}</h3>
                <div class="flex gap-4 mt-2">
                  <div v-for="(v, k) in product.specs" :key="k" class="text-[10px] text-gray-500 bg-gray-50 px-2 py-1 rounded">
                    <span class="font-bold opacity-60 mr-1">{{ k }}:</span> {{ v }}
                  </div>
                </div>
              </div>
              <div class="text-right w-48">
                <div class="text-xl font-black text-blue-600 tabular-nums mb-2">{{ product.price }} <span v-if="product.price !== '咨询获取'" class="text-xs">₽</span></div>
                <button @click="$emit('openLead', product)" class="text-[10px] font-black uppercase bg-gray-900 text-white px-6 py-2.5 rounded-xl hover:bg-blue-600 transition-all">询价</button>
              </div>
            </div>
          </div>

          <!-- 分页控制器 -->
          <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 pt-10 border-t border-gray-100">
            <button 
              @click="handlePageChange(currentPage - 1)" 
              :disabled="currentPage === 1"
              class="p-3 rounded-xl border border-gray-100 text-gray-400 disabled:opacity-30 transition-all"
            >PREV</button>
            <div class="flex gap-1">
              <button
                v-for="i in totalPages"
                :key="i"
                @click="handlePageChange(i)"
                class="w-10 h-10 rounded-xl font-bold text-sm transition-all"
                :class="currentPage === i ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'"
              >{{ i }}</button>
            </div>
            <button 
              @click="handlePageChange(currentPage + 1)" 
              :disabled="currentPage === totalPages"
              class="p-3 rounded-xl border border-gray-100 text-gray-400 disabled:opacity-30 transition-all"
            >NEXT</button>
          </div>

          <!-- 空状态 -->
          <div v-if="filteredProducts.length === 0" class="py-40 text-center bg-gray-50 rounded-[60px] border-2 border-dashed border-gray-100 mt-4">
            <p class="text-gray-400 font-bold italic uppercase tracking-widest">No products found.</p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { siteData } from '../data/siteData.js';

const emit = defineEmits(['openLead']);
const products = siteData.products;

// 视图与分页状态
const viewMode = ref('grid');
const currentPage = ref(1);
const pageSize = 12;

// 筛选状态
const filterType = ref('all');
const filterValue = ref('All Hardware');

// 动态列表生成
const categoryList = computed(() => ['All Hardware', ...new Set(products.map(p => p.category))]);
const brandList = computed(() => [...new Set(products.map(p => p.brand).filter(Boolean))].sort());

// 执行过滤
const filteredProducts = computed(() => {
  return products.filter(p => {
    if (filterValue.value === 'All Hardware') return true;
    if (filterType.value === 'category') return p.category === filterValue.value;
    if (filterType.value === 'brand') return p.brand === filterValue.value;
    return true;
  });
});

// 计算分页数据
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / pageSize));
const currentItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredProducts.value.slice(start, start + pageSize);
});

// 监听筛选变化重置页码
watch([filterType, filterValue], () => {
  currentPage.value = 1;
});

const handleFilter = (type, value) => {
  filterType.value = type;
  filterValue.value = value;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handlePageChange = (page) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const resetFilter = () => {
  filterType.value = 'all';
  filterValue.value = 'All Hardware';
};
</script>

<style scoped>
button { cursor: pointer; }
</style>