<template>
  <div class="warranty-page">
    <header class="warranty-hero">
      <div class="warranty-wrap">
        <p class="eyebrow">{{ $t('warrantyPage.header.subTitle') }}</p>
        <h1>{{ $t('warrantyPage.header.title') }}</h1>
        <p class="hero-copy">{{ $t('warrantyPage.header.desc') }}</p>
      </div>
    </header>

    <main class="warranty-wrap warranty-main">
      <div class="mode-switch" role="tablist" :aria-label="$t('warrantyPage.form.modeLabel')">
        <button v-for="item in modes" :key="item.key" type="button" role="tab"
          :aria-selected="mode === item.key" :class="{ active: mode === item.key }"
          @click="changeMode(item.key)">{{ item.label }}</button>
      </div>

      <section class="query-panel">
        <div class="field-heading">
          <label :for="mode === 'single' ? 'single-sn' : 'batch-sn'">
            {{ mode === 'single' ? $t('warrantyPage.form.singleLabel') : $t('warrantyPage.form.batchLabel') }}
          </label>
          <span v-if="mode === 'batch'">{{ $t('warrantyPage.form.batchHint') }}</span>
        </div>

        <div v-if="mode === 'single'" class="single-row">
          <input id="single-sn" v-model="singleSn" type="text"
            :placeholder="$t('warrantyPage.form.singlePlaceholder')" autocomplete="off" spellcheck="false"
            @keyup.enter="submit" />
          <button class="submit-button" type="button" :disabled="loading" @click="submit">
            {{ loading ? $t('warrantyPage.form.checking') : $t('warrantyPage.form.check') }}
          </button>
        </div>

        <template v-else>
          <textarea id="batch-sn" v-model="batchSn" rows="8"
            :placeholder="$t('warrantyPage.form.batchPlaceholder')" autocomplete="off" spellcheck="false" />
          <div class="batch-actions">
            <span>{{ batchCount }} / {{ BATCH_MAX }}</span>
            <button class="submit-button" type="button" :disabled="loading" @click="submit">
              {{ loading ? $t('warrantyPage.form.checking') : $t('warrantyPage.form.checkBatch') }}
            </button>
          </div>
        </template>
      </section>

      <p v-if="message" class="message" role="alert">{{ message }}</p>

      <section v-if="results.length" class="results" aria-live="polite">
        <div class="results-heading">
          <h2>{{ $t('warrantyPage.result.title') }} ({{ results.length }})</h2>
          <button type="button" class="export-button" @click="exportResults">{{ $t('warrantyPage.result.export') }}</button>
        </div>
        <div class="result-table">
          <div class="result-row result-header" aria-hidden="true">
            <span>{{ $t('warrantyPage.result.sn') }}</span>
            <span>{{ $t('warrantyPage.result.status') }}</span>
            <span>{{ $t('warrantyPage.result.end') }}</span>
          </div>
          <div v-for="(item, index) in results" :key="`${item.sn}-${index}`" class="result-row">
            <div data-label="SN"><strong>{{ item.sn }}</strong></div>
            <div :data-label="$t('warrantyPage.result.status')">
              <span class="status-text" :class="statusClass(item.status)">{{ statusText(item.status) }}</span>
            </div>
            <div :data-label="$t('warrantyPage.result.end')">{{ item.warranty_end || '—' }}</div>
          </div>
        </div>
      </section>

      <p class="privacy-note">{{ $t('warrantyPage.privacy') }}</p>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const API_BASE = (import.meta.env.VITE_WARRANTY_API_BASE || 'https://api.yufantech.ru').replace(/\/$/, '')
const BATCH_MAX = 20
const mode = ref('single')
const singleSn = ref('')
const batchSn = ref('')
const loading = ref(false)
const results = ref([])
const message = ref('')

const modes = computed(() => [
  { key: 'single', label: t('warrantyPage.form.singleMode') },
  { key: 'batch', label: t('warrantyPage.form.batchMode') },
])
const batchItems = computed(() => batchSn.value.split(/\r?\n/).map(normalize).filter(Boolean))
const batchCount = computed(() => batchItems.value.length)

function normalize(value) {
  return String(value || '').trim().toUpperCase().replace(/\s+/g, '')
}

function changeMode(nextMode) {
  mode.value = nextMode
  results.value = []
  message.value = ''
}

function statusText(status) {
  const known = ['under_warranty', 'expired', 'pending', 'contact_support', 'not_found']
  return t(`warrantyPage.status.${known.includes(status) ? status : 'contact_support'}`)
}

function statusClass(status) {
  if (status === 'under_warranty') return 'valid'
  if (status === 'expired') return 'expired'
  if (status === 'not_found') return 'not-found'
  return 'attention'
}

async function request(path, payload) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const body = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(body.error || `http_${response.status}`)
  return body
}

function errorMessage(code) {
  if (code === 'rate_limit_exceeded') return t('warrantyPage.errors.rateLimit')
  if (code === 'invalid_serial_number') return t('warrantyPage.errors.invalid')
  if (code === 'batch_limit_exceeded') return t('warrantyPage.errors.batchLimit', { max: BATCH_MAX })
  return t('warrantyPage.errors.unavailable')
}

function csvCell(value) {
  return `"${String(value ?? '').replace(/"/g, '""')}"`
}

