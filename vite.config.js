import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 基础路径必须与你的仓库名一致
  base: '/yufan_demo_website/', 
  plugins: [vue(), tailwindcss()],
})