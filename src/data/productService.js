// 产品数据服务层: 运行时从 public/data/products.json 加载全量产品
// 解耦目的: 产品数据不再打包进 JS bundle, 改数据不用重新 build;
// 将来接后端/API 时, 只需把这里的 fetch 目标换成接口地址, 页面零改动。
import { ref } from 'vue'

const basePath = import.meta.env.BASE_URL || '/'

const products = ref([])
const loaded = ref(false)
const loading = ref(false)
const error = ref(null)
let inflight = null

/**
 * 确保产品数据已加载 (幂等, 并发安全):
 * - 首次调用发起 fetch 并缓存 Promise
 * - 加载失败允许重试 (清空 inflight)
 * 返回 Promise<Array>
 */
export function ensureProductsLoaded() {
  if (loaded.value) return Promise.resolve(products.value)
  if (inflight) return inflight

  loading.value = true
  error.value = null
  inflight = fetch(`${basePath}data/products.json`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`)
      return res.json()
    })
    .then((data) => {
      products.value = Array.isArray(data) ? data : []
      loaded.value = true
      loading.value = false
      inflight = null
      return products.value
    })
    .catch((err) => {
      loading.value = false
      error.value = err.message || String(err)
      inflight = null
      throw err
    })
  return inflight
}

export function useProducts() {
  return { products, loaded, loading, error, ensureProductsLoaded }
}
