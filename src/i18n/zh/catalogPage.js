// src/locales/modules/catalogPage.js (ZH)
export default {
  header: {
    subTitle: '硬件库存',
    mainTitle: '产品目录',
    description:
      '实时聚合全球主流计算硬件。价格随汇率和市场波动，请点击「获取报价」查看最新 DDP / DAP 报价。',
    synced: '已同步：{count} 款型号'
  },

  view: {
    grid: '网格',
    list: '列表'
  },

  filter: {
    title: '筛选',
    categories: '类目',
    brands: '品牌',
    reset: '重置',
    allHardware: '全部硬件'
  },

  product: {
    estPrice: '参考价：',
    priceOnRequest: '价格面议',
    inquire: '获取报价',
    inquireShort: '报价',
    currency: '¥' // 如果前端用美元，可改成 '$'
  },

  pagination: {
    prev: '上一页',
    next: '下一页',
    showing: '当前显示 {start} - {end} ，共 {total} 条'
  },

  empty: '未找到符合条件的产品。',

  /**
   * 类目名称映射
   *
   * key 必须与 `siteData.products[*].category` 完全一致。
   */
  categoryMap: {
    'gpu-cards': 'GPU 加速卡',
    'wlan-controllers': '无线控制器',
    'base-stations': '基站与射频单元',
    'power-supplies': '网络设备电源模块',
    'high-performance-servers': '高性能 GPU 服务器',
    'interface-modules': '接口模块 / 业务板卡',
    'switches': '交换机',
    'tape-libraries': '磁带库与磁带机',
    'line-cards': '路由线卡',
    'routers': '路由器',
    'firewalls': '防火墙 / 安全网关',
    'multiplexers': '复用设备',
    'laptops-mobile-servers': '加固笔记本与移动服务器',
    'workstations': '图形工作站',
    'server-platforms': '通用服务器平台 / 裸机服务器',
    'storage-systems': '存储系统与磁盘阵列',
    'access-points': '无线接入点 AP'
  }
}
