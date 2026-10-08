// 从 siteData.js 导出全量产品数据到 public/data/products.json
// 用法: node scripts/export-products.mjs
// 之后产品数据不再打包进 JS, 页面运行时 fetch 该 JSON; 将来可无缝切换为 API
import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { siteData } from '../src/data/siteData.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'public', 'data')
mkdirSync(outDir, { recursive: true })
const outFile = path.join(outDir, 'products.json')

writeFileSync(outFile, JSON.stringify(siteData.products))
console.log('exported products:', siteData.products.length, '->', outFile)
