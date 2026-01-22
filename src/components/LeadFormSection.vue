<template>
  <section class="container-custom py-20 lg:py-28" id="form">
    <div class="rounded-[48px] border border-gray-100 bg-gray-50 p-8 lg:p-14">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <!-- 标题区 -->
        <div class="lg:col-span-5">
          <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-600">
            {{ $t('leadForm.sectionTitle') }}
          </div>
          <h2 class="mt-6 text-4xl lg:text-5xl font-black tracking-tighter text-gray-900 leading-tight">
            {{ $t('leadForm.headingLine1') }}<br />
            {{ $t('leadForm.headingLine2') }}
          </h2>
          <p class="mt-6 text-gray-500 leading-relaxed">
            {{ $t('leadForm.description') }}
          </p>

          <!-- 信息点 -->
          <div class="mt-10 flex flex-wrap gap-2">
            <span
              class="inline-flex items-center rounded-full border border-gray-100 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-gray-500"
            >
              {{ $t('leadForm.tagGtd') }}
            </span>
            <span
              class="inline-flex items-center rounded-full border border-gray-100 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-gray-500"
            >
              {{ $t('leadForm.tagAir') }}
            </span>
            <span
              class="inline-flex items-center rounded-full border border-gray-100 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-gray-500"
            >
              {{ $t('leadForm.tagSla') }}
            </span>
          </div>
        </div>

        <!-- 表单区 -->
        <form class="lg:col-span-7" @submit.prevent="submit">
          <div class="rounded-[40px] border border-gray-100 bg-white p-8 lg:p-10 shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                v-model.trim="form.name"
                class="h-12 rounded-2xl border border-gray-100 bg-gray-50 px-4 text-sm font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                :placeholder="$t('leadForm.placeholderName')"
                required
              />
              <input
                v-model.trim="form.phone"
                class="h-12 rounded-2xl border border-gray-100 bg-gray-50 px-4 text-sm font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                :placeholder="$t('leadForm.placeholderPhone')"
                required
              />

              <input
                v-model.trim="form.email"
                type="email"
                class="h-12 rounded-2xl border border-gray-100 bg-gray-50 px-4 text-sm font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 md:col-span-2"
                :placeholder="$t('leadForm.placeholderEmail')"
              />

              <textarea
                v-model.trim="form.comment"
                class="min-h-[140px] rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 md:col-span-2"
                :placeholder="$t('leadForm.placeholderComment')"
              />
            </div>

            <!-- 上传附件（可选） -->
            <div class="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <label
                class="inline-flex items-center gap-3 cursor-pointer text-sm font-bold text-gray-600 hover:text-blue-600 transition"
              >
                <input type="file" class="hidden" @change="onFileChange" />
                <span
                  class="inline-flex items-center justify-center h-10 px-4 rounded-2xl border border-gray-100 bg-white"
                >
                  {{ $t('leadForm.attachLabel') }}
                </span>
                <span class="text-xs text-gray-400 font-semibold">
                  {{ fileName || $t('leadForm.noFile') }}
                </span>
              </label>

              <div class="text-[10px] font-black uppercase tracking-widest text-gray-400">
                {{ $t('leadForm.requiredFieldsNote') }}
              </div>
            </div>

            <!-- 同意项 -->
            <div class="mt-6 space-y-3">
              <label class="flex items-start gap-3 text-xs font-semibold text-gray-500">
                <input v-model="form.acceptPrivacy" type="checkbox" class="mt-1" required />
                <span>{{ $t('leadForm.acceptPrivacy') }}</span>
              </label>
              <label class="flex items-start gap-3 text-xs font-semibold text-gray-500">
                <input v-model="form.acceptData" type="checkbox" class="mt-1" required />
                <span>{{ $t('leadForm.acceptData') }}</span>
              </label>
              <label class="flex items-start gap-3 text-xs font-semibold text-gray-500">
                <input v-model="form.acceptMarketing" type="checkbox" class="mt-1" />
                <span>{{ $t('leadForm.acceptMarketing') }}</span>
              </label>
            </div>

            <!-- 提交按钮 -->
            <button
              type="submit"
              class="mt-8 w-full rounded-2xl bg-blue-600 px-6 py-4 text-[11px] font-black uppercase tracking-widest text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="submitting"
            >
              {{ submitting ? $t('leadForm.submitting') : $t('leadForm.submit') }}
            </button>

            <!-- 提示 -->
            <div
              v-if="ok"
              class="mt-5 rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-bold text-green-700"
            >
              {{ $t('leadForm.success') }}
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitting = ref(false)
const ok = ref(false)
const fileName = ref('')

const form = reactive({
  name: '',
  phone: '',
  email: '',
  comment: '',
  acceptPrivacy: false,
  acceptData: false,
  acceptMarketing: false,
  file: null,
})

function onFileChange(e) {
  const file = e.target.files?.[0]
  form.file = file || null
  fileName.value = file ? file.name : ''
}

async function submit() {
  ok.value = false
  submitting.value = true

  console.log('[LeadForm] submit:', {
    ...form,
    file: form.file ? { name: form.file.name, size: form.file.size } : null,
  })

  await new Promise((r) => setTimeout(r, 800))
  submitting.value = false
  ok.value = true
}
</script>
