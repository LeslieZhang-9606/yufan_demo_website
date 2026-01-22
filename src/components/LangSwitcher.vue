<template>
  <div class="flex items-center gap-2">
    <span class="text-[10px] font-black uppercase tracking-widest text-gray-400">
      {{ $t('common.lang.label') }}
    </span>
    <select
      v-model="current"
      @change="onChange"
      class="border border-gray-200 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest bg-white cursor-pointer outline-none"
    >
      <option value="zh">{{ $t('common.lang.zh') }}</option>
      <option value="en">{{ $t('common.lang.en') }}</option>
      <option value="ru">{{ $t('common.lang.ru') }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const current = ref(locale.value)

const onChange = () => {
  locale.value = current.value
  localStorage.setItem('locale', current.value)
}
</script>
