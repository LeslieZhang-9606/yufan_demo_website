<template>
  <section id="contact" class="py-24 bg-white">
    <div class="container-custom">
      <div class="bg-gray-50 rounded-[40px] p-8 lg:p-16 border border-gray-100 shadow-sm overflow-hidden">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div class="lg:w-5/12 flex flex-col justify-between">
            <div>
              <span class="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
                {{ $t('leadForm.sectionTitle') || 'Request Quote' }}
              </span>
              <h2 class="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-8 text-gray-900">
                Customize Your <br/>
                <span class="italic text-gray-400">AI Infrastructure</span>
              </h2>
              <p class="text-gray-500 text-sm leading-relaxed mb-10 border-l-2 border-blue-600 pl-6">
                {{ $t('leadForm.description') }} <br>
                <span class="mt-4 block text-xs opacity-70">
                  Please specify your needs. We will provide a VAT-inclusive quote and technical plan within 2 hours.
                </span>
              </p>
            </div>

            <div class="flex flex-wrap gap-3 mt-auto">
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-600 shadow-sm">
                {{ $t('leadForm.tagGtd') || 'Global Delivery' }}
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-600 shadow-sm">
                {{ $t('leadForm.tagSla') || 'In Stock' }}
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-600 shadow-sm">
                Expert Support
              </span>
            </div>
          </div>

          <div class="lg:w-7/12">
            <form @submit.prevent="submit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Name / Company</label>
                  <input v-model="form.name" type="text" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:font-normal placeholder:text-gray-300" placeholder="Enter name" required />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Phone / Telegram</label>
                  <input v-model="form.phone" type="text" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:font-normal placeholder:text-gray-300" placeholder="Enter contact info" required />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                <input v-model="form.email" type="email" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:font-normal placeholder:text-gray-300" placeholder="name@company.com" />
              </div>

              <div class="space-y-2">
                <label class="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Project Details</label>
                <textarea v-model="form.comment" rows="4" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:font-normal placeholder:text-gray-300 resize-none" placeholder="e.g., 8x H100 SXM, ship to CA, need network design..."></textarea>
              </div>

              <div class="relative group cursor-pointer">
                <input type="file" @change="onFileChange" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <div class="flex items-center justify-between p-4 bg-white border border-dashed border-gray-300 rounded-xl group-hover:border-blue-500 group-hover:bg-blue-50/50 transition-all">
                  <span class="text-xs font-bold text-gray-500 group-hover:text-blue-600 uppercase tracking-wide">Attach Topology / BOM</span>
                  <div class="flex items-center gap-2">
                     <span class="text-[10px] text-gray-400 font-bold uppercase mr-2" v-if="fileName">{{ fileName }}</span>
                     <span class="text-gray-400 text-lg group-hover:text-blue-600 transition-colors">+</span>
                  </div>
                </div>
              </div>

              <div class="pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div class="space-y-2">
                  <label class="flex items-center gap-2 cursor-pointer group">
                    <div class="relative flex items-center">
                      <input v-model="form.acceptPrivacy" type="checkbox" class="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-blue-600 checked:border-blue-600 transition-all" />
                      <svg class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wide group-hover:text-gray-600">Accept Privacy Policy</span>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full md:w-auto bg-black text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="submitting"
                >
                  {{ submitting ? 'Sending...' : 'Submit Request' }}
                </button>
              </div>
              
              <div v-if="ok" class="mt-4 p-4 bg-green-50 border border-green-100 rounded-xl text-green-700 text-xs font-bold text-center">
                {{ $t('leadForm.success') || 'Request submitted successfully!' }}
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitting = ref(false)
const ok = ref(false)
const fileName = ref('')

// 表单数据结构
const form = reactive({
  name: '',
  phone: '',
  email: '',
  comment: '',
  acceptPrivacy: false,
  file: null,
})

// 处理文件选择
function onFileChange(e) {
  const file = e.target.files?.[0]
  if (file) {
    form.file = file
    fileName.value = file.name
  } else {
    form.file = null
    fileName.value = ''
  }
}

// 提交逻辑
async function submit() {
  if (!form.acceptPrivacy) {
    alert('Please accept the privacy policy.')
    return
  }

  ok.value = false
  submitting.value = true

  // 模拟提交过程
  console.log('[LeadForm] submit:', {
    ...form,
    file: form.file ? { name: form.file.name, size: form.file.size } : null,
  })

  await new Promise((r) => setTimeout(r, 800))
  
  submitting.value = false
  ok.value = true
  
  // 3秒后重置状态
  setTimeout(() => { ok.value = false }, 3000)
}
</script>

<style scoped>
/* 确保容器宽度统一 */
.container-custom { max-width: 1440px; margin: 0 auto; padding: 0 2rem; }
</style>