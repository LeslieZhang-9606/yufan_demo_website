<template>
  <footer id="contacts" class="bg-gray-900 text-white mt-20 border-t border-gray-800">
    <div class="container-custom py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
        <div class="space-y-6">
          <div class="text-4xl font-black uppercase tracking-tighter">
            YUFAN <span class="text-blue-500 italic">TECH</span>
          </div>
          <p class="text-gray-400 max-w-sm text-sm leading-relaxed">
            {{ $t('footer.brand.description') }}
          </p>
        </div>

        <div class="text-left lg:text-right space-y-4">
          <div class="text-4xl font-black text-white tracking-tighter leading-none">+X XXX XXX XX XX</div>
          <div class="text-blue-400 font-bold tracking-widest uppercase text-sm">INFO@YOURDOMAIN.RU</div>
          <div class="flex lg:justify-end gap-3 mt-6">
            <button
              @click="emit('openLead')"
              class="bg-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-xs font-black uppercase transition-all shadow-xl shadow-blue-900/40"
            >
              {{ $t('footer.contact.telegramButton') }}
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-t border-gray-800 pt-16">
        <div v-for="col in footerCols" :key="col.title" class="lg:col-span-3">
          <h4 class="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">{{ col.title }}</h4>
          <ul class="space-y-4">
            <li v-for="link in col.links" :key="link">
              <button
                @click="emit('navigate', link)"
                class="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors text-left uppercase"
              >
                {{ link }}
              </button>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-6">
          <h4 class="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">
            {{ $t('footer.channels.title') }}
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="ch in channels"
              :key="ch.name"
              class="bg-gray-800/40 border border-gray-800 p-4 rounded-2xl flex items-center justify-between hover:border-blue-500 hover:bg-gray-800 transition-all cursor-pointer group"
            >
              <div>
                <div class="text-[10px] font-black uppercase text-gray-200 tracking-widest">
                  {{ ch.name }}
                </div>
                <div class="text-[9px] text-gray-500 uppercase mt-1 italic">
                  {{ ch.subtitle }}
                </div>
              </div>
              <div
                class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors"
              >
                <span class="text-[10px] text-white">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-20 pt-12 border-t border-gray-800 flex flex-col lg:flex-row justify-between gap-10 text-[11px] text-gray-500 leading-relaxed uppercase tracking-wider"
      >
        <div class="space-y-2">
          <p class="text-gray-400 font-bold italic">
            {{ $t('footer.company.name') }}
          </p>
          <p>{{ $t('footer.company.legalAddress') }}</p>
          <p>{{ $t('footer.company.actualAddress') }}</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          <div class="flex flex-col border-l border-gray-800 pl-4">
            <span class="text-gray-600 mb-1">{{ $t('footer.company.innLabel') }}</span>
            <span class="font-bold text-gray-300 tabular-nums">XXXXXXXXXX</span>
          </div>
          <div class="flex flex-col border-l border-gray-800 pl-4">
            <span class="text-gray-600 mb-1">{{ $t('footer.company.kppLabel') }}</span>
            <span class="font-bold text-gray-300 tabular-nums">XXXXXXXXX</span>
          </div>
          <div class="flex flex-col border-l border-gray-800 pl-4">
            <span class="text-gray-600 mb-1">{{ $t('footer.company.ogrnLabel') }}</span>
            <span class="font-bold text-gray-300 tabular-nums">XXXXXXXXXXXXX</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-black py-8 border-t border-gray-800/50">
      <div class="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex items-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <div class="h-4 w-24 bg-white/20 rounded-sm"></div>
          <div class="h-4 w-24 bg-white/20 rounded-sm flex items-center justify-center text-[7px] font-black">
            PARTNER LOGO
          </div>
          <div class="h-4 w-24 bg-white/20 rounded-sm"></div>
        </div>
        <div class="text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em] text-center">
          {{ $t('footer.legalNotice') }}
        </div>
      </div>
    </div>

    <div class="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
      <div
        class="bg-white rounded-3xl p-4 shadow-2xl flex items-center gap-4 max-w-xs border border-blue-50 animate-bounce-subtle"
      >
        <div class="w-10 h-10 rounded-full bg-blue-100 overflow-hidden shrink-0 border-2 border-white">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Daria" alt="Assistant" />
        </div>
        <div>
          <div class="text-[10px] font-black text-gray-900 uppercase">
            {{ $t('footer.assistant.role') }}
          </div>
          <div class="text-[10px] text-gray-500 leading-tight">
            {{ $t('footer.assistant.greeting') }}
          </div>
        </div>
      </div>
      <button
        @click="emit('openLead')"
        class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 shadow-blue-400"
      >
        <span class="text-2xl">💬</span>
      </button>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['navigate', 'openLead'])

defineProps({
  footerCols: { type: Array, default: () => [] },
})

const { t } = useI18n()

const channels = computed(() => [
  {
    name: t('footer.channels.stock.name'),
    subtitle: t('footer.channels.stock.subtitle'),
  },
  {
    name: t('footer.channels.news.name'),
    subtitle: t('footer.channels.news.subtitle'),
  },
  {
    name: t('footer.channels.contact.name'),
    subtitle: t('footer.channels.contact.subtitle'),
  },
  {
    name: t('footer.channels.support.name'),
    subtitle: t('footer.channels.support.subtitle'),
  },
])
</script>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}
.animate-bounce-subtle {
  animation: bounce-subtle 4s infinite ease-in-out;
}
@keyframes bounce-subtle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
