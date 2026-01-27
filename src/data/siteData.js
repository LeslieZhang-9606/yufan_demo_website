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

  featuredIds: [1, 13, 23, 28, 34, 46],
  // 导出全量产品数据
products: [
    // --- Dell (12款) ---
    { id: 1, name: 'Dell H100 Nvidia GPU Server', brand: 'Dell', category: 'GPU Servers', price: '15,984,729', img: 'https://via.placeholder.com/600x400?text=Dell+H100', specs: { "CPU": "Xeon Gold 6438Y+", "GPU": "H100 NVL 94GB", "磁盘": "2.5\" x8" } },
    { id: 2, name: 'Dell A100 Nvidia GPU Server', brand: 'Dell', category: 'GPU Servers', price: '5,816,825', img: 'https://via.placeholder.com/600x400?text=Dell+A100', specs: { "CPU": "Xeon Silver 4314", "GPU": "A100 80GB PCIe", "外形": "2U" } },
    { id: 3, name: 'Dell H200 Nvidia GPU Server', brand: 'Dell', category: 'GPU Servers', price: '33,026,800', img: 'https://via.placeholder.com/600x400?text=Dell+H200', specs: { "外形": "6U", "CPU": "Xeon Plat 8468", "GPU": "HGX H200 8-SXM" } },
    { id: 4, name: 'Dell PowerEdge XE9680', brand: 'Dell', category: 'GPU Servers', price: '19,255,036', img: 'https://via.placeholder.com/600x400?text=XE9680', specs: { "GPU": "8x NVIDIA H20", "内存": "64GB RDIMM", "型号": "XE9680" } },
    { id: 5, name: 'Dell PowerEdge R760 (L4)', brand: 'Dell', category: 'GPU Servers', price: '2,668,324', img: 'https://via.placeholder.com/600x400?text=R760+L4', specs: { "GPU": "NVIDIA Ada L4 24GB", "型号": "R760" } },
    { id: 6, name: 'Dell A16 GPU Server', brand: 'Dell', category: 'GPU Servers', price: '1,830,934', img: 'https://via.placeholder.com/600x400?text=Dell+A16', specs: { "型号": "R760", "GPU": "Nvidia A16" } },
    { id: 7, name: 'Dell R750xa GPU Server', brand: 'Dell', category: 'GPU Servers', price: '3,100,000', img: 'https://via.placeholder.com/600x400?text=R750xa', specs: { "CPU": "双路第3代至强", "GPU": "支持4张双宽卡" } },
    { id: 8, name: 'Dell PowerEdge XE8545', brand: 'Dell', category: 'GPU Servers', price: '6,500,000', img: 'https://via.placeholder.com/600x400?text=XE8545', specs: { "CPU": "AMD EPYC", "GPU": "4x A100 SXM4" } },
    { id: 9, name: 'Dell PowerEdge R660 (L4)', brand: 'Dell', category: 'GPU Servers', price: '1,200,000', img: 'https://via.placeholder.com/600x400?text=R660', specs: { "外形": "1U", "GPU": "支持2x L4" } },
    { id: 10, name: 'Dell Precision 7960', brand: 'Dell', category: 'GPU Servers', price: '850,000', img: 'https://via.placeholder.com/600x400?text=7960', specs: { "分类": "塔式/机架", "GPU": "支持4x RTX 6000 Ada" } },
    { id: 11, name: 'Dell XE9640', brand: 'Dell', category: 'GPU Servers', price: '12,000,000', img: 'https://via.placeholder.com/600x400?text=XE9640', specs: { "散热": "液冷", "GPU": "4x H100 SXM" } },
    { id: 12, name: 'Dell R760xa H100', brand: 'Dell', category: 'GPU Servers', price: '4,800,000', img: 'https://via.placeholder.com/600x400?text=R760xa', specs: { "GPU": "4x H100 PCIe" } },

    // --- Supermicro (10款) ---
    { id: 13, name: 'Supermicro A100 GPU Server', brand: 'Supermicro', category: 'GPU Servers', price: '6,495,163', img: 'https://via.placeholder.com/600x400?text=SM+A100', specs: { "RAM": "1TB DDR4", "GPU数量": "8", "主板": "DELTA HGX" } },
    { id: 14, name: 'Supermicro L40S GPU Server', brand: 'Supermicro', category: 'GPU Servers', price: '5,852,429', img: 'https://via.placeholder.com/600x400?text=SM+L40S', specs: { "型号": "SYS-421GE-TNRT", "GPU": "Ada L40S 48GB" } },
    { id: 15, name: 'Supermicro B200 GPU Server', brand: 'Supermicro', category: 'GPU Servers', price: '42,676,620', img: 'https://via.placeholder.com/600x400?text=SM+B200', specs: { "CPU": "AMD EPYC 9354", "GPU": "HGX B200 180GB" } },
    { id: 16, name: 'Supermicro H100 GPU Server', brand: 'Supermicro', category: 'GPU Servers', price: '1,989,133', img: 'https://via.placeholder.com/600x400?text=SM+H100', specs: { "CPU": "Turin 9135", "GPU": "HGX H100 80GB" } },
    { id: 17, name: 'Supermicro A40 GPU Server', brand: 'Supermicro', category: 'GPU Servers', price: '6,766,466', img: 'https://via.placeholder.com/600x400?text=SM+A40', specs: { "CPU": "Intel Gold 6342", "GPU": "A40 48GB" } },
    { id: 18, name: 'Supermicro RTX 4000 Server', brand: 'Supermicro', category: 'GPU Servers', price: '2,496,099', img: 'https://via.placeholder.com/600x400?text=SM+RTX4000', specs: { "型号": "AS-4125GS-TNRT", "GPU": "RTX4000 ADA SFF" } },
    { id: 19, name: 'Supermicro A16 GPU Server', brand: 'Supermicro', category: 'GPU Servers', price: '2,167,796', img: 'https://via.placeholder.com/600x400?text=SM+A16', specs: { "型号": "AS-2025HS-TNR", "GPU": "A16 64GB" } },
    { id: 20, name: 'Supermicro SYS-821GE-TNHR', brand: 'Supermicro', category: 'GPU Servers', price: '7,961,804', img: 'https://via.placeholder.com/600x400?text=SM+821GE', specs: { "GPU": "H200 141GB", "连接": "NVLink" } },
    { id: 21, name: 'Supermicro AS-4124G-NQ3', brand: 'Supermicro', category: 'GPU Servers', price: '咨询获取', img: 'https://via.placeholder.com/600x400?text=SM+4124G', specs: { "GPU": "支持8x PCIe", "架构": "经典4U" } },
    { id: 22, name: 'Supermicro SYS-420GP-TNR', brand: 'Supermicro', category: 'GPU Servers', price: '1,600,000', img: 'https://via.placeholder.com/600x400?text=SM+420GP', specs: { "GPU": "支持10x 双宽卡" } },

    // --- ASUS (5款) ---
    { id: 23, name: 'ASUS H200 GPU Server', brand: 'ASUS', category: 'GPU Servers', price: '28,822,289', img: 'https://via.placeholder.com/600x400?text=ASUS+H200', specs: { "型号": "ESC N8-E11", "GPU": "HGX H200 700W" } },
    { id: 24, name: 'ASUS H100 GPU Server', brand: 'ASUS', category: 'GPU Servers', price: '24,458,447', img: 'https://via.placeholder.com/600x400?text=ASUS+H100', specs: { "CPU": "AMD EPYC 9554", "GPU": "H100 80GB" } },
    { id: 25, name: 'ASUS A100 GPU Server', brand: 'ASUS', category: 'GPU Servers', price: '3,669,908', img: 'https://via.placeholder.com/600x400?text=ASUS+A100', specs: { "型号": "ESC4000-E11", "GPU": "A100 80GB OEM" } },
    { id: 26, name: 'ASUS ESC8000 G4', brand: 'ASUS', category: 'GPU Servers', price: '1,500,000', img: 'https://via.placeholder.com/600x400?text=ASUS+ESC8000', specs: { "GPU": "支持8x PCIe", "外形": "4U" } },
    { id: 27, name: 'ASUS RS720-E11', brand: 'ASUS', category: 'GPU Servers', price: '950,000', img: 'https://via.placeholder.com/600x400?text=ASUS+RS720', specs: { "GPU": "支持2x 双宽卡", "外形": "2U" } },

    // --- Lenovo (6款) ---
    { id: 28, name: 'Lenovo H100 GPU Server', brand: 'Lenovo', category: 'GPU Servers', price: '8,891,395', img: 'https://via.placeholder.com/600x400?text=Lenovo+H100', specs: { "CPU": "Gold 6442Y", "GPU": "H100 NVL 94GB" } },
    { id: 29, name: 'Lenovo L40S GPU Server', brand: 'Lenovo', category: 'GPU Servers', price: '5,263,048', img: 'https://via.placeholder.com/600x400?text=Lenovo+L40S', specs: { "内存": "2TB TruDDR5", "GPU": "L40S 48GB" } },
    { id: 30, name: 'Lenovo A100 GPU Server', brand: 'Lenovo', category: 'GPU Servers', price: '9,008,180', img: 'https://via.placeholder.com/600x400?text=Lenovo+A100', specs: { "CPU": "Gold 6548N", "GPU": "A100 80G PCIe" } },
    { id: 31, name: 'Lenovo A40 GPU Server', brand: 'Lenovo', category: 'GPU Servers', price: '2,863,013', img: 'https://via.placeholder.com/600x400?text=Lenovo+A40', specs: { "CPU": "AMD EPYC 9254", "GPU": "A40 48GB" } },
    { id: 32, name: 'Lenovo RTX A6000 Server', brand: 'Lenovo', category: 'GPU Servers', price: '7,172,454', img: 'https://via.placeholder.com/600x400?text=Lenovo+A6000', specs: { "CPU": "AMD EPYC 9534", "GPU": "RTX A6000 48GB" } },
    { id: 33, name: 'Lenovo B200 GPU Server', brand: 'Lenovo', category: 'GPU Servers', price: '44,453,154', img: 'https://via.placeholder.com/600x400?text=Lenovo+B200', specs: { "型号": "SR780a V3", "GPU": "HGX B200 180GB" } },

    // --- Gigabyte (4款) ---
    { id: 34, name: 'Gigabyte H100 GPU Server', brand: 'Gigabyte', category: 'GPU Servers', price: '3,120,918', img: 'https://via.placeholder.com/600x400?text=Giga+H100', specs: { "CPU": "Gold 6548N", "GPU": "H100 80GB PCIe" } },
    { id: 35, name: 'Gigabyte B200 GPU Server', brand: 'Gigabyte', category: 'GPU Servers', price: '41,396,178', img: 'https://via.placeholder.com/600x400?text=Giga+B200', specs: { "型号": "G893-SD1", "GPU": "HGX B200" } },
    { id: 36, name: 'Gigabyte H200 GPU Server', brand: 'Gigabyte', category: 'GPU Servers', price: '2,039,982', img: 'https://via.placeholder.com/600x400?text=Giga+H200', specs: { "CPU": "AMD 9005", "GPU": "H200 NVL PCIe" } },
    { id: 37, name: 'Gigabyte G482-Z54', brand: 'Gigabyte', category: 'GPU Servers', price: '1,800,000', img: 'https://via.placeholder.com/600x400?text=Giga+G482', specs: { "GPU": "支持8x 双宽卡", "存储": "NVMe" } },

    // --- Huawei/Inspur/H3C (8款) ---
    { id: 38, name: 'Huawei RTX 4090 Server', brand: 'Huawei', category: 'GPU Servers', price: '748,646', img: 'https://via.placeholder.com/600x400?text=HW+4090', specs: { "型号": "DP2210", "GPU": "RTX 4090 24GB" } },
    { id: 39, name: '浪潮 H20 GPU Server', brand: 'Inspur', category: 'GPU Servers', price: '22,118,211', img: 'https://via.placeholder.com/600x400?text=Inspur+H20', specs: { "型号": "NF5688M7", "GPU": "HGX H20 8-GPU" } },
    { id: 40, name: 'H3C P800 GPU Server', brand: 'H3C', category: 'GPU Servers', price: '19,389,346', img: 'https://via.placeholder.com/600x400?text=H3C+P800', specs: { "型号": "R5300G6", "GPU": "P800 OAM GPU" } },
    { id: 41, name: '华为 Atlas 800 (9000)', brand: 'Huawei', category: 'GPU Servers', price: '咨询获取', img: 'https://via.placeholder.com/600x400?text=HW+Atlas', specs: { "架构": "昇腾计算", "用途": "AI集群" } },
    { id: 42, name: '浪潮 NF5468M6', brand: 'Inspur', category: 'GPU Servers', price: '1,300,000', img: 'https://via.placeholder.com/600x400?text=Inspur+M6', specs: { "GPU": "灵活配置 PCIe", "存储": "24盘位" } },
    { id: 43, name: 'H3C R5300 G5', brand: 'H3C', category: 'GPU Servers', price: '1,450,000', img: 'https://via.placeholder.com/600x400?text=H3C+R5300', specs: { "GPU": "8x 双宽卡", "电源": "冗余" } },
    { id: 44, name: '华为 FusionServer V7', brand: 'Huawei', category: 'GPU Servers', price: '920,000', img: 'https://via.placeholder.com/600x400?text=HW+V7', specs: { "GPU": "支持4x L4", "特点": "高效能" } },
    { id: 45, name: '浪潮 NF5688M6', brand: 'Inspur', category: 'GPU Servers', price: '8,500,000', img: 'https://via.placeholder.com/600x400?text=Inspur+NF5688', specs: { "GPU": "8x A100 SXM", "散热": "优化风冷" } },

    // --- 其他 (5款) ---
    { id: 46, name: 'ASRock B300 GPU Server', brand: 'ASRock', category: 'GPU Servers', price: '65,171,733', img: 'https://via.placeholder.com/600x400?text=ASRock+B300', specs: { "型号": "8U16X-GNR2", "网络": "双1GbE" } },
    { id: 47, name: 'QCT B300 GPU Server', brand: 'QCT', category: 'GPU Servers', price: '60,466,327', img: 'https://via.placeholder.com/600x400?text=QCT+B300', specs: { "型号": "D75H-10U", "GPU": "HGX B300" } },
    { id: 48, name: 'Tyan A100 GPU Server', brand: 'Tyan', category: 'GPU Servers', price: '14,472,270', img: 'https://via.placeholder.com/600x400?text=Tyan+A100', specs: { "型号": "TN83-B8251", "GPU": "A100 80G" } },
    { id: 49, name: 'Nettrix X640 H800', brand: 'Nettrix', category: 'GPU Servers', price: '76,912,569', img: 'https://via.placeholder.com/600x400?text=Nettrix+X640', specs: { "GPU": "TESLA H800", "CPU": "8458P" } },
    { id: 50, name: 'Bergerus H100 Server', brand: 'Bergerus', category: 'GPU Servers', price: '6,379,572', img: 'https://via.placeholder.com/600x400?text=Bergerus+H100', specs: { "GPU": "H100 80GB OEM", "内存": "1TB DDR5" } }
  ],
footerCols: [
    { 
      title: 'NAVIGATION', 
      links: ['产品目录', '交付与服务', '关于我们', '联系我们'] 
    },
    { 
      title: 'CATEGORIES', 
      links: ['GPU SERVERS', 'ROUTERS', 'SWITCHES', 'STORAGE'] 
    }
  ]
}

