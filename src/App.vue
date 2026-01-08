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
import ContactPage from './pages/ContactPage.vue'

// 数据导入
import { siteData } from './data/siteData'

// --- 状态管理 ---
const currentView = ref('home')
const showLeadModal = ref(false)

// 视图与 URL Hash 的映射关系
const viewMap = {
  'home': 'home',
  'catalog': 'catalog',
  'services': 'services',
  'about': 'about',
  'contact': 'contact'
}

// --- 核心路由跳转逻辑 ---

/**
 * 统一跳转函数
 * @param {string} view 目标视图名称
 */
function go(view) {
  currentView.value = view
  // 同步更新 URL Hash，这样导航栏的高亮状态和浏览器历史记录才会正确
  window.location.hash = viewMap[view] || ''
  scrollTop()
}

/**
 * 监听 URL Hash 变化（处理用户手动输入 URL、浏览器后退/前进）
 */
function handleHashChange() {
  const hash = window.location.hash.replace('#', '')
  // 根据 hash 查找对应的 view，找不到则默认回 home
  const targetView = Object.keys(viewMap).find(key => viewMap[key] === hash) || 'home'
  currentView.value = targetView
}

// 生命周期：初始化与销毁监听
onMounted(() => {
  // 1. 初始加载时，根据当前 URL 解析视图
  handleHashChange()
  // 2. 监听后续的 hash 变化
  window.addEventListener('hashchange', handleHashChange)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange)
})

// --- 其他辅助逻辑 ---

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function openLeadModal() {
  showLeadModal.value = true
}

function closeLeadModal() {
  showLeadModal.value = false
}

// 底部导航点击处理
function handleFooterNav(label) {
  const map = {
    '产品目录': 'catalog',
    '供应链代采': 'services',
    '物流查询': 'services',
    '技术工单': 'services',
    '保修政策': 'services',
    '关于我们': 'about',
    '联系我们': 'contact',
  }
  if (map[label]) {
    go(map[label])
  } else {
    scrollTop()
  }
}

// 判断是否显示大表单区
const showInlineLeadForm = computed(() =>
  ['home', 'catalog', 'services'].includes(currentView.value)
)

function submitLeadDemo() {
  console.log('[LeadModal] submit demo')
  closeLeadModal()
}
</script>

<template>
  <div v-cloak class="min-h-screen bg-white">
    <SiteHeader
      :currentView="currentView"
      @goHome="go('home')"
      @goCatalog="go('catalog')"
      @goServices="go('services')"
      @goAbout="go('about')"
      @goContact="go('contact')"
      @logoClick="go('home')"
      @openLead="openLeadModal"
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

      <ServicesPage
        v-else-if="currentView === 'services'"
        @openLead="openLeadModal"
      />

      <AboutPage v-else-if="currentView === 'about'" />
      
      <ContactPage v-else-if="currentView === 'contact'" />
    </main>

    <LeadFormSection
      v-if="showInlineLeadForm"
      @openModal="openLeadModal"
    />

    <SiteFooter
      :footerCols="siteData.footerCols"
      @navigate="handleFooterNav"
      @legal="scrollTop"
      @openLead="openLeadModal"
    />

    <Transition name="fade">
      <div
        v-if="showLeadModal"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="closeLeadModal" />

        <div class="relative w-full max-w-3xl animate-in fade-in zoom-in duration-300">
          <div class="rounded-[40px] border border-gray-100 bg-white shadow-2xl overflow-hidden">
            <div class="flex items-center justify-between px-8 py-6 border-b border-gray-100">
              <div>
                <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-600">
                  快速咨询
                </div>
                <div class="mt-2 text-2xl font-black tracking-tight text-gray-900">
                  获取报价与交付方案
                </div>
              </div>
              <button
                class="h-10 w-10 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition"
                @click="closeLeadModal"
              >
                ✕
              </button>
            </div>

            <div class="p-8 lg:p-10">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <input class="h-14 rounded-2xl border border-gray-100 bg-gray-50 px-6 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="姓名 / 公司" />
                <input class="h-14 rounded-2xl border border-gray-100 bg-gray-50 px-6 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="电话 / Telegram" />
                <input class="h-14 rounded-2xl border border-gray-100 bg-gray-50 px-6 lg:col-span-2 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="邮箱" />
                <textarea class="min-h-[140px] rounded-3xl border border-gray-100 bg-gray-50 px-6 py-4 lg:col-span-2 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="需求说明（设备型号、数量、交付地点等）"></textarea>
              </div>

              <button
                class="mt-8 w-full rounded-2xl bg-blue-600 px-6 py-5 text-[11px] font-black uppercase tracking-widest text-white hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-[0.98]"
                @click="submitLeadDemo"
              >
                发送需求
              </button>

              <div class="mt-6 text-center text-[10px] uppercase tracking-widest text-gray-400">
                我们通常会在 2 小时内为您提供初步报价
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
/* 简单的淡入淡出过渡 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

[v-cloak] {
  display: none;
}

/* 统一字体风格 */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>