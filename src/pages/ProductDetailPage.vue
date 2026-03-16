<template>
  <div class="bg-white min-h-screen font-sans selection:bg-blue-100 py-12 lg:py-16 px-6">
    <div class="max-w-[1024px] mx-auto">
      <button 
        @click="$emit('backToCatalog')" 
        class="mb-8 flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        {{ $t('common.back') || 'Back' }}
      </button>

      <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-gray-50 rounded-2xl p-8 flex items-center justify-center border border-gray-100">
          <img 
            v-if="product.img" 
            :src="product.img.trim().startsWith('http') ? product.img.trim() : (basePath + '/' + product.img.trim()).replace(/\/+/g, '/')" 
            :alt="product.name" 
            class="max-w-full max-h-[400px] object-contain"
          />
          <span v-else class="text-6xl text-gray-200 font-black">{{ product.brand ? product.brand[0] : '?' }}</span>
        </div>

        <div class="flex flex-col">
          <span class="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">{{ product.brand }}</span>
          <h1 class="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">{{ product.name }}</h1>

          <div class="mb-10 pb-10 border-b border-gray-100">
            <p class="text-xs font-bold text-gray-400 uppercase mb-3">
              {{ $t('catalogPage.product.estPrice') || 'Estimated Price' }}
            </p>
            <div class="flex items-center gap-6">
              <span class="text-2xl font-black text-gray-900">
                {{ $t('catalogPage.product.priceOnRequest') || 'Price on Request' }}
              </span>
              <button 
                @click="$emit('openLead', product)" 
                class="px-6 py-3 bg-gray-900 text-white text-sm font-bold uppercase rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                {{ $t('catalogPage.product.inquire') || 'Inquire Now' }}
              </button>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">
              {{ $t('catalogPage.product.specs') || 'Specifications' }}
            </h3>
            <div class="space-y-3">
              <div v-for="(spec, index) in specsList" :key="index" class="flex justify-between items-start border-b border-gray-50 pb-3 last:border-0">
                <span class="text-xs font-medium text-gray-500 uppercase w-1/3 pt-0.5">{{ spec.label }}</span>
                <span class="text-sm font-bold text-gray-900 w-2/3 text-right">{{ spec.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-900">Product not found</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  productId: {
    type: [Number, String],
    required: true,
  },
})

const emit = defineEmits(['openLead', 'backToCatalog'])

const basePath = import.meta.env.BASE_URL

const product = computed(() =>
  props.products.find(p => p.id === props.productId)
)

const specsList = computed(() => {
  if (!product.value?.specs) return []
  return Object.entries(product.value.specs).map(([rawKey, value]) => {
    const label = rawKey
      .replace(/_/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
    return { label, value }
  })
})
</script>