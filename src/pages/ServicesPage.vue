<template>
  <div class="container-custom py-24 lg:py-32">
    <div class="max-w-3xl">
      <div class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
        交付与服务
      </div>
      <h1 class="mt-6 text-5xl lg:text-7xl font-black tracking-tighter">
        Delivery & Services
      </h1>

      <p class="mt-8 text-gray-500 leading-relaxed">
        我们提供高效的交付流程和专业的售后服务，确保所有产品在合规的基础上准时到达，并提供本地化的维保支持。
      </p>

      <!-- 交付流程 -->
      <section class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900">交付流程</h2>
        <div class="mt-4 text-gray-500">
          <p>我们从中国及香港直发硬件，确保所有产品在**8-12天内**完成交付，且提供全套报关文件（GTD）。</p>
          <ul class="list-inside list-disc mt-4 text-sm text-gray-500">
            <li>产品从中国/香港出发，选择**最快物流通道**</li>
            <li>每个订单提供**完整报关文件**，保证合规</li>
            <li>产品交付后，提供本地维保支持，确保长期无忧</li>
          </ul>
        </div>
      </section>

      <!-- 售后服务 -->
      <section class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900">售后服务与维保</h2>
        <div class="mt-4 text-gray-500">
          <p>我们的售后服务包括**7x24小时现场支持**和**快速备件更换**。我们通过**本地备件库**确保产品维保无忧。</p>
          <ul class="list-inside list-disc mt-4 text-sm text-gray-500">
            <li>7x24小时在线技术支持</li>
            <li>产品保修期内**全程免费维保**</li>
            <li>备件更换服务，保证**48小时内交付**</li>
          </ul>
        </div>
      </section>

      <!-- 合规性与报关 -->
      <section class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900">合规性与报关</h2>
        <div class="mt-4 text-gray-500">
          <p>我们提供**GTD**报关单支持，确保**增值税发票（NDS）**合规，保证每个环节符合俄罗斯法规。</p>
          <ul class="list-inside list-disc mt-4 text-sm text-gray-500">
            <li>提供**全套GTD报关单**</li>
            <li>确保**NDS增值税**合规，简化清关流程</li>
            <li>专业团队处理**通关与物流细节**</li>
          </ul>
        </div>
      </section>

      <!-- 获取报价按钮 -->
      <div class="mt-16 flex justify-center">
        <button
          @click="scrollTop"
          class="btn-blue"
        >
          获取报价
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
