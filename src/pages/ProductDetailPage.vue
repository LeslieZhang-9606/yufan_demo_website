<script setup>
import { computed } from 'vue'

// 不要再从 vue-router 或 @/data 导入任何东西
// 通过 props 接收 App.vue 传进来的数据

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['openLead', 'backToCatalog'])

// 当前语言先写死中文，之后可以接入 vue-i18n 的 locale
const currentLang = 'cn'

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
