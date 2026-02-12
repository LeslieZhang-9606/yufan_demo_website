import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 自定义域名（yufantech.ru）需要使用根路径
  base: '/', 
  plugins: [vue(), tailwindcss()],
})