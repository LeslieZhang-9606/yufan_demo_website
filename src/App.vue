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

// 数据导入
import { siteData } from './data/siteData'

const { t, locale } = useI18n()
const currentView = ref('home')
const showLeadModal = ref(false)

const viewMap = {
  'home': HomePage,
  'catalog': CatalogPage,
  'solutions': SolutionsPage,
  'services': ServicesPage,
  'about': AboutPage,
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

// --- 原有路由逻辑 ---

function go(view) {
  currentView.value = view
  window.location.hash = view
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '')
  if (viewMap[hash]) {
    currentView.value = hash
  } else {
    currentView.value = 'home'
  }
}

onMounted(() => {
  handleHashChange()
  updatePageTitle() // 初始化时执行一次标题设置
  window.addEventListener('hashchange', handleHashChange)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange)
})

function openLeadModal() {
  showLeadModal.value = true
}

function closeLeadModal() {
  showLeadModal.value = false
}

function handleFooterNav(label) {
  go('contact') 
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
      <HomePage
        v-if="currentView === 'home'"
        :vps="siteData.vps"
        :quickCats="siteData.quickCats"
        :services="siteData.services"
        @goCatalog="go('catalog')"
        @openLead="openLeadModal"
      />

      <CatalogPage
        v-else-if="currentView === 'catalog'"
        :products="siteData.products"
        @openLead="openLeadModal"
      />
      
      <SolutionsPage
        v-else-if="currentView === 'solutions'"
        @openLead="openLeadModal"
      />

      <ServicesPage
        v-else-if="currentView === 'services'"
        @openLead="openLeadModal"
      />

      <AboutPage v-else-if="currentView === 'about'" />
      
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