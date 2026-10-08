<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue' // 增加了 watch
import { useI18n } from 'vue-i18n' // 引入 i18n 工具

// 组件导入
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import LeadFormSection from './components/LeadFormSection.vue'

// 页面导入
import HomePage from './pages/HomePage.vue'
import CatalogPage from './pages/CatalogPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import AboutPage from './pages/AboutPage.vue'
import SolutionsPage from './pages/SolutionsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import WarrantyPage from './pages/WarrantyPage.vue'


// 数据导入
import { siteData } from './data/siteData'
import { ensureProductsLoaded, useProducts } from './data/productService'

const { t, locale } = useI18n()
const currentView = ref('home')
const currentProductId = ref(null)  // 当前详情页展示的产品 ID
const showLeadModal = ref(false)
const productsReady = ref(false)
const productsError = ref('')

const { products } = useProducts()

const viewMap = {
  'home': HomePage,
  'catalog': CatalogPage,
  'solutions': SolutionsPage,
  'services': ServicesPage,
  'about': AboutPage,
  'product': ProductDetailPage,   // 新增
  'warranty': WarrantyPage,       // 保修查询
}

// --- 新增：动态标题逻辑 ---

/**
 * 更新网页标题的函数
 */
function updatePageTitle() {
  const brand = 'YUFAN GROUP'
  // 根据当前视图 key 去 i18n 找翻译 (例如 menu.catalog)
  const pageKey = `menu.${currentView.value}`
  const translatedName = t(pageKey)

  // 如果翻译后的内容和 key 一样，说明没找到翻译，只显示品牌名
  if (translatedName === pageKey || currentView.value === 'home') {
    document.title = brand
  } else {
    document.title = `${translatedName} | ${brand}`
  }
}

// 监听视图切换，自动改标题
watch(currentView, () => {
  updatePageTitle()
})

// 监听语言切换，自动改标题
watch(locale, () => {
  updatePageTitle()
})

// 路径路由：对外使用 /warranty、/catalog 等可印刷地址。

function go(view, payload) {
  currentView.value = view
  let nextPath = view === 'home' ? '/' : `/${view}`
  if (view === 'product' && payload?.id) {
    currentProductId.value = payload.id
    nextPath = `/product/${payload.id}`
  } else {
    currentProductId.value = null
  }
  window.history.pushState({}, '', nextPath)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleRouteChange() {
  const raw = window.location.pathname.replace(/^\/+|\/+$/g, '')

  if (!raw) {
    currentView.value = 'home'
    currentProductId.value = null
    return
  }

  const [view, param] = raw.split('/')

  if (view === 'product' && param) {
    const id = Number(param)
    const exists = products.value.some(p => p.id === id)

    if (exists) {
      currentView.value = 'product'
      currentProductId.value = id
      return
    } else {
      currentView.value = 'catalog'
      currentProductId.value = null
      window.history.replaceState({}, '', '/catalog')
      return
    }
  }

  if (viewMap[view]) {
    currentView.value = view
    currentProductId.value = null
  } else {
    currentView.value = 'home'
    currentProductId.value = null
    window.history.replaceState({}, '', '/')
  }
}


onMounted(async () => {
  // 产品数据就绪后再解析初始路径，避免产品深链提前判定为不存在。
  try {
    await ensureProductsLoaded()
    productsReady.value = true
  } catch (err) {
    productsError.value = err?.message || String(err)
    productsReady.value = true // 放行, 页面显示空/错误由各页兜底
  }
  handleRouteChange()
  updatePageTitle() // 初始化时执行一次标题设置
  window.addEventListener('popstate', handleRouteChange)
})

onUnmounted(() => {
  window.removeEventListener('popstate', handleRouteChange)
})

function openLeadModal() {
  showLeadModal.value = true
}

function closeLeadModal() {
  showLeadModal.value = false
}

function handleFooterNav(view) {
  go(view)
}

const showInlineLeadForm = computed(() =>
  ['home', 'catalog', 'services', 'solutions'].includes(currentView.value)
)

function submitLeadDemo() {
  closeLeadModal()
}
</script>

<template>
  <div v-cloak class="min-h-screen bg-white">
    <SiteHeader
      :currentView="currentView"
      @navigate="go" 
    />

<main>
  <!-- 产品数据加载中(仅首屏一次, 本地/线上均毫秒级) -->
  <div v-if="!productsReady" class="flex items-center justify-center py-40">
    <div class="flex flex-col items-center gap-3 text-gray-400">
      <div class="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <span class="text-xs tracking-widest uppercase">{{ $t('common.loading') }}</span>
    </div>
  </div>

  <!-- 首页 -->
  <HomePage
    v-else-if="currentView === 'home'"
    :vps="siteData.vps"
    :quickCats="siteData.quickCats"
    :services="siteData.services"
    @goCatalog="go('catalog')"
    @openLead="openLeadModal"
  />

  <!-- 产品目录 -->
  <CatalogPage
    v-else-if="currentView === 'catalog'"
    :products="products"
    @openLead="openLeadModal"
    @openProduct="id => go('product', { id })"
  />

  <!-- 解决方案 -->
  <SolutionsPage
    v-else-if="currentView === 'solutions'"
    @openLead="openLeadModal"
  />

  <!-- 服务 -->
  <ServicesPage
    v-else-if="currentView === 'services'"
    @openLead="openLeadModal"
  />

  <!-- 关于我们 -->
  <AboutPage
    v-else-if="currentView === 'about'"
  />

  <!-- 产品详情页 -->
  <ProductDetailPage
    v-else-if="currentView === 'product'"
    :products="products"
    :productId="currentProductId"
    @openLead="openLeadModal"
    @backToCatalog="go('catalog')"
  />

  <!-- 保修查询 -->
  <WarrantyPage
    v-else-if="currentView === 'warranty'"
  />
</main>


    <LeadFormSection
      v-if="showInlineLeadForm"
      @openModal="openLeadModal"
    />

    <SiteFooter
      @navigate="handleFooterNav"
      @openLead="openLeadModal"
    />
    
    <Transition name="fade">
      <div v-if="showLeadModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
         <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="closeLeadModal" />
         <div class="relative w-full max-w-3xl bg-white rounded-3xl p-10">
            <button @click="closeLeadModal" class="absolute top-4 right-4">✕</button>
            <h2 class="text-2xl font-bold mb-4">{{ $t('leadForm.modalHeading') }}</h2>
            <button @click="submitLeadDemo" class="bg-blue-600 text-white px-6 py-3 rounded-xl">{{ $t('leadForm.submit') }}</button>
         </div>
      </div>
    </Transition>
  </div>
</template>