function exportResults() {
  const rows = [
    [t('warrantyPage.result.sn'), t('warrantyPage.result.pn'), t('warrantyPage.result.status'), t('warrantyPage.result.end')],
    ...results.value.map((item) => [item.sn, item.pn || '', statusText(item.status), item.warranty_end || '']),
  ]
  const csv = '\uFEFF' + rows.map((row) => row.map(csvCell).join(',')).join('\r\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.download = 'warranty-results.csv'
  link.click()
  URL.revokeObjectURL(url)
}

async function submit() {
  if (loading.value) return
  results.value = []
  message.value = ''
  const items = mode.value === 'single' ? [normalize(singleSn.value)].filter(Boolean) : batchItems.value
  if (!items.length) {
    message.value = t('warrantyPage.errors.required')
    return
  }
  if (items.length > BATCH_MAX) {
    message.value = t('warrantyPage.errors.batchLimit', { max: BATCH_MAX })
    return
  }

  loading.value = true
  try {
    if (mode.value === 'single') {
      results.value = [await request('/api/warranty/query', { sn: items[0] })]
    } else {
      const response = await request('/api/warranty/batch-query', { serial_numbers: items })
      results.value = Array.isArray(response.results) ? response.results : []
    }
  } catch (error) {
    message.value = errorMessage(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.warranty-page { min-height: 100vh; color: #111827; background: #fff; }
.warranty-wrap { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
.warranty-hero { padding: 88px 0 72px; color: #fff; background: #11131f; border-bottom: 1px solid #272a39; }
.eyebrow { margin: 0 0 18px; color: #aeb4c8; font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
h1 { margin: 0; font-size: clamp(42px, 6vw, 76px); font-weight: 800; letter-spacing: -.045em; line-height: .98; text-transform: uppercase; }
.hero-copy { max-width: 720px; margin: 24px 0 0; color: #c8ccda; font-size: 16px; line-height: 1.8; }
.warranty-main { padding: 64px 0 80px; }
.mode-switch { display: flex; gap: 32px; border-bottom: 1px solid #d7d9df; }
.mode-switch button { margin: 0 0 -1px; padding: 0 0 14px; color: #737783; background: transparent; border: 0; border-bottom: 2px solid transparent; border-radius: 0; font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; cursor: pointer; }
.mode-switch button.active { color: #11131f; border-bottom-color: #5136e5; }
.query-panel { padding: 38px 0 44px; border-bottom: 1px solid #d7d9df; }
.field-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; margin-bottom: 12px; }
.field-heading label { font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.field-heading span, .batch-actions span { color: #858996; font-size: 12px; }
.single-row { display: grid; grid-template-columns: minmax(0, 1fr) 190px; }
input, textarea { width: 100%; color: #111827; background: #fff; border: 1px solid #b9bdc8; border-radius: 0; outline: none; font: 14px/1.5 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; letter-spacing: .04em; }
input { min-height: 54px; padding: 0 18px; border-right: 0; }
textarea { display: block; padding: 16px 18px; resize: vertical; }
input:focus, textarea:focus { border-color: #5136e5; box-shadow: inset 0 0 0 1px #5136e5; }
.submit-button { min-height: 54px; padding: 0 26px; color: #fff; background: #11131f; border: 1px solid #11131f; border-radius: 0; font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; cursor: pointer; }
.submit-button:hover { background: #5136e5; border-color: #5136e5; }
.submit-button:disabled { cursor: wait; opacity: .55; }
.batch-actions { display: flex; align-items: center; justify-content: space-between; margin-top: 14px; }
.message { margin: 24px 0 0; padding: 15px 18px; border-left: 3px solid #c33; background: #fff7f7; color: #8f2424; font-size: 14px; }
.results { margin-top: 48px; }
.results-heading { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 0 0 16px; }
.results-heading h2 { margin: 0; font-size: 18px; font-weight: 800; text-transform: uppercase; }
.export-button { min-height: 46px; padding: 0 20px; color: #fff; background: #5136e5; border: 0; border-radius: 0; font-size: 12px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: background-color .2s ease; }
.export-button:hover { background: #3f28c7; }
.result-table { border-top: 1px solid #aeb1b7; border-right: 1px solid #aeb1b7; border-left: 1px solid #aeb1b7; }
.result-row { display: grid; grid-template-columns: minmax(260px, 1.4fr) 1fr 1fr; column-gap: 22px; align-items: center; min-height: 62px; padding: 0 18px; border-bottom: 1px solid #aeb1b7; font-size: 13px; }
.result-header { min-height: 42px; color: #111827; font-size: 11px; font-weight: 800; text-transform: uppercase; }
.result-row strong { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; overflow-wrap: anywhere; }
.status-text { display: inline-block; min-width: 100px; padding: 7px 14px; border-radius: 999px; background: #f0f1f3; color: #1d2430; font-size: 11px; font-weight: 800; text-align: center; }
.status-text.expired, .status-text.not-found { color: #9f2020; }
.status-text.attention { color: #7a5200; }
.privacy-note { max-width: 760px; margin: 40px 0 0; color: #858996; font-size: 12px; line-height: 1.8; }
@media (max-width: 760px) {
  .warranty-wrap { width: min(100% - 32px, 1180px); }
  .warranty-hero { padding: 62px 0 52px; }
  .warranty-main { padding-top: 42px; }
  .single-row { grid-template-columns: 1fr; gap: 10px; }
  input { border-right: 1px solid #b9bdc8; }
  .batch-actions { align-items: stretch; flex-direction: column; gap: 12px; }
  .result-header { display: none; }
  .result-row { grid-template-columns: 1fr; gap: 10px; padding: 22px 0; }
  .result-row > div { display: grid; grid-template-columns: 110px 1fr; gap: 12px; }
  .result-row > div::before { content: attr(data-label); color: #777b86; font-size: 10px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
}
</style>
