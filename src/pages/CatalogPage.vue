<template>
  <div class="bg-white min-h-screen font-sans selection:bg-blue-100">
    <div class="max-w-[1440px] mx-auto px-6 py-12 lg:py-16">
      
      <header class="mb-12 border-b border-gray-100 pb-8">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 class="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-3">
              {{ $t('catalogPage.header.subTitle') }}
            </h1>
            <h2 class="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter uppercase">
              {{ $t('catalogPage.header.mainTitle') }}
            </h2>
          </div>
          <div class="text-right">
            <p class="text-gray-400 text-xs max-w-sm leading-relaxed italic mb-4 ml-auto">
              {{ $t('catalogPage.header.description') }}
            </p>
            <div class="flex items-center justify-end gap-4">
              
              <button 
                @click="showMobileFilter = true"
                class="lg:hidden px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-bold uppercase shadow-md hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                <span>{{ $t('catalogPage.filter.title') || 'Filter' }}</span>
              </button>
              <div class="flex bg-gray-100 p-1 rounded-lg">
                <button 
                  @click="viewMode = 'grid'" 
                  :class="viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-600'"
                  class="p-2 rounded-md transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </button>
                <button 
                  @click="viewMode = 'list'" 
                  :class="viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-600'"
                  class="p-2 rounded-md transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                </button>
              </div>
              <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
                {{ $t('catalogPage.header.synced', { count: filteredProducts.length }) }}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row gap-12">
        
        <div 
          v-if="showMobileFilter" 
          @click="showMobileFilter = false"
          class="fixed inset-0 bg-gray-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
        ></div>

        <aside 
          class="fixed inset-y-0 left-0 z-50 w-[280px] bg-white p-6 shadow-2xl transform transition-transform duration-300 ease-in-out lg:static lg:w-64 lg:p-0 lg:shadow-none lg:bg-transparent lg:translate-x-0 shrink-0 overflow-y-auto"
          :class="showMobileFilter ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="flex items-center justify-between mb-8 lg:hidden pb-4 border-b border-gray-100">
            <span class="text-xs font-black uppercase tracking-widest text-gray-900">
              {{ $t('catalogPage.filter.title') || 'Filters' }}
            </span>
            <button @click="showMobileFilter = false" class="p-2 -mr-2 text-gray-400 hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div class="lg:sticky lg:top-24 space-y-10">
            
            <div>
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  {{ $t('catalogPage.filter.categories') }}
                </h3>
                <button @click="resetFilter" v-if="filterType !== 'all'" class="text-[10px] text-blue-600 font-bold hover:underline">
                  {{ $t('catalogPage.filter.reset') }}
                </button>
              </div>
              
              <div class="space-y-1">
                <button
                  @click="handleFilter('category', 'All Hardware')"
                  class="w-full flex items-center justify-between py-2 px-3 rounded-lg text-left transition-all duration-200"
                  :class="(filterType === 'all' || (filterType === 'category' && filterValue === 'All Hardware')) ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'"
                >
                  <span class="text-xs font-bold uppercase">{{ $t('catalogPage.filter.allHardware') }}</span>
                </button>

                <button
                  v-for="cat in uniqueCategories"
                  :key="cat"
                  @click="handleFilter('category', cat)"
                  class="w-full flex items-center justify-between py-2 px-3 rounded-lg text-left transition-all duration-200"
                  :class="(filterType === 'category' && filterValue === cat) ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'"
                >
                  <span class="text-xs font-medium uppercase truncate max-w-[160px]" :title="resolveCategory(cat)">
                    {{ resolveCategory(cat) }}
                  </span>
                </button>
              </div>
            </div>

            <div>
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 pt-6 border-t border-gray-100">
                {{ $t('catalogPage.filter.brands') }}
              </h3>
              <div class="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                <button
                  v-for="brand in brandList"
                  :key="brand"
                  @click="handleFilter('brand', brand)"
                  class="py-1.5 px-2 rounded border text-[9px] font-bold uppercase transition-all truncate hover:border-gray-300"
                  :class="(filterType === 'brand' && filterValue === brand) ? 'border-blue-600 bg-blue-600 text-white shadow-md' : 'border-gray-100 text-gray-500 bg-white'"
                  :title="brand"
                >
                  {{ brand }}
                </button>
              </div>
            </div>

          </div>
        </aside>

        <main class="flex-1 min-w-0">
          
          <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            <div 
              v-for="product in currentItems" 
              :key="product.id"
              class="group flex flex-col bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
            >
              <div class="aspect-[4/3] p-4 flex items-center justify-center bg-gray-50/50 rounded-t-2xl relative overflow-hidden">
                <img 
                  v-if="product.img" 
                  :src="product.img.trim().startsWith('http') ? product.img.trim() : (basePath + '/' + product.img.trim()).replace(/\/+/g, '/')" 
                  :alt="product.name" 
                  loading="lazy"
                  class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                />
                <span v-else class="text-4xl text-gray-200 font-black">{{ product.brand ? product.brand[0] : '?' }}</span>
                
                <div class="absolute top-3 left-3">
                  <span class="bg-white/90 backdrop-blur px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-800 rounded border border-gray-100 shadow-sm">
                    {{ product.brand }}
                  </span>
                </div>
              </div>

              <div class="p-4 flex flex-col flex-1">
                <div class="mb-3">
                  <h3 class="text-sm font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[2.5em]" :title="product.name">
                    {{ formatProductName(product) }}
                  </h3>
                </div>

                <div class="space-y-1 mb-4">
                  <div v-for="(val, key, idx) in product.specs" :key="key" v-show="idx < 2" class="flex justify-between items-center text-[10px] border-b border-gray-50 pb-1 last:border-0">
                    <span class="text-gray-400 font-medium uppercase truncate w-1/3">{{ key }}</span>
                    <span class="text-gray-700 font-bold truncate w-2/3 text-right">{{ val }}</span>
                  </div>
                </div>

                <div class="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between gap-2">
                  <div class="flex flex-col">
                    <span class="text-[9px] font-bold text-gray-400 uppercase">
                      {{ $t('catalogPage.product.estPrice') }}
                    </span>
                    <span class="text-xs font-black text-gray-900 tabular-nums">
                      {{ $t('catalogPage.product.priceOnRequest') }}
                    </span>
                  </div>
                  <button 
                    @click="$emit('openLead', product)" 
                    class="px-3 py-1.5 bg-gray-900 text-white text-[10px] font-bold uppercase rounded-md shadow-md hover:bg-blue-600 transition-colors whitespace-nowrap"
                  >
                    {{ $t('catalogPage.product.inquireShort') }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="space-y-3 mb-12">
            <div 
              v-for="product in currentItems" 
              :key="product.id"
              class="group flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-xl border border-gray-100 transition-all hover:shadow-lg hover:border-blue-200"
            >
              <div class="w-full sm:w-20 h-40 sm:h-20 shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                 <img v-if="product.img" :src="product.img.trim().startsWith('http') ? product.img.trim() : (basePath + '/' + product.img.trim()).replace(/\/+/g, '/')" class="max-w-full max-h-full object-contain"/>
              </div>
              
              <div class="flex-1 min-w-0 grid grid-cols-12 gap-4 sm:gap-6 items-center w-full">
                <div class="col-span-12 sm:col-span-4">
                   <div class="text-[10px] font-bold text-blue-600 uppercase mb-0.5">{{ product.brand }}</div>
                   <h3 class="text-base font-bold text-gray-900 truncate">{{ formatProductName(product) }}</h3>
                </div>
                
                <div class="col-span-12 sm:col-span-4 flex flex-wrap gap-x-4 gap-y-1">
                   <div v-for="(val, key, idx) in product.specs" :key="key" v-show="idx < 3" class="flex items-center gap-1 text-[10px]">
                      <span class="text-gray-400 uppercase font-medium">{{ key }}:</span>
                      <span class="text-gray-700 font-bold truncate max-w-[80px]">{{ val }}</span>
                   </div>
                </div>

                <div class="col-span-12 sm:col-span-4 flex items-center justify-between sm:justify-end gap-4">
                  <span class="text-xs font-bold text-gray-500">
                    {{ $t('catalogPage.product.priceOnRequest') }}
                  </span>
                  <button 
                    @click="$emit('openLead', product)" 
                    class="px-5 py-2 bg-gray-900 text-white text-xs font-bold uppercase rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
                  >
                    {{ $t('catalogPage.product.inquire') }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="totalPages > 1" class="border-t border-gray-100 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest order-2 lg:order-1">
               {{ $t('catalogPage.pagination.showing', { 
                  start: (currentPage - 1) * pageSize + 1, 
                  end: Math.min(currentPage * pageSize, filteredProducts.length), 
                  total: filteredProducts.length 
               }) }}
            </span>
            
            <div class="flex items-center gap-6 order-1 lg:order-2">
              <div class="flex items-center gap-1.5">
                <button @click="handlePageChange(currentPage - 1)" :disabled="currentPage === 1" class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:border-blue-600 disabled:opacity-30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                <template v-for="(page, index) in visiblePages" :key="index">
                  <span v-if="page === '...'" class="w-8 h-8 flex items-center justify-center text-gray-400 text-xs">...</span>
                  <button
                    v-else
                    @click="handlePageChange(page)"
                    class="w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all"
                    :class="currentPage === page ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'"
                  >
                    {{ page }}
                  </button>
                </template>

                <button @click="handlePageChange(currentPage + 1)" :disabled="currentPage === totalPages" class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:border-blue-600 disabled:opacity-30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>

              <div class="hidden sm:flex items-center gap-2 pl-6 border-l border-gray-100 h-8">
                <input 
                  v-model.number="jumpPage" 
                  type="number" 
                  min="1" 
                  :max="totalPages"
                  placeholder="Go"
                  class="w-12 h-8 rounded-lg border border-gray-200 text-center text-xs font-bold focus:border-blue-600 focus:ring-0 outline-none transition-all placeholder:text-gray-300"
                  @keyup.enter="handleJump"
                />
                <button 
                  @click="handleJump"
                  class="h-8 px-3 rounded-lg bg-gray-50 text-gray-500 text-[10px] font-black uppercase hover:bg-gray-900 hover:text-white transition-all"
                >
                  Go
                </button>
              </div>
            </div>

          </div>
          
          <div v-if="filteredProducts.length === 0" class="py-32 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div class="text-4xl mb-4">🔍</div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('catalogPage.empty.title') }}</h3>
            <button @click="resetFilter" class="mt-4 px-6 py-2 bg-blue-600 text-white text-xs font-bold uppercase rounded-lg shadow-lg hover:bg-blue-700 transition-all">
              {{ $t('catalogPage.empty.reset') }}
            </button>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { siteData } from '../data/siteData.js'; 

const { t, te } = useI18n();
const emit = defineEmits(['openLead']);

const basePath = import.meta.env.BASE_URL

const products = siteData.products || [];

const viewMode = ref('grid');
const currentPage = ref(1);
const pageSize = 12;
const filterType = ref('all');
const filterValue = ref('All Hardware');
const jumpPage = ref('');
const showMobileFilter = ref(false); 

const brandList = computed(() => {
  const brands = products.map(p => p.brand).filter(b => b && b.trim() !== '');
  return [...new Set(brands)].sort();
});

const uniqueCategories = computed(() => {
  const cats = products.map(p => p.category).filter(c => c && c.trim() !== '');
  return [...new Set(cats)].sort();
});

const resolveCategory = (catRaw) => {
  if (!catRaw || catRaw === 'All Hardware') return t('catalogPage.filter.allHardware');
  const rawLower = catRaw.toLowerCase();
  const i18nKey = `catalogPage.categoryMap.${rawLower}`;
  return te(i18nKey) ? t(i18nKey) : catRaw;
};

// ✅ 修改后的函数：不再裁掉品牌，直接返回完整 name
const formatProductName = (product) => {
  return product && product.name ? product.name : '';
};

const filteredProducts = computed(() => {
  return products.filter(p => {
    if (filterType.value === 'all') return true;
    if (filterType.value === 'category') {
       if (filterValue.value === 'All Hardware') return true;
       return p.category === filterValue.value;
    }
    if (filterType.value === 'brand') return p.brand === filterValue.value;
    return true;
  });
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / pageSize));

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const delta = 1; 
  const range = [];
  const rangeWithDots = [];
  let l;
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }
  for (let i of range) {
    if (l) {
      if (i - l === 2) rangeWithDots.push(l + 1);
      else if (i - l !== 1) rangeWithDots.push('...');
    }
    rangeWithDots.push(i);
    l = i;
  }
  return rangeWithDots;
});

const currentItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredProducts.value.slice(start, start + pageSize);
});

watch([filterType, filterValue], () => { 
  currentPage.value = 1; 
  showMobileFilter.value = false;
});

const handleJump = () => {
  const p = parseInt(jumpPage.value);
  if (!isNaN(p) && p >= 1 && p <= totalPages.value) {
    currentPage.value = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    jumpPage.value = ''; 
  } else {
    jumpPage.value = '';
  }
};

const handleFilter = (type, value) => {
  if (type === 'brand' && filterType.value === 'brand' && filterValue.value === value) {
    resetFilter();
    return;
  }
  filterType.value = type;
  filterValue.value = value;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handlePageChange = (page) => {
  if (page === '...') return;
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const resetFilter = () => {
  filterType.value = 'all';
  filterValue.value = 'All Hardware';
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e5e7eb; border-radius: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #d1d5db; }

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>
