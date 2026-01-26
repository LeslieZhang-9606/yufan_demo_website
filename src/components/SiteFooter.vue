<template>
  <footer class="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/5 font-sans selection:bg-blue-500">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        
        <div class="lg:col-span-4 space-y-8">
          <div class="flex flex-col leading-none">
            <span class="text-3xl font-black tracking-tighter uppercase">
              YUFAN <span class="text-blue-600 italic">GROUP</span>
            </span>
            <span class="text-[9px] text-gray-500 uppercase tracking-[0.4em] mt-2 font-bold">
              Global AI Infrastructure
            </span>
          </div>
          <p class="text-gray-500 text-xs leading-relaxed max-w-xs">
            {{ $t('siteFooter.brand.description') }}
          </p>
        </div>

        <div class="lg:col-span-4 grid grid-cols-2 gap-8">
          <div class="space-y-4">
            <h4 class="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-white/5 pb-2">
              {{ $t('siteFooter.sections.hardware') }}
            </h4>
            <ul class="space-y-2 text-[11px] font-bold text-gray-500 uppercase">
              <li><a href="#catalog" class="hover:text-blue-500 transition-colors">GPU Servers</a></li>
              <li><a href="#catalog" class="hover:text-blue-500 transition-colors">Networking</a></li>
              <li><a href="#catalog" class="hover:text-blue-500 transition-colors">Workstations</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-white/5 pb-2">
              {{ $t('siteFooter.sections.solutions') }}
            </h4>
            <ul class="space-y-2 text-[11px] font-bold text-gray-500 uppercase">
              <li><a href="#solutions" class="hover:text-blue-500 transition-colors">Leasing</a></li>
              <li><a href="#solutions" class="hover:text-blue-500 transition-colors">Maintenance</a></li>
              <li><a href="#solutions" class="hover:text-blue-500 transition-colors">Custom R&D</a></li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-4 lg:text-right flex flex-col lg:items-end">
          <div class="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4">
            Representative in Russia & CIS
          </div>
          <a :href="'tel:' + $t('siteFooter.contact.phone')" class="text-3xl font-black hover:text-blue-500 transition-colors tabular-nums tracking-tighter">
            {{ $t('siteFooter.contact.phone') }}
          </a>
          <div class="mt-2 text-sm font-bold text-gray-400 uppercase tracking-widest">
            {{ $t('siteFooter.contact.email') }}
          </div>
          <div class="mt-1 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            Director: {{ $t('siteFooter.company.director') }} | Manager: {{ $t('siteFooter.contact.person') }}
          </div>
          
          <a
            href="https://t.me/+79336739973"
            target="_blank"
            class="mt-8 px-10 py-3 bg-blue-600 hover:bg-white hover:text-blue-600 text-[10px] font-black uppercase tracking-widest transition-all rounded-full shadow-lg"
          >
            {{ $t('siteFooter.contact.telegramButton') }}
          </a>
        </div>
      </div>

      <div class="pt-10 border-t border-white/5">
        <div class="flex flex-col lg:flex-row justify-between gap-10 items-start">
          
          <div class="space-y-2 lg:w-2/3">
            <div class="text-[10px] font-black text-gray-400 uppercase italic mb-3">Юридические данные (Legal Info)</div>
            <div class="text-[10px] text-gray-600 uppercase tracking-wider space-y-1 font-medium">
              <p class="text-gray-300 font-bold text-sm">{{ $t('siteFooter.company.name') }}</p>
              <p>{{ $t('siteFooter.company.address') }}</p>
              <div class="flex flex-wrap gap-x-6 gap-y-1 font-mono">
                <span>ИНН: {{ $t('siteFooter.company.inn') }}</span>
                <span>КПП: {{ $t('siteFooter.company.kpp') }}</span>
                <span>ОГРН: {{ $t('siteFooter.company.ogrn') }}</span>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 lg:text-right space-y-4">
            <p class="text-[9px] text-gray-700 leading-relaxed uppercase tracking-widest">
              {{ $t('siteFooter.legalNotice') }}
            </p>
            <div class="flex lg:justify-end gap-6 text-[9px] font-black text-gray-500 uppercase tracking-widest">
              <a href="#" class="hover:text-blue-500 transition-colors">{{ $t('siteFooter.links.privacy') }}</a>
              <a href="#" class="hover:text-blue-500 transition-colors">{{ $t('siteFooter.links.terms') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>