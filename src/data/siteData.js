export const siteData = {
  vps: [
    { ru: 'ГТД / НДС 20%', cn: '合规报关与增值税发票' },
    { ru: 'HKG/PEK-SVO', cn: '每日航空货运直达' },
    { ru: 'Гарантия и Сервис', cn: '本地备件库与技术维保' }
  ],
  quickCats: [
    { name: 'GPU Servers', cn: '算力服务器' },
    { name: 'Networking', cn: '网络通信设备' },
    { name: 'Storage', cn: '大容量存储' },
    { name: 'Workstations', cn: '图形工作站' }
  ],
  services: [
    { title: '跨境物流', desc: '中国至俄罗斯全境直达。处理所有海关手续、保险和尾程派送。', list: ['航空货运 8-12天', 'GTD 报关单支持', '全白贸易流程'] },
    { title: '技术维保', desc: '我们在莫斯科设有备件库，为您采购的硬件提供 SLA 级别的保修支持。', list: ['工程师现场支持', '备件 48小时换新', 'SLA 24/7 服务'] },
    { title: '供应链代采', desc: '根据您的技术指标，从全球范围内筛选最优质、最快速的硬件货源。', list: ['原厂正品保证', '配置兼容性审核', '供应链金融支持'] }
  ],
  products: [
    {
      name: 'NVIDIA DGX H800 AI 系统（示例）',
      category: 'gpu',
      img: 'https://yes-telecom.ru/upload/iblock/c34/c3489814460012228516086884617062.jpg',
      highlights: ['8× H800 GPU', '企业级 AI/HPC', '合规清关 + 本地维保'],
      price: '咨询获取',
      tags: ['DGX', 'H800', 'SLA'],
    },
    {
      name: 'NVIDIA H100 80GB PCIe（示例）',
      category: 'gpu',
      img: 'https://forsite-company.ru/upload/resize_cache/iblock/1a7/300_300_1/1a7d1005074020846331091215131641.jpg',
      highlights: ['80GB HBM3', 'PCIe 形态', '供货以咨询为准'],
      price: '咨询获取',
      tags: ['H100', '80GB', 'PCIe'],
    },
    {
      name: '4U 8-GPU 服务器平台（示例）',
      category: 'gpu',
      img: 'https://yes-telecom.ru/upload/iblock/c34/c3489814460012228516086884617062.jpg',
      highlights: ['支持 8 卡', '适配多种 GPU', '配置可按需定制'],
      price: '咨询获取',
      tags: ['4U', '8GPU', '定制'],
    },

    {
      name: 'Juniper MX204 核心路由器（示例）',
      category: 'network',
      img: 'https://yes-telecom.ru/upload/iblock/58c/58c8a16174a74313f8648356c9a729e8.jpg',
      highlights: ['400Gbps 级别', '核心网络设备', '原厂/渠道供货'],
      price: '咨询获取',
      tags: ['Juniper', 'Core', '400G'],
    },
    {
      name: '100G 交换机（示例）',
      category: 'network',
      img: 'https://yes-telecom.ru/upload/iblock/58c/58c8a16174a74313f8648356c9a729e8.jpg',
      highlights: ['数据中心场景', '端口速率可选', '交付周期咨询'],
      price: '咨询获取',
      tags: ['Switch', '100G'],
    },

    {
      name: '高密度存储服务器（示例）',
      category: 'storage',
      img: 'https://yes-telecom.ru/upload/iblock/c34/c3489814460012228516086884617062.jpg',
      highlights: ['大容量盘位', '适配多种硬盘', '用于存储集群'],
      price: '咨询获取',
      tags: ['Storage', 'High Density'],
    },
    {
      name: '企业级 SSD / HDD（示例）',
      category: 'storage',
      img: 'https://forsite-company.ru/upload/resize_cache/iblock/1a7/300_300_1/1a7d1005074020846331091215131641.jpg',
      highlights: ['容量/规格可选', '适配服务器/存储', '供货以咨询为准'],
      price: '咨询获取',
      tags: ['SSD', 'HDD'],
    },
  ],
footerCols: [
    { 
      title: 'NAVIGATION', 
      links: ['产品目录', '供应链代采', '关于我们', '联系我们'] 
    },
    { 
      title: 'CATEGORIES', 
      links: ['GPU SERVERS', 'ROUTERS', 'SWITCHES', 'STORAGE'] 
    }
  ]
}
