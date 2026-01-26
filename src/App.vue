<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'

// 组件导入
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import LeadFormSection from './components/LeadFormSection.vue'

// 页面导入
import HomePage from './pages/HomePage.vue'
import CatalogPage from './pages/CatalogPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import AboutPage from './pages/AboutPage.vue'
// 1. 引入新页面
import SolutionsPage from './pages/SolutionsPage.vue' 

// 数据导入
import { siteData } from './data/siteData'

const currentView = ref('home')
const showLeadModal = ref(false)

// 2. 更新视图映射表 (ViewMap)
const viewMap = {
  'home': HomePage,           // 对应 import HomePage ...
  'catalog': CatalogPage,     // 对应 import CatalogPage ...
  'solutions': SolutionsPage, // 对应 import SolutionsPage ...
  'services': ServicesPage,   // 对应 import ServicesPage ...
  'about': AboutPage,         // 对应 import AboutPage ...
}

function go(view) {
  currentView.value = view
  window.location.hash = viewMap[view] || ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '')
  const targetView = Object.keys(viewMap).find(key => viewMap[key] === hash) || 'home'
  currentView.value = targetView
}

onMounted(() => {
  handleHashChange()
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

// 底部导航逻辑更新
function handleFooterNav(label) {
  // 简单映射，根据你的 i18n 这里的 label 可能是中文也可能是英文
  // 建议直接传 key，这里做演示简化处理
  go('contact') 
}

const showInlineLeadForm = computed(() =>
  // 3. 决定哪些页面底部显示大表单 (通常关于页面不需要)
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