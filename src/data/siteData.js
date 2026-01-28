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

    // --- ASROCK (7款) ---
    {"id": 26, "name": "ASROCK  B200 Nvidia", "brand": "ASROCK", "category": "GPU Servers", "price": "41,279,896", "img": "https://via.placeholder.com/600x400?text=ASROCK++B200+Nvidia", "specs": {"CPU": "Intel Xeon 6760p", "GPU": "NVIDIA HGX™ B200", "型号": "8U8X-EGS2 SYN B200"}},
    {"id": 37, "name": "ASROCK  RTX5090 Nvidia", "brand": "ASROCK", "category": "GPU Servers", "price": "4,148,461", "img": "https://via.placeholder.com/600x400?text=ASROCK++RTX5090+Nvid", "specs": {"CPU": "AMD EPYC 9654 (5-е поколение, Genoa), до 96 ядер на процессор", "GPU": "ASUS ROG Astral RTX 5090 32 ГБ (ROG-ASTRAL RTX5090-32G)", "型号": "SP2C621D32GM-2T"}},
    {"id": 39, "name": "ASROCK  B300 Nvidia", "brand": "ASROCK", "category": "GPU Servers", "price": "63,224,156", "img": "https://via.placeholder.com/600x400?text=ASROCK++B300+Nvidia", "specs": {"CPU": "Intel Xeon 6700E/6700P", "型号": "8U16X-GNR2 B300"}},
    {"id": 49, "name": "ASROCK  H100 Nvidia", "brand": "ASROCK", "category": "GPU Servers", "price": "5,792,255", "img": "https://via.placeholder.com/600x400?text=ASROCK++H100+Nvidia", "specs": {"CPU": "Intel® Xeon® Gold 6442Y Processor (24 core, 2.60 GHz)", "GPU": "Nvidia H100 (PCIe) 80G OEM", "型号": "SP2C621D32GM-2T"}},
    {"id": 113, "name": "ASROCK Rack SP2C621D32GM-2T", "brand": "ASROCK", "category": "General Servers", "price": "4,359,618", "img": "https://via.placeholder.com/600x400?text=ASROCK+Rack+SP2C621D", "specs": {"CPU": "Intel Xeon Scalable 3-го поколения (Ice Lake SP), от 8 до 38 ядер (кроме 40-ядерных моделей)", "GPU": "ASUS ROG Astral RTX 5090 32 ГБ (ROG-ASTRAL RTX5090-32G)", "内存": "32 слота DDR4 DIMM (16 на сокет), поддержка RDIMM, LRDIMM, 3DS, до DDR4-3200"}},
    {"id": 175, "name": "ASROCK  8U8X-EGS2 SYN B200", "brand": "ASROCK", "category": "General Servers", "price": "41,279,896", "img": "https://via.placeholder.com/600x400?text=ASROCK++8U8X-EGS2+SY", "specs": {"CPU": "2× Intel Xeon Scalable 5-го поколения (Emerald Rapids), LGA 4677", "GPU": "NVIDIA HGX™ B200", "内存": "До 4 ТБ DDR5 ECC, 16+16 DIMM слотов, 12 каналов на сокет"}},
    {"id": 311, "name": "ASROCK  8U16X-GNR2 B300", "brand": "ASROCK", "category": "General Servers", "price": "63,224,156", "img": "https://via.placeholder.com/600x400?text=ASROCK++8U16X-GNR2+B", "specs": {"CPU": "2× Intel Xeon (модели варьируются в зависимости от конфигурации)", "GPU": "NVIDIA HGX B300 with NVSwitch", "内存": "До 32 слотов DDR5-6400"}},

    // --- ASUS (9款) ---
    {"id": 3, "name": "ASUS  H200 Nvidia", "brand": "ASUS", "category": "GPU Servers", "price": "27,960,971", "img": "https://via.placeholder.com/600x400?text=ASUS++H200+Nvidia", "specs": {"GPU": "H200 8GPU 700W", "型号": "ESC N8-E11 | ESC N8-E11V"}},
    {"id": 27, "name": "ASUS  H100 Nvidia", "brand": "ASUS", "category": "GPU Servers", "price": "24,458,447", "img": "https://via.placeholder.com/600x400?text=ASUS++H100+Nvidia", "specs": {"CPU": "AMD EPYC 9554", "GPU": "NVIDIA H100 80 GB"}},
    {"id": 31, "name": "ASUS  A100 Nvidia", "brand": "ASUS", "category": "GPU Servers", "price": "3,560,237", "img": "https://via.placeholder.com/600x400?text=ASUS++A100+Nvidia", "specs": {"CPU": "Intel 6430", "GPU": "NVIDIA A100 80GB OEM", "型号": "ESC4000-E112U"}},
    {"id": 36, "name": "ASUS  H100 Nvidia", "brand": "ASUS", "category": "GPU Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ASUS++H100+Nvidia", "specs": {"GPU": "NVIDIA H100", "内存": "DRAM 64GB DDR5 4800 MT/s (PC5-38400) CL40 DR x4 ECC Registered DIMM", "型号": "ESC8000A-12"}},
    {"id": 61, "name": "ASUS  ESC8000A-E12", "brand": "ASUS", "category": "General Servers", "price": "1,621,858", "img": "https://via.placeholder.com/600x400?text=ASUS++ESC8000A-E12", "specs": {"CPU": "2x Intel Xeon Scalable (1-го или 2-го поколения).", "内存": "DDR4 ECC RDIMM/LRDIMM", "外形": "2U"}},
    {"id": 91, "name": "ASUS  ESC N8-E11", "brand": "ASUS", "category": "General Servers", "price": "32,432,801", "img": "https://via.placeholder.com/600x400?text=ASUS++ESC+N8-E11", "specs": {"CPU": "2x Intel Xeon Scalable (1-го или 2-го поколения).", "内存": "512 ГБ DDR4 ECC RDIMM / LRDIMM"}},
    {"id": 316, "name": "ASUS  ESC4000-E112U", "brand": "ASUS", "category": "General Servers", "price": "3,560,237", "img": "https://via.placeholder.com/600x400?text=ASUS++ESC4000-E112U", "specs": {"CPU": "Поддержка 2× Intel Xeon Scalable (семейство Ice Lake/ Sapphire Rapids), до 350 Вт TDP на CPU", "GPU": "NVIDIA A100 80GB OEM", "内存": "16 слотов DDR4, поддержка RDIMM, максимальный объем зависит от конфигурации"}},
    {"id": 318, "name": "ASUS  ESC N8-E11V", "brand": "ASUS", "category": "General Servers", "price": "27,960,971", "img": "https://via.placeholder.com/600x400?text=ASUS++ESC+N8-E11V", "specs": {"CPU": "Dual Intel Xeon Scalable 5-го поколения с поддержкой TDP до 350 Вт", "GPU": "NVIDIA HGX GPU Baseboard", "内存": "32 слота DDR5 ECC RDIMM, поддержка высокой частоты и емкости памяти до нескольких терабайт"}},
    {"id": 345, "name": "ASUS  XA NB3I-E12", "brand": "ASUS", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ASUS++XA+NB3I-E12", "specs": {"CPU": "6th Intel® Xeon® Processor Scalable Family (Up to 350W)", "内存": "32 (8 channel per CPU, 16 DIMM per CPU)\nCapacity:\nMaximum up to 4TB per CPU socket\nMemory Type:\nDDR5 6400 RDIMM/ 3DS RDIMM (2DPC)\nMemory Size:\n128GB, 96GB, 64GB"}},

    // --- Bergerus (7款) ---
    {"id": 33, "name": "Bergerus  A100 Nvidia", "brand": "Bergerus", "category": "GPU Servers", "price": "2,408,777", "img": "https://via.placeholder.com/600x400?text=Bergerus++A100+Nvidi", "specs": {"GPU": "NVIDIA A100 80GB OEM", "内存": "16x 64GB DDR5 4800 MHz"}},
    {"id": 38, "name": "Bergerus  H100 Nvidia", "brand": "Bergerus", "category": "GPU Servers", "price": "6,188,927", "img": "https://via.placeholder.com/600x400?text=Bergerus++H100+Nvidi", "specs": {"GPU": "NVIDIA H100 80GB OEM", "内存": "16x 64GB DDR5 4800 MHz", "型号": "SY4108G-D12R-G4"}},
    {"id": 148, "name": "Bergerus  GP-4I-220", "brand": "Bergerus", "category": "General Servers", "price": "1,214,200", "img": "https://via.placeholder.com/600x400?text=Bergerus++GP-4I-220", "specs": {"CPU": "Intel® Xeon® Gold 6530, 32C/64T, 2.10 ГГц, 160 МБ L3", "GPU": "NVIDIA RTX 5090 32 ГБ (Turbo) — 1 шт (старт) | NVIDIA RTX 5090 32GB Turbo"}},
    {"id": 169, "name": "Bergerus  GP-BI-220", "brand": "Bergerus", "category": "General Servers", "price": "2,636,679", "img": "https://via.placeholder.com/600x400?text=Bergerus++GP-BI-220", "specs": {"CPU": "Intel® Xeon® Gold 6530, 32C/64T, 2.10 ГГц, 160 МБ L3 | 2 x Intel Xeon 6530", "GPU": "NVIDIA RTX 5090 32 ГБ | 4 x NVIDIA RTX 5090 32 ГБ | 8 x NVIDIA RTX 5090 32 ГБ"}},
    {"id": 293, "name": "Bergerus  SL201-D08R-G3", "brand": "Bergerus", "category": "General Servers", "price": "2,408,777", "img": "https://via.placeholder.com/600x400?text=Bergerus++SL201-D08R", "specs": {"CPU": "2× Intel Xeon Gold 6348", "GPU": "NVIDIA A100 80GB OEM", "内存": "16× 32GB DDR4"}},
    {"id": 300, "name": "Bergerus  GP-5I-220", "brand": "Bergerus", "category": "General Servers", "price": "586,461", "img": "https://via.placeholder.com/600x400?text=Bergerus++GP-5I-220", "specs": {"GPU": "NVIDIA RTX 5090 с 32 ГБ видеопамяти", "内存": "Corsair DDR5 5200 МГц\n32 ГБ (1 модуль)"}},
    {"id": 302, "name": "Bergerus  SY4108G-D12R-G4", "brand": "Bergerus", "category": "General Servers", "price": "4,005,046", "img": "https://via.placeholder.com/600x400?text=Bergerus++SY4108G-D1", "specs": {"GPU": "NVIDIA A100 80GB OEM", "内存": "16× 64GB DDR5 4800 MHz (до 1 ТБ+ RAM)"}},

    // --- DEPO (8款) ---
    {"id": 296, "name": "DEPO Storm 1430B1R", "brand": "DEPO", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=DEPO+Storm+1430B1R", "specs": {"CPU": "1 процессор E-2300", "内存": "4 слота DIMM"}},
    {"id": 315, "name": "DEPO Storm 3500A1R", "brand": "DEPO", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=DEPO+Storm+3500A1R", "specs": {"CPU": "Поддерживаемые процессоры: 1 или 2 процессора Gen4 или Gen5 с максимальным TDP до 350 Вт", "内存": "32 слота DIMM"}},
    {"id": 317, "name": "DEPO Storm 3500Z2R", "brand": "DEPO", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=DEPO+Storm+3500Z2R", "specs": {"CPU": "Поддерживаемые процессоры: 1 или 2 процессора Gen4 или Gen5 с максимальным TDP до 350 Вт", "内存": "32 слота DIMM"}},
    {"id": 322, "name": "DEPO Storm 3470A2R", "brand": "DEPO", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=DEPO+Storm+3470A2R", "specs": {"CPU": "Один или два процессора Gen.3 с максимальным TDP до 270 Вт.", "内存": "32 слота DIMM"}},
    {"id": 323, "name": "DEPO Storm 1430T4R", "brand": "DEPO", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=DEPO+Storm+1430T4R", "specs": {"CPU": "1 процессор E-2300", "内存": "4 слота DIMM"}},
    {"id": 325, "name": "DEPO Storm 1430U2R", "brand": "DEPO", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=DEPO+Storm+1430U2R", "specs": {"CPU": "1 процессор E-2300", "内存": "4 слота DIMM"}},
    {"id": 331, "name": "DEPO Storm 3500Z1R", "brand": "DEPO", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=DEPO+Storm+3500Z1R", "specs": {"CPU": "Поддерживаемые процессоры: 1 или 2 процессора Gen4 или Gen5 с максимальным TDP до 350 Вт", "内存": "32 слота DIMM"}},
    {"id": 337, "name": "DEPO Storm 3470Z2R", "brand": "DEPO", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=DEPO+Storm+3470Z2R", "specs": {"CPU": "Один или два процессора Gen.3 с максимальным TDP до 270 Вт.", "内存": "32 слота DIMM"}},

    // --- Dell (56款) ---
    {"id": 1, "name": "Dell  H100 Nvidia", "brand": "Dell", "category": "GPU Servers", "price": "15,984,729", "img": "https://via.placeholder.com/600x400?text=Dell++H100+Nvidia", "specs": {"CPU": "Intel Xeon Gold 6438Y+", "GPU": "NVIDIA H100 NVL"}},
    {"id": 2, "name": "Dell  A100 Nvidia", "brand": "Dell", "category": "GPU Servers", "price": "5,816,825", "img": "https://via.placeholder.com/600x400?text=Dell++A100+Nvidia", "specs": {"CPU": "Intel Xeon Silver 4314", "GPU": "A100 80gb", "外形": "2U"}},
    {"id": 5, "name": "Dell  H200 Nvidia", "brand": "Dell", "category": "GPU Servers", "price": "33,026,800", "img": "https://via.placeholder.com/600x400?text=Dell++H200+Nvidia", "specs": {"CPU": "Intel Xeon Platinum 8468", "GPU": "NVIDIA HGX H200 с 8× SXM-модулями по 700 Вт", "外形": "6U"}},
    {"id": 20, "name": "Dell  A16 Nvidia", "brand": "Dell", "category": "GPU Servers", "price": "1,830,934", "img": "https://via.placeholder.com/600x400?text=Dell++A16+Nvidia", "specs": {"CPU": "Xeon Platinum 8462y+", "GPU": "Nvidia A16 GPU", "型号": "R760"}},
    {"id": 35, "name": "Dell  H20 Nvidia", "brand": "Dell", "category": "GPU Servers", "price": "19,255,036", "img": "https://via.placeholder.com/600x400?text=Dell++H20+Nvidia", "specs": {"CPU": "Intel Xeon Gold 6448Y", "GPU": "NVIDIA H20", "内存": "64GB RDIMM, 4800MT/s Dual Rank", "型号": "XE9680"}},
    {"id": 54, "name": "Dell PowerEdge R760 12LFF", "brand": "Dell", "category": "General Servers", "price": "1,026,972", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R760+", "specs": {"CPU": "До двух процессоров Intel® Xeon® Scalable 4-го поколения, до 56 ядер на процессор и с дополнительной технологией Intel® QuickAssist", "内存": "до 4800 МТ/с, RDIMM, 32 слота DDR5 DIMM, Max RAM, RDIMM 8 TB", "外形": "2U"}},
    {"id": 58, "name": "Dell PowerEdge R760XA", "brand": "Dell", "category": "General Servers", "price": "15,984,729", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R760X", "specs": {"CPU": "2 x масштабируемых процессоров Intel Xeon Scalable 4-го или 5-го поколения", "内存": "До 32 слотов DDR5 RDIMM с поддержкой до 8 ТБ памяти", "外形": "2U"}},
    {"id": 73, "name": "Dell PowerEdge R7625", "brand": "Dell", "category": "General Servers", "price": "1,026,972", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R7625", "specs": {"CPU": "До 2-х процессоров AMD EPYC™ 4-го поколения серии 9004, до 96 ядер на процессор", "内存": "до 4800 МТ/с, , RDIMM, 24 разъема DDR5 DIMM, max ОЗУ, RDIMM: 6 Тбайт"}},
    {"id": 76, "name": "Dell PowerEdge R740", "brand": "Dell", "category": "General Servers", "price": "1,355,195", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R740", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Scalable 2-го поколения, до 28 ядер на процессор", "内存": "до 2933 МТ/с, 24 слота, max объем ОЗУ, RDIMM: 1,53 Тбайт, LRDIMM: 3 Тбайт, NVDIMM: 192 Гбайт, DCPMM: 6,14 Тбайт"}},
    {"id": 77, "name": "Dell PowerEdge XE8640", "brand": "Dell", "category": "General Servers", "price": "21,078,380", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+XE864", "specs": {"CPU": "Поддержка двух процессоров Intel Xeon Scalable (4-го поколения)./Поддержка технологии Intel Optane.", "内存": "Поддержка до 6 ТБ DDR5 ECC RDIMM/LRDIMM./Двадцать четыре слота DIMM (по двенадцать на процессор).", "外形": "2U"}},
    {"id": 84, "name": "Dell PowerEdge R7525", "brand": "Dell", "category": "General Servers", "price": "2,253,470", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R7525", "specs": {"CPU": "Два процессора AMD EPYC™ 3-го поколения, до 64 ядер на процессор", "内存": "до 3200 МТ/с, 32 разъема, max ОЗУ, RDIMM: 2 Тбайт, LRDIMM: 4 Тбайт", "外形": "2U"}},
    {"id": 93, "name": "Dell PowerEdge R750xa", "brand": "Dell", "category": "General Servers", "price": "10,028,870", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R750x", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Scalable 3-го поколения, до 40 ядер на процессор, Опциональная поддержка прямого жидкостного охлаждения (DCLC): да", "内存": "до 3200 МТ/с, 32 разъема, max ОЗУ, RDIMM: 2 Тбайт, LRDIMM: 4 Тбайт", "外形": "2U"}},
    {"id": 107, "name": "Dell PowerEdge R660", "brand": "Dell", "category": "General Servers", "price": "5,474,777", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R660", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® вплоть до 4-го поколения, до 56 ядер на процессор и опциональная технология Intel® QuickAssist", "内存": "до 4800 МТ/с, , 32 разъема, max ОЗУ, RDIMM 4 Тбайт"}},
    {"id": 116, "name": "Dell PowerEdge R740xd2", "brand": "Dell", "category": "General Servers", "price": "3,003,714", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R740x", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 2-го поколения, до 22 ядер на процессор", "内存": "до 2666 MT/с, 16 разъемов, max ОЗУ, RDIMM: 1 Тбайт", "外形": "2U"}},
    {"id": 123, "name": "Dell PowerEdge R840", "brand": "Dell", "category": "General Servers", "price": "2,194,660", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R840", "specs": {"CPU": "До четырех процессоров Intel® Xeon® Scalable 2-го поколения, до 28 ядер на процессор", "内存": "до 2933 МТ/с, RDIMM, LRDIMM, DCPMM, 48 слотов для DDR4 DIMM, max ОЗУ, RDIMM: 3 Тбайт, LRDIMM: 6 Тбайт, NVDIMM: 384 Гбайт, DCPMM: 12,28 Тбайт"}},
    {"id": 124, "name": "Dell PowerEdge T630 8LFF", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T630+", "specs": {"CPU": "Процессор Intel® Xeon® семейства E5 2600 v4"}},
    {"id": 131, "name": "Dell PowerEdge T150 4LFF", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T150+", "specs": {"CPU": "Один процессор Intel® Xeon® серии E-2300, до 8 ядер на процессор, Один процессор Intel® Pentium® до 2 ядер на процессор"}},
    {"id": 133, "name": "Dell PowerEdge R630 8SFF", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R630+", "specs": {"CPU": "Процессор Intel® Xeon® семейства E5 2600 v4", "内存": "до 1,5 Тбайта (24 разъема для модулей памяти DIMM), до 2 400 МТ/с"}},
    {"id": 134, "name": "Dell PowerEdge C4130", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+C4130", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® семейства E5-2600 v4", "内存": "до 2400 МТ/с, 16 слотов разъемов DIMM"}},
    {"id": 135, "name": "Dell PowerEdge R530", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R530", "specs": {"CPU": "Процессоры семейства Intel® Xeon® E5-2600 v4, Разъемы для процессоров: 2", "内存": "Модули DIMM DDR4, до 2133 МТ/с; 12 разъемов для модулей DIMM: 4/8/16/32 Гбайт"}},
    {"id": 136, "name": "Dell R430", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+R430", "specs": {"CPU": "Процессоры семейства Intel® Xeon® E5-2600 v4, Разъемы для процессоров: 2", "内存": "до 2133 МТ/с, max ОЗУ: до 384 Гбайт (12 разъемов DIMM)"}},
    {"id": 139, "name": "Dell PowerEdge R440", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R440", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Scalable 2-го поколения, до 22 ядер на процессор", "内存": "до 2666 МТ/с, 16 слотов, max ОЗУ, RDIMM: 512 Гбайт, LRDIMM: 1 Тбайт,"}},
    {"id": 140, "name": "Dell PowerEdge R340", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R340", "specs": {"CPU": "Не более одного процессора Intel® Xeon® семейства E-2200, до 8 ядер, Не более одного процессора Intel® Pentium® G5420, до 2 ядер, Не более одного процессора Intel® Core i3® 9100 до 4 ядер, Не более одного процессора Intel® Celeron® G4930, до 2 ядер", "内存": "до 2666 МТ/с, UDIMM: 64 Гбайт"}},
    {"id": 143, "name": "Dell PowerEdge T40", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T40", "specs": {"CPU": "Не более одного процессора Intel® Xeon® E"}},
    {"id": 144, "name": "Dell PowerEdge R540", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R540", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Scalable 2-го поколения, до 20 ядер на процессор", "内存": "до 2666 МТ/с, 16 слотов, max ОЗУ, RDIMM: 512 Гбайт, LRDIMM: 1 Тбайт,"}},
    {"id": 155, "name": "Dell PowerEdge R230", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R230", "specs": {"CPU": "Один процессор из следующих семейств: Семейство процессоров Intel® Xeon® E3-1200 v6, Intel Pentium®, Intel Core i3®, Intel Celeron®", "内存": "до 2400 МТ/с, UDIMM, до 64 Гбайт"}},
    {"id": 157, "name": "Dell PowerEdge R7615", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R7615", "specs": {"CPU": "1 процессор AMD EPYC™ 4-го поколения серии 9004, до 96 ядер на процессор", "内存": "до 4800 МТ/с, 12 слотов, max ОЗУ: RDIMM 768 Тбайт"}},
    {"id": 176, "name": "Dell PowerEdge T130", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T130", "specs": {"CPU": "Один процессор из следующих семейств:, Семейство процессоров Intel® Xeon® E3-1200 v6, Intel Pentium®, Intel Core i3®, Intel Celeron®"}},
    {"id": 179, "name": "Dell PowerEdge R6415", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R6415", "specs": {"CPU": "Один процессор AMD EPYC™, до 32 ядер, Один полный стек из процессора AMD SP3, НТМ до 180 Вт, до 32 ядер", "内存": "до 2666 МТ/с, 16 слотов, RDIMM: 512 Гбайт, LRDIMM: 1 Тбайт"}},
    {"id": 183, "name": "Dell PowerEdge R940", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R940", "specs": {"CPU": "До четырех процессоров Intel® Xeon® Scalable 2-го поколения,, до 28 ядер на процессор", "内存": "до 2933 МТ/с, RDIMM, LRDIMM, DCPMM, 48 слотов для DDR4 DIMM, max ОЗУ, RDIMM: 3 Тбайт, LRDIMM: 6 Тбайт, NVDIMM: 384 Гбайт, DCPMM: 12,28 Тбайт"}},
    {"id": 184, "name": "Dell PowerEdge R330", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R330", "specs": {"CPU": "Один процессор из следующих семейств: Семейство процессоров Intel® Xeon® E3-1200 v6, Intel Pentium®, Intel Core i3®, Intel Celeron®", "内存": "до 2400 МТ/с, UDIMM, до 64 Гбайт"}},
    {"id": 191, "name": "Dell PowerEdge R250", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R250", "specs": {"CPU": "Один процессор Intel Xeon серии E-2300, до 8 ядер; Один процессор Intel Pentium, до 2 ядер", "内存": "до 3200 МТ/с, 4 слота DDR4 DIMM, max ОЗУ, UDIMM 128 Гбайт"}},
    {"id": 192, "name": "Dell PowerEdge R830", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R830", "specs": {"CPU": "Процессор Intel® Xeon® семейства E5-4600 v4", "内存": "48 разъемов для модулей DIMM: модули DDR4, RDIMM и LRDIMM объемом 8/16/32/64 Гбайта"}},
    {"id": 194, "name": "Dell PowerEdge T350", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T350", "specs": {"CPU": "Один процессор Intel® Xeon® серии E-2300, до 8 ядер на процессор, Один процессор Intel® Pentium®, до 2 ядер на процессор"}},
    {"id": 198, "name": "Dell PowerEdge R730xd", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R730x", "specs": {"CPU": "Процессор Intel® Xeon® семейства E5 2600 v4", "内存": "до 2400 МТ/с, 24 разъема DIMM, До 3 Тбайт"}},
    {"id": 202, "name": "Dell PowerEdge R7515", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R7515", "specs": {"CPU": "Один процессор AMD EPYC™ 3-го поколения, до 64 ядер", "内存": "до 3200 МТ/с, 16 слотов max ОЗУ, RDIMM: 1 Тбайт, LRDIMM: 2 Тбайт"}},
    {"id": 205, "name": "Dell PowerEdge R6615", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R6615", "specs": {"CPU": "1 процессор AMD EPYC™ 4-го поколения серии 9004, до 96 ядер на процессор", "内存": "до 4800 МТ/с, 12 слотов, max ОЗУ: RDIMM 768 Тбайт"}},
    {"id": 207, "name": "Dell PowerEdge R930", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R930", "specs": {"CPU": "Семейство процессоров Intel® Xeon® E7-8800, Семейство процессоров Intel® Xeon® E7-4800", "内存": "96 модулей DIMM: модули RDIMM и LRDIMM объемом 8 Гбайт/16 Гбайт/32 Гбайт/64 Гбайт/128 Гбайт"}},
    {"id": 209, "name": "Dell PowerEdge R730", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R730", "specs": {"CPU": "Процессор Intel® Xeon® семейства E5-2600 v4", "内存": "до 3 Тбайт (24 разъема для модулей памяти DIMM), до 2 400 МТ/с"}},
    {"id": 212, "name": "Dell PowerEdge R6525", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R6525", "specs": {"CPU": "Два процессора AMD EPYC™ 3-го поколения, до 64 ядер на процессор", "内存": "до 3200 МТ/с, 32 разъема, max ОЗУ, RDIMM: 2 Тбайт, LRDIMM: 4 Тбайт"}},
    {"id": 216, "name": "Dell PowerEdge R350", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R350", "specs": {"CPU": "Один процессор Intel® Xeon® серии E-2300, до 8 ядер на процессор, Один процессор Intel® Pentium®, до 2 ядер на процессор", "内存": "до 3200 МТ/с, 4 слота DDR4 DIMM, max ОЗУ, UDIMM 128 Гбайт"}},
    {"id": 217, "name": "Dell PowerEdge R6515", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R6515", "specs": {"CPU": "Один процессор AMD EPYC™ 3-го поколения, до 64 ядер", "内存": "до 3200 МТ/с, 16 слотов, max ОЗУ, RDIMM: 1 Тбайт, LRDIMM: 2 Тбайт"}},
    {"id": 219, "name": "Dell PowerEdge T330", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T330", "specs": {"CPU": "Один процессор из следующих семейств:, Семейство процессоров Intel® Xeon® E3-1200 v6, Intel Pentium®, Intel Core i3®, Intel Celeron®"}},
    {"id": 220, "name": "Dell PowerEdge T430", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T430", "specs": {"CPU": "Процессор Intel® Xeon® семейства E5-2600 v4, Разъемы для процессоров: 2"}},
    {"id": 223, "name": "Dell PowerEdge T340", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T340", "specs": {"CPU": "Не более одного процессора Intel® Xeon® семейства E-2200, до 8 ядер, Не более одного процессора Intel® Pentium® G5420, до 2 ядер, Не более одного процессора Intel® Core i3® 9100 до 4 ядер, Не более одного процессора Intel® Celeron® G4930, до 2 ядер"}},
    {"id": 230, "name": "Dell PowerEdge T550", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T550", "specs": {"CPU": "До двух процессоров Intel Xeon Scalable 3-го поколения, до 32 ядер на процессор"}},
    {"id": 237, "name": "Dell PowerEdge T140", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+T140", "specs": {"CPU": "Не более одного процессора Intel® Xeon® семейства E-2200, до 6 ядер, Не более одного процессора Intel® Pentium® G5420, до 2 ядер, Не более одного процессора Intel® Core i3® 9100, до 4 ядер, Не более одного процессора Intel® Celeron® G4930, до 2 ядер"}},
    {"id": 239, "name": "Dell PowerEdge R7415", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R7415", "specs": {"CPU": "Один процессор AMD EPYC™, до 32 ядер", "内存": "до 2666 МТ/с, 16 слотов, RDIMM: 512 Гбайт, LRDIMM: 1 Тбайт"}},
    {"id": 241, "name": "Dell PowerEdge R240", "brand": "Dell", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R240", "specs": {"CPU": "Не более одного процессора Intel® Xeon® семейства E-2200, до 8 ядер, Не более одного процессора Intel® Pentium® G5420, до 2 ядер, Не более одного процессора Intel® Core i3® 9100 до 4 ядер, Не более одного процессора Intel® Celeron® G4930, до 2 ядер", "内存": "до 2666 МТ/с, , UDIMM: 64 Гбайт"}},
    {"id": 286, "name": "Dell PowerEdge XE9680", "brand": "Dell", "category": "General Servers", "price": "19,255,036", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+XE968", "specs": {"CPU": "два масштабируемых процессора Intel ® Xeon ® 4-го поколения с количеством ядер до 56 на процессор", "内存": "До 4800 МТ/с, RDIMM, 32 слота DDR5 DIMM, RDIMM Макс. 4 ТБ"}},
    {"id": 288, "name": "Dell PowerEdge R750", "brand": "Dell", "category": "General Servers", "price": "1,610,529", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R750", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Scalable 3-го поколения, до 40 ядер на процессор, Опциональная поддержка прямого жидкостного охлаждения (DCLC): да", "内存": "до 3200 МТ/с, 32 разъема, max ОЗУ, RDIMM: 2 Тбайт, LRDIMM: 4 Тбайт"}},
    {"id": 297, "name": "Dell PowerEdge R740xd", "brand": "Dell", "category": "General Servers", "price": "1,016,609", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R740x", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 2-го поколения, до 28 ядер на процессор", "内存": "до 2933 МТ/с, 24 слота, max ОЗУ, RDIMM: 1,53 Тбайт, LRDIMM: 3 Тбайт, NVDIMM: 192 Гбайт, DCPMM: 6,14 Тбайт"}},
    {"id": 299, "name": "Dell PowerEdge R960", "brand": "Dell", "category": "General Servers", "price": "4,025,359", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R960", "specs": {"CPU": "До 4 процессоров Intel Xeon Scalable 4-го поколения (Ice Lake), до 60 ядер на процессор", "内存": "До 64 слотов DDR5 RDIMM, поддержка ECC, скорость до 4800 МТ/с"}},
    {"id": 301, "name": "Dell PowerEdge R650", "brand": "Dell", "category": "General Servers", "price": "1,255,112", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R650", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Scalable 3-го поколения, до 40 ядер на процессор, Опциональная поддержка прямого жидкостного охлаждения (DCLC): да", "内存": "до 3200 МТ/с, 32 разъема, max ОЗУ, RDIMM: 2 Тбайт, LRDIMM: 4 Тбайт"}},
    {"id": 304, "name": "Dell PowerEdge R640", "brand": "Dell", "category": "General Servers", "price": "908,689", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+R640", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Scalable, до 28 ядер", "内存": "24 разъема для DDR4 DIMM, до 2 666 MT/с, емкость до 3 Тбайт, до 12 модулей NVDIMM, емкость до 192 Гбайт"}},
    {"id": 343, "name": "Dell PowerEdge XE7745", "brand": "Dell", "category": "General Servers", "price": "7,982,958", "img": "https://via.placeholder.com/600x400?text=Dell+PowerEdge+XE774", "specs": {"CPU": "2 × AMD EPYC 9005 (5-е поколение), до 192 ядер на процессор", "内存": "До 2,3 ТБ DDR5, 24 DIMM-слота"}},

    // --- ELEX (2款) ---
    {"id": 240, "name": "ELEX  EL-SRV-BTC4201", "brand": "ELEX", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ELEX++EL-SRV-BTC4201", "specs": {"CPU": "1x Intel Core i9-13900K", "内存": "32Gb"}},
    {"id": 265, "name": "ELEX  EL-URM-BTC4222", "brand": "ELEX", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ELEX++EL-URM-BTC4222", "specs": {"CPU": "1x Intel Core i9-13900K", "内存": "16Gb"}},

    // --- Fujitsu (1款) ---
    {"id": 126, "name": "Fujitsu PRIMERGY RX1330 M5", "brand": "Fujitsu", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Fujitsu+PRIMERGY+RX1", "specs": {"CPU": "Intel® Xeon® E-2300 processor family, Intel® Pentium® processor", "内存": "8 GB - 128 GB, UDIMM (DDR4)"}},

    // --- Gigabyte (12款) ---
    {"id": 8, "name": "Gigabyte  H100 Nvidia", "brand": "Gigabyte", "category": "GPU Servers", "price": "3,120,918", "img": "https://via.placeholder.com/600x400?text=Gigabyte++H100+Nvidi", "specs": {"CPU": "Intel Xeon Gold 6548N", "GPU": "H100 80G PCIE", "型号": "R283-S93-AAL1 | G593-SD2-AAX1 | AS-2115HS-TR"}},
    {"id": 11, "name": "Gigabyte  H200 Nvidia", "brand": "Gigabyte", "category": "GPU Servers", "price": "2,039,982", "img": "https://via.placeholder.com/600x400?text=Gigabyte++H200+Nvidi", "specs": {"CPU": "Dual AMD EPYC™ 9005/9004 Series Processors, Turin 9135 DP/UP, 16 ядер / 32 потока, 3.65 ГГц, 64 МБ кэш, 200 Вт, SP5 HF, RoHS", "GPU": "NVIDIA H100 80GB PCIe 5.0 x16", "型号": "G494-ZB4-AAP2 | AS-2015HS-TNR"}},
    {"id": 25, "name": "Gigabyte  B200 Nvidia", "brand": "Gigabyte", "category": "GPU Servers", "price": "41,396,178", "img": "https://via.placeholder.com/600x400?text=Gigabyte++B200+Nvidi", "specs": {"CPU": "Intel 8558, 48 ядер, 2.1 ГГц, 260 МБ кэш, 300 Вт", "GPU": "NVIDIA HGX™ B200", "型号": "G893-SD1-AAX5"}},
    {"id": 34, "name": "Gigabyte  B300 Nvidia", "brand": "Gigabyte", "category": "GPU Servers", "price": "57,594,556", "img": "https://via.placeholder.com/600x400?text=Gigabyte++B300+Nvidi", "specs": {"CPU": "Intel Xeon 6767P, 64 ядра / 128 потоков, 2.4 ГГц, 350 Вт TDP", "GPU": "NVIDIA Blackwell Ultra (HGX B300 baseboard) с общим объёмом памяти 2", "型号": "D75H-10U HGX B300"}},
    {"id": 47, "name": "Gigabyte  RTX PRO6000 Nvidia", "brand": "Gigabyte", "category": "GPU Servers", "price": "2,561,390", "img": "https://via.placeholder.com/600x400?text=Gigabyte++RTX+PRO600", "specs": {"CPU": "Intel Xeon 6521P", "GPU": "NVIDIA RTX PRO6000", "型号": "XV24-SU0-AAJ1"}},
    {"id": 83, "name": "Gigabyte HPC G494-ZB4-AAP2", "brand": "Gigabyte", "category": "General Servers", "price": "39,931,334", "img": "https://via.placeholder.com/600x400?text=Gigabyte+HPC+G494-ZB", "specs": {"CPU": "2× AMD EPYC™ 9005/9004 Series (до 192 ядер суммарно)", "内存": "48× DDR5 RDIMM, 12-канальная архитектура, поддержка до нескольких терабайт"}},
    {"id": 120, "name": "Gigabyte  R283-S93-AAL1", "brand": "Gigabyte", "category": "General Servers", "price": "10,000,211", "img": "https://via.placeholder.com/600x400?text=Gigabyte++R283-S93-A", "specs": {"CPU": "Поддержка двух процессоров AMD EPYC (1-го и 2-го поколения).", "内存": "Поддержка до 4 ТБ DDR4 ECC RDIMM/LRDIMM./Двадцать четыре слота DIMM (по двенадцать на процессор).", "外形": "2U"}},
    {"id": 146, "name": "Gigabyte  G593-SD2-AAX1", "brand": "Gigabyte", "category": "General Servers", "price": "30,686,811", "img": "https://via.placeholder.com/600x400?text=Gigabyte++G593-SD2-A", "specs": {"CPU": "2 × Intel Xeon Scalable 4-го или 5-го поколения, поддержка Intel Xeon CPU Max Series | 1 × AMD EPYC серии 9004/9005 (Socket SP5)", "内存": "32 слота DDR5 RDIMM, 8-канальная архитектура памяти на процессор"}},
    {"id": 233, "name": "Gigabyte  G893-SD1-AAX5", "brand": "Gigabyte", "category": "General Servers", "price": "41,396,178", "img": "https://via.placeholder.com/600x400?text=Gigabyte++G893-SD1-A", "specs": {"CPU": "2× Intel Xeon Scalable (4-е или 5-е поколение, LGA 4677)", "内存": "До 32× DDR5 RDIMM, максимум до 8 ТБ"}},
    {"id": 303, "name": "Gigabyte  XV24-SU0-AAJ1", "brand": "Gigabyte", "category": "General Servers", "price": "2,561,390", "img": "https://via.placeholder.com/600x400?text=Gigabyte++XV24-SU0-A", "specs": {"CPU": "2× Intel Xeon Gold 6442Y (24 ядра, 48 потоков, 2.6–4.0 ГГц, 225 Вт TDP)", "GPU": "NVIDIA RTX PRO6000", "内存": "16× 64GB DDR5 4800 MHz (максимальный объём свыше 1 ТБ)"}},
    {"id": 312, "name": "Gigabyte  D75H-10U HGX B300", "brand": "Gigabyte", "category": "General Servers", "price": "57,594,556", "img": "https://via.placeholder.com/600x400?text=Gigabyte++D75H-10U+H", "specs": {"CPU": "2× Intel Xeon 6767P, 64 ядра / 128 потоков, 2.4 ГГц, 350 Вт TDP", "内存": "до 32× DDR5 DIMM, частота до 6400 МГц"}},
    {"id": 342, "name": "Gigabyte  XL44-SX2-AAS1", "brand": "Gigabyte", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Gigabyte++XL44-SX2-A", "specs": {"CPU": "Процессоры Intel® Xeon® 6", "内存": "32 слота DIMM"}},

    // --- H3C (5款) ---
    {"id": 13, "name": "H3C  RTX A4000 Nvidia", "brand": "H3C", "category": "GPU Servers", "price": "1,830,087", "img": "https://via.placeholder.com/600x400?text=H3C++RTX+A4000+Nvidi", "specs": {"CPU": "Intel Xeon Gold 6348", "GPU": "NVIDIA RTXA4000 X710", "型号": "R5300G5"}},
    {"id": 44, "name": "H3C  P800 Nvidia", "brand": "H3C", "category": "GPU Servers", "price": "18,809,919", "img": "https://via.placeholder.com/600x400?text=H3C++P800+Nvidia", "specs": {"CPU": "Intel Xeon Platinum 8563C", "GPU": "P800 OAM GPUs", "型号": "R5300G6"}},
    {"id": 75, "name": "H3C UniServer R5500 G5", "brand": "H3C", "category": "General Servers", "price": "7,952,289", "img": "https://via.placeholder.com/600x400?text=H3C+UniServer+R5500+", "specs": {"CPU": "Поддержка до 2 Intel Xeon 3-го поколения (до 40 ядер, 270 Вт) или 2 AMD EPYC Rome/Milan (до 64 ядер, 280 Вт)", "GPU": "NVIDIA A100 80GB SXM модулями", "内存": "До 32 слотов DDR4 3200 MT/s, поддержка RDIMM/LRDIMM, Intel Optane PMem 200 до 12 ТБ (для Intel)"}},
    {"id": 115, "name": "H3C  R5300G5", "brand": "H3C", "category": "General Servers", "price": "1,830,087", "img": "https://via.placeholder.com/600x400?text=H3C++R5300G5", "specs": {"CPU": "Поддержка двух процессоров Intel Xeon Scalable (1-го и 2-го поколения).", "内存": "Поддержка до 2 ТБ DDR4 ECC RDIMM/LRDIMM./Восемь слотов DIMM на процессор."}},
    {"id": 307, "name": "H3C UniServer R5300G6", "brand": "H3C", "category": "General Servers", "price": "18,809,919", "img": "https://via.placeholder.com/600x400?text=H3C+UniServer+R5300G", "specs": {"CPU": "2× Intel Xeon Scalable 4-го/5-го поколения, до 64 ядер на CPU", "GPU": "P800 OAM GPUs", "内存": "До 32× DDR5 RDIMM или LRDIMM, частота до 5600MT/s, максимальный объем — 12 ТБ"}},

    // --- HP (3款) ---
    {"id": 57, "name": "HP ProLiant DL380", "brand": "HP", "category": "General Servers", "price": "798,851", "img": "https://via.placeholder.com/600x400?text=HP+ProLiant+DL380", "specs": {"CPU": "Масштабируемые процессоры Intel® Xeon® 5-го поколения и Масштабируемые процессоры Intel® Xeon® 4-го поколения", "内存": "8 ТБ с 256 ГБ DDR5"}},
    {"id": 122, "name": "HP ProLiant DL360 Gen10", "brand": "HP", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HP+ProLiant+DL360+Ge", "specs": {"CPU": "Intel® Xeon® Scalable 8100/8200 Series - Intel® Xeon® Scalable 3100/3200 Series", "内存": "до 3 ТБ с 128 ГБ DDR4; 6 ТБ с HPE 512GB 2666."}},
    {"id": 130, "name": "HP Proliant DL20 Gen10", "brand": "HP", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HP+Proliant+DL20+Gen", "specs": {"CPU": "Intel® Xeon® E-2300 Series", "内存": "до 128 ГБ"}},

    // --- HPE (13款) ---
    {"id": 16, "name": "HPE  H100 Nvidia", "brand": "HPE", "category": "GPU Servers", "price": "7,349,349", "img": "https://via.placeholder.com/600x400?text=HPE++H100+Nvidia", "specs": {"GPU": "NVIDIA H100 80GB PCIe", "型号": "ProLiant DL380 Gen11 | R760"}},
    {"id": 67, "name": "HPE ProLiant DL360 Gen11", "brand": "HPE", "category": "General Servers", "price": "1,348,502", "img": "https://via.placeholder.com/600x400?text=HPE+ProLiant+DL360+G", "specs": {"CPU": "Intel® Xeon® 5-го поколения и Масштабируемые процессоры Intel® Xeon® 4-го поколения", "内存": "4,0 ТБ на сокет при использовании 256 ГБ DDR5"}},
    {"id": 88, "name": "HPE Synergy 12000 frame", "brand": "HPE", "category": "General Servers", "price": "963,649", "img": "https://via.placeholder.com/600x400?text=HPE+Synergy+12000+fr", "specs": {"CPU": "Intel Xeon Scalable и AMD EPYC."}},
    {"id": 89, "name": "HPE Synergy 480 Gen10 Plus (H12161111)", "brand": "HPE", "category": "General Servers", "price": "3,690,069", "img": "https://via.placeholder.com/600x400?text=HPE+Synergy+480+Gen1", "specs": {"CPU": "Процессор Intel Xeon-Platinum 8362 с частотой 2.8GHz, 32 ядрами и TDP 265W, оптимизированный для использования в серверах HPE"}},
    {"id": 111, "name": "HPE ProLiant DL360 Gen10 Plus", "brand": "HPE", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HPE+ProLiant+DL360+G", "specs": {"CPU": "Intel® Xeon® Scalable 8300 Series, Intel® Xeon® Scalable 6300 Series", "内存": "до 6 ТБ на гнездо"}},
    {"id": 112, "name": "HPE ProLiant DL380 Gen10", "brand": "HPE", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HPE+ProLiant+DL380+G", "specs": {"CPU": "Intel® Xeon® Scalable 8100/8200 Series Intel® Xeon® Scalable 6100/6200 Series Intel® Xeon® Scalable 5100/5200 Series Intel® Xeon® Scalable 4100/4200 Series Intel® Scalable 3100/3200 Series", "内存": "до 3 ТБ с 128 ГБ DDR4, в зависимости от модели процессора; 6 ТБ с HPE 512GB 2666"}},
    {"id": 128, "name": "HPE ProLiant DL385 Gen10 Plus v2", "brand": "HPE", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HPE+ProLiant+DL385+G", "specs": {"CPU": "AMD EPYC ™ 3-го поколения", "内存": "до 8 ТБ с 256 ГБ DDR4"}},
    {"id": 138, "name": "HPE Synergy 480 Gen10 Plus (H1141111)", "brand": "HPE", "category": "General Servers", "price": "1,104,672", "img": "https://via.placeholder.com/600x400?text=HPE+Synergy+480+Gen1", "specs": {"CPU": "Процессор Intel Xeon-Platinum 8362 с частотой 2.8GHz, 32 ядрами и TDP 265W, оптимизированный для использования в серверах HPE"}},
    {"id": 141, "name": "HPE ProLiant DL180 Gen10", "brand": "HPE", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HPE+ProLiant+DL180+G", "specs": {"CPU": "Intel® Xeon® Scalable 3200-8200 Series & Intel® Xeon® Scalable 3100-6100 Series", "内存": "до 1 ТБ с 64 ГБ DDR4"}},
    {"id": 145, "name": "HPE ProLiant DL160 Gen10", "brand": "HPE", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HPE+ProLiant+DL160+G", "specs": {"CPU": "Intel® Xeon® Scalable 3200-8200 Series & Intel® Xeon® Scalable 3100-8100 Series", "内存": "до 1 ТБ с 64 ГБ DDR4"}},
    {"id": 180, "name": "HPE ProLiant DL385 Gen10 Plus", "brand": "HPE", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HPE+ProLiant+DL385+G", "specs": {"CPU": "2-е поколение AMD EPYC ™ 7000 Series", "内存": "до 4 ТБ с 128 ГБ DDR4"}},
    {"id": 204, "name": "HPE ProLiant DL380 Gen10 Plus", "brand": "HPE", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HPE+ProLiant+DL380+G", "specs": {"CPU": "Масштабируемые процессоры 3-го поколения Intel® Xeon®", "内存": "до 8 ТБ - RDIMM (4 ТБ на процессор), 11,2 ТБ - LRDIMM и Intel® Optane ™ (5,6 ТБ на процессор с 8x, LRDIMM и 8X 512 ГБ Intel Optane)"}},
    {"id": 218, "name": "HPE ProLiant DL325 Gen10 Plus v2", "brand": "HPE", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=HPE+ProLiant+DL325+G", "specs": {"CPU": "AMD EPYC ™ 3-го поколения", "内存": "до 4 ТБ с 256 ГБ DDR4"}},

    // --- Huawei (5款) ---
    {"id": 30, "name": "Huawei  RTX 4090 Nvidia", "brand": "Huawei", "category": "GPU Servers", "price": "726,274", "img": "https://via.placeholder.com/600x400?text=Huawei++RTX+4090+Nvi", "specs": {"CPU": "Intel Xeon Platinum 8368", "GPU": "NVIDIA RTX 4090 24GB", "型号": "DP2210"}},
    {"id": 60, "name": "Huawei 2288H V6", "brand": "Huawei", "category": "General Servers", "price": "1,772,292", "img": "https://via.placeholder.com/600x400?text=Huawei+2288H+V6", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 3-го поколения", "内存": "32 (12 ТБ)", "外形": "2U"}},
    {"id": 81, "name": "Huawei 1288H V5", "brand": "Huawei", "category": "General Servers", "price": "1,532,083", "img": "https://via.placeholder.com/600x400?text=Huawei+1288H+V5", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 2-го поколения", "内存": "24 (7,5 ТБ)", "外形": "1U"}},
    {"id": 106, "name": "Huawei 2288H V5", "brand": "Huawei", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Huawei+2288H+V5", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 2-го поколения", "内存": "24 (7,5 ТБ)"}},
    {"id": 309, "name": "Huawei  DP2210", "brand": "Huawei", "category": "General Servers", "price": "726,274", "img": "https://via.placeholder.com/600x400?text=Huawei++DP2210", "specs": {"CPU": "2× Intel Xeon Gold 6348", "GPU": "NVIDIA RTX 4090 24GB", "内存": "16× 32GB DDR4"}},

    // --- INFERIT (2款) ---
    {"id": 310, "name": "INFERIT  GR2X2G4V1-D24", "brand": "INFERIT", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=INFERIT++GR2X2G4V1-D", "specs": {"CPU": "Intel Xeon Scalable 4-го и 5-го поколений", "内存": "32 слота DDR5 RDIMM 4400/4800 МГц, до 8 ТБ оперативной памяти"}},
    {"id": 338, "name": "INFERIT  GR2X2G4V1-D12", "brand": "INFERIT", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=INFERIT++GR2X2G4V1-D", "specs": {"CPU": "Процессоры 4th/5th Gen Intel Xeon Scalable", "内存": "32 DIMM слотов c поддержкой DDR5 RDIMM 4400/4800 МГц"}},

    // --- ITPOD (10款) ---
    {"id": 319, "name": "ITPOD  SYR8108G-D12R-G5", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++SYR8108G-D12R", "specs": {"CPU": "2 x AMD EPYC 9004/9005 (TDP до 400W)", "内存": "24 слота памяти DDR5 RDIMM 4800/5600/6400MHz"}},
    {"id": 321, "name": "ITPOD  AS4105G-D12R-G3", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++AS4105G-D12R-", "specs": {"CPU": "2 х Intel Xeon Scalable 3-го поколения", "内存": "16 слотов памяти DDR4 RDIMM/LRDIMM 3200MHz"}},
    {"id": 324, "name": "ITPOD  ASR201-S08R(AI)", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++ASR201-S08R(A", "specs": {"CPU": "1 x AMD EPYC 7003 серии (Milan)\nTDP до 200 Вт, активный радиатор (с доп. вентилятором)", "内存": "16 слота памяти DDR4 RDIMM 3200MHz"}},
    {"id": 326, "name": "ITPOD  ASR4110G-D10R-G3", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++ASR4110G-D10R", "specs": {"CPU": "2 x AMD EPYC 7003 (Milan)", "内存": "16 слотов памяти DDR4 RDIMM/LRDIMM 3200MHz"}},
    {"id": 329, "name": "ITPOD  ASR4105G-D12R-G3", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++ASR4105G-D12R", "specs": {"CPU": "2 x AMD EPYC 7003 (Milan)", "内存": "16 слотов памяти DDR4 RDIMM/LRDIMM 3200MHz"}},
    {"id": 332, "name": "ITPOD  SYR4108G-D12R-G5", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++SYR4108G-D12R", "specs": {"CPU": "2 x AMD EPYC 9005-серии (\"Turin\")\n(TDP до 350 Вт)", "内存": "24 слота памяти DDR5 RDIMM 4800/6400MHz"}},
    {"id": 334, "name": "ITPOD  SYR4108G-D24R-G5", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++SYR4108G-D24R", "specs": {"CPU": "2 x AMD EPYC 9004/9005\n(TDP до 500 Вт)", "内存": "24 слота памяти DDR5 RDIMM 4800/6400MHz"}},
    {"id": 336, "name": "ITPOD  AS4110G-D10R-G3", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++AS4110G-D10R-", "specs": {"CPU": "2 х Intel Xeon Scalable 3-го поколения", "内存": "16 слотов памяти DDR4 RDIMM/LRDIMM 3200MHz"}},
    {"id": 341, "name": "ITPOD  AS4110G-D04R-G4", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++AS4110G-D04R-", "specs": {"CPU": "2 х Intel Xeon Scalable 4/5-го поколения", "内存": "16 слотов памяти DDR5 RDIMM 56000MHz"}},
    {"id": 344, "name": "ITPOD  SY4108G-D12R-G4", "brand": "ITPOD", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=ITPOD++SY4108G-D12R-", "specs": {"CPU": "2 x Intel Xeon Scalable 5-ого поколения", "内存": "32 слота памяти DDR5 RDIMM 5600MHz"}},

    // --- Inspur (8款) ---
    {"id": 42, "name": "Inspur  H20 Nvidia", "brand": "Inspur", "category": "GPU Servers", "price": "21,457,236", "img": "https://via.placeholder.com/600x400?text=Inspur++H20+Nvidia", "specs": {"CPU": "Intel Xeon 8558P, 2.7 GHz, 48 cores each", "GPU": "GPU H20", "型号": "NF5688M7"}},
    {"id": 62, "name": "Inspur Kaytus KR6288-X2", "brand": "Inspur", "category": "General Servers", "price": "30,867,250", "img": "https://via.placeholder.com/600x400?text=Inspur+Kaytus+KR6288", "specs": {"CPU": "2 × Intel Xeon Scalable 4-го или 5-го поколения (до 350 Вт TDP на ЦП)", "内存": "До 32 × DDR5 RDIMM, 5600 МТ/с"}},
    {"id": 100, "name": "Inspur  NF5280M5", "brand": "Inspur", "category": "General Servers", "price": "1,389,462", "img": "https://via.placeholder.com/600x400?text=Inspur++NF5280M5", "specs": {"CPU": "До 2 масштабируемых процессоров Intel Xeon нового поколения, до 28 ядер и 56 потоков на процессоре, TDP до 205 Вт", "内存": "До 24 × DDR4 DIMM 2400/2666/2933 МТ/с, максимальный объем до 3 ТБ"}},
    {"id": 109, "name": "Inspur  NF8260M6", "brand": "Inspur", "category": "General Servers", "price": "1,700,880", "img": "https://via.placeholder.com/600x400?text=Inspur++NF8260M6", "specs": {"CPU": "До 4 × Intel Xeon Scalable 3-го поколения (Ice Lake), поддержка до 40 ядер процессора", "内存": "До 24 × DDR4 DIMM с частотой 2400/2666/2933 МТ/с, поддержка Intel Optane PMem 200"}},
    {"id": 151, "name": "Inspur  NF5280", "brand": "Inspur", "category": "General Servers", "price": "3,911,179", "img": "https://via.placeholder.com/600x400?text=Inspur++NF5280", "specs": {"CPU": "1–2 × Intel Xeon Scalable 4-го поколения, до 60 ядер на ЦП, частота до 4,2 ГГц, TDP до 350 Вт", "内存": "До 32 × DDR5 DIMM, до 4800 МТ/с, максимум 8 ТБ (2 ЦП)"}},
    {"id": 158, "name": "Inspur  NF5280G7", "brand": "Inspur", "category": "General Servers", "price": "1,345,238", "img": "https://via.placeholder.com/600x400?text=Inspur++NF5280G7", "specs": {"CPU": "До 2 × AMD EPYC™ 4-го поколения, до 128 ядер и 256 потоков на ЦП, до 400 Вт TDP, частота до 4,4 ГГц, L3-кеш до 1150 МБ", "内存": "До 24 × DDR5 DIMM (12 каналов на процессор), RDIMM и 3DS RDIMM, до 6 ТБ, до 4800 МТ/с"}},
    {"id": 166, "name": "Inspur  NF8260M7", "brand": "Inspur", "category": "General Servers", "price": "13,012,156", "img": "https://via.placeholder.com/600x400?text=Inspur++NF8260M7", "specs": {"CPU": "До 2 масштабируемых процессоров Intel Xeon 3-го/4-го/5-го поколения (LGA 4189), поддержка до 40/60 ядер ЦП", "内存": "До 24 × DDR4 или DDR5 DIMM (в зависимости от поколения), частота 2933–4800 МТ/с, поддержка RDIMM/LRDIMM/NVDIMM"}},
    {"id": 306, "name": "Inspur  NF5688M7", "brand": "Inspur", "category": "General Servers", "price": "21,457,236", "img": "https://via.placeholder.com/600x400?text=Inspur++NF5688M7", "specs": {"CPU": "2× Intel Xeon Scalable 4-го поколения (Sapphire Rapids), до 350 Вт TDP", "GPU": "GPU H20", "内存": "До 32× DDR5 модулей, поддержка до 1536 ГБ или выше при 4800 МГц"}},

    // --- Kaytus (27款) ---
    {"id": 121, "name": "Kaytus  KR1180V3", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR1180V3", "specs": {"CPU": "1 x Intel Xeon 6 (SRF-AP/GNR-AP), до 350 Вт TDP или 1 x AMD EPYC 9005, до 192 ядер, до 5,0 ГГц, до 384 МБ кэша L3", "内存": "До 16 x DDR5 RDIMM или 8 x MCRDIMM (Intel), до 24 x DDR5 DIMM (AMD)"}},
    {"id": 161, "name": "Kaytus  KR2280V3", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR2280V3", "specs": {"CPU": "1 или 2 Intel® Xeon® 6-го поколения / AMD EPYC 9005", "内存": "До 32 DDR5 (Intel) / 24 DDR5 (AMD)"}},
    {"id": 168, "name": "Kaytus  K24V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++K24V2", "specs": {"CPU": "Intel Xeon Scalable 3-го поколения (1-2 CPU)", "内存": "DDR4 (объем зависит от конфигурации)"}},
    {"id": 172, "name": "Kaytus  KR2180V3", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR2180V3", "specs": {"CPU": "1 x AMD EPYC™ серии 9005", "内存": "До 24 DDR5 DIMM"}},
    {"id": 173, "name": "Kaytus  KR4480V3", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR4480V3", "specs": {"CPU": "2 или 4 Intel® Xeon® 6-го поколения", "内存": "До 64 DDR5 DIMMs"}},
    {"id": 178, "name": "Kaytus  KR6880V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR6880V2", "specs": {"CPU": "4 или 8 × 4-го поколения Intel Xeon Scalable, до 480 ядер, 350W TDP", "内存": "До 128 DDR5 RDIMM/3DS RDIMM, 4800MT/s"}},
    {"id": 182, "name": "Kaytus  KR2190V3", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR2190V3", "specs": {"CPU": "1 или 2 процессора Intel Xeon 6 (SRF-AP/GNR-AP) до 500 Вт TDP или AMD EPYC 9005 5-го поколения серии", "内存": "До 12x DDR5 RDIMM (6400 МГц) или MCR DIMM (8800 МГц) на узле"}},
    {"id": 187, "name": "Kaytus  KE2260V1", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KE2260V1", "specs": {"CPU": "Intel Xeon Scalable (1-2 CPU)", "内存": "DDR4 (объем зависит от конфигурации)"}},
    {"id": 196, "name": "Kaytus  KR2460V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR2460V2", "specs": {"CPU": "2 × Intel Xeon Scalable 4-го/5-го поколения", "内存": "До 64 DDR5 DIMM"}},
    {"id": 206, "name": "Kaytus  K22V3", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++K22V3", "specs": {"CPU": "Intel Xeon Scalable 4-го поколения (1 CPU)", "内存": "До 24 DDR5 DIMM"}},
    {"id": 208, "name": "Kaytus  KR1280V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR1280V2", "specs": {"CPU": "До 2 × AMD EPYC™ 9004 серии, до 96 ядер, 400W TDP", "内存": "До 24 DDR5 DIMM (4,800 МГц), до 6 ТБ"}},
    {"id": 213, "name": "Kaytus  KT3020V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KT3020V2", "specs": {"内存": "4 DDR4"}},
    {"id": 221, "name": "Kaytus  K24V3", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++K24V3", "specs": {"CPU": "Intel Xeon Scalable 4-го поколения (1-2 CPU)", "内存": "До 24 DDR5 DIMM"}},
    {"id": 224, "name": "Kaytus  KE1160V1", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KE1160V1", "specs": {"CPU": "Intel Xeon Scalable (предположительно 1-2 CPU)", "内存": "DDR4 (объем зависит от конфигурации)"}},
    {"id": 225, "name": "Kaytus  KE1120V1", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KE1120V1", "specs": {"CPU": "Intel Xeon Scalable (1-2 CPU)", "内存": "DDR4 (объем зависит от конфигурации)"}},
    {"id": 236, "name": "Kaytus  KE4160V1", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KE4160V1", "specs": {"CPU": "Intel Xeon Scalable (1-2 CPU)", "内存": "DDR4 (объем зависит от конфигурации)"}},
    {"id": 243, "name": "Kaytus  KR2266V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR2266V2", "specs": {"CPU": "2 × Intel Xeon Scalable 4-го/5-го поколения", "内存": "До 32 DDR5 DIMM"}},
    {"id": 246, "name": "Kaytus  KR1270V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR1270V2", "specs": {"CPU": "1 или 2 4/5-го поколения Intel® Xeon® Scalable", "内存": "16 DDR5"}},
    {"id": 247, "name": "Kaytus  KR1180V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR1180V2", "specs": {"CPU": "1 × AMD EPYC™ 9004 серии, до 128 ядер, 400W TDP", "内存": "До 24 DDR5 DIMM (4,800 МГц), до 6 ТБ"}},
    {"id": 249, "name": "Kaytus  KR4276V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR4276V2", "specs": {"CPU": "2 или 4 × Intel Xeon Scalable 4-го/5-го поколения", "内存": "До 64 DDR5 DIMM"}},
    {"id": 252, "name": "Kaytus  KR2180V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR2180V2", "specs": {"CPU": "1 × AMD EPYC™ 9004 серии, до 128 ядер, 400W TDP", "内存": "До 24 DDR5 DIMM (4,800 МГц), до 6 ТБ"}},
    {"id": 254, "name": "Kaytus  K22V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++K22V2", "specs": {"CPU": "Intel Xeon Scalable 3-го поколения (1 CPU)", "内存": "DDR4 (объем зависит от конфигурации)"}},
    {"id": 264, "name": "Kaytus  KR4266V3", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR4266V3", "specs": {"CPU": "1 или 2 процессора Intel® Xeon® 6-го поколения", "内存": "До 32 модулей DDR5 DIMM"}},
    {"id": 273, "name": "Kaytus  KR1280V3", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR1280V3", "specs": {"CPU": "1 или 2 Intel® Xeon® 6-го поколения / AMD EPYC 9005", "内存": "До 32 DDR5 (Intel) / 24 DDR5 (AMD)"}},
    {"id": 275, "name": "Kaytus  KR4266V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR4266V2", "specs": {"CPU": "1 или 2 × Intel Xeon Scalable 4-го/5-го поколения", "内存": "До 32 DDR5 DIMM"}},
    {"id": 277, "name": "Kaytus  KR4480V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR4480V2", "specs": {"CPU": "2 или 4 × Intel Xeon Scalable 4-го/5-го поколения", "内存": "До 64 DDR5 DIMM"}},
    {"id": 282, "name": "Kaytus  KR2280V2", "brand": "Kaytus", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Kaytus++KR2280V2", "specs": {"CPU": "1 или 2 × Intel Xeon Scalable / AMD EPYC 9005", "内存": "До 32 DDR5 (Intel) / 24 DDR5 (AMD)"}},

    // --- Lenovo (62款) ---
    {"id": 7, "name": "Lenovo  H100 Nvidia", "brand": "Lenovo", "category": "GPU Servers", "price": "8,891,395", "img": "https://via.placeholder.com/600x400?text=Lenovo++H100+Nvidia", "specs": {"CPU": "Intel Xeon Gold 6442Y", "GPU": "NVIDIA H100 NVL 94GB PCIe Gen5 Passive GPU"}},
    {"id": 14, "name": "Lenovo  RTX A6000 Nvidia", "brand": "Lenovo", "category": "GPU Servers", "price": "7,172,454", "img": "https://via.placeholder.com/600x400?text=Lenovo++RTX+A6000+Nv", "specs": {"CPU": "AMD EPYC 9534", "GPU": "NVIDIA RTX A6000 48GB PCIe Active GPUs", "外形": "2U"}},
    {"id": 15, "name": "Lenovo  A40 Nvidia", "brand": "Lenovo", "category": "GPU Servers", "price": "2,863,013", "img": "https://via.placeholder.com/600x400?text=Lenovo++A40+Nvidia", "specs": {"CPU": "ThinkSystem AMD EPYC 9254", "GPU": "NVIDIA A40 48GB PCIe Gen4 Passive GPU w/o CEC"}},
    {"id": 19, "name": "Lenovo  A100 Nvidia", "brand": "Lenovo", "category": "GPU Servers", "price": "9,008,180", "img": "https://via.placeholder.com/600x400?text=Lenovo++A100+Nvidia", "specs": {"CPU": "Intel Xeon Gold 6548N", "GPU": "NVIDIA A100 80G"}},
    {"id": 21, "name": "Lenovo  A30 Nvidia", "brand": "Lenovo", "category": "GPU Servers", "price": "2,063,046", "img": "https://via.placeholder.com/600x400?text=Lenovo++A30+Nvidia", "specs": {"CPU": "AMD EPYC 9254", "GPU": "NVIDIA A30 24GB PCIe Gen4 Passive GPU"}},
    {"id": 41, "name": "Lenovo  B200 Nvidia", "brand": "Lenovo", "category": "GPU Servers", "price": "43,124,727", "img": "https://via.placeholder.com/600x400?text=Lenovo++B200+Nvidia", "specs": {"CPU": "Intel Xeon Platinum 8592+", "GPU": "NVIDIA HGX B200 180 GB", "型号": "SR780a V3"}},
    {"id": 43, "name": "Lenovo  L40S Nvidia", "brand": "Lenovo", "category": "GPU Servers", "price": "5,106,072", "img": "https://via.placeholder.com/600x400?text=Lenovo++L40S+Nvidia", "specs": {"GPU": "L40S 48 GB", "内存": "32 × 64GB TruDDR5 6400MHz"}},
    {"id": 46, "name": "Lenovo  H200 Nvidia", "brand": "Lenovo", "category": "GPU Servers", "price": "6,836,480", "img": "https://via.placeholder.com/600x400?text=Lenovo++H200+Nvidia", "specs": {"CPU": "AMD EPYC 9534", "GPU": "NVIDIA H200", "型号": "SR675 V3"}},
    {"id": 48, "name": "Lenovo  A10 Nvidia", "brand": "Lenovo", "category": "GPU Servers", "price": "1,537,171", "img": "https://via.placeholder.com/600x400?text=Lenovo++A10+Nvidia", "specs": {"GPU": "NVIDIA A10 24GB", "内存": "12 × 32GB TruDDR4", "外形": "2U"}},
    {"id": 52, "name": "Lenovo ThinkSystem SR650 V2", "brand": "Lenovo", "category": "General Servers", "price": "1,093,128", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"外形": "1U, 2U, 4U, 9U"}},
    {"id": 53, "name": "Lenovo ThinkSystem SR630 V2", "brand": "Lenovo", "category": "General Servers", "price": "954,506", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Scalable 3-го поколения, до 40 ядер, тепловыделение до 270 Вт", "内存": "32 разъема для модулей памяти DDR4; макс. 8 ТБ, набранных 32 модулями 3DS RDIMM емкостью 256 ГБ; поддержка до 16 модулей энергонезависимой памяти Intel® Optane™ Persistent Memory 200 Series (PMem)", "外形": "1U"}},
    {"id": 56, "name": "Lenovo ThinkSystem SR650 V3", "brand": "Lenovo", "category": "General Servers", "price": "1,537,171", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2x масштабируемых процессоров Intel® Xeon® 4-го поколения, до 60 ядер и 350 Вт TDP", "内存": "До 32x памяти TruDDR5 4400/4800 МГц", "外形": "2U"}},
    {"id": 59, "name": "Lenovo ThinkSystem SR630", "brand": "Lenovo", "category": "General Servers", "price": "1,377,388", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Platinum второго поколения, тепловыделение до 205 Вт", "内存": "До 7.5 ТБ оперативной памяти TruDDR4", "外形": "1U"}},
    {"id": 65, "name": "Lenovo ThinkSystem SR675 V3", "brand": "Lenovo", "category": "General Servers", "price": "2,122,652", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "1 или 2 процессора AMD EPYC™ 4-го поколения", "内存": "До 3 ТБ при использовании 24 модулей DIMM DDR5 с максимальной частотой 4800 МГц"}},
    {"id": 66, "name": "Lenovo ThinkSystem SR860 V3", "brand": "Lenovo", "category": "General Servers", "price": "9,171,220", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Два или четыре масштабируемых процессора Intel® Xeon® 4-го поколения, до 350 Вт\nСетчатая топология с 3x соединениями UPI; с до 4x ускорителями QAT, DLB, IAA и DSA", "内存": "До 16 ТБ памяти TruDDR5 в 64x слотах"}},
    {"id": 68, "name": "Lenovo ThinkSystem SR630 V3", "brand": "Lenovo", "category": "General Servers", "price": "6,240,905", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2x масштабируемых процессоров Intel® Xeon® 4-го поколения, до 60 ядер и 350 Вт TDP", "内存": "До 32x TruDDR5 3DS/RDIMMs"}},
    {"id": 69, "name": "Lenovo ThinkSystem SR665 V3", "brand": "Lenovo", "category": "General Servers", "price": "7,380,973", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "2 процессора AMD EPYC™ 4-го поколения", "内存": "До 24x 256 ГБ памяти TruDDR5 4400 МГц", "外形": "2U"}},
    {"id": 70, "name": "Lenovo ThinkSystem SR650", "brand": "Lenovo", "category": "General Servers", "price": "409,782", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Platinum второго поколения, тепловыделение до 205 Вт", "内存": "До 7.5 ТБ оперативной памяти TruDDR4", "外形": "2U"}},
    {"id": 72, "name": "Lenovo ThinkSystem SR850 V2", "brand": "Lenovo", "category": "General Servers", "price": "2,057,866", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "2 или 4 масштабируемых процессора Intel® Xeon® 3-го поколения мощностью до 250 Вт; сетчатая топология с 6 соединениями UPI", "内存": "до 12 ТБ памяти TruDDR4 в 48 разъемах"}},
    {"id": 82, "name": "Lenovo ThinkSystem SR650 V4", "brand": "Lenovo", "category": "General Servers", "price": "4,027,659", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"内存": "До 32 модулей TruDDR5 3DS/RDIMM, скорость до 6400 МГц; поддержка до 8 ТБ", "型号": "DGX H100 | GP-5I-220 | GP-4I-220 | GP-BI-220 | SR650 V4"}},
    {"id": 94, "name": "Lenovo ThinkSystem SR645", "brand": "Lenovo", "category": "General Servers", "price": "1,684,381", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2-х процессоров AMD EPYC™ 7002 / 7003 Series, до 64 ядер, 280 Вт", "内存": "32 разъема для модулей памяти DDR4", "外形": "1U"}},
    {"id": 99, "name": "Lenovo ThinkSystem ST50 V2", "brand": "Lenovo", "category": "General Servers", "price": "200,567", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "1 процессор Intel® Xeon® E-2300 или 1 процессор Intel® Pentium®, до 8 ядер при тепловыделении 95 Вт", "内存": "До 128 ГБ в 4 разъемах DIMM"}},
    {"id": 101, "name": "Lenovo ThinkSystem SN550", "brand": "Lenovo", "category": "General Servers", "price": "1,981,506", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До двух процессоров второго поколения Intel® Xeon® Scalable, тепловыделение\nдо 165 Вт", "内存": "До 3 ТБ в 24 разъемах"}},
    {"id": 103, "name": "Lenovo ThinkSystem SN550 V2", "brand": "Lenovo", "category": "General Servers", "price": "3,673,035", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Scalable третьего поколения мощностью до\n205 Вт (по специальному требованию", "内存": "До 2 ТБ при использовании 128 ГБ с частотой 3200 МГц"}},
    {"id": 105, "name": "Lenovo ThinkSystem SR250 V2", "brand": "Lenovo", "category": "General Servers", "price": "422,882", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Один процессор Intel® Xeon® E-2300 или 1 процессор Intel® Pentium®, до 8 ядер при 95 Вт", "内存": "До 128 ГБ в 4 разъемах DIMM"}},
    {"id": 114, "name": "Lenovo ThinkSystem SR665", "brand": "Lenovo", "category": "General Servers", "price": "2,461,982", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2x процессоров AMD EPYC™ поколения 7002/7003 Series, до 64 ядер, 280 Вт", "内存": "До 32 модулей DDR4"}},
    {"id": 125, "name": "Lenovo ThinkSystem SR655 V3", "brand": "Lenovo", "category": "General Servers", "price": "2,386,960", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Выбор одного процессора 4-го поколения AMD EPYC™", "内存": "12x разъемов TruDDR5 DIMM, максимум 1,5 ТБ при использовании модулей 3DS RDIMM емкостью 128 ГБ", "外形": "2U"}},
    {"id": 127, "name": "Lenovo ThinkSystem SD530", "brand": "Lenovo", "category": "General Servers", "price": "1,164,739", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До двух процессоров Intel® Xeon® Platinum, до 165 Вт", "内存": "до 1 ТБ в 16 разъемах при использовании модулей DIMM по 64 ГБ; память TruDDR4 2666 МГц"}},
    {"id": 132, "name": "Lenovo ThinkSystem SR630 V4", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2× Intel Xeon 6700/6500 серии (Granite Rapids / Sierra Forest), максимум до 288 ядер, TDP до 350 Вт", "内存": "До 32 слотов DDR5 TruDDR5 RDIMM 6400 МГц, поддержка MRDIMM 8800 МГц, максимальный объём — до 8 ТБ"}},
    {"id": 142, "name": "Lenovo ThinkSystem SR670 V2", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "2 масштабируемых процессора Gen Intel ® Xeon ® 3-го поколения на узел", "内存": "До 32х модулей TruDDR4 3DS RDIMM"}},
    {"id": 147, "name": "Lenovo ThinkSystem SR850 V3", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Два или четыре масштабируемых процессора Intel® Xeon® 4-го поколения, до 350 Вт\nСетчатая топология с 3x линиями UPI\nСетчатая топология с использованием до 4x ускорителей QAT, DLB, IAA и DSA", "内存": "До 16 ТБ памяти TruDDR5 в 64x слотах"}},
    {"id": 150, "name": "Lenovo ThinkSystem SR860 V2", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Два или четыре масштабируемых процессора Intel® Xeon® 3-го поколения мощностью до 250 Вт; сетчатая топология с 6 соединениями UPI", "内存": "До 12 ТБ памяти TruDDR4 в 48 разъемах"}},
    {"id": 152, "name": "Lenovo ThinkSystem SR850", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "2 или 4 процессора семейства Intel® Xeon® Scalable, тепловыделение до 165 Вт", "内存": "До 6 ТБ в 48 разъемах DIMM объемом 128 ГБ; память TruDDR4"}},
    {"id": 160, "name": "Lenovo ThinkSystem SR635 V3", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Один процессор AMD EPYC™ 4-го поколения", "内存": "12x разъемов TruDDR5 DIMM на 1DPC, максимум 1,5 ТБ"}},
    {"id": 165, "name": "Lenovo ThinkSystem SR645 V3", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2х процессоров AMD EPYC™ 4-го поколения", "内存": "До 24x модулей TruDDR5 DIMM при 1DPC"}},
    {"id": 167, "name": "Lenovo ThinkSystem SN850", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 4 процессоров Intel® Xeon® Platinum второго поколения с\nтепловыделением до 165 Вт", "内存": "До 6 ТБ памяти, модули DIMM по 128 ГБ счастотой 2933 МГц"}},
    {"id": 170, "name": "Lenovo ThinkSystem ST50", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "1 процессор Intel® Xeon® E-2200 (до 6 ядер, тепловыделение 95 Вт)", "内存": "До 64 ГБ в 4 разъемах UDIMM"}},
    {"id": 171, "name": "Lenovo ThinkSystem SR655", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Один процессор серии AMD EPYC™ 7002 / 7003 (на выбор), энергопотребление до\n280Вт", "内存": "16 разъемов для модулей памяти DDR4"}},
    {"id": 186, "name": "Lenovo ThinkSystem SR250", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "1-сокетные процессоры Intel® Xeon® E-2200, до 6 ядер при 95 Вт", "内存": "До 128 ГБ памяти TruDDR4 ECC UDIMM"}},
    {"id": 188, "name": "Lenovo ThinkSystem SR570", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2 процессоров Intel® Xeon® Platinum второго поколения с тепловыделением\n150 Вт, до 26 ядер в каждом ЦП", "内存": "16 модулей TruDDR4 2933 МГц"}},
    {"id": 193, "name": "Lenovo ThinkSystem SD650 V2", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Каждый узел содержит два процессора семейства Intel ® Xeon ® Scalable 3-го поколения; по 2 узла в каждом модуле 1U", "内存": "До 2 ТБ, составленных из 16 модулей DIMM TruDDR4 емкостью 128 ГБ"}},
    {"id": 201, "name": "Lenovo ThinkSystem SD650 V3", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Два процессора Intel ® Xeon ® Scalable 4-го поколения на узел или 2 процессора Intel ® Xeon ® CPU Max Cерии с HBM на узел; 2 узла на лоток 1U", "内存": "До 2,0 ТБ при использовании 16x 128 ГБ 4800 МГц на узел"}},
    {"id": 203, "name": "Lenovo ThinkSystem ST550", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Platinum, до 125 Вт", "内存": "До 768 ГБ, 12 слотов DIMM"}},
    {"id": 210, "name": "Lenovo ThinkSystem SR530", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2-х процессоров второго поколения Intel® Xeon® Platinum, тепловыделение до 125 Вт", "内存": "До 768 ГБ в 12 слотах"}},
    {"id": 226, "name": "Lenovo ThinkEdge SE450", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkEdge+SE4", "specs": {"CPU": "Один процессор Intel® Xeon® Platinum третьего поколения с TDP до 225 Вт и до 36 ядер", "内存": "10 слотов памяти DDR4, до 1 ТБ с 8 планками 3DS RDIMM по 128 ГБ; поддержка до 2 модулей энергонезависимой памяти Intel® Optane™ 200 Series (PMem)"}},
    {"id": 227, "name": "Lenovo ThinkSystem ST250 V2", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "1 процессор Intel® Xeon® E-2300 или 1 процессор Intel® Pentium®, до 8 ядер при тепловыделении 95 Вт", "内存": "До 128 ГБ в 4 разъемах DIMM"}},
    {"id": 228, "name": "Lenovo ThinkSystem ST650 V2", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2 процессоров 3-го поколения Intel® Xeon® Scalable, тепловыделение до 250 Вт", "内存": "До 4 ТБ, набранной 128 ГБ модулями DIMM TruDDR4"}},
    {"id": 231, "name": "Lenovo ThinkSystem SD630 V2", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Два процессора семейства Intel ® Xeon ® Scalable 3-го поколения, теплопакет до 270 Вт", "内存": "до 1ТБ, набранного 16 модулями DIMM TruDDR4 с частотой 3200 МГц"}},
    {"id": 232, "name": "Lenovo ThinkSystem SD650-N V2", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Каждый узел содержит 2 процессора Intel® Xeon® Scalable 3-го поколения", "内存": "до 2 ТБ на отсек, состоящих из 16 модулей TruDDR4 RDIMM"}},
    {"id": 242, "name": "Lenovo ThinkSystem SR590", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Platinum 2-го поколения с тепловыделением до 150 Вт, каждый процессор содержит до 26 ядер", "内存": "До 1 ТБ оперативной памяти TruDDR4 с тактовой частотой 2933 МГц"}},
    {"id": 251, "name": "Lenovo ThinkSystem SR950", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 8 процессоров Intel® Xeon® Platinum второго поколения, до 28 ядер на процессор, до 205 Вт", "内存": "До 24 ТБ в 96 разъемах модулей DIMM объемом 256 ГБ"}},
    {"id": 255, "name": "Lenovo ThinkSystem ST250", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "1 процессор Intel® Xeon® E-2200 (до 6 ядер, тепловыделение 95 Вт)", "内存": "До 128 ГБ в 4 разъемах DIMM"}},
    {"id": 256, "name": "Lenovo ThinkSystem SR550", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "До 2-х процессоров Intel® Xeon® Platinum второго поколения с тепловыделением\n150 Вт, до 26 ядер в каждом ЦП", "内存": "До 768 ГБ в 12 слотах при использовании модулей DIMM объемом 64 ГБ"}},
    {"id": 257, "name": "Lenovo ThinkSystem SD665-N V3", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "1 или 2 процессора AMD EPYC™ 4-го поколения на узел", "内存": "До 3,0 ТБ при использовании 24 модулей TruDDR5 RDIMM"}},
    {"id": 259, "name": "Lenovo ThinkSystem SD650-I V3", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "2 процессора Intel ® Xeon ® Scalable 4-го поколения на отсек или 2 процессора Intel ® Xeon ® CPU Max на отсек", "内存": "До 2,0 ТБ при использовании 16x 128 ГБ 4800 МГц TruDDR5 RDIMM на отсек"}},
    {"id": 262, "name": "Lenovo ThinkSystem SR850P", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "4 масштабируемых процессора Intel Xeon второго поколения, тепловыделение до 205 Вт", "内存": "До 15 ТБ в 48 слотах, 24 модуля DIMM"}},
    {"id": 266, "name": "Lenovo ThinkSystem SD665 V3", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "2x процессора AMD EPYC™ 4-го поколения на узел", "内存": "До 3,0 ТБ при использовании 24x 128 ГБ 4800 МГц TruDDR5 RDIMM слотов на лоток"}},
    {"id": 267, "name": "Lenovo ThinkSystem SD650", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Каждый узел содержит два процессора семейства Intel® Xeon® Scalable второго поколения; каждый модуль высотой 1U содержит 2 узла", "内存": "до 1,5 ТБ оперативной памяти, набранной 12 модулями DIMM TruDDR4"}},
    {"id": 270, "name": "Lenovo ThinkSystem SR860", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "2 или 4 процессора Intel® Xeon® Platinum, тепловыделение до 165 Вт", "内存": "До 6 ТБ в 48 разъемах, модули DIMM"}},
    {"id": 283, "name": "Lenovo ThinkSystem SR635", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "Одна серия процессоров AMD EPYC™ 7002/7003 (на выбор), энергопотребление до 280Вт", "内存": "16 разъемов для модулей памяти DDR4; до 2 ТБ"}},
    {"id": 284, "name": "Lenovo ThinkSystem SR670", "brand": "Lenovo", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "2 процессора Intel® Xeon® Scalable второго поколения (тепловыделение до 205 Вт) на узел", "内存": "До 24x64GB модулей памяти 3DS RDIMMs TruDDR4 с частотой 2933 МГц"}},
    {"id": 339, "name": "Lenovo ThinkSystem SR780a V3", "brand": "Lenovo", "category": "General Servers", "price": "43,124,727", "img": "https://via.placeholder.com/600x400?text=Lenovo+ThinkSystem+S", "specs": {"CPU": "2× Intel Xeon Scalable 5-го поколения, TDP до 350 Вт", "内存": "До 4 ТБ DDR5 на 32 слотах DIMM с частотой до 5600 МГц"}},

    // --- Nettrix (3款) ---
    {"id": 10, "name": "Nettrix  H800 Nvidia", "brand": "Nettrix", "category": "GPU Servers", "price": "76,912,569", "img": "https://via.placeholder.com/600x400?text=Nettrix++H800+Nvidia", "specs": {"CPU": "Intel Xeon Platinum 8458P", "GPU": "NVIDIA TESLA H800 NVH800PCIE80G", "型号": "X640"}},
    {"id": 163, "name": "Nettrix  X640", "brand": "Nettrix", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Nettrix++X640", "specs": {"CPU": "2x Intel Xeon Scalable (2-го поколения).", "内存": "Поддерживает до 32 слотов DDR4 памяти с частотой 3200 МГц"}},
    {"id": 195, "name": "Nettrix  X620 g50", "brand": "Nettrix", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Nettrix++X620+g50", "specs": {"CPU": "Поддерживает 2 интеллектуальных масштабируемых процессора Intel@ Xeon@ третьего поколения"}},

    // --- Nvidia (3款) ---
    {"id": 51, "name": "Nvidia  DGX H100", "brand": "Nvidia", "category": "General Servers", "price": "30,610,285", "img": "https://via.placeholder.com/600x400?text=Nvidia++DGX+H100", "specs": {"CPU": "2 × Intel Xeon 8480C (PCIe Gen5, 56 ядер, 2.0/2.9/3.8 ГГц)", "内存": "2 ТБ DDR5 (32 × DIMM)"}},
    {"id": 55, "name": "Nvidia  DGX H200", "brand": "Nvidia", "category": "General Servers", "price": "33,429,646", "img": "https://via.placeholder.com/600x400?text=Nvidia++DGX+H200", "specs": {"CPU": "2 × Intel Xeon Platinum 8480C (112 ядер суммарно, 2.0 ГГц base, до 3.8 ГГц Max Turbo)", "内存": "2 ТБ DDR5 (32 × DIMM)"}},
    {"id": 285, "name": "Nvidia  DGX B200", "brand": "Nvidia", "category": "General Servers", "price": "43,160,293", "img": "https://via.placeholder.com/600x400?text=Nvidia++DGX+B200", "specs": {"CPU": "До 4 ТБ DDR5, что позволяет эффективно обрабатывать большие объёмы данных и поддерживать масштабируемость задач", "GPU": "NVIDIA Blackwell GPUs", "内存": "До 4 ТБ DDR5, что позволяет эффективно обрабатывать большие объёмы данных и поддерживать масштабируемость задач"}},

    // --- OpenYard (3款) ---
    {"id": 40, "name": "OpenYard  H100 Nvidia", "brand": "OpenYard", "category": "GPU Servers", "price": "5,995,535", "img": "https://via.placeholder.com/600x400?text=OpenYard++H100+Nvidi", "specs": {"CPU": "Intel Xeon Gold 6542Y, 24 core, 2.9GHz, 250W, 60MB cache, Intel Xeon Gold 6542Y, 24 ядра, 2.9 ГГц, 250 Вт, 60 МБ кеш, Intel Xeon Gold 6544Y, 16 ядер, 3,6 ГГц, 270 Вт, 45 МБ кеш, Intel Xeon Gold 6544Y, 16 ядер, 3,6ГГц, 270ВТ, 45МБ кеш", "GPU": "Nvidia H100 80GB PCIe Gen5", "型号": "RS202I-65C"}},
    {"id": 50, "name": "OpenYard  A100 Nvidia", "brand": "OpenYard", "category": "GPU Servers", "price": "9,906,376", "img": "https://via.placeholder.com/600x400?text=OpenYard++A100+Nvidi", "specs": {"CPU": "Intel Xeon Gold 6542Y, 24 ядер, 2.9 ГГц, 250 Вт, 60 МБ кеш", "GPU": "NVIDIA A100 80GB HBM2", "型号": "RS202I-65C"}},
    {"id": 298, "name": "OpenYard  RS202I-65C", "brand": "OpenYard", "category": "General Servers", "price": "5,995,535", "img": "https://via.placeholder.com/600x400?text=OpenYard++RS202I-65C", "specs": {"CPU": "2 x Intel Xeon Scalable 4-го/5-го поколения (SR до 60, ER до 64 ядер, TDP до 350 Вт)", "内存": "32 x DDR5 DIMM, до 5600 MHz"}},

    // --- Supermicro (70款) ---
    {"id": 4, "name": "Supermicro  A100 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "6,495,163", "img": "https://via.placeholder.com/600x400?text=Supermicro++A100+Nvi", "specs": {"GPU": "GPU Baseboard NVIDIA Air Cool DELTA HGX с 8 × NVIDIA A100 80GB SXM4 видеокартами.", "内存": "16 x 64 ГБ DDR4 3200 MHz ECC RDIMM (всего 1 ТБ)"}},
    {"id": 6, "name": "Supermicro  H100 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "1,989,133", "img": "https://via.placeholder.com/600x400?text=Supermicro++H100+Nvi", "specs": {"CPU": "Turin 9135 DP/UP, 16 ядер / 32 потока, 3.65 ГГц, 64 МБ кэш, 200 Вт, SP5 HF, RoHS", "GPU": "NVIDIA DELTA-NEXT HGX GPU Baseboard"}},
    {"id": 9, "name": "Supermicro  L4 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "2,668,324", "img": "https://via.placeholder.com/600x400?text=Supermicro++L4+Nvidi", "specs": {"GPU": "NVIDIA Ada L4 24 ГБ GDDR6", "内存": "16× 64 ГБ DDR5-4800 ECC REG (суммарно 1 ТБ)", "型号": "SYS-421GE-TNRT | R760"}},
    {"id": 12, "name": "Supermicro  L40S Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "5,852,429", "img": "https://via.placeholder.com/600x400?text=Supermicro++L40S+Nvi", "specs": {"CPU": "Intel Sapphire Rapids 6430 (SPR 6430), 32 ядра, 2.1 ГГц, 270 Вт, 60 МБ кэш, сокет LGA4677, Intel Xeon 6972P Granite Rapids, 96 ядер, 2.4 ГГц, 480 МБ кеш, TDP 500 Вт, Intel Xeon Gold 6448Y, 20 ядер, 2.5 ГГц (Turbo до 3.9 ГГц), TDP около 205 Вт", "GPU": "NVIDIA Ada L40S 48 ГБ GDDR6", "型号": "SYS-421GE-TNRT | SYS-522GA-NRT | R960"}},
    {"id": 18, "name": "Supermicro  A40 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "6,766,466", "img": "https://via.placeholder.com/600x400?text=Supermicro++A40+Nvid", "specs": {"CPU": "Intel Xeon Gold 6342", "GPU": "NVIDIA A40 48GB GDDR6 PCIe 4.0 - Passive Cooling"}},
    {"id": 23, "name": "Supermicro  RTX 4000 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "2,496,099", "img": "https://via.placeholder.com/600x400?text=Supermicro++RTX+4000", "specs": {"GPU": "NVIDIA RTX4000 ADA Gen. SFF 20GB GDDR6 PCIe 4.0-Active", "型号": "AS-4125GS-TNRT"}},
    {"id": 24, "name": "Supermicro  A16 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "2,167,796", "img": "https://via.placeholder.com/600x400?text=Supermicro++A16+Nvid", "specs": {"GPU": "NVIDIA A16 64GB GDDR6 PCIe 4.0- Passive Cooling", "型号": "S-AS-2025HS-TNR-2283 | AS-2025HS-TNR"}},
    {"id": 28, "name": "Supermicro  B200 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "41,403,745", "img": "https://via.placeholder.com/600x400?text=Supermicro++B200+Nvi", "specs": {"CPU": "AMD EPYC 9354, 3.25 ГГц (Boost 3.8 ГГц), 256 МБ кэш, 280 Вт TDP, сокет SP5, Intel Xeon 6960P 6-го поколения, 72 ядра, 2.7 ГГц (500 Вт), 2.3 ГГц (400 Вт), Intel® Xeon® 6 6960P 72C 2,7 ГГц 500 Вт, P4X-GNR6972P 2P, 96C (2.6G/500W, 2.2/400)", "GPU": "NVIDIA HGX B200 180 ГБ HBM3e", "型号": "SYS-A22G-NBRT | S-A22GA-B200-180GB-8 | AS-A126GS-TNBR"}},
    {"id": 29, "name": "Supermicro  H200 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "7,723,875", "img": "https://via.placeholder.com/600x400?text=Supermicro++H200+Nvi", "specs": {"GPU": "NVIDIA H200 141GB", "内存": "поддержка высокоскоростной DDR5 ECC, до нескольких терабайт объёма (в зависимости от комплектации, например 12×64 ГБ по 5600 MHz)", "型号": "AS-4124G-NQ3 | AS-8125GS-TNHR | SYS-821GE-TNHR"}},
    {"id": 32, "name": "Supermicro  B300 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "66,280,562", "img": "https://via.placeholder.com/600x400?text=Supermicro++B300+Nvi", "specs": {"CPU": "Intel Xeon Platinum 6767P (64C/128T, 2.4GHz, 350W)", "GPU": "HGX B300 288GB NVL8 × 8 (8 GPU NVIDIA Blackwell", "型号": "SYS-822GS-NB3RT"}},
    {"id": 45, "name": "Supermicro  A2 Nvidia", "brand": "Supermicro", "category": "GPU Servers", "price": "1,635,842", "img": "https://via.placeholder.com/600x400?text=Supermicro++A2+Nvidi", "specs": {"GPU": "NVIDIA A2", "内存": "Samsung 64G D5 4800", "型号": "S-AS-2025HS-TNR-2283"}},
    {"id": 64, "name": "Supermicro SuperServer AS-2124GQ-NART", "brand": "Supermicro", "category": "General Servers", "price": "6,495,163", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "До 2 x AMD EPYC серии 7002/7003 (Socket SP3), до 280 Вт TDP, до 128 ядер (64 на CPU)", "GPU": "NVIDIA Tesla A100 80GB (SXM4)", "内存": "До 8 ТБ DDR4 3200 MHz ECC Registered DIMM, 32 слота"}},
    {"id": 71, "name": "Supermicro SuperServer AS-2015HS-TNR", "brand": "Supermicro", "category": "General Servers", "price": "1,933,276", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1× AMD EPYC™ 9004/9005 Series", "内存": "Поддержка до 24 слотов DDR5 RDIMM (2 DIMM на канал)"}},
    {"id": 74, "name": "Supermicro SuperServer AS-4124GO-NART", "brand": "Supermicro", "category": "General Servers", "price": "12,480,264", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2 x AMD EPYC 7003/7002 серии (Socket SP3), до 280W TDP, до 128 ядер в сумме", "内存": "До 8 ТБ DDR4 ECC 3200 MHz, 32 слота DIMM (RDIMM/LRDIMM)"}},
    {"id": 79, "name": "Supermicro SuperServer AS-2025HS-TNR", "brand": "Supermicro", "category": "General Servers", "price": "1,635,842", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "Поддержка двух процессоров Intel Xeon Scalable (1-го или 2-го поколения).", "内存": "Поддержка до 1.5 ТБ DDR4 ECC RDIMM/LRDIMM.\n\nВосемь слотов DIMM на процессор.\n\nПоддержка памяти с частотой до 2933 МГц."}},
    {"id": 80, "name": "Supermicro SuperServer AS-4125GS-TNRT", "brand": "Supermicro", "category": "General Servers", "price": "2,496,099", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "Поддержка двух процессоров AMD EPYC (1-го и 2-го поколения).", "内存": "Поддержка до 2 ТБ DDR4 ECC RDIMM/LRDIMM./Восемь слотов DIMM на процессор."}},
    {"id": 85, "name": "Supermicro SuperServer SYS-220GP-TNR", "brand": "Supermicro", "category": "General Servers", "price": "6,766,466", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2 x Intel Xeon Scalable 3-го поколения (Socket LGA4189)", "内存": "16 слотов DDR4 ECC RDIMM/LRDIMM, поддержка частот 3200/2933/2666 МГц", "外形": "2U"}},
    {"id": 92, "name": "Supermicro SuperServer SYS-420GP-TNR", "brand": "Supermicro", "category": "General Servers", "price": "91,317,839", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Xeon Gold 6336Y", "内存": "DDR4 RDIMM 32GB 2Rx4 3200 MHz"}},
    {"id": 95, "name": "Supermicro SuperServer SYS-740GP-TNRT", "brand": "Supermicro", "category": "General Servers", "price": "2,367,550", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2 x Intel Xeon 3-го поколения (Socket LGA4189", "内存": "6 слотов DDR4, поддержка до 4 ТБ DRAM", "外形": "4U"}},
    {"id": 96, "name": "Supermicro SuperServer SYS-120U-TNR", "brand": "Supermicro", "category": "General Servers", "price": "2,365,793", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2 x Intel Xeon 3-го поколения (LGA-4189)", "内存": "до 32 слотов DDR4 ECC RDIMM/LRDIMM с частотами 3200/2933/2666 МГц", "外形": "1U"}},
    {"id": 97, "name": "Supermicro SuperServer SYS-1029P-WTRT", "brand": "Supermicro", "category": "General Servers", "price": "1,398,612", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "12 слотов, до 3TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 102, "name": "Supermicro SuperServer SYS-421GU-TNXR", "brand": "Supermicro", "category": "General Servers", "price": "49,786,724", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Xeon SPR 6448H 4/2P 32C 2.4G 250W (2.1/225, 1.9/205) 60 MB I(1122)", "内存": "32GB GDDR5-4800 ECC REG"}},
    {"id": 104, "name": "Supermicro SuperServer SYS-821GE-THR", "brand": "Supermicro", "category": "General Servers", "price": "46,297,328", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Xeon Platinum 8462Y+ 2P 32C 2.8G 300W(32/2.6/270,24/3/270)60M BI(1111) 7yr", "内存": "64GB DDR5-4800 2Rx4 LP (16Gb) ECC RDIMM"}},
    {"id": 119, "name": "Supermicro SuperServer AS-A126GS-TNBR", "brand": "Supermicro", "category": "General Servers", "price": "45,349,745", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2× AMD EPYC 9005/9004 серии (до 384 ядер)", "内存": "До 6 ТБ DDR5 ECC (24 DIMM слота, 1DPC)"}},
    {"id": 129, "name": "Supermicro SuperServer SYS-4029GP-TRT", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "24 слотов, до 6TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 149, "name": "Supermicro SuperServer SSG-6039P-E1CR16H", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "16 слотов, до 4TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 164, "name": "Supermicro SuperServer SYS-5019C-WR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon E-21XX / E-22XX", "内存": "4 слота, 128GB максимум, DDR4-2666MHz Unbuff ECC/non-ECC UDIMM"}},
    {"id": 174, "name": "Supermicro SuperServer CSE-825TQ-563LPB", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon E-21XX / E-22XX", "内存": "4 слота, до 128GB максимум, DDR4-2666MHz Unbuff ECC/non-ECC UDIMM"}},
    {"id": 177, "name": "Supermicro SuperServer SYS-510P-MR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1 масштабируемый процессор Intel® Xeon® 3-го поколения, до 36 ядер.", "内存": "8 слотов, DDR4 3200 MHz ECC Reg RDIMM/LRDIMM/Intel BPS 3DXP"}},
    {"id": 181, "name": "Supermicro SuperServer SYS-6019P-WTR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "12 слотов, до 3TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 185, "name": "Supermicro SuperServer SYS-5019S-M", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon E3-12XX V5 V6", "内存": "4 слота, 64GB максимум DDR4 2400MHz ECC Unbuffered UDIMM"}},
    {"id": 189, "name": "Supermicro SuperServer SYS-5019P-MR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon Scalable", "内存": "6 слотов, до 1,5TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 190, "name": "Supermicro SuperServer SYS-520P-WTR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon Scalable Gen3", "内存": "8 слотов, DDR4 3200 MHz ECC Reg RDIMM/LRDIMM/Intel BPS 3DXP"}},
    {"id": 197, "name": "Supermicro SuperServer SYS-2029U-TR4", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "24 слотов, до 6TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 199, "name": "Supermicro SuperServer SYS-6029P-TRT", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "16 слотов, до 4TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 200, "name": "Supermicro SuperServer SYS-1029P-WTR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "Масштабируемые процессоры Intel® Xeon® 2-го поколения и масштабируемые процессоры Intel® Xeon®", "内存": "до 1536 ГБ DDR4"}},
    {"id": 211, "name": "Supermicro SuperServer SYS-1029P-MTR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "8 слотов, до 2TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 214, "name": "Supermicro SuperServer SSG-6049P-E1CR24H", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "16 слотов, до 4TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 215, "name": "Supermicro SuperServer SYS-740A-T", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "До 2-х масштабируемых процессора Intel® Xeon® 3-го поколения, до 40 ядер", "内存": "до 3 ТБ DDR4 ECC RDIMM/LRDIMM в 16 слотах DIMM."}},
    {"id": 222, "name": "Supermicro SuperServer SYS-6029P-WTRT", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "12 слотов, до 3TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 229, "name": "Supermicro SuperServer SYS-6029P-TR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "16 слотов, до 4TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 234, "name": "Supermicro SuperServer SYS-1019P-WTR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon Scalable", "内存": "6 слотов, до 1,5TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 235, "name": "Supermicro SuperServer SYS-6029U-TRT", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "24 слотов, до 6TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 238, "name": "Supermicro SuperServer SYS-5019P-WTR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon Scalable", "内存": "6 слотов, до 1,5TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 244, "name": "Supermicro SuperServer SYS-2029P-C1RT", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "16 слотов, до 4TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 245, "name": "Supermicro SuperServer SYS-6029P-WTR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "12 слотов, до 3TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 248, "name": "Supermicro SuperServer SYS-5019C-M", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon E-21XX / E-22XX", "内存": "4 слота, 128GB максимум, DDR4-2666MHz Unbuff ECC/non-ECC UDIMM"}},
    {"id": 250, "name": "Supermicro SuperServer SYS-620P-TR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable Gen3", "内存": "16 слотов, DDR4 3200 MHz ECC Reg RDIMM/LRDIMM/Intel BPS 3DXP"}},
    {"id": 253, "name": "Supermicro SuperServer CSE-847BE1C-R1K28LPB", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon E-21XX / E-22XX", "内存": "4 слота, до 128GB максимум, DDR4-2666MHz Unbuff ECC/non-ECC UDIMM"}},
    {"id": 258, "name": "Supermicro SuperServer SYS-5019P-WT", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon Scalable", "内存": "6 слотов, до 1,5TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 260, "name": "Supermicro SuperServer SYS-7049P-TRT", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "16 слотов, до 4TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 261, "name": "Supermicro SuperServer CSE-732D4-500B", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon E-21XX / E-22XX", "内存": "до 4 слотов, 128GB максимум, DDR4-2666MHz Unbuff ECC/non-ECC UDIMM"}},
    {"id": 263, "name": "Supermicro SuperServer CSE-836BE1C-R1K23B", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "до 4TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 268, "name": "Supermicro SuperServer SYS-510P-WTR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon Scalable Gen3", "内存": "8 слотов, DDR4 3200 MHz ECC Reg RDIMM/LRDIMM/Intel BPS 3DXP"}},
    {"id": 269, "name": "Supermicro SuperServer CSE-745TQ-920B", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon E-21XX / E-22XX", "内存": "до 4 слотов, 128GB максимум, DDR4-2666MHz Unbuff ECC/non-ECC UDIMM"}},
    {"id": 271, "name": "Supermicro SuperServer SYS-5019C-MR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon E-21XX / E-22XX", "内存": "4 слота, 128GB максимум, DDR4-2666MHz Unbuff ECC/non-ECC UDIMM"}},
    {"id": 272, "name": "Supermicro SuperServer CSE-731I-300B", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1x Intel Xeon E-21XX / E-22XX", "内存": "4 слота, до 128GB максимум, DDR4-2666MHz Unbuff ECC/non-ECC UDIMM"}},
    {"id": 274, "name": "Supermicro SuperServer SYS-6019P-MT", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "8 слотов, до 2TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 276, "name": "Supermicro SuperServer SYS-1029U-TR4T", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "24 слотов, до 6TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 278, "name": "Supermicro SuperServer SYS-2029P-C1R", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "16 слотов, до 4TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 279, "name": "Supermicro SuperServer SSG-6029P-E1CR12L", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "16 слотов, до 4TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 280, "name": "Supermicro SuperServer SYS-4029GP-TRT3", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable", "内存": "24 слотов, до 6TB максимум, DDR4-2933MHz 3DS ECC RDIMM/LRDIMM"}},
    {"id": 281, "name": "Supermicro SuperServer SYS-740P-TR", "brand": "Supermicro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2x Intel Xeon Scalable Gen3", "内存": "18 слотов, DDR4 3200 MHz ECC Reg RDIMM/LRDIMM"}},
    {"id": 287, "name": "Supermicro SuperServer AS-2115HS-TNR", "brand": "Supermicro", "category": "General Servers", "price": "2,814,417", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "1 × AMD EPYC серии 9004/9005 (Socket SP5)", "GPU": "NVIDIA H100 80GB PCIe 5.0 x16", "内存": "До 6 ТБ DDR5-4800 ECC Registered, 24 DIMM-слота"}},
    {"id": 290, "name": "Supermicro SuperServer SYS-420GP-TNAR", "brand": "Supermicro", "category": "General Servers", "price": "7,815,320", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "Поддержка двух процессоров Intel Xeon Scalable (1-го или 2-го поколения).", "内存": "Поддержка до 2 ТБ DDR4 ECC RDIMM/LRDIMM./Восемь слотов DIMM на процессор."}},
    {"id": 291, "name": "Supermicro SuperServer SYS-A22GA-NBRT", "brand": "Supermicro", "category": "General Servers", "price": "44,304,244", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2× Intel Xeon 6900 серии с P-ядрами, до 72 ядер на процессор, TDP 500 Вт, поддержка до 128 ядер и 256 потоков", "内存": "24 слота DIMM, поддержка до 6 ТБ ECC DDR5 RDIMM/MRDIMM с интенсивностью до 6400 МТ/с"}},
    {"id": 292, "name": "Supermicro SuperServer SYS-822GS-NB3RT", "brand": "Supermicro", "category": "General Servers", "price": "66,280,562", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2 × Intel Xeon 6700/6500 P-core (до 128C/256T, до 350W TDP)", "GPU": "HGX B300 288GB NVL8 × 8 (8 GPU NVIDIA Blackwell", "内存": "32 × DDR5-6400 DIMM, до 8TB (2DPC)"}},
    {"id": 308, "name": "Supermicro SuperServer SYS-522GA-NRT", "brand": "Supermicro", "category": "General Servers", "price": "18,128,027", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2 × Intel Xeon 6900 серии с P-ядрами (до 128 ядер / 256 потоков), поддержка до 500 Вт TDP", "内存": "24 слота DDR5 ECC RDIMM / MRDIMM, до 6 ТБ, поддержка DDR5-6400 и 8800 MT/s"}},
    {"id": 313, "name": "Supermicro SuperServer AS-4124G-NQ3", "brand": "Supermicro", "category": "General Servers", "price": "7,723,875", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2× AMD EPYC серии 9005/9375F с высокой производительностью и поддержкой DDR5 памяти", "内存": "поддержка высокоскоростной DDR5 ECC, до нескольких терабайт объёма (в зависимости от комплектации, например 12×64 ГБ по 5600 MHz)"}},
    {"id": 328, "name": "Supermicro SuperServer AS-8125GS-TNHR", "brand": "Supermicro", "category": "General Servers", "price": "29,127,608", "img": "https://via.placeholder.com/600x400?text=Supermicro+SuperServ", "specs": {"CPU": "2× Intel Xeon Scalable 4-го поколения (Sapphire Rapids)", "内存": "32 слота DDR5 RDIMM, до 8 TB, скорость до 4800 MT/s", "外形": "8U"}},

    // --- Tyan (2款) ---
    {"id": 22, "name": "Tyan  A100 Nvidia", "brand": "Tyan", "category": "GPU Servers", "price": "14,472,270", "img": "https://via.placeholder.com/600x400?text=Tyan++A100+Nvidia", "specs": {"GPU": "NVIDIA Tesla A100 80G", "型号": "Transport HX TN83-B8251"}},
    {"id": 137, "name": "Tyan  Transport HX TN83-B8251", "brand": "Tyan", "category": "General Servers", "price": "14,472,270", "img": "https://via.placeholder.com/600x400?text=Tyan++Transport+HX+T", "specs": {"CPU": "Поддержка двух процессоров Intel Xeon Scalable (1-го или 2-го поколения).", "内存": "Поддержка до 2 ТБ DDR4 ECC RDIMM/LRDIMM./Восемь слотов DIMM на процессор."}},

    // --- Xfusion (16款) ---
    {"id": 17, "name": "Xfusion  RTX 5000 Nvidia", "brand": "Xfusion", "category": "GPU Servers", "price": "1,290,059", "img": "https://via.placeholder.com/600x400?text=Xfusion++RTX+5000+Nv", "specs": {"CPU": "Intel Xeon Gold 6342", "GPU": "NVIDIA RTX 5000 Ada Generation PCIe Computational Accelerator"}},
    {"id": 63, "name": "Xfusion FusionServer 2288H V7", "brand": "Xfusion", "category": "General Servers", "price": "2,464,504", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 4-го поколения", "内存": "32 (12 ТБ)", "外形": "2U"}},
    {"id": 78, "name": "Xfusion FusionServer 1288H V6", "brand": "Xfusion", "category": "General Servers", "price": "1,400,277", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 3-го поколения", "内存": "32 (12 ТБ)", "外形": "1U"}},
    {"id": 86, "name": "Xfusion FusionServer 5885H V7", "brand": "Xfusion", "category": "General Servers", "price": "7,552,908", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 4-х масштабируемых процессоров Intel® Xeon® 4-го поколения", "内存": "64 (24 ТБ)", "外形": "4U"}},
    {"id": 87, "name": "Xfusion FusionServer 2488H V7", "brand": "Xfusion", "category": "General Servers", "price": "8,458,083", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"内存": "64 (24 ТБ)"}},
    {"id": 90, "name": "Xfusion FusionServer 1288H V7", "brand": "Xfusion", "category": "General Servers", "price": "4,229,590", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 4-го поколения", "内存": "32 (12 ТБ)", "外形": "1U"}},
    {"id": 98, "name": "Xfusion FusionServer 2488 V5", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 4-х масштабируемых процессоров Intel® Xeon® 2-го поколения", "内存": "32 (4 ТБ)"}},
    {"id": 108, "name": "Xfusion FusionServer 5885H V6", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 4-х масштабируемых процессоров Intel® Xeon® 3-го поколения", "内存": "48 (15 ТБ)"}},
    {"id": 110, "name": "Xfusion FusionServer 5885H V5", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 4-х масштабируемых процессоров Intel® Xeon® 2-го поколения", "内存": "48 (15 ТБ)"}},
    {"id": 117, "name": "Xfusion FusionServer 2488H V6", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 4-х масштабируемых процессоров Intel® Xeon® 3-го поколения", "内存": "48 (15 ТБ)"}},
    {"id": 118, "name": "Xfusion FusionServer 2488H V5", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 4-х масштабируемых процессоров Intel® Xeon® 2-го поколения", "内存": "48 (15 ТБ)"}},
    {"id": 153, "name": "Xfusion FusionServer 5288 V5", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 2-го поколения", "内存": "24 (7,5 ТБ)"}},
    {"id": 154, "name": "Xfusion FusionServer 2298 V5", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 2-го поколения", "内存": "12 (768 ГБ)"}},
    {"id": 156, "name": "Xfusion FusionServer 5288 V6", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 3-го поколения", "内存": "32 (12 ТБ)"}},
    {"id": 159, "name": "Xfusion FusionServer 2288 V7", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 4-го поколения", "内存": "16 (4 ТБ)"}},
    {"id": 162, "name": "Xfusion FusionServer 5288 V7", "brand": "Xfusion", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Xfusion+FusionServer", "specs": {"CPU": "До 2-х масштабируемых процессоров Intel® Xeon® 4-го поколения", "内存": "32 (8 ТБ)"}},

    // --- Yadro (10款) ---
    {"id": 294, "name": "Yadro  G4208P G3", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro++G4208P+G3", "specs": {"CPU": "2 × Intel Xeon Processor Scalable 4/5 поколения", "内存": "32 × DDR5-5600 • Поддержка RDIMM/LRDIMM ECC (2S × 8 каналов × 2DPC, 16 × DIMM на процессор)"}},
    {"id": 295, "name": "Yadro Vegman R220 G2", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro+Vegman+R220+G2", "specs": {"CPU": "До 2 × Intel Xeon Processor Scalable Family 3rd Gen, TDP до 270 Вт", "内存": "32 × DDR4-3200/2933, 2 DPC"}},
    {"id": 305, "name": "Yadro Vegman R120 G2", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro+Vegman+R120+G2", "specs": {"CPU": "До 2 × Intel Xeon Processor Scalable Family 3rd Gen, TDP до 205 Вт", "内存": "32 × DDR4-3200/2933, 2 DPC"}},
    {"id": 314, "name": "Yadro Vegman S220", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro+Vegman+S220", "specs": {"CPU": "2 × Intel Xeon Scalable v2, TDP до 205 Вт", "内存": "о 256 Тб на систему"}},
    {"id": 320, "name": "Yadro  X3-105", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro++X3-105", "specs": {"CPU": "До 2 × Intel® Xeon® Processor Scalable Family", "内存": "32 × DDR4-3200/2933/2666, 2DPC"}},
    {"id": 327, "name": "Yadro Vegman S320", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro+Vegman+S320", "specs": {"CPU": "2 × Intel Xeon Scalable v2, TDP до 205 Вт", "内存": "до 512Тб на систему"}},
    {"id": 330, "name": "Yadro  X2-105", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro++X2-105", "specs": {"CPU": "До 2 × Intel® Xeon® Pro cessor Scalable Family", "内存": "24 × DDR4-2933/2666/2400/2133, 2DPC"}},
    {"id": 333, "name": "Yadro  X2-205", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro++X2-205", "specs": {"CPU": "До 2 × Intel® Xeon® Processor Scalable Family", "内存": "24 × DDR4-2933/2666/2400/2133, 2DPC"}},
    {"id": 335, "name": "Yadro  X3-205", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro++X3-205", "specs": {"CPU": "До 2 × Intel® Xeon® Processor Scalable Family", "内存": "32 × DDR4-3200/2933/2666, 2DPC"}},
    {"id": 340, "name": "Yadro  V240 G3", "brand": "Yadro", "category": "General Servers", "price": "咨询获取", "img": "https://via.placeholder.com/600x400?text=Yadro++V240+G3", "specs": {"CPU": "4 × Intel Xeon Scalable Gen4 (Sapphire Rapids)", "内存": "64 × DDR5-4800, 2 DPC"}},

    // --- НТ (1款) ---
    {"id": 289, "name": "НТ КИТ GPU", "brand": "НТ", "category": "General Servers", "price": "8,767,467", "img": "https://via.placeholder.com/600x400?text=НТ+КИТ+GPU", "specs": {"CPU": "2 x Intel Xeon Scalable Gen3", "GPU": "A100 80gb", "内存": "Поддержка большого объема"}},
  ,
{
    "id": 1001,
    "name": "NVIDIA A100 40G OEM",
    "brand": "NVIDIA",
    "category": "GPUВидеокарты",
    "price": "咨询获取",
    "img": "/assets/products/GPUВидеокарты/NVIDIA A100 40G OEM.jpg",
    "intro": {
      "cn": "面向OEM的高性能A100 40G GPU，适用于AI与HPC集成方案。",
      "en": "High‑performance A100 40G GPU for OEM integration, ideal for AI and HPC workloads.",
      "ru": "Высокопроизводительный GPU A100 40G OEM для интеграции в системы производителей."
    },
    "specs": {
      "Architecture": "NVIDIA Ampere",
      "Memory": "40GB HBM2e",
      "Tensor_Cores": "3rd generation",
      "MIG_Support": "Yes",
      "NVLink": "Supported",
      "Use_Cases": "AI, ML, DL, HPC",
      "Form": "OEM variant for system integration"
    }
  },
  {
    "id": 1002,
    "name": "NVIDIA H100 80GB PCIE",
    "brand": "NVIDIA",
    "category": "GPUВидеокарты",
    "price": "咨询获取",
    "img": "/assets/products/GPUВидеокарты/NVIDIA H100 80GB PCIE.jpg",
    "intro": {
      "cn": "旗舰级H100 80GB PCIe GPU，面向AI与HPC的高性能计算。",
      "en": "Flagship H100 80GB PCIe GPU built for advanced AI and HPC workloads.",
      "ru": "Флагманский GPU NVIDIA H100 80GB PCIe для ИИ, глубокого обучения и HPC."
    },
    "specs": {
      "Model": "NVIDIA H100 80GB PCIe",
      "Architecture": "NVIDIA Hopper",
      "Memory": "80GB HBM3",
      "Tensor Cores": "4th Gen",
      "Transformer Engine": "Yes",
      "NVLink Support": "Yes",
      "Interface": "PCIe Gen5",
      "AI Performance": "Optimized for training and inference",
      "HPC Performance": "Accelerated scientific computing"
    }
  },
  {
    "id": 1003,
    "name": "NVIDIA A100 96GB OEM PCIE",
    "brand": "NVIDIA",
    "category": "GPUВидеокарты",
    "price": "咨询获取",
    "img": "/assets/products/GPUВидеокарты/NVIDIA A100 96GB OEM PCIE.jpg",
    "intro": {
      "cn": "A100 96GB OEM PCIe，Ampere架构高性能GPU，适用于AI与HPC任务。",
      "en": "A100 96GB OEM PCIe GPU with Ampere architecture for high‑performance AI and HPC.",
      "ru": "Мощный GPU NVIDIA A100 96GB OEM PCIe для ИИ, МО, глубокого обучения и HPC."
    },
    "specs": {
      "Architecture": "NVIDIA Ampere",
      "Memory": "96GB HBM2e",
      "Tensor_Cores": "3rd generation",
      "MIG_Support": "Yes",
      "Interface": "PCIe Gen4",
      "AI_Performance": "Optimized for AI training and inference",
      "HPC_Performance": "High performance for scientific and engineering workloads",
      "OEM_Variant": "Designed for OEM system integration"
    }
  },
  {
    "id": 1004,
    "name": "NVIDIA A100 80GB PCIE",
    "brand": "NVIDIA",
    "category": "GPUВидеокарты",
    "price": "咨询获取",
    "img": "/assets/products/GPUВидеокарты/NVIDIA A100 80GB PCIE.jpg",
    "intro": {
      "cn": "高性能A100 80GB PCIe GPU，面向AI训练、推理与HPC加速",
      "en": "High‑performance A100 80GB PCIe GPU for AI training, inference, and HPC",
      "ru": "Высокопроизводительный GPU NVIDIA A100 80GB PCIe для ИИ, глубокого обучения и HPC"
    },
    "specs": {
      "Architecture": "NVIDIA Ampere",
      "Memory": "80GB HBM2e",
      "Tensor_Cores": "3rd generation",
      "MIG_Support": "Yes",
      "Interface": "PCIe Gen4"
    }
  },
  {
    "id": 1005,
    "name": "NVIDIA A100 40G Original",
    "brand": "NVIDIA",
    "category": "GPUВидеокарты",
    "price": "咨询获取",
    "img": "/assets/products/GPUВидеокарты/NVIDIA A100 40G Original.jpg",
    "intro": {
      "cn": "A100 40GB 原版，基于Ampere架构的高性能AI与HPC加速卡。",
      "en": "A100 40GB Original GPU for high‑performance AI and HPC workloads.",
      "ru": "Эталонный GPU NVIDIA A100 40GB для ИИ, глубокого обучения и HPC."
    },
    "specs": {
      "Architecture": "Ampere",
      "Memory": "40GB HBM2e",
      "Tensor_Cores": "3rd Generation",
      "MIG_Support": "Yes",
      "Use_Cases": "AI, Deep Learning, HPC",
      "Quality": "Original Reference Design"
    }
  },
  {
    "id": 1006,
    "name": "NVIDIA H100 80GB OEM PCIE",
    "brand": "NVIDIA",
    "category": "GPUВидеокарты",
    "price": "咨询获取",
    "img": "/assets/products/GPUВидеокарты/NVIDIA H100 80GB OEM PCIE.jpg",
    "intro": {
      "cn": "H100 80GB GPU，基于Hopper架构，面向AI与HPC的高性能OEM方案",
      "en": "H100 80GB GPU with Hopper architecture for high‑performance AI and HPC OEM systems",
      "ru": "Мощный GPU H100 80GB на архитектуре Hopper для AI, HPC и OEM‑интеграции"
    },
    "specs": {
      "GPU": "NVIDIA H100 OEM PCIe",
      "Architecture": "NVIDIA Hopper",
      "Memory": "80GB HBM3",
      "Tensor Cores": "4th Generation",
      "Transformer Engine": "Supported",
      "Interface": "PCIe Gen5",
      "MIG Support": "Yes",
      "Form": "OEM version"
    }
  },
  {
    "id": 1007,
    "name": "NVIDIA A100 80GB OEM PCIE",
    "brand": "NVIDIA",
    "category": "GPUВидеокарты",
    "price": "咨询获取",
    "img": "/assets/products/GPUВидеокарты/NVIDIA A100 80GB OEM PCIE.jpg",
    "intro": {
      "cn": "面向OEM与云服务的A100 80GB GPU，适用于AI与HPC高性能计算。",
      "en": "A100 80GB OEM GPU for AI, ML, deep learning and HPC integration.",
      "ru": "Мощный GPU для OEM и облачных сервисов, оптимизированный для ИИ и HPC."
    },
    "specs": {
      "Model": "NVIDIA A100 80GB OEM PCIe",
      "Architecture": "NVIDIA Ampere",
      "Memory Capacity": "80GB",
      "Memory Type": "HBM2e",
      "Interface": "PCIe 4.0",
      "Tensor Cores": "Supported",
      "NVLink Support": "Yes",
      "Target Use": "OEM integration, AI, ML, DL, HPC"
    }
  },
  {
    "id": 1008,
    "name": "Контроллер HPE JW679A — Aruba 7000",
    "brand": "HPE Aruba",
    "category": "WLAN контроллеры",
    "price": "咨询获取",
    "img": "/assets/products/WLAN контроллеры/Контроллер HPE JW679A  Aruba 7000.jpg",
    "intro": {
      "cn": "紧凑型企业无线控制器，支持最多16个AP并提供基础安全功能。",
      "en": "Compact WLAN controller for up to 16 APs with basic security and stable performance.",
      "ru": "Компактный контроллер Aruba 7005 для централизованного управления беспроводной сетью."
    },
    "specs": {
      "Model": "JW679A",
      "Series": "Aruba 7000 Series",
      "Manufacturer": "HPE",
      "Device_Type": "WLAN Controller",
      "Max_Managed_APs": "16",
      "Max_Active_Clients": "512",
      "Firewall_Throughput": "4 Gbps",
      "VPN_Throughput": "500 Mbps",
      "Ethernet_Ports": "4 x 10/100/1000BASE-T",
      "SFP_Ports": "2 x 1G SFP",
      "Console_Port": "1 x RJ-45",
      "USB_Port": "1 x USB 2.0",
      "New_Sessions_Per_Second": "4000",
      "Max_Concurrent_Sessions": "32000",
      "Power_Input": "12V DC",
      "Max_Power_Consumption": "30W",
      "Operating_Temperature": "0–40°C",
      "Operating_Humidity": "5–95% non-condensing",
      "Form_Factor": "Desktop",
      "Dimensions_mm": "190 x 140 x 35",
      "Weight_kg": "0.6",
      "Features": "Centralized AP management, ClientMatch, firewall, IPsec VPN"
    }
  },
  {
    "id": 1009,
    "name": "Контроллер HPE JX927A — Aruba",
    "brand": "HPE Aruba",
    "category": "WLAN контроллеры",
    "price": "咨询获取",
    "img": "/assets/products/WLAN контроллеры/Контроллер HPE JX927A  Aruba.jpg",
    "intro": {
      "cn": "集中管理Aruba无线网络，支持高可用与高性能。",
      "en": "Centralized control for Aruba wireless networks with high availability.",
      "ru": "Централизованное управление и высокая доступность для сетей Aruba."
    },
    "specs": {
      "Model": "JX927A",
      "Series": "Aruba 7200 Series",
      "Manufacturer": "HPE",
      "Device_Type": "WLAN controller",
      "Max_Managed_APs": "64 (up to 256 with license)",
      "Max_Clients": "16384",
      "Firewall_Throughput": "12 Gbps",
      "VPN_Throughput": "6 Gbps",
      "Ethernet_Ports": "8 x 10/100/1000BASE-T",
      "SFP_Ports": "2 x 1G/10G SFP+",
      "Console_Port": "1 x RJ-45",
      "USB_Port": "1 x USB 2.0",
      "New_Sessions_per_Second": "16000",
      "Max_Concurrent_Sessions": "256000",
      "Power_Supply": "100-240V AC",
      "Redundant_PSU_Option": "Supported",
      "Max_Power_Consumption": "100W",
      "Operating_Temperature": "0 to 40°C",
      "Operating_Humidity": "5% to 95% non-condensing",
      "Form_Factor": "1U rackmount",
      "Dimensions": "440 x 381 x 44 mm",
      "Weight": "5.9 kg"
    }
  },
  {
    "id": 1010,
    "name": "HPE JW633A — Aruba 7000",
    "brand": "HPE Aruba",
    "category": "WLAN контроллеры",
    "price": "咨询获取",
    "img": "/assets/products/WLAN контроллеры/HPE JW633A  Aruba 7000.jpg",
    "intro": {
      "cn": "Aruba 7000 控制器可管理大量AP并提升无线网络效率。",
      "en": "Aruba 7000 controller manages many APs and improves wireless network efficiency.",
      "ru": "Aruba 7000 эффективно управляет большим числом точек доступа и повышает эффективность сети."
    },
    "specs": {
      "Model": "JW633A",
      "Series": "Aruba 7000 Series",
      "Manufacturer": "HPE",
      "Device_Type": "WLAN Controller",
      "Max_Managed_APs": "16 (up to 64 with licenses)",
      "Max_Clients": "1024",
      "Firewall_Throughput": "8 Gbps",
      "VPN_Throughput": "1 Gbps",
      "Ethernet_Ports": "4 x 10/100/1000BASE-T",
      "SFP+_Ports": "2 x 1G/10G SFP+",
      "Console_Port": "1 x RJ-45",
      "USB_Port": "1 x USB 2.0",
      "New_Sessions_Per_Second": "8000",
      "Max_Concurrent_Sessions": "64000",
      "Power_Supply": "100-240V AC, 50-60Hz",
      "Max_Power_Consumption": "65W",
      "Operating_Temperature": "0°C to 40°C",
      "Operating_Humidity": "5%–95% non-condensing",
      "Form_Factor": "1U rack-mount",
      "Dimensions": "440 × 305 × 44 mm",
      "Weight": "4.5 kg"
    }
  },
  {
    "id": 1011,
    "name": "Ericsson 2219 B1 KRC 161 622",
    "brand": "Ericsson",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Ericsson 2219 B1 KRC 161 622.jpg",
    "intro": {
      "cn": "紧凑高效的LTE B1远程射频单元，提升覆盖和容量。",
      "en": "Compact, efficient LTE Band 1 RRU improving network coverage and capacity.",
      "ru": "Компактный и энергоэффективный RRU для улучшения покрытия и емкости LTE сети."
    },
    "specs": {
      "Model": "2219 B1 KRC 161 622",
      "Type": "Remote Radio Unit",
      "Supported_Band": "Band 1 (2100 MHz)",
      "Technology": "4G LTE",
      "Design": "Compact and lightweight",
      "Efficiency": "Energy efficient",
      "Condition": "Used, tested"
    }
  },
  {
    "id": 1012,
    "name": "Ericsson INF 903 6037/07",
    "brand": "Ericsson",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Ericsson INF 903 603707.jpg",
    "intro": {
      "cn": "高性能干扰滤波与接口板，用于爱立信光网络系统",
      "en": "High‑performance interference filter and interface board for Ericsson optical systems",
      "ru": "Плата интерфейса и высокопроизводительный фильтр для оптических сетей Ericsson"
    },
    "specs": {
      "Product_Type": "Interface board / interference filter",
      "Model": "INF 903 6037/07",
      "Application": "Optical networks (DWDM, CWDM, PON)",
      "Key_Features": "High selectivity, low loss, stable performance",
      "Condition": "Used, tested",
      "Compatibility": "Ericsson telecom systems"
    }
  },
  {
    "id": 1013,
    "name": "Nokia AZNA 473914A",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia AZNA 473914A.jpg",
    "intro": {
      "cn": "AirScale远端射频头，支持Band 40与4T4R，高功率覆盖，适用于4.5G Pro网络。",
      "en": "AirScale RRH for Band 40 with 4T4R and high power, boosting 4.5G Pro coverage and capacity.",
      "ru": "AirScale модуль RRH для Band 40 с поддержкой 4T4R и мощностью 4×40 Вт."
    },
    "specs": {
      "Model": "AZNA 473914A",
      "Type": "AirScale Remote Radio Head (RRH)",
      "Radio_Band": "Band 40 (2300 MHz)",
      "Technology": "4.5G Pro / LTE-Advanced Pro",
      "MIMO": "4T4R",
      "Output_Power": "4×40 W",
      "Architecture": "AirScale modular platform",
      "Condition": "Used, tested"
    }
  },
  {
    "id": 1014,
    "name": "Nokia FXED 472924A FLEXI RF MODULE 6TX 1800",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia FXED 472924A FLEXI RF MODULE 6TX 1800.jpg",
    "intro": {
      "cn": "6发射Flexi射频模块，支持1800MHz与2G/3G/4G网络扩容",
      "en": "6‑TX Flexi RF module for 1800 MHz, boosting 2G/3G/4G coverage and capacity",
      "ru": "Радиомодуль Flexi 6TX 1800 МГц для расширения покрытия и емкости сетей 2G/3G/4G"
    },
    "specs": {
      "Model": "FXED 472924A",
      "Product_Type": "RF Module",
      "Series": "Flexi",
      "Frequency_Band": "1800 MHz",
      "Transmitters": "6TX",
      "Network_Support": "2G/3G/4G",
      "Features": "High capacity, scalable, energy‑efficient",
      "Condition": "Used, tested"
    }
  },
  {
    "id": 1015,
    "name": "Ericsson INF 903 6037/07",
    "brand": "Ericsson",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Ericsson INF 903 603707.jpg",
    "intro": {
      "cn": "高性能干扰滤波与接口板，用于爱立信光网络系统",
      "en": "High‑performance interference filter and interface board for Ericsson optical systems",
      "ru": "Плата интерфейса и высокопроизводительный фильтр для оптических сетей Ericsson"
    },
    "specs": {
      "Product_Type": "Interface board / interference filter",
      "Model": "INF 903 6037/07",
      "Application": "Optical networks (DWDM, CWDM, PON)",
      "Key_Features": "High selectivity, low loss, stable performance",
      "Condition": "Used, tested",
      "Compatibility": "Ericsson telecom systems"
    }
  },
  {
    "id": 1016,
    "name": "NOKIA FXED, 472924A",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/NOKIA FXED 472924A.jpg",
    "intro": {
      "cn": "高性能宽带接入平台，支持GPON/XGS-PON，具备高密度与灵活可扩展性。",
      "en": "High‑performance broadband access platform with GPON/XGS‑PON, high density, and scalability.",
      "ru": "Высокопроизводительная платформа широкополосного доступа с поддержкой GPON и XGS‑PON."
    },
    "specs": {
      "Product_Code": "472924A",
      "Access_Technologies": "GPON, XGS-PON, Ethernet",
      "Key_Features": "Scalability, high port density, redundancy, energy efficiency",
      "Management": "Remote management and monitoring"
    }
  },
  {
    "id": 1017,
    "name": "4G 5G Nokia FXED RRU 1800",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/4G 5G Nokia FXED RRU 1800.jpg",
    "intro": {
      "cn": "适用于4G/5G的高性能1800MHz诺基亚远端射频单元。",
      "en": "High‑performance 1800 MHz Nokia RRU for enhanced 4G/5G coverage.",
      "ru": "Высокопроизводительный модуль RRU 1800 МГц для сетей 4G/5G."
    },
    "specs": {
      "Frequency_Band": "1800 MHz",
      "Network_Support": "4G LTE, 5G NR",
      "Output_Power": "High power output",
      "Design": "Compact and lightweight",
      "Energy_Consumption": "Low power usage",
      "MIMO_Support": "Yes",
      "Remote_Management": "Supported",
      "Platform_Integration": "Nokia FXED compatible"
    }
  },
  {
    "id": 1018,
    "name": "Nokia RRU 473484A AHGA 474254A.202",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia RRU 473484A AHGA 474254A202.jpg",
    "intro": {
      "cn": "高性能远端射频单元，支持4G与5G，提升覆盖与容量。",
      "en": "High‑performance RRU for 4G/5G, improving coverage and network capacity.",
      "ru": "Высокопроизводительная RRU для расширения покрытия и повышения эффективности 4G/5G сетей."
    },
    "specs": {
      "Product_Name": "RRU 473484A AHGA 474254A.202",
      "Type": "Remote Radio Unit",
      "Network_Support": "4G LTE, 5G NR",
      "Frequency_Bands": "Various (specific bands not provided)",
      "Output_Power": "High output power",
      "MIMO_Support": "Yes",
      "Design": "Compact and lightweight",
      "Power_Consumption": "Low",
      "Application": "Urban and rural deployments"
    }
  },
  {
    "id": 1019,
    "name": "Nokia 5G Flexi RRU FHEB 472650A",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia 5G Flexi RRU FHEB 472650A.jpg",
    "intro": {
      "cn": "Nokia 5G Flexi RRU FHEB提供高性能与灵活性，适用于5G网络部署。",
      "en": "Nokia 5G Flexi RRU FHEB offers high performance and flexibility for 5G deployments.",
      "ru": "Передовая удаленная радиочастотная головка для повышения емкости и покрытия 5G сетей."
    },
    "specs": {
      "Product_Code": "472650A",
      "Product_Type": "5G Remote Radio Unit",
      "5G_NR_Support": "3GPP compliant",
      "Power_Output": "High power output",
      "Frequency_Bands": "Wide-band support",
      "MIMO_Support": "Massive MIMO"
    }
  },
  {
    "id": 1020,
    "name": "Nokia Base 3G/4G/5G Station Router FRGU 472956A",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia Base 3G4G5G Station Router FRGU 472956A.jpg",
    "intro": {
      "cn": "高性能3G/4G/5G基站路由器，提供高带宽与灵活安全的传输能力",
      "en": "High‑performance 3G/4G/5G base station router with scalable, secure transport",
      "ru": "Высокопроизводительный маршрутизатор для передачи данных между базовыми станциями 3G/4G/5G и ядром сети"
    },
    "specs": {}
  },
  {
    "id": 1021,
    "name": "Nokia 5G FRGX 473440A.101 Nokia FRGX 473440A Flexi RFM 3-pipe 2100 240W",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia 5G FRGX 473440A101 Nokia FRGX 473440A Flexi RFM 3-pipe 2100 240W.jpg",
    "intro": {
      "cn": "高功率240W的诺基亚5G模块组合，支持2100MHz并提升网络覆盖与容量。",
      "en": "Nokia 240W 5G module combo supporting 2100MHz for enhanced coverage and capacity.",
      "ru": "Передовое 240W решение Nokia 5G с поддержкой 2100 МГц и улучшенным покрытием."
    },
    "specs": {
      "Model": "FRGX 473440A.101 + FRGX 473440A Flexi RFM",
      "Technology": "5G NR",
      "Output Power": "240W",
      "Frequency Band": "2100 MHz (Band 1)",
      "Architecture": "3-pipe",
      "Use Case": "Coverage and capacity expansion",
      "Compatibility": "3G/4G/5G networks"
    }
  },
  {
    "id": 1022,
    "name": "Nokia RRU FRGY Flexi MCPA FRGY 472854A",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia RRU FRGY Flexi MCPA FRGY 472854A.jpg",
    "intro": {
      "cn": "高性能远端射频单元，用于扩展覆盖并提升移动网络容量。",
      "en": "High‑performance RRU for expanding coverage and boosting mobile network capacity.",
      "ru": "Высокопроизводительный удаленный радиоблок для расширения покрытия и увеличения емкости мобильных сетей."
    },
    "specs": {
      "Model": "FRGY 472854A",
      "Type": "Remote Radio Unit",
      "Platform": "Flexi Multiradio",
      "Amplifier": "Multi-Carrier Power Amplifier (MCPA)"
    }
  },
  {
    "id": 1023,
    "name": "Nokia FXEB 472501A.103 Flexi FXEB 472501A",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia FXEB 472501A103 Flexi FXEB 472501A.jpg",
    "intro": {
      "cn": "高性能扩展模块，用于提升Nokia Flexi基站容量与灵活性。",
      "en": "High‑performance expansion module enhancing Nokia Flexi base station capacity and flexibility.",
      "ru": "Высокопроизводительный модуль расширения для платформы Nokia Flexi Multiradio."
    },
    "specs": {
      "Model": "FXEB 472501A.103",
      "Type": "Expansion Module",
      "Platform_Compatibility": "Nokia Flexi Multiradio",
      "Key_Features": "Capacity expansion, flexible configuration, scalable design",
      "Performance": "High throughput and low latency",
      "Energy_Efficiency": "Optimized power management",
      "Installation": "Modular design with remote monitoring"
    }
  },
  {
    "id": 1024,
    "name": "Nokia 4G 1800 MHz",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia 4G 1800 MHz.jpg",
    "intro": {
      "cn": "高性能1800MHz 4G远程射频单元，提升覆盖与容量。",
      "en": "High‑performance 1800 MHz 4G RRU enhancing coverage and capacity.",
      "ru": "Высокопроизводительный 4G RRU для диапазона 1800 MHz."
    },
    "specs": {
      "Frequency_Band": "1800 MHz",
      "Product_Type": "4G Remote Radio Unit (RRU)",
      "MIMO_Support": "6TX/6RX",
      "Coverage_Enhancement": "Extended LTE coverage",
      "Capacity_Enhancement": "Improved network throughput",
      "Energy_Efficiency": "Optimized power management",
      "Installation": "Compact, easy to deploy"
    }
  },
  {
    "id": 1025,
    "name": "Nokia 5G FRGX Nokia FRGX",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia 5G FRGX Nokia FRGX.jpg",
    "intro": {
      "cn": "高性能5G射频模块，支持2100MHz与3-pipe配置，提升覆盖与容量。",
      "en": "High‑performance 5G RF module with 2100MHz and 3‑pipe design for enhanced coverage.",
      "ru": "Высокопроизводительный 5G радиомодуль для расширения покрытия и емкости сети."
    },
    "specs": {
      "Model": "FRGX 473440A",
      "Type": "Radio Frequency Module",
      "Platform": "Flexi Multiradio",
      "5G Support": "5G NR",
      "Frequency Band": "2100 MHz",
      "Configuration": "3-pipe",
      "Output Power": "240W",
      "Use Case": "Urban, suburban, rural deployment"
    }
  },
  {
    "id": 1026,
    "name": "Nokia Base Station RRU FRGY",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia Base Station RRU FRGY.jpg",
    "intro": {
      "cn": "高性能5G远端射频单元，提升容量并易于部署。",
      "en": "High‑performance 5G RRU offering improved capacity and flexible deployment.",
      "ru": "Высокопроизводительный 5G RRU с гибким развертыванием и эффективным использованием спектра."
    },
    "specs": {}
  },
  {
    "id": 1027,
    "name": "Nokia FXED 472924A FLEXI RF",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia FXED 472924A FLEXI RF.jpg",
    "intro": {
      "cn": "紧凑高性能的1800MHz六发射Flexi射频模块。",
      "en": "Compact high‑performance 1800MHz Flexi RF module with 6 transmitters.",
      "ru": "Высокопроизводительный компактный RF‑модуль 1800 МГц с конфигурацией 6TX."
    },
    "specs": {
      "Product_Model": "FXED 472924A",
      "Type": "Flexi RF Module",
      "Frequency_Band": "1800 MHz",
      "TX_Configuration": "6TX",
      "Network_Support": "2G / 3G / 4G LTE",
      "Features": "High capacity, enhanced coverage, scalable Flexi design"
    }
  },
  {
    "id": 1028,
    "name": "Nokia FRGU 472956A.102 Flexi 6TX 2100 RF",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia FRGU 472956A102 Flexi 6TX 2100 RF.jpg",
    "intro": {
      "cn": "面向2100MHz频段的6发射Flexi射频模块，提升3G/4G容量与覆盖。",
      "en": "6TX 2100 MHz Flexi RF module boosting 3G/4G capacity and coverage.",
      "ru": "Мощный и гибкий 6TX RF‑модуль для диапазона 2100 МГц, повышающий ёмкость и покрытие."
    },
    "specs": {
      "Frequency_Band": "2100 MHz",
      "TX_Configuration": "6TX",
      "Technologies": "UMTS/WCDMA Band I, LTE Band 1",
      "Module_Type": "Flexi RF Module",
      "Use_Case": "Capacity and coverage enhancement for 3G/4G networks"
    }
  },
  {
    "id": 1029,
    "name": "Nokia RRU FXEB FXDA FXDB FXEF FXED",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia RRU FXEB FXDA FXDB FXEF FXED.jpg",
    "intro": {
      "cn": "Nokia RRU FX系列支持高性能4G/5G远端射频部署，功率高、效率强。",
      "en": "Nokia FX RRU series enables high‑performance 4G/5G deployment with high power and efficiency.",
      "ru": "Высокопроизводительные удалённые радиомодули Nokia RRU FX для гибкого развертывания 4G/5G."
    },
    "specs": {}
  },
  {
    "id": 1030,
    "name": "Nokia AHGA RRU 473484A AHGA 474254A.202",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia AHGA RRU 473484A AHGA 474254A202.jpg",
    "intro": {
      "cn": "高效RRU设备，支持多频段与4G/5G网络部署，提升覆盖与容量。",
      "en": "High‑efficiency RRU units for 4G/5G deployment, offering strong output and improved coverage.",
      "ru": "Высокопроизводительные RRU Nokia для улучшения покрытия и емкости современных сетей."
    },
    "specs": {
      "Product_Model": "AHGA RRU 473484A / AHGA 474254A.202",
      "Type": "Remote Radio Unit (RRU)",
      "Application": "4G/LTE, optional 5G support",
      "Key_Features": "High output power, advanced modulation support, optimized network performance",
      "Installation": "Near-antenna mounting to reduce feeder losses",
      "Frequency_Bands": "Model-dependent"
    }
  },
  {
    "id": 1031,
    "name": "Nokia RRU FHEB AZNA FHDB FXEB FXEB FRGT FXDB FXEF",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia RRU FHEB AZNA FHDB FXEB FXEB FRGT FXDB FXEF.jpg",
    "intro": {
      "cn": "Nokia RRU系列支持多频段部署，具备高功率与高性能无线覆盖能力。",
      "en": "Nokia RRU series offers high‑power, multi‑band units for efficient mobile network deployment.",
      "ru": "Серия Nokia RRU — высокопроизводительные радиомодули для расширения и оптимизации мобильных сетей."
    },
    "specs": {
      "Product_Series": "RRU FHEB / AZNA / FHDB / FXEB / FRGT / FXEF",
      "Type": "Remote Radio Unit",
      "Use_Case": "Mobile network capacity and coverage enhancement",
      "Power_Output": "High output power",
      "Deployment": "Near-antenna installation",
      "Technologies_Supported": "4G LTE; early 5G (varies by model)",
      "Key_Features": "Spectrum efficiency; advanced modulation support; reduced feeder loss"
    }
  },
  {
    "id": 1032,
    "name": "Nokia AHGA RRU 473484A AHGA 474254A.202",
    "brand": "Nokia",
    "category": "Базовые станции",
    "price": "咨询获取",
    "img": "/assets/products/Базовые станции/Nokia AHGA RRU 473484A AHGA 474254A202.jpg",
    "intro": {
      "cn": "高效RRU设备，支持多频段与4G/5G网络部署，提升覆盖与容量。",
      "en": "High‑efficiency RRU units for 4G/5G deployment, offering strong output and improved coverage.",
      "ru": "Высокопроизводительные RRU Nokia для улучшения покрытия и емкости современных сетей."
    },
    "specs": {
      "Product_Model": "AHGA RRU 473484A / AHGA 474254A.202",
      "Type": "Remote Radio Unit (RRU)",
      "Application": "4G/LTE, optional 5G support",
      "Key_Features": "High output power, advanced modulation support, optimized network performance",
      "Installation": "Near-antenna mounting to reduce feeder losses",
      "Frequency_Bands": "Model-dependent"
    }
  },
  {
    "id": 1033,
    "name": "Juniper JPSU-920-AC-AFO",
    "brand": "Juniper",
    "category": "Блоки питания",
    "price": "咨询获取",
    "img": "/assets/products/Блоки питания/Juniper JPSU-920-AC-AFO.jpg",
    "intro": {
      "cn": "920W交流电源，适用于Juniper MX/PTX，支持AFO气流与高可靠性。",
      "en": "920W AC PSU for Juniper MX/PTX routers with AFO airflow and high reliability.",
      "ru": "920‑Вт AC блок питания с обратным воздушным потоком для MX/PTX."
    },
    "specs": {
      "Power": "920W",
      "Power_Type": "AC",
      "Airflow": "AFO (reverse airflow)",
      "Compatibility": "Juniper MX Series, PTX Series",
      "Redundancy": "Supports redundant PSU setup",
      "Hot_Swap": "Supported",
      "Reliability": "High‑quality components"
    }
  },
  {
    "id": 1034,
    "name": "Juniper JPSU-600-AC-AFO",
    "brand": "Juniper",
    "category": "Блоки питания",
    "price": "咨询获取",
    "img": "/assets/products/Блоки питания/Juniper JPSU-600-AC-AFO.jpg",
    "intro": {
      "cn": "600W 交流供电模块，支持反向风道，适用于Juniper设备。",
      "en": "600W AC power supply with reverse airflow for Juniper networking devices.",
      "ru": "600‑Вт AC блок питания с обратным воздушным потоком для устройств Juniper."
    },
    "specs": {
      "Power": "600W",
      "Input_Type": "AC",
      "Airflow": "AFO (Reverse Airflow)",
      "Hot_Swap": "Supported",
      "Redundancy": "Supported",
      "Device_Compatibility": "Juniper switches and routers"
    }
  },
  {
    "id": 1035,
    "name": "Juniper JPSU-150-AC-AFO",
    "brand": "Juniper",
    "category": "Блоки питания",
    "price": "咨询获取",
    "img": "/assets/products/Блоки питания/Juniper JPSU-150-AC-AFO.jpg",
    "intro": {
      "cn": "紧凑150W交流电源，具备反向气流设计，适用于Juniper EX系列交换机。",
      "en": "Compact 150W AC power supply with reverse airflow for Juniper EX switches.",
      "ru": "Компактный надёжный блок питания 150 Вт с обратным воздушным потоком для EX Series."
    },
    "specs": {
      "Power_Output": "150W",
      "Input_Type": "AC",
      "Airflow": "AFO (reverse airflow)",
      "Compatibility": "Juniper EX Series switches",
      "Form_Factor": "Compact",
      "Hot_Swap_Support": "Yes (model dependent)",
      "Energy_Efficiency": "High",
      "Installation": "Tool‑less, easy replacement"
    }
  },
  {
    "id": 1036,
    "name": "Juniper JPSU-1100-AC-AFO",
    "brand": "Juniper",
    "category": "Блоки питания",
    "price": "咨询获取",
    "img": "/assets/products/Блоки питания/Juniper JPSU-1100-AC-AFO.jpg",
    "intro": {
      "cn": "1100W 交流电源模块，适用于MX系列，支持AFO气流与高可靠性。",
      "en": "1100W AC PSU for Juniper MX routers with AFO airflow and high reliability.",
      "ru": "1100‑Вт AC блок питания с обратным воздушным потоком для маршрутизаторов MX Series."
    },
    "specs": {
      "Power": "1100W",
      "Input_Type": "AC",
      "Airflow": "AFO (back-to-front)",
      "Compatibility": "Juniper MX Series",
      "Redundancy": "Supports dual PSU redundancy",
      "Hot_Swap": "Yes",
      "Efficiency": "Energy‑efficient design",
      "Installation": "Tool‑free, easy replacement"
    }
  },
  {
    "id": 1037,
    "name": "Juniper JPSU-350-AC-AFO",
    "brand": "Juniper",
    "category": "Блоки питания",
    "price": "咨询获取",
    "img": "/assets/products/Блоки питания/Juniper JPSU-350-AC-AFO.jpg",
    "intro": {
      "cn": "350W 交流电源，适用于反向气流的 Juniper 设备。",
      "en": "350W AC power supply with AFO airflow for Juniper network devices.",
      "ru": "Надежный блок питания Juniper 350 Вт с обратным воздушным потоком."
    },
    "specs": {
      "Model": "JPSU-350-AC-AFO",
      "Power_Output": "350W",
      "Input_Type": "AC",
      "Airflow": "AFO (Airflow Out / reverse airflow)",
      "Compatibility": "Juniper EX Series (select models)",
      "Hot_Swap_Support": "Yes, depending on switch model",
      "Use_Case": "Network switches requiring stable AC power"
    }
  },
  {
    "id": 1038,
    "name": "Juniper JPSU-400W-AC",
    "brand": "Juniper",
    "category": "Блоки питания",
    "price": "咨询获取",
    "img": "/assets/products/Блоки питания/Juniper JPSU-400W-AC.jpg",
    "intro": {
      "cn": "适用于Juniper EX系列的400W交流电源，稳定可靠。",
      "en": "400W AC PSU for Juniper EX switches, stable and reliable.",
      "ru": "Надежный 400‑Вт AC блок питания для коммутаторов Juniper EX Series."
    },
    "specs": {
      "Power": "400W",
      "Power_Type": "AC",
      "Compatibility": "Juniper EX Series switches",
      "Redundancy_Support": "Yes, model-dependent",
      "Hot_Swap": "Yes, model-dependent",
      "Energy_Efficiency": "Optimized for reduced power use",
      "Installation": "Tool-less, easy replacement"
    }
  },
  {
    "id": 1039,
    "name": "Juniper JPSU-715-AC-AFO",
    "brand": "Juniper",
    "category": "Блоки питания",
    "price": "咨询获取",
    "img": "/assets/products/Блоки питания/Juniper JPSU-715-AC-AFO.jpg",
    "intro": {
      "cn": "715W 高性能AC电源，适用于Juniper MX系列，支持AFO反向气流与冗余。",
      "en": "715W high‑performance AC PSU for Juniper MX Series with AFO airflow and redundancy.",
      "ru": "Высокопроизводительный AC блок питания 715 Вт для маршрутизаторов Juniper MX Series."
    },
    "specs": {
      "Product_Name": "Juniper JPSU-715-AC-AFO",
      "Power_Output": "715W",
      "Input_Type": "AC",
      "Airflow": "AFO (reverse airflow)",
      "Hot_Swap_Support": "Yes",
      "Redundancy_Support": "Yes",
      "Compatibility": "Juniper MX Series",
      "Energy_Efficiency": "Optimized",
      "Installation": "Tool-less, easy replacement"
    }
  },
  {
    "id": 1040,
    "name": "Supermicro Nvidia H100 SYS-821GE-TNHR",
    "brand": "Supermicro",
    "category": "Высокопроизводительные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Высокопроизводительные серверы/Supermicro Nvidia H100 SYS-821GE-TNHR.jpg",
    "intro": {
      "cn": "搭载8颗NVIDIA H100的高性能AI与HPC服务器，具备强大算力与扩展性。",
      "en": "High‑performance server with 8 NVIDIA H100 GPUs for advanced AI and HPC workloads.",
      "ru": "Мощный сервер с 8 GPU NVIDIA H100 для ИИ, МО и HPC задач."
    },
    "specs": {
      "GPU": "8x NVIDIA H100",
      "CPU": "2x Intel Xeon Scalable 4th Gen",
      "Memory Support": "Up to 8TB DDR5",
      "Storage Bays": "24x NVMe/SATA/SAS",
      "Networking": "10GbE + optional NICs",
      "NVLink Support": "Yes (depends on config)",
      "Cooling": "High‑efficiency cooling system",
      "Power Supply": "Redundant PSU",
      "Remote Management": "Supermicro IPMI 2.0"
    }
  },
  {
    "id": 1041,
    "name": "Inspur Nvidia H200 AI Server Bundle 10",
    "brand": "Inspur",
    "category": "Высокопроизводительные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Высокопроизводительные серверы/Inspur Nvidia H200 AI Server Bundle 10.jpg",
    "intro": {
      "cn": "Inspur 集成 NVIDIA H200 的一体化 AI 服务器套装，适用于高性能 AI 部署。",
      "en": "Integrated Inspur server with NVIDIA H200 GPUs for high‑performance AI deployment.",
      "ru": "Комплексное AI‑решение с GPU NVIDIA H200 и инфраструктурой Inspur."
    },
    "specs": {
      "Server_Platform": "Inspur scalable server platform",
      "GPU": "NVIDIA H200",
      "Solution_Type": "Integrated AI server bundle",
      "Included_Components": "Server, GPUs, storage, memory, networking",
      "Deployment": "Ready-to-use, fast deployment",
      "Optimization": "Optimized for AI and ML workloads",
      "Scalability": "Supports scalable infrastructure",
      "Energy_Efficiency": "Optimized power consumption",
      "Support": "Inspur and NVIDIA professional support"
    }
  },
  {
    "id": 1042,
    "name": "NVIDIA H100 8 GPU",
    "brand": "NVIDIA",
    "category": "Высокопроизводительные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Высокопроизводительные серверы/NVIDIA H100 8 GPU.jpg",
    "intro": {
      "cn": "搭载8块NVIDIA H100的高性能AI与HPC计算系统。",
      "en": "High‑performance system with 8 NVIDIA H100 GPUs for AI and HPC workloads.",
      "ru": "Мощная система с 8 GPU NVIDIA H100 для ИИ, обучения и HPC."
    },
    "specs": {
      "GPU": "8× NVIDIA H100",
      "Architecture": "NVIDIA Hopper",
      "Memory": "HBM3",
      "Tensor Cores": "4th generation",
      "Transformer Engine": "Supported",
      "NVLink": "High‑speed GPU interconnect (depends on implementation)",
      "PCIe": "PCIe Gen5 (depends on implementation)",
      "Scalability": "Supports multi‑GPU scaling for heavy workloads"
    }
  },
  {
    "id": 1043,
    "name": "Dell PowerEdge XE9680",
    "brand": "Dell",
    "category": "Высокопроизводительные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Высокопроизводительные серверы/Dell PowerEdge XE9680.jpg",
    "intro": {
      "cn": "高性能AI与HPC服务器，配8×H200、双Xeon、2TB DDR5与400Gb网络。",
      "en": "High‑performance AI/HPC server with 8×H200 GPUs, dual Xeon CPUs and fast NVMe/IB.",
      "ru": "Высокопроизводительный сервер для ИИ и HPC с 8× H200, двумя Xeon и 2 ТБ DDR5."
    },
    "specs": {
      "CPU": "2× Intel Xeon 8558, 48C/96T, up to 2.1 GHz",
      "Memory": "2 TB DDR5 ECC",
      "GPU": "8× NVIDIA HGX H200, 1.1 TB HBM3",
      "Storage": "3.8 TB NVMe RAID",
      "Networking": "400 Gbps InfiniBand",
      "Power": "2800 W Titanium PSU",
      "Cooling": "Liquid cooling",
      "Form_Factor": "Data‑center optimized"
    }
  },
  {
    "id": 1044,
    "name": "Supermicro Nvidia H200 SYS-821GE-TNHR",
    "brand": "Supermicro",
    "category": "Высокопроизводительные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Высокопроизводительные серверы/Supermicro Nvidia H200 SYS-821GE-TNHR.jpg",
    "intro": {
      "cn": "8U高性能服务器，支持8×NVIDIA H200 GPU与双路至强，适用于AI与HPC。",
      "en": "8U high‑performance server with 8×NVIDIA H200 GPUs and dual Xeon for AI and HPC.",
      "ru": "Высокопроизводительный 8U сервер с 8 GPU H200, двумя Xeon и поддержкой ИИ/HPC."
    },
    "specs": {
      "Form_Factor": "8U",
      "GPU_Support": "Up to 8×NVIDIA H200 Tensor Core",
      "CPU": "Dual Intel Xeon Scalable 4th Gen",
      "Memory": "Up to 8TB DDR5 ECC REG",
      "Storage_Options": "SSD/HDD supported",
      "Networking": "Ethernet 100GbE/200GbE",
      "Power_Supply": "Redundant PSUs",
      "Cooling": "High‑efficiency cooling system",
      "Management": "IPMI remote management"
    }
  },
  {
    "id": 1045,
    "name": "Inspur Nvidia H100 AI Server Bundle 9",
    "brand": "Inspur",
    "category": "Высокопроизводительные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Высокопроизводительные серверы/Inspur Nvidia H100 AI Server Bundle 9.jpg",
    "intro": {
      "cn": "Inspur整机方案，含8×NVIDIA H100 GPU，适用于AI训练与推理。",
      "en": "Inspur turnkey server with 8×NVIDIA H100 GPUs for high‑performance AI workloads.",
      "ru": "Комплексное решение с сервером Inspur и 8 GPU NVIDIA H100 для ИИ‑задач."
    },
    "specs": {
      "Server_Platform": "Inspur AI server",
      "GPU": "8× NVIDIA H100",
      "Networking": "InfiniBand/Ethernet high‑speed",
      "Software_Optimization": "AI/ML optimized stack",
      "Scalability": "Supports scalable deployment",
      "Energy_Efficiency": "Optimized power consumption",
      "Ready_To_Deploy": "Preconfigured, ready out‑of‑box"
    }
  },
  {
    "id": 1046,
    "name": "Asus Nvidia H200 AI Server Bundle11",
    "brand": "Asus",
    "category": "Высокопроизводительные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Высокопроизводительные серверы/Asus Nvidia H200 AI Server Bundle11.jpg",
    "intro": {
      "cn": "Asus搭载8×NVIDIA H200 GPU的AI服务器套装，适合AI训练与数据分析。",
      "en": "Asus AI server bundle with 8 NVIDIA H200 GPUs for high‑performance AI workloads.",
      "ru": "Комплексное решение ASUS с 8 GPU NVIDIA H200, оптимизированное для задач ИИ."
    },
    "specs": {
      "GPU": "8× NVIDIA H200 Tensor Core",
      "CPU": "Dual Intel Xeon Scalable",
      "Networking": "High-speed InfiniBand / Ethernet",
      "Software": "Preinstalled AI software and optimized libraries",
      "Platform": "Asus scalable enterprise server platform",
      "Use_Cases": "AI training, deep learning, data analytics, HPC",
      "Scalability": "Expandable compute and storage resources"
    }
  },
  {
    "id": 1047,
    "name": "Juniper MPC7E-MRATE-RTU",
    "brand": "Juniper",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Juniper MPC7E-MRATE-RTU.jpg",
    "intro": {
      "cn": "高性能可扩展的Juniper MX系列多速率接口模块。",
      "en": "High-performance multi-rate interface module for Juniper MX routers.",
      "ru": "Гибкий и высокопроизводительный модуль MPC для маршрутизаторов Juniper MX."
    },
    "specs": {
      "Compatible_Devices": "Juniper MX Series",
      "Port_Flexibility": "100GbE, 40GbE; break-out to 25GbE/10GbE",
      "Rate_Selectable_Transceivers": "MRATE support",
      "Throughput": "Up to 400 Gbps",
      "Supported_Technologies": "MPLS, VLAN, QoS, VXLAN, EVPN, MACsec (Junos dependent)",
      "OS_Platform": "Junos OS",
      "Use_Cases": "ISPs, service providers, scalable networks"
    }
  },
  {
    "id": 1048,
    "name": "Juniper MPC10E-15C-P-BASE",
    "brand": "Juniper",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Juniper MPC10E-15C-P-BASE.jpg",
    "intro": {
      "cn": "高密度15×100GE接口卡，适用于Juniper MX路由器的高性能网络部署。",
      "en": "High‑density 15×100GE interface card for Juniper MX routers, built for high performance.",
      "ru": "Высокопроизводительная карта MPC для Juniper MX с 15 портами 100GE."
    },
    "specs": {
      "Product_Name": "MPC10E-15C-P-BASE",
      "Type": "Modular Port Concentrator",
      "Compatibility": "Juniper MX Series Routers",
      "Port_Count": "15 x 100GE",
      "Port_Type": "100 Gigabit Ethernet",
      "Performance": "High throughput, low latency",
      "Supported_Protocols": "Ethernet, MPLS",
      "OS_Support": "Junos OS"
    }
  },
  {
    "id": 1049,
    "name": "ZTE ZXA10 C320 — платформа оптической линии",
    "brand": "ZTE",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/ZTE ZXA10 C320  платформа оптической линии.jpg",
    "intro": {
      "cn": "紧凑型低能耗OLT平台，提供高密度GPON/EPON端口与灵活上行配置。",
      "en": "Compact low‑power OLT with high‑density GPON/EPON ports and flexible uplink options.",
      "ru": "Компактная OLT с высокой плотностью портов, гибкой конфигурацией и низким энергопотреблением."
    },
    "specs": {
      "Model": "ZXA10 C320",
      "Manufacturer": "ZTE Corporation",
      "Device_Type": "Optical Line Terminal (OLT)",
      "Supported_PON_Tech": "GPON, EPON",
      "Service_Card_Slots": "2",
      "PON_Ports_Per_Card": "8 or 16 (depending on card)",
      "Max_PON_Ports": "32 GPON or 32 EPON",
      "Uplink_Ports": "GE, 10GE",
      "Management_Interfaces": "CLI, SNMP, Web GUI",
      "Redundancy": "Main modules supported",
      "PON_Card_Slots": "2",
      "Uplink_Card_Slots": "GE/10GE combinations",
      "GE_Ports": "Multiple per card",
      "10GE_Ports": "Multiple per card",
      "Mgmt_Ethernet_Port": "1 x RJ‑45",
      "Console_Port": "1 x RJ‑45"
    }
  },
  {
    "id": 1050,
    "name": "Модуль управления ZTE ZXMP M721 DX61",
    "brand": "ZTE",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Модуль управления ZTE ZXMP M721 DX61.jpg",
    "intro": {
      "cn": "ZTE DX61控制模块，适用于ZXMP M700，实现集中管理与E300 NMS集成。",
      "en": "ZTE DX61 control module for ZXMP M700 with centralized management and E300 NMS integration.",
      "ru": "Модуль управления ZTE DX61 для ZXMP M700 с централизованным контролем и интеграцией E300 NMS."
    },
    "specs": {
      "Module_Type": "Embedded (DX slot)",
      "Managed_Elements": "Up to 16 NE per chassis",
      "Protocols": "SNMPv2/v3, TL1, Qx/Q3",
      "Auto_Discovery": "CX/DX boards",
      "Interfaces": "1×10/100Base‑T, 2×RS‑232",
      "Storage": "CF card slot",
      "Integration": "ZXONM E300, Syslog, NetFlow",
      "Dimensions": "25.4 × 200 × 160 mm",
      "Power_Consumption": "≤15 W",
      "Operating_Temperature": "-5°C to +55°C",
      "MTBF": ">300,000 h",
      "OS": "Linux",
      "Software_Features": "Standalone update, emergency recovery",
      "Security": "SSHv2, SSL"
    }
  },
  {
    "id": 1051,
    "name": "Juniper MPC7E-10G",
    "brand": "Juniper",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Juniper MPC7E-10G.jpg",
    "intro": {
      "cn": "高性能10GbE接口模块，适用于Juniper MX路由器，提供高带宽与灵活配置。",
      "en": "High‑performance 10GbE interface module for Juniper MX routers with high bandwidth and flexibility.",
      "ru": "Высокопроизводительный модуль 10GbE для маршрутизаторов Juniper MX, обеспечивающий высокую пропускную способность и гибкость."
    },
    "specs": {
      "Product_Name": "Juniper MPC7E-10G",
      "Type": "Interface Module (MIC)",
      "Interface_Ports": "8 x 10GbE SFP+",
      "Throughput": "High throughput for large data volumes",
      "QoS": "Advanced QoS features",
      "Scalability": "Scalable architecture",
      "Configuration": "Flexible configuration options",
      "Reliability": "High reliability and redundancy",
      "Compatibility": "Juniper MX Series routers",
      "Management": "Managed via Junos OS",
      "Energy_Efficiency": "Optimized power consumption"
    }
  },
  {
    "id": 1052,
    "name": "Juniper MPC4E-3D-2CGE-8XGE Б/У",
    "brand": "Juniper",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Juniper MPC4E-3D-2CGE-8XGE БУ.jpg",
    "intro": {
      "cn": "双100GE与八10GE端口的高性能Juniper MX路由器线卡，适用于扩容与替换。",
      "en": "High‑performance MX router line card with 2x100GE and 8x10GE ports for expansion or replacement.",
      "ru": "Б/У линейная карта с 2×100GE и 8×10GE для MX‑маршрутизаторов, высокая производительность."
    },
    "specs": {
      "Model": "MPC4E-3D-2CGE-8XGE",
      "Condition": "Used",
      "Port_100GE": "2 x 100GE CFP2",
      "Port_10GE": "8 x 10GE SFP+",
      "Compatibility": "Juniper MX series",
      "Throughput": "High throughput module",
      "Architecture": "Modular design",
      "Transceiver_Support": "Supports multiple optical module types",
      "Use_Cases": "Service providers, enterprises, data centers"
    }
  },
  {
    "id": 1053,
    "name": "Juniper MPC7E-10G 40 портов 10GE SFPP Б/У",
    "brand": "Juniper",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Juniper MPC7E-10G 40 портов 10GE SFPP БУ.jpg",
    "intro": {
      "cn": "Juniper MPC7E-10G，40口10GE SFPP，用于MX路由器的高密度接口卡。",
      "en": "Juniper MPC7E-10G, 40x10GE SFPP line card for MX routers, high‑density and reliable.",
      "ru": "Б/У линейная карта Juniper MPC7E-10G с 40 портами 10GE SFPP для расширения сети."
    },
    "specs": {
      "Model": "MPC7E-10G",
      "Type": "Modular Port Concentrator",
      "Ports": "40x 10GE SFPP",
      "Condition": "Used",
      "Compatibility": "Juniper MX Series",
      "OS Support": "Junos OS",
      "Features": "MPLS, EVPN, VXLAN support"
    }
  },
  {
    "id": 1054,
    "name": "Juniper MPC3E-3D-NG-Q Б/У",
    "brand": "Juniper",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Juniper MPC3E-3D-NG-Q БУ.jpg",
    "intro": {
      "cn": "高性能 Juniper MX 系列用模块化线卡，支持10/40/100GE，可靠适用。",
      "en": "High‑performance modular Juniper MX line card with 10/40/100GE support and high reliability.",
      "ru": "Высокопроизводительная модульная линейная карта для MX с поддержкой 10/40/100GE."
    },
    "specs": {
      "Model": "MPC3E-3D-NG-Q",
      "Condition": "Used",
      "Type": "Modular Port Concentrator (MPC)",
      "Compatibility": "Juniper MX Series routers",
      "Supported_Interfaces": "10GbE, 40GbE, 100GbE",
      "Performance": "High throughput, low latency",
      "Scalability": "Modular port expansion",
      "Network_Features": "L2/L3, MPLS, VXLAN, EVPN, segmentation",
      "Reliability": "High availability features, redundant components",
      "Power_Management": "Optimized power consumption"
    }
  },
  {
    "id": 1055,
    "name": "Juniper RE-S-X6-64G-LT-S Б/У",
    "brand": "Juniper",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Juniper RE-S-X6-64G-LT-S БУ.jpg",
    "intro": {
      "cn": "高性能MX系列路由引擎，64GB内存，带保修，适用于大型网络。",
      "en": "High‑performance MX Series routing engine with 64GB RAM, tested and warrantied.",
      "ru": "Высокопроизводительный маршрутизирующий модуль для Juniper MX с 64GB RAM."
    },
    "specs": {
      "Model": "RE-S-X6-64G-LT-S",
      "Condition": "Used",
      "Compatibility": "Juniper MX240 / MX480 / MX960",
      "RAM": "64GB",
      "Ports": "GE / 10GE",
      "Storage": "CompactFlash",
      "Redundancy": "Supported",
      "OS": "Junos OS",
      "Warranty": "3 months"
    }
  },
  {
    "id": 1056,
    "name": "Huawei H902CSHF 16-port XGS-PON",
    "brand": "Huawei",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Huawei H902CSHF 16-port XGS-PON.jpg",
    "intro": {
      "cn": "华为H902CSHF，16口XGS-PON板卡，适用于MA5800，提供10G对称高带宽。",
      "en": "Huawei H902CSHF 16-port XGS-PON board for MA5800 with 10G symmetric bandwidth.",
      "ru": "16‑портовая плата XGS‑PON для OLT MA5800 с поддержкой симметричных 10 Гбит/с."
    },
    "specs": {
      "Model": "H902CSHF",
      "Type": "16-port XGS-PON OLT board",
      "Compatibility": "Huawei MA5800 series",
      "Downlink_Speed": "10 Gbit/s",
      "Uplink_Speed": "10 Gbit/s",
      "Features": "High density, QoS, DBA, energy-efficient",
      "Application": "Ultra-broadband access, 8K video, cloud gaming, VR"
    }
  },
  {
    "id": 1057,
    "name": "Juniper EX-UM-4X4SFP",
    "brand": "Juniper",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Juniper EX-UM-4X4SFP.jpg",
    "intro": {
      "cn": "通用接口模块，提供4×10GE和4×1GE灵活连接能力。",
      "en": "Universal interface module with 4×10GE and 4×1GE for flexible connectivity.",
      "ru": "Универсальный модуль с поддержкой 4×10GE и 4×1GE для гибкого подключения."
    },
    "specs": {
      "Module_Type": "Universal Interface Module",
      "Ports_10GE_SFP+": "4",
      "Ports_1GE_SFP": "4",
      "Compatibility": "Juniper EX Series switches",
      "Transceiver_Support": "SFP and SFP+",
      "Installation": "Hot-swappable",
      "Use_Cases": "Access and aggregation networks"
    }
  },
  {
    "id": 1058,
    "name": "Juniper EX-UM-8X8SFP",
    "brand": "Juniper",
    "category": "Интерфейсные модули",
    "price": "咨询获取",
    "img": "/assets/products/Интерфейсные модули/Juniper EX-UM-8X8SFP.jpg",
    "intro": {
      "cn": "通用接口模块，提供8×10GE与8×1GE灵活扩展能力。",
      "en": "Universal module offering flexible expansion with 8×10GE and 8×1GE ports.",
      "ru": "Универсальный модуль с гибкими подключениями 10GE и 1GE."
    },
    "specs": {
      "Product_Model": "EX-UM-8X8SFP",
      "Module_Type": "Universal Interface Module",
      "10GE_Ports": "8 x SFP+",
      "1GE_Ports": "8 x SFP",
      "Transceiver_Support": "SFP, SFP+",
      "Compatibility": "Juniper EX Series switches",
      "Use_Case": "Access and aggregation network expansion",
      "Installation": "Hot-swappable"
    }
  },
  {
    "id": 1059,
    "name": "Arista DCS-7050SX3-48C8-F",
    "brand": "Arista",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Arista DCS-7050SX3-48C8-F.jpg",
    "intro": {
      "cn": "高性能数据中心交换机，提供48×10GbE和8×100GbE端口。",
      "en": "High‑performance switch with 48×10GbE and 8×100GbE for modern data centers.",
      "ru": "Высокопроизводительный коммутатор с 48×10GbE и 8×100GbE для дата-центров."
    },
    "specs": {
      "Ports_10GbE": "48",
      "Ports_100GbE": "8",
      "Performance": "High throughput and low latency",
      "Transceiver_Support": "Multiple optical module types",
      "Scalability": "Supports scalable data center networks",
      "Management": "Advanced management features"
    }
  },
  {
    "id": 1060,
    "name": "Juniper QFX5120-32C-AFI",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX5120-32C-AFI.jpg",
    "intro": {
      "cn": "高性能100GbE数据中心交换机，具备低时延与自动化能力。",
      "en": "High‑performance 100GbE data center switch with low latency and automation.",
      "ru": "Высокопроизводительный коммутатор 100GbE с низкой задержкой и автоматизацией."
    },
    "specs": {
      "Model": "QFX5120-32C-AFI",
      "Ports_100GbE": "32 x QSFP28",
      "Form_Factor": "1RU",
      "Latency": "Low-latency design",
      "Scalability": "Supports spine‑leaf architectures",
      "Automation": "API and automation tools supported",
      "OS": "Junos OS"
    }
  },
  {
    "id": 1061,
    "name": "Juniper EX2300-24T-DC",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX2300-24T-DC.jpg",
    "intro": {
      "cn": "高性能可靠的DC供电24口千兆接入交换机，适用于企业与数据中心。",
      "en": "High‑performance DC‑powered 24‑port access switch for enterprise and data‑center use.",
      "ru": "Высокопроизводительный надежный коммутатор доступа с DC‑питанием для корпоративных сетей и ЦОД."
    },
    "specs": {
      "Power": "DC input",
      "Ethernet_Ports": "24x 10/100/1000Base‑T",
      "Uplink_Ports": "4x 10GbE SFP+",
      "OS": "Junos OS",
      "Layer2_3_Features": "VLAN, STP, LACP, basic routing",
      "Virtual_Chassis": "Supported",
      "QoS": "Traffic prioritization",
      "Security": "ACL, attack protection",
      "Energy_Efficiency": "Low power consumption"
    }
  },
  {
    "id": 1062,
    "name": "Juniper EX2300-24P",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX2300-24P.jpg",
    "intro": {
      "cn": "支持PoE+的24口千兆接入交换机，适用于现代企业网络。",
      "en": "24-port Gigabit access switch with PoE+, ideal for modern enterprise networks.",
      "ru": "Коммутатор доступа с PoE+ для современных сетей, питание и подключение PoE‑устройств."
    },
    "specs": {
      "Ports_Gigabit_Ethernet": "24 x 10/100/1000Base-T",
      "PoE+_Support": "All 24 ports, 740W budget",
      "Uplink_Ports": "4 x 10GbE SFP/SFP+",
      "Virtual_Chassis": "Up to 4 switches",
      "Layer2_3_Features": "VLAN, STP, LACP, basic routing",
      "QoS": "Traffic prioritization",
      "Security": "ACL, DHCP Snooping, DAI",
      "OS": "Junos OS"
    }
  },
  {
    "id": 1063,
    "name": "Juniper EX3400-24T",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX3400-24T.jpg",
    "intro": {
      "cn": "高性能接入层交换机，提供24GE端口与10GE上行及虚拟机箱功能。",
      "en": "High‑performance access switch with 24GE ports, 10GE uplinks, and Virtual Chassis.",
      "ru": "Высокопроизводительный коммутатор доступа с 24×GE и 10GE восходящими портами."
    },
    "specs": {
      "Ports_Gigabit_Ethernet": "24×10/100/1000Base‑T",
      "Uplink_Ports": "4×10GbE SFP/SFP+",
      "Virtual_Chassis": "Up to 10 units",
      "Layer2_3_Features": "VLAN, STP, LACP, basic routing, VXLAN",
      "QoS": "Traffic prioritization",
      "Security": "ACL, DHCP Snooping, Dynamic ARP Inspection",
      "Management": "Junos OS",
      "Form_Factor": "1U rackmount",
      "Energy_Efficiency": "Optimized power usage"
    }
  },
  {
    "id": 1064,
    "name": "Juniper QFX5120-32C-AFO",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX5120-32C-AFO.jpg",
    "intro": {
      "cn": "高性能数据中心交换机，支持AFO气流和32个100G端口。",
      "en": "High‑performance data‑center switch with AFO airflow and 32×100G ports.",
      "ru": "Высокопроизводительный ЦОД-коммутатор с AFO и 32 портами 100G."
    },
    "specs": {
      "Model": "QFX5120-32C-AFO",
      "Airflow": "AFO (Airflow Out, reverse)",
      "Ports_100GE_QSFP28": "32",
      "Switching_Capacity": "6.4 Tbps",
      "Packet_Forwarding_Rate": "4.76 Bpps",
      "Network_Flexibility": "100GE / 40GE / 4x10GE",
      "Protocols": "VLAN, STP, LACP, OSPF, BGP, VXLAN, EVPN",
      "QoS": "Supported",
      "Redundancy": "Redundant PSUs and fans",
      "OS": "Junos OS",
      "Role": "Top-of-Rack / access-aggregation switch"
    }
  },
  {
    "id": 1065,
    "name": "Juniper EX4300-24P",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX4300-24P.jpg",
    "intro": {
      "cn": "EX4300-24P是一款支持PoE+的高性能接入交换机，适用于现代企业网络。",
      "en": "EX4300-24P is a high‑performance PoE+ access switch for modern enterprise networks.",
      "ru": "EX4300-24P — высокопроизводительный PoE+ коммутатор для современных сетей."
    },
    "specs": {
      "Ports_GE": "24x 10/100/1000Base-T",
      "PoE_Power_Budget": "750W PoE+",
      "Uplink_Ports": "4x 10GbE SFP+",
      "Virtual_Chassis": "Up to 10 units",
      "Layer2_Features": "VLAN, STP, LACP",
      "Layer3_Features": "OSPF, BGP, RIP",
      "QoS": "Advanced traffic prioritization",
      "Security": "ACL, DHCP Snooping, DAI",
      "Management": "Simplified central management"
    }
  },
  {
    "id": 1066,
    "name": "Juniper EX4300-24T",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX4300-24T.jpg",
    "intro": {
      "cn": "高性能24口千兆交换机，具备虚拟化与二三层功能，适合企业网络。",
      "en": "High‑performance 24‑port Gigabit switch with L2/L3 features and virtualization for enterprises.",
      "ru": "Высокопроизводительный коммутатор с 24 GE портами, виртуализацией и функциями L2/L3."
    },
    "specs": {
      "Ports_GE": "24x 10/100/1000Base‑T",
      "Ports_10GE_SFP+": "4x 10GbE SFP/SFP+",
      "Virtual_Chassis": "Supports up to 10 switches",
      "Layer2_Features": "VLAN, STP, LACP",
      "Layer3_Features": "OSPF, BGP, RIP",
      "QoS": "Advanced traffic prioritization",
      "Security": "ACL, DHCP Snooping, DAI",
      "OS": "Junos OS"
    }
  },
  {
    "id": 1067,
    "name": "Juniper EX4300-48P",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX4300-48P.jpg",
    "intro": {
      "cn": "EX4300-48P为现代网络提供高密度PoE+接入与虚拟化能力",
      "en": "EX4300-48P delivers high‑density PoE+ access with virtualization for modern networks",
      "ru": "Коммутатор PoE+ с высокой плотностью портов и виртуализацией для современных сетей"
    },
    "specs": {
      "Ports_GE": "48 x 10/100/1000Base-T",
      "PoE_Power_Budget": "1460 W PoE+",
      "Uplink_Ports": "4 x 10GbE SFP/SFP+",
      "Virtual_Chassis": "Up to 10 switches",
      "Layer2_3_Features": "VLAN, STP, LACP, OSPF, BGP, RIP",
      "QoS": "Advanced traffic prioritization",
      "Security": "ACL, DHCP Snooping, Dynamic ARP Inspection"
    }
  },
  {
    "id": 1068,
    "name": "Juniper QFX5110-48S-AFI2",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX5110-48S-AFI2.jpg",
    "intro": {
      "cn": "高密度10GbE端口的1U数据中心接入与汇聚交换机。",
      "en": "1U access/aggregation switch with high‑density 10GbE for modern data centers.",
      "ru": "Коммутатор ToR с высокой плотностью 10GbE и расширенными L2/L3 функциями."
    },
    "specs": {
      "Switch_Model": "QFX5110-48S-AFI2",
      "Ports_10GbE_SFP+": "48",
      "Ports_40GbE_QSFP+": "6",
      "Form_Factor": "1U",
      "Layer_Features": "L2/L3 (VLAN, STP, LACP, OSPF, BGP, VXLAN)",
      "OS": "Junos OS",
      "Power_Supply": "Redundant, hot‑swappable",
      "Cooling": "Hot‑swappable fans",
      "Use_Case": "Access/Aggregation, ToR in data centers"
    }
  },
  {
    "id": 1069,
    "name": "Juniper QFX5110-48S-AFO2",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX5110-48S-AFO2.jpg",
    "intro": {
      "cn": "高密度10GbE与40GbE的数据中心交换机，采用AFO2前热后排气流设计。",
      "en": "High-density 10GbE/40GbE data center switch with AFO2 reverse airflow cooling.",
      "ru": "Коммутатор ЦОД с AFO2 и высокой плотностью 10/40GbE."
    },
    "specs": {
      "Airflow": "Reverse airflow (AFO2)",
      "Ports_10GbE_SFP+": "48",
      "Ports_40GbE_QSFP+": "6",
      "Use_Case": "Top-of-Rack data center switch",
      "Features": "VLAN, STP, LACP, OSPF, BGP, VXLAN, EVPN",
      "QoS": "Supported",
      "OS": "Junos OS",
      "Reliability": "Redundant PSUs and fans"
    }
  },
  {
    "id": 1070,
    "name": "Juniper EX4300-48T",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX4300-48T.jpg",
    "intro": {
      "cn": "高密度千兆端口的企业级高性能接入与汇聚交换机。",
      "en": "High-performance enterprise switch with high-density Gigabit ports and L2/L3 features.",
      "ru": "Высокопроизводительный коммутатор с высокой плотностью портов и расширенными L2/L3 функциями."
    },
    "specs": {
      "Ports_Gigabit_Ethernet": "48x 10/100/1000Base-T",
      "Ports_10G_SFP_Plus": "4x SFP/SFP+",
      "Virtual_Chassis": "Supports up to 10 switches",
      "Layer2_Features": "VLAN, STP, LACP",
      "Layer3_Features": "OSPF, BGP, RIP",
      "QoS": "Advanced traffic prioritization"
    }
  },
  {
    "id": 1071,
    "name": "Juniper EX3400-48T",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX3400-48T.jpg",
    "intro": {
      "cn": "高密度端口的企业级接入/汇聚交换机，性能强大且易管理。",
      "en": "High‑density enterprise access/aggregation switch with strong performance and easy management.",
      "ru": "Высокопроизводительный коммутатор доступа и агрегации с высокой плотностью портов."
    },
    "specs": {
      "Model": "EX3400-48T",
      "Ethernet_Ports": "48x 10/100/1000Base‑T",
      "Uplink_Ports": "4x 10GbE SFP/SFP+",
      "Virtual_Chassis": "Up to 10 switches",
      "Layer_Features": "L2/L3, VLAN, STP, LACP, VXLAN",
      "QoS": "Traffic prioritization supported",
      "Security": "ACL, DHCP Snooping, DAI",
      "OS": "Junos OS",
      "Form_Factor": "1U rackmount",
      "Power_Efficiency": "Energy‑optimized design"
    }
  },
  {
    "id": 1072,
    "name": "Juniper QFX5120-48Y-AFO2",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX5120-48Y-AFO2.jpg",
    "intro": {
      "cn": "高密度25GbE并具反向气流AFO2的数据中心交换机",
      "en": "High‑density 25GbE data center switch with reverse airflow AFO2",
      "ru": "Высокопроизводительный 25GbE коммутатор с обратным воздушным потоком AFO2"
    },
    "specs": {
      "Ports_25GbE_SFP28": "48",
      "Ports_100GbE_QSFP28": "6",
      "Airflow": "Reverse Airflow Out (AFO2)",
      "Switching_Capacity": "4.4 Tbps",
      "Packet_Forwarding_Rate": "3.3 Bpps",
      "Network_Support": "25GE, 10GE, 1GE, 100GE, 40GE, 4x10GE",
      "Protocols": "VLAN, STP, LACP, OSPF, BGP, VXLAN, EVPN",
      "Use_Case": "Top-of-Rack switch for data centers"
    }
  },
  {
    "id": 1073,
    "name": "Juniper QFX5210-64C-AFO2",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX5210-64C-AFO2.jpg",
    "intro": {
      "cn": "高性能100G数据中心交换机，支持64端口与AFO2反向气流。",
      "en": "High‑performance 100G data‑center switch with 64 ports and AFO2 reverse airflow.",
      "ru": "Высокопроизводительный spine/leaf коммутатор с 64×100G и обратным воздушным потоком AFO2."
    },
    "specs": {
      "Ports": "64x 100GbE QSFP28",
      "Airflow": "AFO2 reverse airflow",
      "Switching_Capacity": "12.8 Tbps",
      "Packet_Forwarding_Rate": "9.52 Bpps",
      "Network_Flexibility": "100GE / 40GE / 4x10GE",
      "Protocols": "VLAN, STP, LACP, OSPF, BGP, IS-IS, VXLAN, EVPN, SRv6",
      "QoS": "Advanced QoS features",
      "Reliability": "Redundant PSUs and fans",
      "OS": "Junos OS"
    }
  },
  {
    "id": 1074,
    "name": "Juniper EX3400-24P",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX3400-24P.jpg",
    "intro": {
      "cn": "EX3400-24P是支持PoE+的高性能接入交换机，适用于企业网络。",
      "en": "EX3400-24P is a PoE+ access switch offering high performance and flexible uplinks.",
      "ru": "Коммутатор доступа с PoE+, высокой пропускной способностью и поддержкой Virtual Chassis."
    },
    "specs": {
      "Ports_GE": "24x 10/100/1000Base-T",
      "PoE_Power_Budget": "750W PoE+",
      "Uplink_Ports": "4x 10GbE SFP/SFP+",
      "Virtual_Chassis": "Up to 10 units",
      "Layer2_3_Features": "VLAN, STP, LACP, basic routing, VXLAN",
      "QoS": "Traffic prioritization supported",
      "Security_Features": "ACL, DHCP Snooping, DAI",
      "OS": "Junos OS",
      "Energy_Efficiency": "Optimized for reduced power use"
    }
  },
  {
    "id": 1075,
    "name": "Juniper EX2300-24T",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper EX2300-24T.jpg",
    "intro": {
      "cn": "Juniper EX2300-24T是一款高性能企业级接入交换机，具备高可靠性与灵活扩展性。",
      "en": "Juniper EX2300-24T is a reliable, high-performance access switch for modern enterprise networks.",
      "ru": "Надежный и производительный коммутатор уровня доступа для современных корпоративных сетей."
    },
    "specs": {
      "Ports_Gigabit_Ethernet": "24x 10/100/1000Base-T",
      "Ports_10G_SFP_Plus": "4x 10GbE SFP+",
      "Virtual_Chassis": "Supports up to 4 switches",
      "Layer2_Layer3_Features": "VLAN, STP, LACP, basic routing",
      "QoS": "Traffic prioritization",
      "Security": "ACL, DHCP Snooping, Dynamic ARP Inspection",
      "Management": "Junos OS",
      "Energy_Efficiency": "Optimized power consumption"
    }
  },
  {
    "id": 1076,
    "name": "Juniper BASE EX9204",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper BASE EX9204.jpg",
    "intro": {
      "cn": "EX9204 为大型网络提供高性能可扩展模块化交换机底盘。",
      "en": "EX9204 is a high‑performance modular chassis for scalable core/aggregation networks.",
      "ru": "Модульное шасси для высокопроизводительных сетей агрегации и ядра."
    },
    "specs": {
      "Chassis Type": "Modular chassis for EX9200 series",
      "Architecture": "Supports LC, SF, RE modules",
      "Throughput": "High-capacity data forwarding",
      "Latency": "Low-latency packet processing",
      "Network Protocols": "VLAN, STP, LACP, OSPF, BGP, IS-IS, MPLS, EVPN, SRv6",
      "QoS": "Advanced traffic prioritization",
      "Reliability": "Redundant PSU, fans, control modules",
      "Management": "Junos OS management and automation",
      "Scalability": "Expandable capacity and features"
    }
  },
  {
    "id": 1077,
    "name": "Juniper BASE EX9214",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper BASE EX9214.jpg",
    "intro": {
      "cn": "高性能模块化机箱，为大型网络提供灵活扩展与高可靠性。",
      "en": "High‑performance modular chassis offering scalable, reliable networking for large systems.",
      "ru": "Высокопроизводительное модульное шасси для масштабируемых и отказоустойчивых сетей."
    },
    "specs": {
      "Product_Name": "BASE EX9214 Chassis",
      "Chassis_Type": "Modular",
      "Line_Card_Slots": "Up to 8",
      "Switch_Fabric_Modules": "Up to 3",
      "Route_Engine_Slots": "Up to 2",
      "Switching_Capacity": "Up to 12 Tbps",
      "Power_Redundancy": "N+N",
      "Fabric_Redundancy": "N+1",
      "Network_Protocols": "VLAN, STP, LACP, OSPF, BGP, IS-IS, MPLS, EVPN, SRv6, VXLAN",
      "Security_Features": "ACL, DHCP Snooping, DAI, Port Security, BGP Flowspec",
      "OS": "Junos OS"
    }
  },
  {
    "id": 1078,
    "name": "Juniper BASE EX9208",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper BASE EX9208.jpg",
    "intro": {
      "cn": "高性能模块化底盘，适用于大规模EX9200网络的可靠核心平台。",
      "en": "High‑performance modular chassis for scalable EX9200 core and aggregation networks.",
      "ru": "Высокопроизводительное модульное шасси для масштабируемых сетей EX9200."
    },
    "specs": {
      "Chassis_Type": "Modular",
      "Slots_Line_Card": "Up to 8",
      "Slots_Switch_Fabric": "Up to 3",
      "Slots_Route_Engine": "Up to 2",
      "Switching_Capacity": "Up to 6.4 Tbps",
      "Redundancy": "SF N+1, Power N+N",
      "Supported_Protocols": "VLAN, STP, LACP, OSPF, BGP, IS-IS, MPLS, EVPN, SRv6",
      "Use_Cases": "Operators, enterprises, data centers"
    }
  },
  {
    "id": 1079,
    "name": "Juniper QFX10002",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX10002.jpg",
    "intro": {
      "cn": "高性能核心与汇聚交换机，具备高速端口、低时延和丰富网络特性。",
      "en": "High‑performance core and aggregation switch with high‑speed ports and low latency.",
      "ru": "Высокопроизводительный коммутатор для ядра и агрегации с высокой плотностью и низкой задержкой."
    },
    "specs": {
      "100GbE_Ports": "QSFP28 high‑throughput ports",
      "400GbE_Ports": "QSFP‑DD (selected models)",
      "Switching_Capacity": "Up to 9.6 Tbps",
      "Latency": "Low‑latency packet forwarding",
      "Network_Protocols": "VLAN, STP, LACP, OSPF, BGP, IS-IS, MPLS, EVPN, SRv6, VXLAN",
      "QoS": "Advanced traffic prioritization",
      "Security_Features": "ACL, DHCP Snooping, DAI, port security, BGP Flowspec"
    }
  },
  {
    "id": 1080,
    "name": "Коммутатор  HPE JL075A — Aruba 3810",
    "brand": "HPE Aruba",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Коммутатор  HPE JL075A  Aruba 3810.jpg",
    "intro": {
      "cn": "支持PoE+与堆叠的HPE Aruba 3810M企业级三层交换机。",
      "en": "HPE Aruba 3810M L3 switch with PoE+ and stacking for enterprise networks.",
      "ru": "Коммутатор HPE Aruba 3810M JL075A с PoE+ и поддержкой стекирования."
    },
    "specs": {
      "Model": "JL075A",
      "Series": "Aruba 3810M",
      "Manufacturer": "HPE",
      "Device_Type": "Layer 3 Switch",
      "Gigabit_Ports": "24 x 10/100/1000BASE-T",
      "PoE+": "Yes, IEEE 802.3at up to 30W/port",
      "PoE_Power_Budget": "670W",
      "SFP+_Ports": "4 x 10GbE",
      "Stacking": "Up to 10 switches",
      "Switching_Capacity": "176 Gbps",
      "Packet_Forwarding_Rate": "130.9 Mpps",
      "Console_Port": "1 x RJ-45",
      "OOB_Management_Port": "1 x 10/100/1000BASE-T",
      "USB_Port": "1 x USB 2.0",
      "MAC_Table_Size": "64,000 entries",
      "IPv4_Routing_Table_Size": "20,000 routes",
      "IPv6_Routing_Table_Size": "10,000 routes",
      "Power_Supply": "100-240V AC, internal",
      "Redundant_PSU_Support": "Yes, optional",
      "Max_Power_Consumption": "780W with PoE+"
    }
  },
  {
    "id": 1081,
    "name": "Коммутатор HPE J9772A — Aruba 2530",
    "brand": "HPE",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Коммутатор HPE J9772A  Aruba 2530.jpg",
    "intro": {
      "cn": "经济可靠的24口千兆二层交换机，适合预算有限的中小型网络。",
      "en": "Affordable and reliable 24-port Gigabit Layer 2 switch for small and midsize networks.",
      "ru": "Недорогой и надежный коммутатор Layer 2 с 24 гигабитными портами для небольших сетей."
    },
    "specs": {
      "Model": "J9772A",
      "Series": "Aruba 2530",
      "Manufacturer": "HPE",
      "Device Type": "Layer 2 Switch",
      "Gigabit Ethernet Ports": "24 x 10/100/1000BASE-T",
      "SFP Ports": "2 x Gigabit SFP",
      "Switching Capacity": "56 Gbps",
      "Packet Forwarding Rate": "41.7 Mpps",
      "Console Port": "1 x RJ-45",
      "USB Port": "1 x USB",
      "MAC Address Table Size": "8192 entries",
      "Power Input": "100-240V AC, 50-60Hz",
      "Max Power Consumption": "19W",
      "Operating Temperature": "0°C to 45°C",
      "Operating Humidity": "15%–95% non-condensing",
      "Form Factor": "1U rack-mount",
      "Dimensions": "44 cm width (other values not provided)"
    }
  },
  {
    "id": 1082,
    "name": "Коммутатор  HPE JL072A — Aruba 3810",
    "brand": "HPE",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Коммутатор  HPE JL072A  Aruba 3810.jpg",
    "intro": {
      "cn": "灵活高性能的三层交换机，支持堆叠，适合快速成长型网络。",
      "en": "Flexible high‑performance Layer 3 switch with stacking for growing networks.",
      "ru": "Мощный гибкий коммутатор Layer 3 со стекированием для современных сетей."
    },
    "specs": {
      "Model": "JL072A",
      "Series": "Aruba 3810M",
      "Manufacturer": "HPE",
      "Device_Type": "Layer 3 Switch",
      "Ports_1G_RJ45": "24",
      "Ports_SFP+_10G": "4",
      "Stacking_Support": "Yes, up to 10 units",
      "Switching_Capacity": "176 Gbps",
      "Forwarding_Rate": "130.9 Mpps",
      "Ethernet_Ports": "24 x 1G RJ-45",
      "Uplink_Ports": "4 x 1/10G SFP+",
      "Console_Port": "1 x RJ-45",
      "OOB_Management_Port": "1 x 1G RJ-45",
      "USB_Port": "USB 2.0",
      "MAC_Table_Size": "64,000",
      "IPv4_Routing_Table": "20,000 routes",
      "IPv6_Routing_Table": "10,000 routes",
      "Power_Input": "100–240V AC, 50–60Hz",
      "Redundant_PSU_Option": "Supported (optional)",
      "Max_Power_Consumption": "90W",
      "Operating_Temperature": "0°C to 45°C",
      "Operating_Humidity": "15%–95% non-condensing"
    }
  },
  {
    "id": 1083,
    "name": "Huawei CE8850-64CQ-EI",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE8850-64CQ-EI.jpg",
    "intro": {
      "cn": "64口100GE数据中心交换机，支持VXLAN/EVPN，性能强大可靠",
      "en": "64-port 100GE data center switch with high throughput and VXLAN/EVPN support",
      "ru": "Коммутатор ЦОД 100GE с 64 портами, высокой плотностью и поддержкой VXLAN/EVPN"
    },
    "specs": {
      "Ports_100GE": "64 x 100GE QSFP28",
      "Throughput": "High throughput switching",
      "Latency": "Low latency forwarding",
      "Network_Protocols": "VXLAN, EVPN, MPLS",
      "QoS": "Advanced QoS features",
      "Reliability": "Redundant hot-swappable PSUs and fans",
      "Management": "Flexible intelligent management and monitoring"
    }
  },
  {
    "id": 1084,
    "name": "NVIDIA Mellanox MQM9790-NS2F",
    "brand": "NVIDIA Mellanox",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/NVIDIA Mellanox MQM9790-NS2F.jpg",
    "intro": {
      "cn": "高性能HDR InfiniBand交换机，40端口，超低延迟，适用于HPC与AI集群。",
      "en": "High‑performance HDR InfiniBand switch with 40 ports and ultra‑low latency for HPC and AI.",
      "ru": "Высокопроизводительный InfiniBand HDR коммутатор с 40 портами и сверхнизкой задержкой."
    },
    "specs": {
      "Model": "MQM9790-NS2F",
      "Switch_Type": "InfiniBand HDR",
      "Ports": "40× HDR InfiniBand",
      "Port_Form_Factor": "QSFP56",
      "Throughput": "Up to 200Gb/s per port",
      "Architecture": "Non-blocking",
      "Latency": "Ultra-low",
      "Management": "Mellanox UFM support",
      "Use_Cases": "HPC, AI, Machine Learning clusters",
      "Reliability": "Enterprise-grade components and redundancy"
    }
  },
  {
    "id": 1085,
    "name": "NVIDIA Mellanox MQM9790-NS2R",
    "brand": "NVIDIA Mellanox",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/NVIDIA Mellanox MQM9790-NS2R.jpg",
    "intro": {
      "cn": "高性能HDR InfiniBand交换机，低时延、可扩展，适用于HPC与AI网络。",
      "en": "High‑performance HDR InfiniBand switch with low latency and scalability for HPC and AI.",
      "ru": "Высокопроизводительный HDR InfiniBand коммутатор для HPC, AI и ЦОД."
    },
    "specs": {
      "Model": "MQM9790-NS2R",
      "Switch_Type": "InfiniBand HDR",
      "Ports": "40 HDR ports",
      "Port_Form_Factor": "QSFP56",
      "Port_Speed": "200 Gb/s",
      "Latency": "Ultra-low",
      "Architecture": "Non-blocking fabric",
      "Acceleration": "SHARP support",
      "Management": "Mellanox UFM",
      "Use_Case": "HPC, AI, Machine Learning"
    }
  },
  {
    "id": 1086,
    "name": "NVIDIA Mellanox MQM9700-NS2R",
    "brand": "NVIDIA Mellanox",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/NVIDIA Mellanox MQM9700-NS2R.jpg",
    "intro": {
      "cn": "高性能InfiniBand EDR交换机，提供40端口、低延迟与高带宽，适用于HPC与AI。",
      "en": "High‑performance InfiniBand EDR switch with 40 ports, low latency and high bandwidth for HPC/AI.",
      "ru": "Высокопроизводительный коммутатор InfiniBand EDR с 40 портами, низкой задержкой и высокой пропускной способностью."
    },
    "specs": {
      "Switch_Type": "InfiniBand EDR",
      "Ports": "40x InfiniBand EDR (QSFP28)",
      "Architecture": "Non‑blocking, low‑latency",
      "Bandwidth": "High throughput for HPC/AI workloads",
      "Features": "RoCE support, monitoring and management",
      "Management": "Mellanox UFM",
      "Use_Cases": "HPC, AI, cloud, data storage",
      "Reliability": "Enterprise‑grade components with redundancy",
      "Scalability": "Supports scalable network expansion"
    }
  },
  {
    "id": 1087,
    "name": "NVIDIA Mellanox MQM9700-NS2F",
    "brand": "NVIDIA Mellanox",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/NVIDIA Mellanox MQM9700-NS2F.jpg",
    "intro": {
      "cn": "高性能 InfiniBand 交换机，适用于HPC与AI，具备高带宽、低延迟与强大扩展性。",
      "en": "High‑performance InfiniBand switch for HPC and AI with high bandwidth, low latency, and scalability.",
      "ru": "Высокопроизводительный InfiniBand‑коммутатор для HPC, AI и ML с высокой пропускной способностью и низкой задержкой."
    },
    "specs": {
      "Product_Name": "MQM9700-NS2F",
      "Switch_Type": "InfiniBand",
      "Data_Rate_per_Port": "200 Gbps (EDR)",
      "Latency": "<90 ns",
      "Ports": "36 × QSFP28",
      "Traffic_Management": "Advanced congestion control",
      "Use_Cases": "HPC clusters, AI/ML workloads, supercomputers"
    }
  },
  {
    "id": 1088,
    "name": "Arista DCS-7130-48LBAS-F",
    "brand": "Arista",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Arista DCS-7130-48LBAS-F.jpg",
    "intro": {
      "cn": "高性能10GbE交换机，48×10G与6×40G端口，低时延并支持EOS。",
      "en": "High‑performance 10GbE switch with 48×10G and 6×40G ports, low latency and EOS support.",
      "ru": "Высокопроизводительный 10GbE коммутатор с 48×10G и 6×40G портами, низкой задержкой и поддержкой EOS."
    },
    "specs": {
      "Model": "DCS-7130-48LBAS-F",
      "Ports_10GbE": "48 × 10GBASE-T",
      "Ports_40GbE": "6 × QSFP+",
      "Latency": "Low latency",
      "Throughput": "Line‑rate forwarding",
      "Transceiver_Support": "Various SFP+ modules",
      "OS": "Arista EOS",
      "Scalability": "Supports scalable DC networks",
      "Reliability": "Enterprise‑grade components",
      "Energy_Efficiency": "Optimized low-power design"
    }
  },
  {
    "id": 1089,
    "name": "Arista DCS-7050CX3-32S-R",
    "brand": "Arista",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Arista DCS-7050CX3-32S-R.jpg",
    "intro": {
      "cn": "32端口100GbE数据中心交换机，低延迟高性能，支持VXLAN与EOS。",
      "en": "32-port 100GbE data center switch with low latency, high performance, VXLAN and EOS support.",
      "ru": "100GbE коммутатор для ЦОД с 32 портами QSFP28, низкой задержкой и поддержкой VXLAN, MLAG и EOS."
    },
    "specs": {
      "Model": "DCS-7050CX3-32S-R",
      "Switch_Type": "100GbE Data Center Switch",
      "Ports": "32x QSFP28",
      "Port_Speeds": "10/25/40/100GbE",
      "Latency": "Low-latency design",
      "Features": "VXLAN, MLAG, EOS",
      "Use_Case": "Leaf-Spine, scalable data centers",
      "Performance": "High throughput",
      "Port_Density": "High-density QSFP28",
      "Management": "Advanced EOS-based management"
    }
  },
  {
    "id": 1090,
    "name": "Arista DCS-7280SR-48C6-R",
    "brand": "Arista",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Arista DCS-7280SR-48C6-R.jpg",
    "intro": {
      "cn": "高性能DC交换机，配48个25GbE与6个100GbE端口，低时延并支持VXLAN/MLAG。",
      "en": "High‑performance DC switch with 48×25GbE and 6×100GbE, low latency, VXLAN/MLAG.",
      "ru": "Коммутатор ЦОД: 48×25GbE и 6×100GbE, низкая задержка, поддержка VXLAN и MLAG."
    },
    "specs": {
      "Model": "DCS-7280SR-48C6-R",
      "Form_Factor": "Data Center Switch",
      "Ports_10_25GbE": "48× SFP28",
      "Ports_40_100GbE": "6× QSFP28",
      "Latency": "Low latency",
      "OS": "Arista EOS",
      "Features": "VXLAN, MLAG",
      "Scalability": "Leaf-Spine optimized",
      "Transceiver_Support": "SFP28 / QSFP28",
      "Use_Case": "Cloud, Virtualization, Enterprise DC"
    }
  },
  {
    "id": 1091,
    "name": "Arista DCS-7050CX3-32S-F",
    "brand": "Arista",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Arista DCS-7050CX3-32S-F.jpg",
    "intro": {
      "cn": "32端口100GbE高性能数据中心交换机，低时延，支持VXLAN与EOS。",
      "en": "32‑port 100GbE high‑performance data‑center switch with low latency and VXLAN support.",
      "ru": "Высокопроизводительный ЦОД‑коммутатор 32×100GbE, VXLAN, MLAG, низкая задержка."
    },
    "specs": {
      "Model": "DCS-7050CX3-32S-F",
      "Switch_Type": "Data Center Switch",
      "Ports": "32×100GbE QSFP28",
      "Supported_Speeds": "10/25/40/100GbE",
      "Architecture": "Non-blocking",
      "OS": "Arista EOS",
      "Features": "VXLAN, MLAG, automation",
      "Latency": "Low latency",
      "Airflow": "Front-to-back",
      "Use_Case": "Cloud and virtualized environments"
    }
  },
  {
    "id": 1092,
    "name": "Arista DCS-7060DX5-64S-F",
    "brand": "Arista",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Arista DCS-7060DX5-64S-F.jpg",
    "intro": {
      "cn": "高密度40/100GbE交换机，64端口，低时延，适用于数据中心与云环境。",
      "en": "High‑density 40/100GbE switch with 64 ports and low latency for modern data centers.",
      "ru": "Высокопроизводительный 40/100GbE коммутатор с 64 портами и низкой задержкой."
    },
    "specs": {
      "Model": "DCS-7060DX5-64S-F",
      "Ports": "64x 40/100GbE QSFP+",
      "Switching_Capacity": "5 Tbps",
      "Latency": "Low latency design",
      "Operating_System": "Arista EOS",
      "Virtualization_Support": "VXLAN, EVPN",
      "Management": "CloudVision support",
      "Traffic_Management": "QoS, ECN",
      "High_Availability": "Redundant components",
      "Energy_Efficiency": "Optimized power consumption",
      "Form_Factor": "1RU"
    }
  },
  {
    "id": 1093,
    "name": "Huawei CE8851-32CQ8DQ-PB",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE8851-32CQ8DQ-PB.jpg",
    "intro": {
      "cn": "高性能数据中心交换机，提供32×100GE与8×40GE/400GE端口，低时延可扩展。",
      "en": "High-performance data‑center switch with 32×100GE and 8×40GE/400GE, low latency, scalable.",
      "ru": "Высокопроизводительный коммутатор 32×100GE и 8×40GE/400GE для ЦОД с низкой задержкой."
    },
    "specs": {
      "Model": "CE8851-32CQ8DQ-PB",
      "Ports_100GE": "32×100GE QSFP28",
      "Ports_40GE_400GE": "8×40GE/400GE QSFP+",
      "Low_Latency": "Yes",
      "Throughput": "High performance switching capacity",
      "Network_Protocols": "VXLAN, EVPN, MPLS",
      "QoS": "Advanced QoS features",
      "Use_Case": "Data centers, cloud, AI/ML networks",
      "Scalability": "High port-density, modular architecture"
    }
  },
  {
    "id": 1094,
    "name": "Huawei OLT MA5800x2",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei OLT MA5800x2.jpg",
    "intro": {
      "cn": "新一代华为MA5800-X2 OLT，支持GPON/10G-PON等高带宽接入。",
      "en": "Huawei MA5800-X2 is a next‑gen OLT with high bandwidth and multi‑PON support.",
      "ru": "Huawei MA5800‑X2 — OLT нового поколения с поддержкой GPON, 10G‑PON и высокой плотностью портов."
    },
    "specs": {
      "Product Model": "MA5800-X2",
      "PON Support": "GPON, EPON, 10G GPON, XGS-PON, NG-PON2",
      "Architecture": "Distributed",
      "Bandwidth": "High uplink/downlink capacity",
      "Port Density": "High-density PON ports",
      "Scalability": "Flexible slot and card configuration",
      "Service Support": "Converged multi‑service access"
    }
  },
  {
    "id": 1095,
    "name": "Huawei CE8850-EI-F-B0B",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE8850-EI-F-B0B.jpg",
    "intro": {
      "cn": "高性能10/40/100GE交换机，具备灵活端口与高级安全功能，适用于数据中心。",
      "en": "High‑performance 10/40/100GE switch with flexible ports and advanced features for data centers.",
      "ru": "Высокопроизводительный 10/40/100GE коммутатор для ЦОД и корпоративных сетей."
    },
    "specs": {
      "Model": "CE8850-EI-F-B0B",
      "Type": "High-performance 10/40/100GE data center switch",
      "Port_Density": "High-density 100GE (varies by configuration)",
      "Form_Factor": "1RU",
      "Key_Features": "VXLAN, MPLS, EVPN, QoS, stacking",
      "Use_Cases": "Core or aggregation in data centers and campus networks"
    }
  },
  {
    "id": 1096,
    "name": "Huawei CE8855-32CQ4BQ-F",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE8855-32CQ4BQ-F.jpg",
    "intro": {
      "cn": "新一代高性能数据中心交换机，支持100/400GE，高密度端口与低时延。",
      "en": "Next‑gen high‑performance data center switch with 100/400GE and high port density.",
      "ru": "Коммутатор нового поколения 100/400GE с высокой плотностью портов и высокой производительностью."
    },
    "specs": {
      "Model": "CE8855-32CQ4BQ-F",
      "Ports_100GE": "32 × QSFP-DD (100GE/400GE breakout)",
      "Ports_40GE": "4 × QSFP+",
      "400GE_Support": "Yes, via QSFP-DD",
      "Switching_Capacity": "12.8 Tbps",
      "Packet_Forwarding_Rate": "4000 Mpps",
      "Key_Features": "FlexE, automation, security, scalable architecture",
      "Use_Cases": "Data centers, campus core/aggregation"
    }
  },
  {
    "id": 1097,
    "name": "Huawei CE6866-48S8CQ-PB",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE6866-48S8CQ-PB.jpg",
    "intro": {
      "cn": "高密度25GE/100GE数据中心交换机，支持VXLAN和iStack，性能强大。",
      "en": "High‑density 25GE/100GE data center switch with VXLAN and iStack support.",
      "ru": "Коммутатор 25GE/100GE для ЦОД: 48×25GE и 8×100GE, высокая производительность и VXLAN."
    },
    "specs": {
      "Model": "CE6866-48S8CQ-PB",
      "Ports_25GE": "48 × SFP28",
      "Ports_100GE": "8 × QSFP28",
      "Switching_Capacity": "4 Tbps",
      "Forwarding_Rate": "1600 Mpps",
      "Form_Factor": "1RU",
      "Features": "VXLAN, iStack, QoS, WRED",
      "Use_Cases": "Data center core/aggregation"
    }
  },
  {
    "id": 1098,
    "name": "Huawei CE8850E-32CQ-EI-F",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE8850E-32CQ-EI-F.jpg",
    "intro": {
      "cn": "高密度32×100GE数据中心交换机，低时延高性能，支持SDN与VXLAN。",
      "en": "High‑density 32×100GE data‑center switch with low latency and SDN/VXLAN support.",
      "ru": "Коммутатор 100GE нового поколения: 32×100GE QSFP28, низкая задержка, высокая масштабируемость."
    },
    "specs": {
      "Model": "CE8850E-32CQ-EI-F",
      "Ports": "32×100GE/40GE QSFP28",
      "Port_Splitting": "100GE split into 4×25GE",
      "Switching_Capacity": "6.4 Tbps",
      "Packet_Forwarding_Rate": "2000 Mpps",
      "Form_Factor": "1RU",
      "Virtualization": "EVPN, VXLAN",
      "Traffic_Management": "QoS, WRED",
      "Use_Case": "Data center core/aggregation"
    }
  },
  {
    "id": 1099,
    "name": "Huawei S6730-H48Y6C-V2",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei S6730-H48Y6C-V2.jpg",
    "intro": {
      "cn": "新一代10GE交换机，48×10GE与6×40GE端口，安全可靠且可扩展。",
      "en": "Next‑gen 10GE switch with 48×10GE and 6×40GE ports, secure, reliable, scalable.",
      "ru": "Коммутатор 10GE нового поколения с 48×10GE и 6×40GE, высокой надёжностью и масштабируемостью."
    },
    "specs": {
      "Model": "S6730-H48Y6C-V2",
      "Type": "10GE campus switch",
      "Ports_10GE_25GE_SFP28": "48",
      "Ports_40GE_100GE_QSFP28": "6",
      "Form_Factor": "1RU",
      "Features": "VXLAN, MPLS, SDN",
      "Security": "DDoS protection, traffic filtering, access control",
      "Energy_Management": "Intelligent power optimization",
      "Management": "CLI, Web UI, NETCONF/YANG",
      "Series": "CloudEngine S6730-H"
    }
  },
  {
    "id": 1100,
    "name": "Huawei S5732-H48XUM2CC",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei S5732-H48XUM2CC.jpg",
    "intro": {
      "cn": "高密度10GE接入交换机，48×10GE，2×40GE，2×100GE，性能强大。",
      "en": "High‑density 10GE switch with 48×10GE, 2×40GE, 2×100GE; powerful and flexible.",
      "ru": "Высокоплотный 10GE-коммутатор: 48×10GE, 2×40GE, 2×100GE, высокая производительность."
    },
    "specs": {
      "Model": "S5732-H48XUM2CC",
      "Ports_10GE_SFP+": "48",
      "Ports_40GE_QSFP+": "2",
      "Ports_100GE_QSFP28": "2",
      "Switching_Capacity": "1.28 Tbps",
      "Forwarding_Rate": "960 Mpps",
      "Protocols_Supported": "MPLS, VXLAN",
      "Security_Features": "DDoS protection, traffic filtering, access control",
      "Management": "CLI, Web",
      "Energy_Efficiency": "Optimized design with smart power management"
    }
  },
  {
    "id": 1101,
    "name": "Huawei CE6885-48YS8CQ-B",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE6885-48YS8CQ-B.jpg",
    "intro": {
      "cn": "高密度25GE/100GE数据中心交换机，48×25GE与8×100GE，低时延支持VXLAN。",
      "en": "High‑density 25GE/100GE data‑center switch with 48×25GE, 8×100GE, low latency, VXLAN.",
      "ru": "Высокопроизводительный 25GE/100GE коммутатор с 48×25GE и 8×100GE, поддержкой VXLAN."
    },
    "specs": {
      "Model": "CE6885-48YS8CQ-B",
      "Ports_25GE": "48×25GE SFP28",
      "Ports_100GE": "8×100GE QSFP28",
      "Virtualization": "VXLAN, EVPN",
      "Performance": "High throughput, low latency",
      "Use_Case": "Data centers and campus networks"
    }
  },
  {
    "id": 1102,
    "name": "Huawei CE6855-48XS8CQ-B",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE6855-48XS8CQ-B.jpg",
    "intro": {
      "cn": "新一代10GE/40GE数据中心交换机，48×10GE与8×40GE端口，支持VXLAN与高性能转发。",
      "en": "Next‑gen 10GE/40GE switch with 48×10GE, 8×40GE, VXLAN support and high performance.",
      "ru": "Коммутатор 10GE/40GE для ЦОД: 48×10GE, 8×40GE, поддержка VXLAN, высокая производительность."
    },
    "specs": {
      "Model": "CE6855-48XS8CQ-B",
      "Ports_10GE_SFP+": "48",
      "Ports_40GE_QSFP+": "8",
      "Stacking_Support": "Yes",
      "VXLAN_Support": "Yes",
      "Security_Features": "ACL, DHCP Snooping, DAI",
      "Use_Cases": "Data centers, campus networks, virtualization environments"
    }
  },
  {
    "id": 1103,
    "name": "Huawei CE6857F-48T6CQ-B",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE6857F-48T6CQ-B.jpg",
    "intro": {
      "cn": "高性能接入交换机，提供丰富10GE端口与先进安全和虚拟化能力。",
      "en": "High‑performance access switch with dense 10GE ports, advanced security, and virtualization.",
      "ru": "Высокопроизводительный коммутатор доступа с высокой плотностью портов и расширенной виртуализацией."
    },
    "specs": {
      "Model": "CE6857F-48T6CQ-B",
      "Port_Configuration": "48×10GE SFP+, 6×40GE QSFP+",
      "Switching_Performance": "High throughput, low latency",
      "Virtualization": "EVPN support",
      "Security_Features": "ACL, DHCP Snooping, Dynamic ARP Inspection",
      "Power_Management": "Intelligent power optimization",
      "Management": "CLI and web interface"
    }
  },
  {
    "id": 1104,
    "name": "Arista DCS-7280CR3-32P4-F",
    "brand": "Arista",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Arista DCS-7280CR3-32P4-F.jpg",
    "intro": {
      "cn": "高性能100/400GbE数据中心交换机，32×100G与4×400G端口，低时延与高扩展性。",
      "en": "High‑performance 100/400GbE switch with 32×100G and 4×400G ports, low latency and high scalability.",
      "ru": "Высокопроизводительный коммутатор 32×100GbE и 4×400GbE с низкой задержкой и высокой масштабируемостью."
    },
    "specs": {
      "Model": "DCS-7280CR3-32P4-F",
      "Type": "100/400GbE Data Center Switch",
      "100GbE_Ports": "32 × QSFP28",
      "400GbE_Ports": "4 × QSFP-DD",
      "Throughput": "High throughput switching fabric",
      "Latency": "Low latency",
      "Network_Features": "VXLAN, EVPN, MPLS",
      "OS": "Arista EOS",
      "Scalability": "Supports flexible bandwidth expansion",
      "Reliability": "Redundant components"
    }
  },
  {
    "id": 1105,
    "name": "Arista DCS-7050DX4-32S-R",
    "brand": "Arista",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Arista DCS-7050DX4-32S-R.jpg",
    "intro": {
      "cn": "高性能数据中心交换机，支持多速率并具备低时延与高扩展性。",
      "en": "High‑performance data center switch with multi‑speed ports and low‑latency design.",
      "ru": "Высокопроизводительный коммутатор для современных дата‑центров с поддержкой 10–100GbE."
    },
    "specs": {
      "Ports": "32×10/25/40/100GbE",
      "Port_Flexibility": "Supports multiple speed options",
      "Transceiver_Support": "Compatible with various optical modules",
      "Performance": "Low latency, high throughput",
      "Scalability": "Designed for growing data center needs",
      "Management": "Arista EOS advanced management",
      "Reliability": "Enterprise‑grade components",
      "Energy_Efficiency": "Optimized low‑power design"
    }
  },
  {
    "id": 1106,
    "name": "Arista DCS-7050SX3-48YC8-F",
    "brand": "Arista",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Arista DCS-7050SX3-48YC8-F.jpg",
    "intro": {
      "cn": "高性能数据中心交换机，配备48个25GbE和8个100/400GbE端口。",
      "en": "High‑performance data‑center switch with 48×25GbE and 8×100/400GbE ports.",
      "ru": "Высокопроизводительный коммутатор для ЦОД с 48 портами 25/100GbE и 8 портами 100/400GbE."
    },
    "specs": {
      "Ports_10_25GbE": "48",
      "Ports_40_100GbE": "8",
      "Port_Types": "SFP+/SFP28, QSFP+/QSFP28",
      "Performance": "Low latency, high throughput",
      "Architecture": "Leaf-Spine optimized",
      "Management": "Arista EOS advanced automation and monitoring",
      "Scalability": "Designed for scalable data‑center growth",
      "Reliability": "Enterprise‑grade components"
    }
  },
  {
    "id": 1107,
    "name": "Huawei CE8875-24BQ8DQ-F",
    "brand": "Huawei",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Huawei CE8875-24BQ8DQ-F.jpg",
    "intro": {
      "cn": "高性能核心交换机，具备24×100GE与8×400GE端口，适用于数据中心。",
      "en": "High‑performance core switch with 24×100GE and 8×400GE for modern data centers.",
      "ru": "Высокопроизводительный коммутатор с 24×100GE и 8×400GE для ЦОД нового поколения."
    },
    "specs": {
      "Model": "CloudEngine CE8875-24BQ8DQ-F",
      "Ports_100GE_QSFP28": "24",
      "Ports_400GE_QSFP-DD": "8",
      "Switching_Performance": "Low latency, advanced switching and routing",
      "EVPN_Support": "Yes",
      "Telemetry": "Advanced network telemetry supported",
      "Power_Management": "Intelligent power optimization",
      "Use_Case": "Data centers and next‑generation campus networks"
    }
  },
  {
    "id": 1108,
    "name": "Juniper QFX5700 AC BASE SYSTEM, NO LINECARDS",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX5700 AC BASE SYSTEM NO LINECARDS.jpg",
    "intro": {
      "cn": "高性能可扩展的数据中心交换平台，提供高密度端口与低时延。",
      "en": "High‑performance scalable DC switch platform with high port density and low latency.",
      "ru": "Высокопроизводительная масштабируемая платформа коммутации для ЦОД и корпоративных сетей."
    },
    "specs": {
      "System_Type": "AC base system, no line cards",
      "Architecture": "Trio chipset",
      "Port_Capacity": "Supports 10/25/40/100/400GbE (with line cards)",
      "Latency": "Low‑latency switching",
      "Scalability": "Modular, scalable design",
      "Layer_Features": "L2/L3, MPLS, VXLAN, EVPN, BGP",
      "Programmability": "NETCONF, YANG, REST API",
      "High_Availability": "Redundant components"
    }
  },
  {
    "id": 1109,
    "name": "Juniper QFX10008 CHASSIS",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX10008 CHASSIS.jpg",
    "intro": {
      "cn": "高性能模块化机箱，适用于数据中心和大型企业网络。",
      "en": "High‑performance modular chassis for data centers and large networks.",
      "ru": "Высокопроизводительное модульное шасси для крупных сетей и ЦОД."
    },
    "specs": {
      "Architecture": "Modular chassis for LC, SF, RE modules",
      "Throughput": "High switching capacity",
      "Redundancy": "Redundant power, fans, and control modules",
      "Protocol Support": "VXLAN, EVPN, MPLS, SRv6, BGP, OSPF",
      "QoS Features": "Advanced traffic prioritization"
    }
  },
  {
    "id": 1110,
    "name": "Juniper QFX10016 CHASSIS",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX10016 CHASSIS.jpg",
    "intro": {
      "cn": "高性能模块化机箱，适用于数据中心与大型网络的核心与汇聚交换。",
      "en": "High‑performance modular chassis for core and aggregation switches in large networks.",
      "ru": "Высокопроизводительное модульное шасси для построения мощных и гибких коммутаторов."
    },
    "specs": {
      "Product": "QFX10016 Chassis",
      "Architecture": "Modular, supports LC and SF modules",
      "Scalability": "High scalability for large data centers",
      "Throughput": "Supports very high switching capacity",
      "Redundancy": "Redundant PSUs, fans, and control modules",
      "Protocols_Supported": "VXLAN, EVPN, MPLS, SRv6, BGP, OSPF",
      "QoS": "Advanced QoS features",
      "Management": "Junos OS"
    }
  },
  {
    "id": 1111,
    "name": "Juniper 128X100G 4U DC AFO",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper 128X100G 4U DC AFO.jpg",
    "intro": {
      "cn": "高密度128×100G数据中心交换机，具备DC供电与AFO气流设计。",
      "en": "High‑density 128×100G data center switch with DC power and AFO airflow.",
      "ru": "Высокопроизводительный сверхплотный коммутатор 128×100G для современных ЦОД с питанием DC и AFO."
    },
    "specs": {
      "Ports_100GE": "128",
      "Airflow": "AFO (back-to-front)",
      "Power_Type": "DC power",
      "Form_Factor": "4U",
      "Use_Cases": "Data centers, cloud, large enterprise networks",
      "Highlights": "High throughput, low latency, scalable architecture"
    }
  },
  {
    "id": 1112,
    "name": "Juniper QFX10002 TAA-COMPLIANT 36-PORT 40G QSFP+",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX10002 TAA-COMPLIANT 36-PORT 40G QSFP.jpg",
    "intro": {
      "cn": "高性能TAA合规的36端口40G QSFP+数据中心交换机",
      "en": "High‑performance TAA‑compliant 36‑port 40G QSFP+ data center switch",
      "ru": "Высокопроизводительный TAA‑совместимый коммутатор 36×40G QSFP+"
    },
    "specs": {
      "Model": "QFX10002 TAA-Compliant",
      "Ports_40G_QSFP+": "36",
      "TAA_Compliance": "Yes",
      "Throughput": "High-performance switching",
      "Latency": "Low latency",
      "Network_Protocols": "VLAN, STP, LACP, OSPF, BGP, VXLAN, EVPN",
      "QoS": "Supported",
      "Redundant_Power": "Yes",
      "Redundant_Fans": "Yes",
      "Use_Cases": "ToR or Leaf in data centers"
    }
  },
  {
    "id": 1113,
    "name": "Juniper QFX10002 SWITCH 60 100GE PORTS AC PS",
    "brand": "Juniper",
    "category": "Коммутаторы",
    "price": "咨询获取",
    "img": "/assets/products/Коммутаторы/Juniper QFX10002 SWITCH 60 100GE PORTS AC PS.jpg",
    "intro": {
      "cn": "高性能可扩展的QFX10002，配备60个100GE端口与AC电源，适用数据中心。",
      "en": "High‑performance scalable QFX10002 with 60×100GE ports and AC PS for data centers.",
      "ru": "Высокопроизводительный и масштабируемый коммутатор с 60 портами 100GE и AC блоками питания."
    },
    "specs": {
      "Model": "QFX10002",
      "Ports_100GE": "60",
      "Supported_Interfaces": "100GE, 40GE, 4x10GE",
      "Power_Supply": "AC PS",
      "Throughput": "High throughput switching",
      "Latency": "Low latency",
      "Network_Protocols": "VLAN, VXLAN, EVPN, MPLS",
      "QoS": "Advanced QoS features",
      "Reliability": "Redundant power and cooling"
    }
  },
  {
    "id": 1114,
    "name": "HPE StoreEver LTO-7 Ultrium 15000 External Type Drive BB874A",
    "brand": "HPE",
    "category": "Ленточные библиотеки",
    "price": "咨询获取",
    "img": "/assets/products/Ленточные библиотеки/HPE StoreEver LTO-7 Ultrium 15000 External Type Drive BB874A.jpg",
    "intro": {
      "cn": "外置式LTO-7磁带机，最高15TB容量与高速传输，用于备份与归档。",
      "en": "External LTO‑7 tape drive with up to 15TB capacity and fast data transfer for backup.",
      "ru": "Внешний ленточный LTO-7 накопитель для резервного копирования и архивирования."
    },
    "specs": {
      "Model": "StoreEver LTO-7 Ultrium 15000 BB874A",
      "Drive_Type": "External LTO-7 Tape Drive",
      "Compressed_Capacity": "15TB",
      "Native_Capacity": "6TB",
      "Native_Transfer_Rate": "300MB/s",
      "Compressed_Transfer_Rate": "750MB/s",
      "Interface": "SAS",
      "Encryption": "AES 256-bit hardware encryption",
      "Compatibility": "HPE and third‑party servers",
      "Use_Case": "Backup, archiving, long-term storage",
      "Durability": "Up to 30-year tape archival life"
    }
  },
  {
    "id": 1115,
    "name": "HPE StoreEver MSL LTO‑9 Ultrium 45000 SAS Drive Upgrade Kit (R6Q75A)",
    "brand": "HPE",
    "category": "Ленточные библиотеки",
    "price": "咨询获取",
    "img": "/assets/products/Ленточные библиотеки/HPE StoreEver MSL LTO9 Ultrium 45000 SAS Drive Upgrade Kit R6Q75A.jpg",
    "intro": {
      "cn": "高容量高性能的外置LTO‑7磁带机，适用于备份与归档。",
      "en": "External LTO‑7 tape drive offering high capacity and performance for backup and archiving.",
      "ru": "Внешнее ленточное устройство LTO‑7 с высокой емкостью, надёжностью и производительностью."
    },
    "specs": {
      "Model": "HPE StoreEver LTO‑7 Ultrium 15000 (BB874A)",
      "Type": "External tape drive",
      "Storage_Capacity": "Up to 15 TB compressed per LTO‑7 tape",
      "Data_Transfer_Rate": "300 MB/s native, 750 MB/s compressed",
      "Encryption": "AES 256-bit hardware encryption",
      "Reliability": "Up to 30-year media archival life",
      "Compatibility": "Wide OS and backup software support",
      "Use_Cases": "Backup, archiving, long-term storage"
    }
  },
  {
    "id": 1116,
    "name": "HPE StoreEver MSL 1/8 G2 0-drive Tape Autoloader (R1R75A )",
    "brand": "HPE",
    "category": "Ленточные библиотеки",
    "price": "咨询获取",
    "img": "/assets/products/Ленточные библиотеки/HPE StoreEver MSL 18 G2 0-drive Tape Autoloader R1R75A.jpg",
    "intro": {
      "cn": "紧凑型1U磁带自动加载机，适用于SMB备份与归档。",
      "en": "Compact 1U tape autoloader designed for SMB backup and archiving.",
      "ru": "Компактное и доступное решение для автоматизированного резервного копирования и архивирования."
    },
    "specs": {
      "Form Factor": "1U",
      "Drive Bays": "0 LTO drive bays (drive purchased separately)",
      "Tape Slots": "8 slots",
      "Compatibility": "LTO Ultrium tape drives",
      "Management": "Web-based interface, remote management",
      "Use Case": "SMB and remote offices backup automation"
    }
  },
  {
    "id": 1117,
    "name": "HPE Ultrium LTO8 Data Cartridge 30TB RW",
    "brand": "HPE",
    "category": "Ленточные библиотеки",
    "price": "咨询获取",
    "img": "/assets/products/Ленточные библиотеки/HPE Ultrium LTO8 Data Cartridge 30TB RW.jpg",
    "intro": {
      "cn": "LTO-8磁带，30TB容量，高速可靠，适合备份与归档。",
      "en": "LTO-8 tape with 30TB capacity and high speed for backup and archiving.",
      "ru": "Ленточный картридж LTO‑8 30TB для надежного и долгосрочного хранения данных."
    },
    "specs": {
      "Model": "Q2078A",
      "Tape_Technology": "LTO-8 Ultrium",
      "Capacity_Compressed": "30 TB",
      "Capacity_Native": "12 TB",
      "Data_Transfer_Speed_Native": "360 MB/s",
      "Data_Transfer_Speed_Compressed": "900 MB/s",
      "Encryption": "AES 256-bit hardware",
      "WORM_Support": "Yes (with compatible drive)",
      "Estimated_Archive_Life": "Up to 30 years"
    }
  },
  {
    "id": 1118,
    "name": "HPE MSL LTO-8 Ultrium 30750 SAS Half Height Drive (Q6Q68A)",
    "brand": "HPE",
    "category": "Ленточные библиотеки",
    "price": "咨询获取",
    "img": "/assets/products/Ленточные библиотеки/HPE MSL LTO-8 Ultrium 30750 SAS Half Height Drive Q6Q68A.jpg",
    "intro": {
      "cn": "适用于HPE MSL库的LTO-8磁带机，30TB容量，SAS接口，高速可靠备份。",
      "en": "LTO-8 drive for HPE MSL libraries, 30TB capacity, SAS interface, fast and reliable.",
      "ru": "Высокопроизводительный ленточный накопитель LTO-8 для библиотек HPE MSL."
    },
    "specs": {
      "Model": "MSL LTO-8 Ultrium 30750",
      "Interface": "SAS",
      "Capacity_Compressed": "30 TB",
      "Capacity_Native": "12 TB",
      "Speed_Native": "360 MB/s",
      "Speed_Compressed": "900 MB/s",
      "Form_Factor": "Half Height",
      "Compatibility": "HPE StoreEver MSL libraries",
      "Backward_Compatibility": "LTO-7 read/write, LTO-7 Type M read",
      "Encryption": "AES 256-bit hardware encryption",
      "Use_Case": "Backup, archiving, long-term storage"
    }
  },
  {
    "id": 1119,
    "name": "Juniper MPC7E-MRATE-RTU",
    "brand": "Juniper",
    "category": "Линейные карты",
    "price": "咨询获取",
    "img": "/assets/products/Линейные карты/Juniper MPC7E-MRATE-RTU.jpg",
    "intro": {
      "cn": "高性能可扩展的Juniper MX系列多速率接口模块。",
      "en": "High-performance multi-rate interface module for Juniper MX routers.",
      "ru": "Гибкий и высокопроизводительный модуль MPC для маршрутизаторов Juniper MX."
    },
    "specs": {
      "Compatible_Devices": "Juniper MX Series",
      "Port_Flexibility": "100GbE, 40GbE; break-out to 25GbE/10GbE",
      "Rate_Selectable_Transceivers": "MRATE support",
      "Throughput": "Up to 400 Gbps",
      "Supported_Technologies": "MPLS, VLAN, QoS, VXLAN, EVPN, MACsec (Junos dependent)",
      "OS_Platform": "Junos OS",
      "Use_Cases": "ISPs, service providers, scalable networks"
    }
  },
  {
    "id": 1120,
    "name": "Juniper MPC10E-15C-P-BASE",
    "brand": "Juniper",
    "category": "Линейные карты",
    "price": "咨询获取",
    "img": "/assets/products/Линейные карты/Juniper MPC10E-15C-P-BASE.jpg",
    "intro": {
      "cn": "高密度15×100GE接口卡，适用于Juniper MX路由器的高性能网络部署。",
      "en": "High‑density 15×100GE interface card for Juniper MX routers, built for high performance.",
      "ru": "Высокопроизводительная карта MPC для Juniper MX с 15 портами 100GE."
    },
    "specs": {
      "Product_Name": "MPC10E-15C-P-BASE",
      "Type": "Modular Port Concentrator",
      "Compatibility": "Juniper MX Series Routers",
      "Port_Count": "15 x 100GE",
      "Port_Type": "100 Gigabit Ethernet",
      "Performance": "High throughput, low latency",
      "Supported_Protocols": "Ethernet, MPLS",
      "OS_Support": "Junos OS"
    }
  },
  {
    "id": 1121,
    "name": "Juniper MPC7E-10G",
    "brand": "Juniper",
    "category": "Линейные карты",
    "price": "咨询获取",
    "img": "/assets/products/Линейные карты/Juniper MPC7E-10G.jpg",
    "intro": {
      "cn": "高性能10GbE接口模块，适用于Juniper MX路由器，提供高带宽与灵活配置。",
      "en": "High‑performance 10GbE interface module for Juniper MX routers with high bandwidth and flexibility.",
      "ru": "Высокопроизводительный модуль 10GbE для маршрутизаторов Juniper MX, обеспечивающий высокую пропускную способность и гибкость."
    },
    "specs": {
      "Product_Name": "Juniper MPC7E-10G",
      "Type": "Interface Module (MIC)",
      "Interface_Ports": "8 x 10GbE SFP+",
      "Throughput": "High throughput for large data volumes",
      "QoS": "Advanced QoS features",
      "Scalability": "Scalable architecture",
      "Configuration": "Flexible configuration options",
      "Reliability": "High reliability and redundancy",
      "Compatibility": "Juniper MX Series routers",
      "Management": "Managed via Junos OS",
      "Energy_Efficiency": "Optimized power consumption"
    }
  },
  {
    "id": 1122,
    "name": "Juniper SCBE2-MX with 2xRE-S-X6-128G Б/У",
    "brand": "Juniper",
    "category": "Линейные карты",
    "price": "咨询获取",
    "img": "/assets/products/Линейные карты/Juniper SCBE2-MX with 2xRE-S-X6-128G БУ.jpg",
    "intro": {
      "cn": "SCBE2-MX含2个RE-S‑X6‑128G控制板，提供高性能与冗余，适用于MX路由器。",
      "en": "SCBE2-MX with 2 RE-S‑X6‑128G offers high performance and redundancy for MX routers.",
      "ru": "SCBE2-MX с двумя RE-S‑X6‑128G, высокопроизводительный модуль с отказоустойчивостью."
    },
    "specs": {
      "Model": "SCBE2-MX",
      "Included_Components": "2x RE-S-X6-128G",
      "Memory_per_RE": "128 GB",
      "Condition": "Used",
      "Compatibility": "Juniper MX Series Routers",
      "Function": "Switch control and routing engine redundancy",
      "Performance": "High throughput and scalability",
      "Management_Features": "Advanced system management and monitoring"
    }
  },
  {
    "id": 1123,
    "name": "Juniper MPC5EQ-40G10G Б/У",
    "brand": "Juniper",
    "category": "Линейные карты",
    "price": "咨询获取",
    "img": "/assets/products/Линейные карты/Juniper MPC5EQ-40G10G БУ.jpg",
    "intro": {
      "cn": "提供4×40GE与10×10GE端口的高性能MX系列接口卡，适用于扩容与替换。",
      "en": "High‑performance MX‑series interface card with 4×40GE and 10×10GE ports.",
      "ru": "Б/У линейная карта Juniper с 4×40GE и 10×10GE, полностью протестирована."
    },
    "specs": {
      "Model": "MPC5EQ-40G10G",
      "Condition": "Used",
      "Port_40GE_QSFP+": "4",
      "Port_10GE_SFP+": "10",
      "Compatibility": "Juniper MX Series",
      "Features": "QoS, MPLS, high throughput",
      "Management": "Junos OS",
      "Use_Cases": "Service providers, enterprises, data centers"
    }
  },
  {
    "id": 1124,
    "name": "Juniper MPC4E-3D-2CGE-8XGE Б/У",
    "brand": "Juniper",
    "category": "Линейные карты",
    "price": "咨询获取",
    "img": "/assets/products/Линейные карты/Juniper MPC4E-3D-2CGE-8XGE БУ.jpg",
    "intro": {
      "cn": "双100GE与八10GE端口的高性能Juniper MX路由器线卡，适用于扩容与替换。",
      "en": "High‑performance MX router line card with 2x100GE and 8x10GE ports for expansion or replacement.",
      "ru": "Б/У линейная карта с 2×100GE и 8×10GE для MX‑маршрутизаторов, высокая производительность."
    },
    "specs": {
      "Model": "MPC4E-3D-2CGE-8XGE",
      "Condition": "Used",
      "Port_100GE": "2 x 100GE CFP2",
      "Port_10GE": "8 x 10GE SFP+",
      "Compatibility": "Juniper MX series",
      "Throughput": "High throughput module",
      "Architecture": "Modular design",
      "Transceiver_Support": "Supports multiple optical module types",
      "Use_Cases": "Service providers, enterprises, data centers"
    }
  },
  {
    "id": 1125,
    "name": "Huawei H902CSHF 16-port XGS-PON",
    "brand": "Huawei",
    "category": "Линейные карты",
    "price": "咨询获取",
    "img": "/assets/products/Линейные карты/Huawei H902CSHF 16-port XGS-PON.jpg",
    "intro": {
      "cn": "华为H902CSHF，16口XGS-PON板卡，适用于MA5800，提供10G对称高带宽。",
      "en": "Huawei H902CSHF 16-port XGS-PON board for MA5800 with 10G symmetric bandwidth.",
      "ru": "16‑портовая плата XGS‑PON для OLT MA5800 с поддержкой симметричных 10 Гбит/с."
    },
    "specs": {
      "Model": "H902CSHF",
      "Type": "16-port XGS-PON OLT board",
      "Compatibility": "Huawei MA5800 series",
      "Downlink_Speed": "10 Gbit/s",
      "Uplink_Speed": "10 Gbit/s",
      "Features": "High density, QoS, DBA, energy-efficient",
      "Application": "Ultra-broadband access, 8K video, cloud gaming, VR"
    }
  },
  {
    "id": 1126,
    "name": "Juniper MX10K-LC9600-BASE",
    "brand": "Juniper",
    "category": "Линейные карты",
    "price": "咨询获取",
    "img": "/assets/products/Линейные карты/Juniper MX10K-LC9600-BASE.jpg",
    "intro": {
      "cn": "面向MX10008的高性能线卡，支持高密度400GbE与可扩展带宽。",
      "en": "High‑performance line card for MX10008 with scalable 400GbE port density.",
      "ru": "Мощный линейный модуль для MX10008 с высокой плотностью 400GbE и масштабируемостью."
    },
    "specs": {
      "Product_Model": "MX10K-LC9600-BASE",
      "Compatibility": "Juniper MX10000 Series",
      "Throughput": "High total system capacity",
      "Interface_Support": "SFP+, QSFP28, QSFP-DD",
      "Speed_Support": "10/40/100/400GbE",
      "Protocols": "MPLS, EVPN, SRv6, QoS",
      "Scalability": "Modular, expandable architecture",
      "Reliability": "Carrier-grade resilience",
      "Management": "Junos OS integration",
      "Power_Optimization": "Reduced power consumption"
    }
  },
  {
    "id": 1127,
    "name": "Juniper MX204-HW-BASE",
    "brand": "Juniper",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/Juniper MX204-HW-BASE.jpg",
    "intro": {
      "cn": "Juniper MX204：紧凑高性能路由器，适用于电信与数据中心网络。",
      "en": "Juniper MX204: compact high‑performance router for telecom and data‑center networks.",
      "ru": "Juniper MX204 — компактный мощный маршрутизатор для телеком‑сетей и дата‑центров."
    },
    "specs": {
      "Form_Factor": "1RU compact chassis",
      "Throughput": "High throughput for carrier and DC use",
      "Interfaces": "Supports 100GE, 40GE, 25GE, 10GE",
      "OS": "Junos OS",
      "Routing_Features": "MPLS, BGP, EVPN, QoS",
      "Reliability": "Carrier‑grade, fault‑tolerant design",
      "Energy_Efficiency": "Optimized low power consumption",
      "Security": "Integrated security features"
    }
  },
  {
    "id": 1128,
    "name": "Juniper MX304-PREMIUM-DC",
    "brand": "Juniper",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/Juniper MX304-PREMIUM-DC.jpg",
    "intro": {
      "cn": "高性能紧凑型MX304路由器，适用于新一代网络和数据中心。",
      "en": "High‑performance compact MX304 router for next‑generation networks and data centers.",
      "ru": "Высокопроизводительный маршрутизатор для современных сетей и дата‑центров."
    },
    "specs": {}
  },
  {
    "id": 1129,
    "name": "ZTE ZXA10 C300 — платформа OLT большой емкости",
    "brand": "ZTE",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/ZTE ZXA10 C300  платформа OLT большой емкости.jpg",
    "intro": {
      "cn": "高密度端口、低能耗、灵活配置的旗舰级OLT平台。",
      "en": "High‑density, energy‑efficient OLT platform with flexible configuration.",
      "ru": "Высокоплотная и энергоэффективная OLT‑платформа с гибкой конфигурацией."
    },
    "specs": {
      "Model": "ZXA10 C300",
      "Manufacturer": "ZTE Corporation",
      "Device_Type": "OLT Platform",
      "Supported_PON_Technologies": "GPON, EPON, XG-PON/XGS-PON, 10G EPON",
      "Service_Card_Slots": "Up to 14",
      "PON_Ports_Per_Card": "8/16 GPON or EPON, 4/8 10G PON",
      "Max_PON_Port_Density": "Hundreds of GPON/EPON ports or dozens of 10G PON ports",
      "Uplink_Ports": "GE, 10GE, 40GE, 100GE",
      "Management_Interfaces": "CLI, SNMP, Web GUI, Netconf/YANG",
      "Redundancy": "Full redundancy for control, power, uplink, and service modules",
      "PON_Card_Slots": "Up to 14"
    }
  },
  {
    "id": 1130,
    "name": "Juniper PTX10001-36MR-AC",
    "brand": "Juniper",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/Juniper PTX10001-36MR-AC.jpg",
    "intro": {
      "cn": "高性能可扩展运营级路由器，适用于骨干网与数据中心。",
      "en": "High‑performance scalable carrier-grade router for backbone and data center use.",
      "ru": "Высокопроизводительный масштабируемый маршрутизатор для операторских и ЦОД‑сетей."
    },
    "specs": {
      "Model": "PTX10001-36MR-AC",
      "Ports_400GbE_QSFP-DD": "6",
      "Ports_100GbE_QSFP28": "30",
      "Throughput": "14.4 Tbps",
      "Packet_Forwarding_Rate": "10.7 Bpps",
      "Routing_Protocols": "BGP, OSPF, IS-IS, MPLS, SRv6, EVPN",
      "QoS": "Advanced QoS features",
      "Redundancy": "Redundant power supplies and fans",
      "OS": "Junos OS"
    }
  },
  {
    "id": 1131,
    "name": "Juniper MX10003 Premium",
    "brand": "Juniper",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/Juniper MX10003 Premium.jpg",
    "intro": {
      "cn": "高性能3U通用边缘路由器，支持400GbE及先进MPLS/EVPN特性，适用于运营级网络。",
      "en": "High‑performance 3U universal edge router with 400GbE and advanced MPLS/EVPN features.",
      "ru": "Высокопроизводительный универсальный маршрутизатор 3U с поддержкой 400GbE и функций MPLS/EVPN."
    },
    "specs": {
      "Form_Factor": "3U",
      "Port_Speeds": "400/100/40/25/10GbE",
      "Routing_Features": "MPLS, EVPN, SRv6, BGP, OSPF",
      "Redundancy": "Redundant power, fans, control modules",
      "Use_Case": "Service providers, enterprises, cloud providers"
    }
  },
  {
    "id": 1132,
    "name": "Juniper MX10003 Base (Discount price)",
    "brand": "Juniper",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/Juniper MX10003 Base Discount price.jpg",
    "intro": {
      "cn": "Juniper MX10003基础款，3U高性能路由器，支持10/25/40/100GbE和MPLS等协议。",
      "en": "Juniper MX10003 base model, 3U high‑performance router with 10/25/40/100GbE support.",
      "ru": "Универсальный граничный маршрутизатор MX10003 в базовой конфигурации по сниженной цене."
    },
    "specs": {
      "Form_Factor": "3U",
      "Throughput": "Up to 1.2 Tbps",
      "Packet_Processing": "Up to 830 Mpps",
      "Interface_Support": "10GE / 25GE / 40GE / 100GE",
      "Architecture": "Modular, MIC expansion",
      "Redundancy": "Redundant PSU, fans, control modules",
      "Routing_Protocols": "MPLS, EVPN, SRv6, BGP, OSPF",
      "Use_Cases": "Service providers, enterprises, cloud"
    }
  },
  {
    "id": 1133,
    "name": "Juniper PTX10002 36 QSFP-DD800",
    "brand": "Juniper",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/Juniper PTX10002 36 QSFP-DD800.jpg",
    "intro": {
      "cn": "高性能核心路由器，配备36个QSFP‑DD800端口，单端口速率达800G。",
      "en": "High‑performance core router with 36 QSFP‑DD800 ports, up to 800G per port.",
      "ru": "Высокопроизводительный коммутатор с 36 портами QSFP‑DD800 и пропускной способностью 800 Гбит/с."
    },
    "specs": {
      "Model": "PTX10002-36QSFP-DD800",
      "Port_Count": "36",
      "Port_Type": "QSFP-DD800",
      "Max_Port_Speed": "800 Gbps",
      "Form_Factor": "Compact core router",
      "Compatibility": "QSFP-DD, QSFP56, QSFP28, QSFP+",
      "Use_Cases": "Service providers, hyperscale data centers, enterprise cores",
      "Key_Features": "High port density, low latency, advanced routing and telemetry"
    }
  },
  {
    "id": 1134,
    "name": "Juniper MX-204 USED",
    "brand": "Juniper",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/Juniper MX-204 USED.jpg",
    "intro": {
      "cn": "紧凑高性能的MX‑204二手边缘路由器，提供4×100GbE与4×10GbE端口，可靠省成本。",
      "en": "Compact high‑performance MX‑204 used edge router with 4×100GbE and 4×10GbE ports, reliable and cost‑efficient.",
      "ru": "Компактный и мощный маршрутизатор MX‑204 USED с портами 4×100GbE и 4×10GbE, экономичный и надежный."
    },
    "specs": {
      "Model": "MX204 (USED)",
      "Form_Factor": "1RU",
      "100GbE_Ports": "4",
      "10GbE_Ports": "4",
      "OS": "Junos OS",
      "Use_Cases": "Edge routing, aggregation, service provider networks",
      "Key_Features": "High performance, scalability, compact design, cost savings"
    }
  },
  {
    "id": 1135,
    "name": "Huawei AR8140-12G10XG",
    "brand": "Huawei",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/Huawei AR8140-12G10XG.jpg",
    "intro": {
      "cn": "企业级高性能路由器，配备12个GE与10个10GE端口，支持VPN与QoS。",
      "en": "Enterprise router with 12 GE and 10 10GE ports, high performance and security.",
      "ru": "Корпоративный маршрутизатор с 12 GE и 10 10GE портами, высокой производительностью и безопасностью."
    },
    "specs": {
      "Model": "AR8140-12G10XG",
      "Ports_GE": "12",
      "Ports_10GE": "10",
      "Routing_Protocols": "BGP, OSPF, IS-IS, RIP",
      "Security_Features": "DDoS protection, traffic filtering, access control",
      "Traffic_Management": "QoS, WRED",
      "Use_Case": "Enterprise core, data centers, cloud infrastructure",
      "Performance": "High throughput, low latency"
    }
  },
  {
    "id": 1136,
    "name": "MX10008-PREMIUM-DC",
    "brand": "Juniper",
    "category": "Маршрутизаторы",
    "price": "咨询获取",
    "img": "/assets/products/Маршрутизаторы/MX10008-PREMIUM-DC.jpg",
    "intro": {
      "cn": "高性能模块化DC路由器，具备卓越吞吐、扩展性与可靠性。",
      "en": "High‑performance modular DC router with excellent throughput and reliability.",
      "ru": "Высокопроизводительный модульный маршрутизатор для ЦОД с масштабируемостью и надежностью."
    },
    "specs": {
      "Product_Name": "MX10008 Premium DC",
      "Throughput": "High throughput for large traffic volumes",
      "Architecture": "Modular chassis with LC and SF modules",
      "Power_Type": "DC power support",
      "Routing_Features": "MPLS, EVPN, SRv6, BGP, OSPF",
      "Redundancy": "Redundant PSUs, fans, control modules",
      "QoS": "Advanced traffic prioritization",
      "Security": "Integrated security features",
      "Management": "Enhanced system management and monitoring"
    }
  },
  {
    "id": 1137,
    "name": "Juniper SRX380-P-SYS-JB-AC",
    "brand": "Juniper",
    "category": "Межсетевые экраны",
    "price": "咨询获取",
    "img": "/assets/products/Межсетевые экраны/Juniper SRX380-P-SYS-JB-AC.jpg",
    "intro": {
      "cn": "高性能次世代防火墙，集成威胁防护与SD‑WAN，适用于分支与中小企业。",
      "en": "High‑performance NGFW with threat protection and SD‑WAN for branches and SMBs.",
      "ru": "Высокопроизводительный NGFW с защитой от угроз и поддержкой SD‑WAN для филиалов и малого бизнеса."
    },
    "specs": {
      "Product_Type": "Next‑Generation Firewall",
      "Model": "SRX380-P-SYS-JB-AC",
      "Power": "AC Powered",
      "Security_Features": "Firewall, IPS, DDoS protection, VPN",
      "Routing_Features": "Advanced routing protocols",
      "Management": "Junos Space Security Director",
      "Use_Case": "Branches, SMB, enterprise networks"
    }
  },
  {
    "id": 1138,
    "name": "Juniper SRX4100-SYS-JB-AC",
    "brand": "Juniper",
    "category": "Межсетевые экраны",
    "price": "咨询获取",
    "img": "/assets/products/Межсетевые экраны/Juniper SRX4100-SYS-JB-AC.jpg",
    "intro": {
      "cn": "高性能NGFW，40Gbps吞吐，支持SD‑WAN，适合中型企业与分支部署。",
      "en": "High‑performance NGFW with 40Gbps throughput and SD‑WAN for midsize enterprises.",
      "ru": "Высокопроизводительный NGFW до 40 Гбит/с, защита от угроз, SD‑WAN, питание AC."
    },
    "specs": {
      "Firewall_Type": "Next-Generation Firewall (NGFW)",
      "Throughput": "Up to 40 Gbps",
      "Advanced_Threat_Protection": "Yes",
      "SD-WAN_Support": "Yes",
      "VPN": "IPsec VPN",
      "Network_Interfaces": "GE / 10GE / 25GE",
      "Redundant_Power": "Supported",
      "Cooling": "Redundant fans",
      "OS": "Junos OS",
      "Power": "AC"
    }
  },
  {
    "id": 1139,
    "name": "Juniper SRX4100-SYS-JB-AC USED",
    "brand": "Juniper",
    "category": "Межсетевые экраны",
    "price": "咨询获取",
    "img": "/assets/products/Межсетевые экраны/Juniper SRX4100-SYS-JB-AC USED.jpg",
    "intro": {
      "cn": "高性能NGFW，40Gbps吞吐，支持SD‑WAN与高级威胁防护，适用中型企业。",
      "en": "High‑performance NGFW with 40Gbps throughput and SD‑WAN for mid‑size enterprises.",
      "ru": "Высокопроизводительный NGFW 40 Гбит/с с защитой от продвинутых угроз и SD-WAN."
    },
    "specs": {
      "Model": "SRX4100-SYS-JB-AC (Used)",
      "Firewall_Throughput": "Up to 40 Gbps",
      "Security_Features": "NGFW, IPS, ATP",
      "VPN": "IPsec, SSL VPN",
      "Routing": "Advanced routing support",
      "Management": "Juniper Security Director",
      "Power": "AC",
      "Use_Cases": "Mid-size enterprises, branches"
    }
  },
  {
    "id": 1140,
    "name": "Juniper SRX300",
    "brand": "Juniper",
    "category": "Межсетевые экраны",
    "price": "咨询获取",
    "img": "/assets/products/Межсетевые экраны/Juniper SRX300.jpg",
    "intro": {
      "cn": "SRX300为中小企业提供整合路由与安全的NGFW设备，体积小性能稳。",
      "en": "SRX300 is a compact NGFW for SMBs, combining routing and security with easy management.",
      "ru": "SRX300 — компактный NGFW для SMB, объединяющий маршрутизацию, безопасность и VPN с простой управляемостью."
    },
    "specs": {}
  },
  {
    "id": 1141,
    "name": "Juniper SRX4600-SYS-JB-AC",
    "brand": "Juniper",
    "category": "Межсетевые экраны",
    "price": "咨询获取",
    "img": "/assets/products/Межсетевые экраны/Juniper SRX4600-SYS-JB-AC.jpg",
    "intro": {
      "cn": "高性能NGFW，最高达480Gbps吞吐，支持SD-WAN与网络分段，适用中大型企业。",
      "en": "High‑performance NGFW with up to 480Gbps throughput, SD‑WAN, and AC power for enterprises.",
      "ru": "Высокопроизводительный NGFW до 480 Гбит/с, защита от угроз, SD‑WAN и AC питание."
    },
    "specs": {
      "Model": "SRX4600-SYS-JB-AC",
      "Firewall_Type": "Next-Generation Firewall",
      "Throughput": "Up to 480 Gbps",
      "Power": "AC",
      "Network_Segmentation": "Supported",
      "SD_WAN": "Supported",
      "Licensing": "Juniper Base (JB)",
      "System": "Base system (SYS)"
    }
  },
  {
    "id": 1142,
    "name": "Juniper SRX345-SYS-JB-2AC",
    "brand": "Juniper",
    "category": "Межсетевые экраны",
    "price": "咨询获取",
    "img": "/assets/products/Межсетевые экраны/Juniper SRX345-SYS-JB-2AC.jpg",
    "intro": {
      "cn": "高性能中小企业防火墙，提供全面威胁防护与双AC电源冗余。",
      "en": "SMB firewall with strong security, high performance, and dual AC power redundancy.",
      "ru": "Надежный SMB‑брандмауэр с высокой производительностью и двумя резервными БП."
    },
    "specs": {
      "Model": "SRX345-SYS-JB-2AC",
      "Firewall_Type": "Next-Generation Firewall",
      "Redundant_Power": "Dual AC power supplies",
      "Security_Features": "AV, botnet protection, IPS, malware defense",
      "Interfaces": "Gigabit Ethernet, SFP, PoE support",
      "VPN": "IPsec, SSL VPN",
      "Management": "Web UI, CLI",
      "Use_Case": "Small and medium business"
    }
  },
  {
    "id": 1143,
    "name": "Juniper SRX1500-SYS-JB-AC",
    "brand": "Juniper",
    "category": "Межсетевые экраны",
    "price": "咨询获取",
    "img": "/assets/products/Межсетевые экраны/Juniper SRX1500-SYS-JB-AC.jpg",
    "intro": {
      "cn": "高性能企业级SRX防火墙，提供先进安全与高吞吐量。",
      "en": "High‑performance SRX firewall for enterprises with advanced security and throughput.",
      "ru": "Высокопроизводительный межсетевой экран SRX с расширенными функциями безопасности."
    },
    "specs": {
      "Product_Name": "SRX1500-SYS-JB-AC",
      "Type": "Next-Generation Firewall",
      "Security_Features": "IPS, malware protection, content filtering, VPN",
      "Throughput": "High throughput architecture",
      "Scalability": "Modular and expandable",
      "Reliability": "Redundant PSU and fans",
      "VPN": "IPsec VPN support",
      "Connectivity": "Gigabit Ethernet, SFP+, expansion modules",
      "Management": "Web UI and advanced tools"
    }
  },
  {
    "id": 1144,
    "name": "Juniper SRX340-SYS-JB",
    "brand": "Juniper",
    "category": "Межсетевые экраны",
    "price": "咨询获取",
    "img": "/assets/products/Межсетевые экраны/Juniper SRX340-SYS-JB.jpg",
    "intro": {
      "cn": "面向中小企业的高性能SRX防火墙，提供全面威胁防护和灵活连接能力。",
      "en": "High‑performance SRX firewall for SMB with comprehensive threat protection and flexible connectivity.",
      "ru": "Мощный межсетевой экран SRX для SMB с полной защитой от современных угроз."
    },
    "specs": {
      "Product_Name": "SRX340-SYS-JB",
      "Type": "Next-Generation Firewall",
      "Target_Use": "SMB Networks",
      "Security_Features": "IPS, anti-malware, content filtering",
      "Connectivity": "Gigabit Ethernet, SFP, PoE support",
      "VPN": "IPsec, SSL VPN",
      "Management": "Web UI, CLI",
      "Scalability": "License-based feature expansion",
      "Reliability": "High-quality components with redundancy"
    }
  },
  {
    "id": 1145,
    "name": "Мультиплексор ZTE ZXMP M721 CX63A",
    "brand": "ZTE",
    "category": "Мультиплексоры",
    "price": "咨询获取",
    "img": "/assets/products/Мультиплексоры/Мультиплексор ZTE ZXMP M721 CX63A.jpg",
    "intro": {
      "cn": "紧凑型STM-4复用器，支持E1与以太网汇聚并具备MSP 1+1保护。",
      "en": "Compact STM-4 multiplexer with E1/Ethernet aggregation and MSP 1+1 protection.",
      "ru": "Компактный STM-4 мультиплексор с 16 E1, 4 FE и защитой MSP 1+1."
    },
    "specs": {
      "Throughput": "STM-4 (622 Mbit/s)",
      "E1 Ports": "16 × E1 (2.048 Mbit/s)",
      "Ethernet Ports": "4 × Fast Ethernet (10/100Base-T)",
      "Optical Port": "1 × STM-4 (S-4.1/L-4.1)",
      "Transmission Technologies": "GFP, VCAT, LCAS",
      "Traffic Protection": "MSP 1+1, SNCP",
      "Management": "Web, CLI, SNMPv2, ZXONM E300",
      "Form Factor": "1U, 19-inch",
      "Weight": "4.2 kg",
      "Power Supply": "DC -48V ±20%",
      "Power Consumption": "≤45 W",
      "Operating Temperature": "-5°C to +55°C",
      "Humidity": "5–95%",
      "MTBF": ">200,000 h",
      "Warranty": "36 months"
    }
  },
  {
    "id": 1146,
    "name": "Мультиплексор ZTE ZXMP M721 CX66A",
    "brand": "ZTE",
    "category": "Мультиплексоры",
    "price": "咨询获取",
    "img": "/assets/products/Мультиплексоры/Мультиплексор ZTE ZXMP M721 CX66A.jpg",
    "intro": {
      "cn": "运营级高速光复用设备，支持STM-64和TDM/Ethernet混合传输。",
      "en": "Carrier‑grade multiplexer with STM‑64 and hybrid TDM/Ethernet support.",
      "ru": "Мультиплексор операторского класса со скоростью до 10 Гбит/с и TDM/Ethernet."
    },
    "specs": {
      "Model": "ZXMP M721 CX66A",
      "Throughput": "STM-64 10 Gbit/s, OTN OTU2",
      "Interfaces": "4×10GbE, 16×GE, up to 126×E1",
      "Transmission_Tech": "GFP, VCAT, LCAS, Ethernet over SDH",
      "Traffic_Protection": "MSP 1+1, SNCP dual ring, equipment redundancy 1:4",
      "Management": "Web, CLI, ZXONM E300, SNMPv3, TL1",
      "Form_Factor": "2U, 19-inch",
      "Power_Consumption": "≤185 W",
      "Power_Input": "DC -48V ±20%, AC 100–240V, 1+1 redundancy",
      "Operating_Temperature": "-5°C to +55°C",
      "Humidity": "5%–95% non-condensing",
      "Weight": "9.8 kg",
      "Certifications": "ITU-T G.709/G.798/G.874, IEEE 802.3ah, MEF 9",
      "MTBF": ">250,000 h",
      "Warranty": "36 months"
    }
  },
  {
    "id": 1147,
    "name": "Мультиплексор ZTE ZXMP M721 CX62A",
    "brand": "ZTE",
    "category": "Мультиплексоры",
    "price": "咨询获取",
    "img": "/assets/products/Мультиплексоры/Мультиплексор ZTE ZXMP M721 CX62A.jpg",
    "intro": {
      "cn": "紧凑型STM-16复用器，支持TDM与以太网高可靠传输。",
      "en": "Compact STM-16 multiplexer with reliable TDM and Ethernet transport.",
      "ru": "Компактный STM-16 мультиплексор с надежной передачей TDM и Ethernet."
    },
    "specs": {
      "Transmission_Rate": "STM-16 (2.5 Gbps)",
      "Low_Speed_Ports": "63×E1, 4×FE, 2×GE",
      "Optical_Interfaces": "S-16.1 1310nm, L-16.1 1310nm",
      "Transmission_Distance": "40 km (S-16.1), 80 km (L-16.1)",
      "Traffic_Protection": "MSP 1+1, SNCP, Ring Protection",
      "Management": "SNMP, Web, CLI (RS-232), ZXONM E300 NMS",
      "Traffic_Adaptation": "GFP, VCAT, LCAS",
      "Dimensions": "442×220×220 mm (2U)",
      "Weight": "8 kg",
      "Power": "Dual PSU, DC -48V ±20%, AC 110–240V",
      "Power_Consumption": "≤120 W",
      "Operating_Temperature": "-5°C to +55°C",
      "Storage_Temperature": "-40°C to +70°C",
      "MTBF": ">200,000 h",
      "Standards": "ITU-T G.783/G.784/G.813/G.957, ETSI EN 300 386, IEC 60950-1",
      "Warranty": "36 months"
    }
  },
  {
    "id": 1148,
    "name": "Getac B360 G2",
    "brand": "Getac",
    "category": "Ноутбукимобильные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Ноутбукимобильные серверы/Getac B360 G2.jpg",
    "intro": {
      "cn": "坚固型B360 G2，适用于极端环境，配i7、32GB内存与2TB SSD。",
      "en": "Rugged B360 G2 with i7 CPU, 32GB RAM and 2TB SSD for harsh environments.",
      "ru": "Защищенный ноутбук для экстремальных условий с высокой производительностью."
    },
    "specs": {
      "Model": "B360 G2",
      "CPU": "Intel Core i7-1280P vPro",
      "RAM": "32GB DDR4",
      "Storage": "2TB NVMe SSD",
      "Wireless Modules": "None",
      "Webcam": "Removed",
      "Display Output": "DisplayPort",
      "Rugged Standards": "MIL-STD-810H, IP66"
    }
  },
  {
    "id": 1149,
    "name": "Getac B360 G2 Pro",
    "brand": "Getac",
    "category": "Ноутбукимобильные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Ноутбукимобильные серверы/Getac B360 G2 Pro.jpg",
    "intro": {
      "cn": "专业加固型笔记本，适用于严苛环境，性能强劲且可靠。",
      "en": "Rugged professional laptop built for harsh environments with strong performance.",
      "ru": "Профессиональный защищенный ноутбук для сложных условий эксплуатации."
    },
    "specs": {
      "Model": "B360 G2 Pro",
      "CPU": "Intel Core i7-1280P vPro up to 4.8GHz",
      "RAM": "64GB DDR4",
      "Storage": "2TB NVMe SSD",
      "GPU": "NVIDIA GeForce GTX 1650",
      "Webcam": "Removed",
      "Wireless Modules": "None",
      "Ports": "DisplayPort, Dual LAN (GbE, RJ‑45)",
      "Power Adapter": "120W",
      "Optical Drive": "DVD drive"
    }
  },
  {
    "id": 1150,
    "name": "Getac X600 Pro",
    "brand": "Getac",
    "category": "Ноутбукимобильные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Ноутбукимобильные серверы/Getac X600 Pro.jpg",
    "intro": {
      "cn": "超强防护X600 Pro，配i7处理器、128GB内存与4TB SSD，适用严苛环境",
      "en": "Rugged X600 Pro with i7 CPU, 128GB RAM, 4TB SSD, RTX3000 for harsh environments",
      "ru": "Ультра-защищённый ноутбук с i7, 128GB RAM, 4TB SSD и RTX3000 для экстремальных условий"
    },
    "specs": {
      "Model": "X600 Pro",
      "CPU": "Intel Core i7-11850HE vPro up to 4.7GHz",
      "RAM": "128GB DDR4",
      "Storage": "2TB SSD + 2TB SSD (NVMe)",
      "Display": "15.6 inch Full HD SR LCD",
      "Touchscreen": "Yes, with stylus",
      "GPU": "NVIDIA Quadro RTX 3000",
      "OS": "Windows 11 Pro x64",
      "Wireless": "WiFi, Bluetooth",
      "Navigation": "GPS/GLONASS",
      "Antenna_Ports": "RF outputs for external antennas"
    }
  },
  {
    "id": 1151,
    "name": "Getac V110 G7",
    "brand": "Getac",
    "category": "Ноутбукимобильные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Ноутбукимобильные серверы/Getac V110 G7.jpg",
    "intro": {
      "cn": "坚固可旋转变形本，耐冲击防水，适用于工业与野外任务。",
      "en": "Rugged convertible laptop with touch display for harsh environments and field work.",
      "ru": "Защищенный поворотный ноутбук-трансформер для работы в экстремальных условиях."
    },
    "specs": {
      "CPU": "Intel Core i7-1265U vPro",
      "RAM": "64GB DDR4",
      "Storage": "2TB removable NVMe SSD",
      "Display": "12-inch LumiBond 2.0 touchscreen",
      "Webcam": "None",
      "Wireless": "No wireless modules",
      "Stylus": "Digitizer with active stylus",
      "Operating System": "Windows 11 Pro x64",
      "Handle": "Hard carrying handle"
    }
  },
  {
    "id": 1152,
    "name": "Getac X600 Server RAID Expansion",
    "brand": "Getac",
    "category": "Ноутбукимобильные серверы",
    "price": "咨询获取",
    "img": "/assets/products/Ноутбукимобильные серверы/Getac X600 Server RAID Expansion.jpg",
    "intro": {
      "cn": "坚固型X600服务器扩展，支持RAID，适合严苛环境的高性能移动存储方案。",
      "en": "Rugged X600 server RAID expansion with high performance storage for extreme environments.",
      "ru": "Мобильное защищенное серверное решение с поддержкой RAID и высокой надежностью хранения."
    },
    "specs": {
      "Model": "X600 Server RAID Expansion",
      "CPU": "Intel Xeon W11685MRE vPro",
      "Webcam": "Included",
      "Card Readers": "Express card reader, PCMCIA reader",
      "RAM": "128GB",
      "Storage": "1TB PCIe SSD + 1TB PCIe SSD (hot‑swappable)",
      "Display": "Full HD, 1000 nits sunlight readable",
      "Keyboard": "RU layout, membrane backlit",
      "Wireless": "No WiFi, no Bluetooth",
      "Ports": "RS232 x2, RJ45 x2, VGA, Thunderbolt 4",
      "Battery": "75Wh x4",
      "Server Expansion Unit": "8 x 1TB SATA SSD + Super Multi drive"
    }
  },
  {
    "id": 1153,
    "name": "Lenovo ThinkStation P720",
    "brand": "Lenovo",
    "category": "Рабочие станции",
    "price": "咨询获取",
    "img": "/assets/products/Рабочие станции/Lenovo ThinkStation P720.jpg",
    "intro": {
      "cn": "双路至强与专业显卡的高性能塔式工作站",
      "en": "High‑performance dual‑Xeon tower workstation with pro graphics",
      "ru": "Мощная рабочая станция Tower с двумя Xeon, ECC памятью и Quadro для профессионалов"
    },
    "specs": {
      "Model": "ThinkStation P720",
      "CPU": "2× Intel Xeon 4216",
      "RAM": "32GB DDR4 ECC",
      "Storage_SSD": "512GB PCIe SSD",
      "Storage_HDD": "14TB SATA HDD",
      "GPU": "NVIDIA Quadro RTX A4000 16GB",
      "Optical_Drive": "DVD RAMBO",
      "Operating_System": "Windows 10 Pro 64-bit",
      "Warranty": "3 years"
    }
  },
  {
    "id": 1154,
    "name": "HPE DL360 Gen11 8SFF NC CTO Server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE DL360 Gen11 8SFF NC CTO Server.jpg",
    "intro": {
      "cn": "紧凑1U的DL360 Gen11，具8个SFF槽位，支持灵活配置以满足多种应用需求。",
      "en": "Compact 1U DL360 Gen11 with 8 SFF bays and flexible CTO configuration for demanding workloads.",
      "ru": "Мощный компактный 1U сервер DL360 Gen11 с 8 SFF и гибкой CTO‑конфигурацией."
    },
    "specs": {
      "Form_Factor": "1U Rack",
      "Drive_Bays": "8 SFF (2.5-inch)",
      "Configuration": "CTO (Configure-to-Order)",
      "CPU": "Intel Xeon Scalable (Gen4)",
      "Memory": "DDR5 support",
      "Use_Cases": "Virtualization, databases, HPC, cloud workloads"
    }
  },
  {
    "id": 1155,
    "name": "Inspur NF5280M6 12*3.5 серверная платформа",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF5280M6 1235 серверная платформа.jpg",
    "intro": {
      "cn": "NF5280M6为2U可扩展服务器，支持灵活配置处理器、内存与存储。",
      "en": "NF5280M6 is a flexible 2U server platform allowing custom CPU, memory, and storage setup.",
      "ru": "Масштабируемая 2U серверная платформа с полной гибкостью выбора конфигурации."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "12 x 3.5-inch",
      "CPU_Support": "Up to 2 Intel Xeon Scalable Gen3/Gen4",
      "Memory_Slots": "32 DIMM, up to 4TB",
      "Storage_Support": "SATA/SAS; optional NVMe",
      "PCIe_Slots": "8 PCIe expansion slots",
      "Configuration": "Empty machine (no CPU, RAM, drives, adapters)"
    }
  },
  {
    "id": 1156,
    "name": "Inspur NF5280M6 25*2.5 серверная платформа",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF5280M6 2525 серверная платформа.jpg",
    "intro": {
      "cn": "可扩展的2U空载服务器平台，支持自定义CPU、内存与存储配置。",
      "en": "Scalable 2U empty server platform offering full flexibility for CPU, memory and storage.",
      "ru": "Масштабируемая 2U платформа с полной гибкостью выбора компонентов."
    },
    "specs": {
      "Form Factor": "2U",
      "Drive Bays": "25 x 2.5-inch",
      "CPU Support": "Up to 2x Intel Xeon Scalable Gen 3/4",
      "Memory Capacity": "Up to 4 TB, 32 DIMM slots",
      "Storage Support": "SATA / SAS / NVMe",
      "Configuration": "Empty machine (no CPU, RAM, drives, adapters)"
    }
  },
  {
    "id": 1157,
    "name": "Inspur NF5280M6 4*12 NVME серверная платформа",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF5280M6 412 NVME серверная платформа.jpg",
    "intro": {
      "cn": "2U高性能存储优化服务器，支持12个NVMe与4个SATA/SAS硬盘，配置灵活。",
      "en": "High‑performance 2U server with 12 NVMe bays, 4 SATA/SAS bays, and flexible configuration.",
      "ru": "Высокопроизводительный 2U сервер с 12 NVMe и 4 SATA/SAS отсеками, гибкой конфигурацией."
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays_NVMe": "12 x 2.5\" NVMe",
      "Drive_Bays_SATA_SAS": "4 x 3.5\" SATA/SAS",
      "CPU": "Not included (user configurable)",
      "Memory": "Not included (user configurable)",
      "Expansion": "Configurable adapters"
    }
  },
  {
    "id": 1158,
    "name": "Inspur NF8260M6 8*2.5 серверная платформа",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF8260M6 825 серверная платформа.jpg",
    "intro": {
      "cn": "2U空机型服务器，支持双路Xeon，8个2.5寸盘位，灵活自选配置。",
      "en": "2U empty server chassis with dual Xeon support and 8×2.5 bays for flexible customization.",
      "ru": "Высокопроизводительный 2U сервер без предустановленных компонентов, обеспечивающий гибкость настройки."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "8×2.5 SATA/SAS/NVMe",
      "CPU_Support": "Dual Intel Xeon Scalable Gen3/Gen4",
      "Memory": "User configurable (not included)",
      "Storage": "User configurable (not included)",
      "Network": "User configurable (not included)",
      "Configuration": "Empty chassis"
    }
  },
  {
    "id": 1159,
    "name": "Inspur NF5466M6 24*3.5 серверная платформа",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF5466M6 2435 серверная платформа.jpg",
    "intro": {
      "cn": "4U可扩展服务器，支持24个3.5硬盘，空机型可自由配置组件。",
      "en": "Scalable 4U server with 24×3.5 bays; empty chassis for full custom configuration.",
      "ru": "Масштабируемый 4U сервер с 24 отсеками 3.5″ и гибкой конфигурацией."
    },
    "specs": {
      "Form_Factor": "4U",
      "Drive_Bays": "24 x 3.5 SATA/SAS, optional NVMe",
      "CPU_Support": "Up to 2x Intel Xeon Scalable Gen 3/4",
      "Memory_Slots": "32 DIMM, up to 4TB RAM",
      "Configuration": "Empty chassis (no CPU, RAM, drives, adapters)",
      "Expansion_Slots": "8 x PCIe",
      "Use_Case": "High‑capacity, cost‑efficient data storage"
    }
  },
  {
    "id": 1160,
    "name": "Inspur NF5266M6 24*3.5 серверная платформа",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF5266M6 2435 серверная платформа.jpg",
    "intro": {
      "cn": "2U可扩展存储服务器，支持24个3.5英寸盘位，空机型便于灵活配置。",
      "en": "2U scalable storage server with 24x3.5 bays; empty chassis for flexible configuration.",
      "ru": "Масштабируемый 2U сервер с 24 отсеками 3.5″, поставляется как пустая платформа."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "24 x 3.5 inch",
      "CPU_Support": "Up to 2x Intel Xeon Scalable Gen3/Gen4",
      "Memory_Slots": "32 DIMM, up to 4TB",
      "Storage_Interface": "SATA/SAS; optional NVMe",
      "Configuration": "Empty chassis without CPU, RAM, drives, adapters",
      "Use_Case": "High-capacity and scalable data storage"
    }
  },
  {
    "id": 1161,
    "name": "Lenovo SR630V2 Double Hashing 1U 8*2.5",
    "brand": "Lenovo",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Lenovo SR630V2 Double Hashing 1U 825.jpg",
    "intro": {
      "cn": "高性能1U服务器，支持虚拟化与云计算，配备8个2.5英寸硬盘位。",
      "en": "High‑performance 1U server with 8×2.5 bays, optimized for virtualization and cloud workloads.",
      "ru": "Высокопроизводительная 1U платформа с 8 отсеками 2.5″ для современных ЦОД."
    },
    "specs": {
      "Form Factor": "1U",
      "Drive Bays": "8 x 2.5 inch",
      "Drive Support": "SATA / SAS / NVMe SSD",
      "CPU": "Intel Xeon Scalable Gen3 or Gen4",
      "Memory": "DDR4 or DDR5 (depends on CPU generation)",
      "PCIe Slots": "Available expansion slots",
      "Double Hashing Feature": "Performance boost in specific workloads"
    }
  },
  {
    "id": 1162,
    "name": "Lenovo SR630V2 Double Hashing 1U 10*2.5",
    "brand": "Lenovo",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Lenovo SR630V2 Double Hashing 1U 1025.jpg",
    "intro": {
      "cn": "高密度1U服务器，支持10个2.5英寸盘与Xeon处理器，性能与扩展性强。",
      "en": "High-density 1U server with 10×2.5 bays and Xeon CPUs, built for performance and scalability.",
      "ru": "Высокопроизводительный 1U сервер с 10 отсеками 2.5″ и поддержкой Xeon."
    },
    "specs": {
      "Form_Factor": "1U rack server",
      "Drive_Bays": "10×2.5-inch SATA/SAS/NVMe",
      "CPU": "Intel Xeon Scalable Gen 3/4",
      "Memory": "DDR4 or DDR5 (depending on CPU gen)",
      "PCIe_Expansion": "PCIe slots for adapters",
      "Double_Hashing_Feature": "Potential performance optimization (details required)"
    }
  },
  {
    "id": 1163,
    "name": "Lenovo SR650V2 Double Hashing 2U 8*2.5",
    "brand": "Lenovo",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Lenovo SR650V2 Double Hashing 2U 825.jpg",
    "intro": {
      "cn": "Lenovo SR650V2 2U服务器，含8个2.5寸盘位与Double Hashing功能。",
      "en": "Lenovo SR650V2 2U server with 8x2.5 bays and Double Hashing support.",
      "ru": "Масштабируемый 2U сервер с 8 слотами 2.5″ и поддержкой Double Hashing."
    },
    "specs": {
      "Form Factor": "2U Rack Server",
      "Drive Bays": "8 x 2.5-inch SATA/SAS/NVMe",
      "CPU": "Dual Intel Xeon Scalable Gen 3/4",
      "Memory": "DDR4 or DDR5 (depends on CPU generation)",
      "PCIe Expansion": "Multiple PCIe slots",
      "Double Hashing": "Performance enhancement feature (details vary)"
    }
  },
  {
    "id": 1164,
    "name": "Lenovo — SR630V3 Double Hashing 2U 8*2.5",
    "brand": "Lenovo",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Lenovo  SR630V3 Double Hashing 2U 825.jpg",
    "intro": {
      "cn": "可扩展2U服务器，支持8个2.5硬盘与双哈希功能，适用于数据中心与云环境。",
      "en": "Scalable 2U server with 8x2.5 bays and Double Hashing for modern data‑center workloads.",
      "ru": "Масштабируемый 2U сервер с 8 слотами 2.5″ и Double Hashing для ЦОД и облачных сред."
    },
    "specs": {
      "Form_Factor": "2U rack server",
      "Drive_Bays": "8 x 2.5-inch SATA/SAS/NVMe",
      "CPU": "Dual Intel Xeon Scalable Gen3/Gen4",
      "Memory": "DDR4/DDR5 (depends on CPU generation)",
      "PCIe_Expansion": "Multiple PCIe slots",
      "Double_Hashing": "Performance enhancement feature (details vary)"
    }
  },
  {
    "id": 1165,
    "name": "Lenovo SR630V3 Double Hashing 2U 10*2.5",
    "brand": "Lenovo",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Lenovo SR630V3 Double Hashing 2U 1025.jpg",
    "intro": {
      "cn": "高性能2U服务器，适用于虚拟化、数据库与AI工作负载，支持10个2.5英寸盘位。",
      "en": "High‑performance 2U server for virtualization, databases, and AI with 10×2.5\" bays.",
      "ru": "Высокопроизводительный 2U сервер для виртуализации, БД и AI, с 10 отсеками 2.5\"."
    },
    "specs": {
      "Form_Factor": "2U rack server",
      "Drive_Bays": "10 x 2.5-inch (SATA/SAS/NVMe)",
      "CPU": "Up to 2× Intel Xeon Scalable 4th Gen",
      "Memory": "DDR5 RAM, large capacity supported",
      "Expansion_Slots": "Multiple PCIe slots, GPU support",
      "Feature_Double_Hashing": "Optional performance optimization feature (clarification recommended)"
    }
  },
  {
    "id": 1166,
    "name": "HPE ProLiant DL380 Gen10 12 LFF NC",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE ProLiant DL380 Gen10 12 LFF NC.jpg",
    "intro": {
      "cn": "高性能2U服务器，支持双路Xeon、12个3.5硬盘位，适合虚拟化与数据库。",
      "en": "High‑performance 2U server with dual Xeon, 12 LFF bays; ideal for virtualization and databases.",
      "ru": "Высокопроизводительный 2U сервер с 12 LFF и поддержкой двух Xeon Scalable."
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "12x 3.5in LFF",
      "CPU": "Dual Intel Xeon Scalable Gen1/Gen2 support",
      "Memory": "Up to 3TB DDR4",
      "Storage_Options": "SATA/SAS; optional NVMe",
      "Expansion_Slots": "Up to 8 PCIe slots",
      "Configuration": "CTO configurable components"
    }
  },
  {
    "id": 1167,
    "name": "HPE ProLiant DL380 Gen10 24 SFF NC",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE ProLiant DL380 Gen10 24 SFF NC.jpg",
    "intro": {
      "cn": "高性能2U服务器，支持24个SFF盘位，适合虚拟化与云环境。",
      "en": "High‑performance 2U server with 24 SFF bays ideal for virtualization and cloud.",
      "ru": "Высокопроизводительный 2U сервер с 24 SFF отсеками для виртуализации и облаков."
    },
    "specs": {
      "Model": "ProLiant DL380 Gen10 24 SFF NC",
      "Form_Factor": "2U Rack",
      "Drive_Bays": "24 x 2.5\" SFF",
      "CPU": "Dual Intel Xeon Scalable Gen1/Gen2",
      "Memory_Max": "Up to 3 TB DDR4",
      "Expansion_Slots": "Multiple PCIe slots",
      "Configuration": "NC (Non‑Configure preset)"
    }
  },
  {
    "id": 1168,
    "name": "HPE Proliant DL560 G10 5215 2P 64G P408i-a 8SFF 1600W",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE Proliant DL560 G10 5215 2P 64G P408i-a 8SFF 1600W.jpg",
    "intro": {
      "cn": "高性能2U双路服务器，配双Intel 5215、64GB内存、8盘位与1600W电源。",
      "en": "High‑performance 2U server with dual 5215 CPUs, 64GB RAM, 8 bays and 1600W PSU.",
      "ru": "Высокопроизводительный 2U сервер с 2×5215, 64 ГБ RAM, P408i-a и 8×2.5″."
    },
    "specs": {
      "Model": "ProLiant DL560 Gen10",
      "CPU": "2× Intel Xeon Silver 5215",
      "Memory": "64GB DDR4",
      "Drive_Bays": "8× 2.5-inch",
      "RAID_Controller": "HPE Smart Array P408i-a",
      "Power_Supply": "2× 1600W",
      "Form_Factor": "2U Rack Server"
    }
  },
  {
    "id": 1169,
    "name": "HPE DL560 Gen10 CTO Svr",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE DL560 Gen10 CTO Svr.jpg",
    "intro": {
      "cn": "HPE DL560 Gen10，双Xeon 5215，64GB内存，8个SFF位，适用于虚拟化与企业应用。",
      "en": "HPE DL560 Gen10 with dual Xeon 5215, 64GB RAM, 8 SFF bays; built for virtualization and enterprise use.",
      "ru": "HPE DL560 Gen10 — надежный 2U сервер с 2×Xeon 5215, 64ГБ RAM, P408i-a и 8 SFF отсеками."
    },
    "specs": {
      "Model": "HPE ProLiant DL560 Gen10",
      "Form_Factor": "2U",
      "CPU": "2× Intel Xeon Silver 5215",
      "Memory": "64GB DDR4",
      "Drive_Bays": "8× 2.5in SFF",
      "RAID_Controller": "HPE Smart Array P408i-a",
      "Power_Supply": "1600W"
    }
  },
  {
    "id": 1170,
    "name": "HPE DL580 Gen10 CTO Svr",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE DL580 Gen10 CTO Svr.jpg",
    "intro": {
      "cn": "4U高扩展CTO服务器，支持4路Xeon与大容量内存，适用于虚拟化和HPC。",
      "en": "4U scalable CTO server with 4‑socket Xeon support for virtualization and HPC workloads.",
      "ru": "4U масштабируемый CTO‑сервер с поддержкой 4х Xeon для виртуализации и ресурсоемких задач."
    },
    "specs": {
      "Form_Factor": "4U rack",
      "CPU_Support": "Up to 4× Intel Xeon Scalable",
      "Memory_Support": "Up to 6 TB DDR4",
      "Drive_Bays": "24× SFF or 12× LFF; optional NVMe",
      "Expansion_Slots": "Up to 12× PCIe + FlexibleLOM",
      "Power_Supply": "Redundant PSU",
      "Configuration": "CTO customizable"
    }
  },
  {
    "id": 1171,
    "name": "Huawei Xfusion 1288HV5 8*2.5SFF Empty machine",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 1288HV5 825SFF Empty machine.jpg",
    "intro": {
      "cn": "2U空机型服务器，支持双路Xeon及8个2.5寸盘位，灵活按需配置。",
      "en": "2U empty server with dual Xeon support and 8×2.5in bays for flexible custom configs.",
      "ru": "Гибкий 2U сервер без компонентов, позволяющий самостоятельно выбрать конфигурацию."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "8 x 2.5in SFF",
      "Drive_Support": "SATA/SAS/NVMe",
      "CPU_Support": "Dual Intel Xeon Scalable Gen2/Gen3",
      "Memory_Slots": "24 DIMM (DDR4)",
      "Configuration": "Empty machine (no CPU/RAM/storage/adapters)",
      "PCIe_Slots": "Up to 7",
      "Use_Case": "Customizable enterprise server"
    }
  },
  {
    "id": 1172,
    "name": "Huawei Xfusion 1288HV5 4*3.5LFF Empty machine",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 1288HV5 435LFF Empty machine.jpg",
    "intro": {
      "cn": "可灵活配置的2U服务器，支持4个3.5寸盘位与双路Xeon处理器。",
      "en": "Flexible 2U server with 4×3.5'' bays and dual Intel Xeon support.",
      "ru": "Гибкий 2U сервер с 4 отсеками 3.5\" и поддержкой двух процесcоров Xeon."
    },
    "specs": {
      "Form_Factor": "2U rack server",
      "Drive_Bays": "4 x 3.5-inch LFF",
      "Drive_Support": "SATA/SAS; optional NVMe",
      "CPU_Support": "Dual Intel Xeon Scalable Gen2/Gen3",
      "Memory_Slots": "24 DIMM (DDR4)",
      "Configuration": "Empty machine (no CPU/RAM/drives)"
    }
  },
  {
    "id": 1173,
    "name": "Huawei Xfusion 2288HV5 8*2.5SFF Empty machine",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 2288HV5 825SFF Empty machine.jpg",
    "intro": {
      "cn": "灵活的2U机架服务器，空机型支持自定义CPU、内存与存储配置。",
      "en": "Flexible 2U server chassis allowing full customization of CPU, RAM, and storage.",
      "ru": "Гибкий 2U сервер в конфигурации Empty machine без CPU, RAM и накопителей."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "8 x 2.5 inch",
      "Drive_Interface": "SATA / SAS / NVMe",
      "CPU_Support": "Dual Intel Xeon Scalable Gen 2/3",
      "Memory_Slots": "24 DIMM",
      "Max_Memory": "Up to 3 TB DDR4",
      "Chassis_Type": "Empty machine (no CPU/RAM/storage/adapters)"
    }
  },
  {
    "id": 1174,
    "name": "Huawei Xfusion 2288HV5 12*3.5LFF Empty machine",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 2288HV5 1235LFF Empty machine.jpg",
    "intro": {
      "cn": "可扩展2U机架式服务器，支持12个3.5寸硬盘位，空机型便于自定义配置",
      "en": "Scalable 2U server with 12×3.5\" bays; empty model for fully custom configuration",
      "ru": "Масштабируемый 2U сервер с 12 отсеками 3.5″, поставляется как пустая машина"
    },
    "specs": {
      "Form_Factor": "2U rack server",
      "Drive_Bays": "12×3.5-inch LFF",
      "Drive_Support": "SATA/SAS HDD/SSD, optional NVMe",
      "CPU_Support": "Up to 2× Intel Xeon Scalable Gen2/Gen3",
      "Memory_Slots": "24 DIMM slots, DDR4",
      "Configuration": "Empty machine (no CPU, RAM, drives, adapters)"
    }
  },
  {
    "id": 1175,
    "name": "Huawei Xfusion 1288HV6 8*2.5SFF Empty machine",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 1288HV6 825SFF Empty machine.jpg",
    "intro": {
      "cn": "可扩展2U服务器，空机型提供最大化配置灵活性。",
      "en": "Scalable 2U server in empty‑machine form for maximum configuration flexibility.",
      "ru": "Масштабируемый 2U сервер в конфигурации Empty machine для максимальной гибкости."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "8 x 2.5-inch SFF",
      "Drive_Interface_Support": "SATA/SAS/NVMe",
      "CPU_Support": "Dual Intel Xeon Scalable 4th/5th Gen",
      "Memory_Slots": "24 DIMM",
      "Max_Memory": "Up to 6 TB (CPU dependent)",
      "Configuration": "Empty machine without CPU, RAM, drives, adapters",
      "Use_Cases": "Virtualization, cloud, databases, analytics"
    }
  },
  {
    "id": 1176,
    "name": "Huawei Xfusion 1288HV6 4*3.5LFF Empty machine",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 1288HV6 435LFF Empty machine.jpg",
    "intro": {
      "cn": "2U机型，提供4个3.5寸盘位，裸机配置便于自定义组件。",
      "en": "2U server with four 3.5-inch bays; empty unit for fully customized components.",
      "ru": "Высокопроизводительный 2U сервер с 4 отсекaми 3.5″ в варианте без комплектующих."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "4 x 3.5-inch LFF",
      "Drive_Support": "SATA/SAS HDD, optional NVMe SSD",
      "CPU": "Not included",
      "Memory": "Not included",
      "Storage": "Not included",
      "Network_Adapters": "Not included",
      "Configuration_Flexibility": "User-defined components"
    }
  },
  {
    "id": 1177,
    "name": "Huawei Xfusion 2288HV6 8*2.5SFF Empty machine,16 memory slots",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 2288HV6 825SFF Empty machine16 memory slots.jpg",
    "intro": {
      "cn": "灵活可扩展的2U服务器，支持16内存槽和8个2.5寸盘位，适合多场景部署。",
      "en": "Flexible 2U server with 16 memory slots and 8×2.5\" bays, ideal for scalable workloads.",
      "ru": "Гибкий и масштабируемый 2U‑сервер с 16 слотами памяти и 8 отсеками 2.5\"."
    },
    "specs": {
      "Model": "Xfusion 2288HV6",
      "Form_Factor": "2U Rack",
      "Drive_Bays": "8×2.5'' SFF",
      "Memory_Slots": "16 DIMM slots",
      "Configuration": "Empty machine (no CPU, RAM, drives, adapters)",
      "Use_Cases": "Virtualization, cloud, databases, AI/ML"
    }
  },
  {
    "id": 1178,
    "name": "Huawei Xfusion 2288HV6 12*3.5LFF Empty machine,16 memory slots",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 2288HV6 1235LFF Empty machine16 memory slots.jpg",
    "intro": {
      "cn": "2U机架式空载服务器，支持12盘位与16内存槽，便于灵活配置与扩展。",
      "en": "2U barebones server with 12 drive bays and 16 DIMM slots for flexible expansion.",
      "ru": "Высокопроизводительный 2U сервер с 12 отсеками и 16 слотами памяти, поставляется как пустая конфигурация."
    },
    "specs": {
      "Form_Factor": "2U rackmount",
      "Drive_Bays": "12 x 3.5-inch LFF",
      "Memory_Slots": "16 DIMM slots",
      "Configuration": "Barebone (no CPU, RAM, drives, adapters)",
      "Scalability": "Customizable for storage and compute expansion"
    }
  },
  {
    "id": 1179,
    "name": "Huawei Xfusion 2288HV7 8*2.5SFF Empty machine",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 2288HV7 825SFF Empty machine.jpg",
    "intro": {
      "cn": "2U空机型服务器，支持双路Xeon与8个2.5寸盘位，配置灵活可定制",
      "en": "2U barebone server with dual Xeon support and 8×2.5\" bays, offering full config flexibility",
      "ru": "Высокопроизводительный 2U сервер в конфигурации Empty machine с полной гибкостью выбора"
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "8 x 2.5\" SFF",
      "Drive_Interface": "SATA / SAS / NVMe",
      "CPU_Support": "Dual Intel Xeon Scalable",
      "Configuration": "Barebone (no CPU, RAM, storage, adapters)"
    }
  },
  {
    "id": 1180,
    "name": "Huawei Xfusion 2288HV7 12*3.5LFF Empty machine",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 2288HV7 1235LFF Empty machine.jpg",
    "intro": {
      "cn": "2U机架式服务器，12盘位，高扩展性与灵活配置的空机方案。",
      "en": "2U server with 12 LFF bays, scalable and fully customizable empty‑machine design.",
      "ru": "Масштабируемый 2U сервер с 12 LFF отсеками и гибкой конфигурацией компонентов."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "12 x 3.5-inch LFF",
      "Drive_Support": "SATA/SAS HDD, optional NVMe SSD",
      "CPU_Support": "Up to 2x Intel Xeon Scalable",
      "Memory": "User‑configurable, not included",
      "Storage": "User‑configurable, not included",
      "Adapters": "User‑configurable, not included",
      "Configuration": "Empty machine chassis"
    }
  },
  {
    "id": 1181,
    "name": "Huawei Xfusion 2288HV7 25*2.5SFF Empty machine",
    "brand": "Huawei",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Huawei Xfusion 2288HV7 2525SFF Empty machine.jpg",
    "intro": {
      "cn": "2U可扩展服务器，25个2.5盘位，空机型支持自定义配置",
      "en": "2U scalable server with 25x2.5 bays; empty config for flexible customization",
      "ru": "Масштабируемый 2U сервер с 25 отсеками SFF и гибкой конфигурацией"
    },
    "specs": {
      "Model": "Xfusion 2288HV7 (25x2.5 SFF)",
      "Form_Factor": "2U",
      "CPU": "Not included",
      "CPU_Support": "Dual Intel Xeon Scalable Gen4/Gen5",
      "Memory": "Not included",
      "Memory_Slots": "24 DIMM DDR5",
      "Drive_Bays": "25 x 2.5 SFF (SATA/SAS/NVMe)",
      "Configuration": "Empty machine (no CPU/RAM/drives/adapters)"
    }
  },
  {
    "id": 1182,
    "name": "Inspur NF5180M6 4*3.5 Empty machine",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF5180M6 435 Empty machine.jpg",
    "intro": {
      "cn": "1U 空机型服务器，支持灵活选配，适合中小企业与分支机构。",
      "en": "1U empty‑config server with flexible component choice for SMB and branch offices.",
      "ru": "Компактный 1U сервер без комплектующих, обеспечивающий гибкую конфигурацию."
    },
    "specs": {
      "Form_Factor": "1U rackmount",
      "Drive_Bays": "4 x 3.5in",
      "CPU_Support": "Intel Xeon Scalable Gen3/Gen4",
      "Memory_Slots": "32 DIMM slots",
      "Max_Memory": "Up to 4TB",
      "Configuration": "Empty machine (no CPU, RAM, drives, adapters)"
    }
  },
  {
    "id": 1183,
    "name": "Inspur NF5270M6 4*3.5 Empty machine",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF5270M6 435 Empty machine.jpg",
    "intro": {
      "cn": "2U机型，提供灵活配置的空机版，支持双路Xeon与4个3.5硬盘位。",
      "en": "2U flexible empty server with dual Xeon support and four 3.5-inch drive bays.",
      "ru": "Высокопроизводительный 2U сервер в конфигурации «Empty machine» с гибкой настройкой."
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "4 x 3.5-inch",
      "Drive_Interface": "SATA/SAS, optional NVMe",
      "CPU_Support": "Dual Intel Xeon Scalable 3rd/4th Gen",
      "Memory_Slots": "32 DIMM slots",
      "Configuration": "Empty machine (no CPU, RAM, drives, adapters)"
    }
  },
  {
    "id": 1184,
    "name": "Inspur NF5280M5 4*3.5 Empty machine",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF5280M5 435 Empty machine.jpg",
    "intro": {
      "cn": "2U机型，空载配置，可自选CPU/内存/硬盘，适合SMB与分支场景。",
      "en": "2U barebone server with flexible CPU, RAM, and storage options for SMB and branch use.",
      "ru": "Экономичный 2U сервер в конфигурации Empty machine с гибким выбором компонентов."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "4 x 3.5 inch",
      "CPU_Support": "Dual Intel Xeon Scalable",
      "Memory_Slots": "24 DIMM, up to 3TB DDR4",
      "Storage_Options": "SATA/SAS HDD, optional NVMe SSD",
      "Configuration": "Barebone without CPU, RAM, drives, adapters"
    }
  },
  {
    "id": 1185,
    "name": "Inspur NF5280M6 4*3.5 Empty machine",
    "brand": "Inspur",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Inspur NF5280M6 435 Empty machine.jpg",
    "intro": {
      "cn": "经济灵活的2U机架式空载服务器，适用于中小企业与分支机构。",
      "en": "Economical and flexible 2U bare server for SMBs and branch offices.",
      "ru": "Экономичный и гибкий 2U сервер в конфигурации Empty machine для SMB и филиалов."
    },
    "specs": {
      "Form_Factor": "2U rackmount",
      "Drive_Bays": "4 x 3.5-inch SATA/SAS",
      "CPU_Support": "Dual Intel Xeon Scalable 3rd/4th Gen",
      "Memory_Slots": "32 DIMM slots, DDR4/DDR5 (CPU dependent)",
      "NVMe_Support": "Optional NVMe SSD",
      "Configuration": "Barebone (no CPU, RAM, drives, adapters)"
    }
  },
  {
    "id": 1186,
    "name": "HPE Proliant DL380 G10 PLUS 8LFF NC CTO server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE Proliant DL380 G10 PLUS 8LFF NC CTO server.jpg",
    "intro": {
      "cn": "高性能可扩展的2U服务器，支持8个3.5英寸硬盘并提供灵活配置。",
      "en": "High-performance scalable 2U server with 8 LFF bays and flexible CTO configuration.",
      "ru": "Высокопроизводительный и масштабируемый 2U сервер с 8 отсеками LFF и гибкой конфигурацией."
    },
    "specs": {
      "Model": "ProLiant DL380 Gen10 Plus",
      "Form_Factor": "2U Rack",
      "Drive_Bays": "8 LFF (3.5-inch)",
      "Configuration": "CTO (Configure-to-Order)",
      "CPU": "Intel Xeon Scalable (supported)",
      "Memory": "DDR4 (high‑speed, scalable)",
      "Scalability": "Expandable storage, memory, and network interfaces",
      "Reliability": "Enterprise-grade components"
    }
  },
  {
    "id": 1187,
    "name": "HPE Proliant DL380 G10 PLUS 12LFF NC CTO server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE Proliant DL380 G10 PLUS 12LFF NC CTO server.jpg",
    "intro": {
      "cn": "高性能可扩展的2U服务器，支持Xeon和12盘位，适合关键业务与虚拟化。",
      "en": "High‑performance scalable 2U server with Xeon CPUs and 12 LFF bays for critical workloads.",
      "ru": "Высокопроизводительный масштабируемый 2U сервер с Xeon и 12 LFF отсеками."
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "CPU": "Intel Xeon Scalable (supported)",
      "Drive_Bays": "12 LFF 3.5-inch",
      "Memory": "DDR4 (high‑speed, scalable)",
      "Configuration_Type": "CTO (Configure-to-Order)",
      "Management": "HPE iLO, HPE OneView",
      "Use_Cases": "Virtualization, cloud, critical applications",
      "Scalability": "Expandable memory, storage, and networking"
    }
  },
  {
    "id": 1188,
    "name": "HPE Proliant DL380 G10 PLUS 8SFF NC CTO server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE Proliant DL380 G10 PLUS 8SFF NC CTO server.jpg",
    "intro": {
      "cn": "强大的2U企业级服务器，支持8个SFF硬盘，适合虚拟化与高负载应用。",
      "en": "Powerful 2U server with 8 SFF bays, ideal for virtualization and demanding workloads.",
      "ru": "Мощный и гибкий 2U сервер с 8 SFF отсеками для высокопроизводительных задач."
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "8x SFF 2.5-inch",
      "CPU": "Intel Xeon Scalable (supported)",
      "Memory": "DDR4, scalable",
      "Storage_Options": "HDD/SSD support",
      "Configuration": "CTO (Configure-to-Order)",
      "Management": "HPE iLO, HPE OneView",
      "Scalability": "Expandable memory, storage and network interfaces",
      "Reliability": "Enterprise-grade components and redundancy"
    }
  },
  {
    "id": 1189,
    "name": "HPE Proliant DL380 G10 PLUS 24SFF NC CTO server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE Proliant DL380 G10 PLUS 24SFF NC CTO server.jpg",
    "intro": {
      "cn": "2U机架式服务器，24个SFF硬盘位，适合虚拟化与数据密集型工作负载。",
      "en": "2U scalable server with 24 SFF bays, ideal for virtualization and data-heavy workloads.",
      "ru": "Масштабируемый 2U сервер с 24 SFF отсеками, подходит для виртуализации и баз данных."
    },
    "specs": {
      "Form_Factor": "2U rack",
      "Drive_Bays": "24x SFF (2.5-inch)",
      "CPU": "Intel Xeon Scalable (supports multiple models)",
      "Memory": "DDR4, scalable configuration",
      "Management": "HPE iLO, HPE OneView",
      "Configuration": "CTO (Configure-to-Order)",
      "Use_Cases": "Virtualization, databases, cloud workloads",
      "Scalability": "Expandable storage, memory, and network options"
    }
  },
  {
    "id": 1190,
    "name": "HPE Proliant DL380 G10 PLUS",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE Proliant DL380 G10 PLUS.jpg",
    "intro": {
      "cn": "2U高性能可扩展服务器，适用于虚拟化和各类关键业务。",
      "en": "2U high‑performance scalable server for virtualization and critical workloads.",
      "ru": "2U сервер высокой производительности и надёжности на базе Intel Xeon Scalable для виртуализации и бизнес‑нагрузок."
    },
    "specs": {}
  },
  {
    "id": 1191,
    "name": "HPE DL360 Gen10 Plus 8 SFF NC CTO Server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE DL360 Gen10 Plus 8 SFF NC CTO Server.jpg",
    "intro": {
      "cn": "紧凑1U高性能服务器，支持8个SFF盘位，适用于虚拟化与数据中心部署。",
      "en": "Compact 1U high‑performance server with 8 SFF bays, ideal for virtualization and data centers.",
      "ru": "Компактный 1U сервер с 8 SFF отсеками для высокопроизводительных задач."
    },
    "specs": {
      "Model": "ProLiant DL360 Gen10 Plus 8 SFF NC CTO",
      "Form_Factor": "1U Rack",
      "Drive_Bays": "8 SFF (2.5-inch)",
      "CPU": "Intel Xeon Scalable (CTO configurable)",
      "Memory": "DDR4 (CTO configurable)",
      "Storage_Options": "SSD/HDD, configurable",
      "Network": "CTO configurable",
      "Use_Cases": "Virtualization, databases, cloud, HPC"
    }
  },
  {
    "id": 1192,
    "name": "HPE ProLiant DL380 Gen11 8LFF NC CTO Server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE ProLiant DL380 Gen11 8LFF NC CTO Server.jpg",
    "intro": {
      "cn": "2U服务器，支持8个LFF硬盘位，性能强劲且可定制，适用于多种数据中心应用。",
      "en": "2U server with 8 LFF bays, high performance and scalable design for modern data centers.",
      "ru": "2U сервер с 8 LFF отсеками, высокой производительностью и гибкой конфигурацией для ЦОД."
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "8 LFF",
      "Model_Type": "CTO (Configure-to-Order)",
      "CPU_Support": "Intel Xeon Scalable",
      "Use_Cases": "Virtualization, databases, cloud workloads",
      "Scalability": "Expandable memory, storage, network options",
      "Reliability": "Enterprise-grade components"
    }
  },
  {
    "id": 1193,
    "name": "HPE ProLiant DL380 Gen11 12LFF NC CTO Server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE ProLiant DL380 Gen11 12LFF NC CTO Server.jpg",
    "intro": {
      "cn": "2U服务器，支持12个LFF硬盘，性能强大且可灵活定制。",
      "en": "2U server with 12 LFF bays, high performance and fully configurable.",
      "ru": "2U сервер с 12 LFF отсеками, высокой производительностью и гибкой CTO-конфигурацией."
    },
    "specs": {}
  },
  {
    "id": 1194,
    "name": "HPE ProLiant DL380 Gen11 8SFF NC CTO Server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE ProLiant DL380 Gen11 8SFF NC CTO Server.jpg",
    "intro": {
      "cn": "高性能2U机架服务器，支持CTO配置和8个SFF硬盘位。",
      "en": "High‑performance 2U server with CTO flexibility and 8 SFF bays.",
      "ru": "Высокопроизводительный 2U сервер с 8 SFF отсеками и гибкой CTO конфигурацией."
    },
    "specs": {
      "Form Factor": "2U Rack",
      "Drive Bays": "8x SFF",
      "Model Type": "CTO (Configure-to-Order)",
      "Configuration": "NC (Non-configured)",
      "CPU Support": "Intel Xeon Scalable",
      "Use Cases": "Virtualization, databases, HPC, cloud"
    }
  },
  {
    "id": 1195,
    "name": "HPE Proliant DL360 Gen10 4210R 1P 16G P408i-a NC 8SFF 500W PS Server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE Proliant DL360 Gen10 4210R 1P 16G P408i-a NC 8SFF 500W PS Server.jpg",
    "intro": {
      "cn": "紧凑1U服务器，配Xeon 4210R、16GB内存和P408i-a控制器，适合多种业务应用。",
      "en": "Compact 1U server with Xeon 4210R, 16GB RAM and P408i-a controller for versatile workloads.",
      "ru": "Компактный производительный 1U сервер с Xeon 4210R, 16GB DDR4, контроллером P408i-a и поддержкой 8 SFF дисков."
    },
    "specs": {
      "Model": "ProLiant DL360 Gen10",
      "CPU": "Intel Xeon 4210R",
      "Memory": "16GB DDR4",
      "RAID Controller": "HPE Smart Array P408i-a",
      "Drive Bays": "8 x 2.5in SFF",
      "Power Supply": "500W",
      "Form Factor": "1U Rack",
      "Network": "Integrated network interfaces"
    }
  },
  {
    "id": 1196,
    "name": "HPE DL360 Gen10 4 LFF NC CTO Server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE DL360 Gen10 4 LFF NC CTO Server.jpg",
    "intro": {
      "cn": "HPE DL360 Gen10 1U服务器，支持4个LFF盘位，适合中小企业与远程办公。",
      "en": "HPE DL360 Gen10 1U server with 4 LFF bays, ideal for SMB and remote offices.",
      "ru": "HPE DL360 Gen10 — эффективный 1U сервер с 4 LFF отсеками для SMB и филиалов."
    },
    "specs": {
      "Form_Factor": "1U Rack",
      "Drive_Bays": "4× 3.5in LFF",
      "Model_Type": "CTO Configure-to-Order",
      "CPU_Support": "Intel Xeon Scalable",
      "Memory_Type": "DDR4"
    }
  },
  {
    "id": 1197,
    "name": "HPE DL360 Gen10 8 SFF NC CTO Server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE DL360 Gen10 8 SFF NC CTO Server.jpg",
    "intro": {
      "cn": "紧凑1U机型，支持8个SFF硬盘，灵活CTO配置，适合虚拟化与高性能负载。",
      "en": "Compact 1U server with 8 SFF bays and flexible CTO options for virtualization and HPC.",
      "ru": "Компактный 1U сервер с 8 SFF отсеками и гибкой CTO‑конфигурацией для различных нагрузок."
    },
    "specs": {
      "Model": "ProLiant DL360 Gen10",
      "Form_Factor": "1U Rack",
      "Drive_Bays": "8 × SFF (2.5-inch)",
      "Configuration": "CTO (Configure-to-Order)",
      "Workloads": "Virtualization, databases, HPC, cloud",
      "Storage_Options": "SSD/HDD supported"
    }
  },
  {
    "id": 1198,
    "name": "HPE DL380 Gen10 NC 8SFF BC Svr",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE DL380 Gen10 NC 8SFF BC Svr.jpg",
    "intro": {
      "cn": "双路2U服务器，具备8个SFF硬盘位，适合虚拟化与企业应用",
      "en": "2U dual‑socket server with 8 SFF bays, ideal for virtualization and enterprise workloads",
      "ru": "Надежный 2U сервер с 8 SFF отсеками для широкого спектра рабочих нагрузок"
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "8x SFF 2.5-inch",
      "CPU": "Intel Xeon Scalable (supported)",
      "Memory": "DDR4 (supported)",
      "Remote_Management": "HPE iLO",
      "Scalability": "Expandable storage and network options",
      "Redundancy": "Optional redundant PSUs and fans",
      "Use_Cases": "Virtualization, databases, cloud workloads"
    }
  },
  {
    "id": 1199,
    "name": "HPE ProLiant DL380 Gen10 8 LFF NC CTO Server",
    "brand": "HPE",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/HPE ProLiant DL380 Gen10 8 LFF NC CTO Server.jpg",
    "intro": {
      "cn": "可配置的2U服务器，支持8个LFF硬盘位，具备高性能与可扩展性。",
      "en": "Configurable 2U server with 8 LFF bays, offering strong performance and scalability.",
      "ru": "Мощный и масштабируемый 2U сервер с 8 LFF отсеками, подходящий для виртуализации, баз данных и облачных нагрузок; модель CTO позволяет гибко выбирать процессоры, память и накопители."
    },
    "specs": {
      "Model": "ProLiant DL380 Gen10",
      "Form_Factor": "2U Rack",
      "Drive_Bays": "8 LFF",
      "Configuration_Type": "CTO (Configure-to-Order)",
      "CPU": "Intel Xeon Scalable (option)",
      "Memory": "DDR4 (scalable)",
      "Use_Cases": "Virtualization, databases, cloud workloads"
    }
  },
  {
    "id": 1200,
    "name": "DELL R760XS 12*3.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760XS 1235 Empty machine.jpg",
    "intro": {
      "cn": "DELL R760xs 2U空机箱，支持最多12个3.5寸硬盘，便于自定义配置。",
      "en": "Dell R760xs 2U chassis supports up to 12x3.5\" drives for flexible custom builds.",
      "ru": "Масштабируемое 2U шасси с поддержкой до 12 накопителей 3.5\", без предустановленных компонентов."
    },
    "specs": {
      "Form_Factor": "2U Rackmount",
      "Drive_Bays": "Up to 12 x 3.5\" (LFF)",
      "Chassis_Type": "Empty chassis (no CPU, RAM, drives)",
      "Storage_Expansion": "Supports large-capacity storage arrays",
      "Component_Flexibility": "User-configurable CPU, memory, controllers",
      "Management": "iDRAC remote management support",
      "Use_Cases": "File storage, backup, surveillance, scalable storage"
    }
  },
  {
    "id": 1201,
    "name": "DELL R760 8*2.5 High power motherboard",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760 825 High power motherboard.jpg",
    "intro": {
      "cn": "高性能2U服务器，支持8个2.5硬盘，适用于虚拟化与高负载应用。",
      "en": "High‑performance 2U server with 8×2.5 bays for virtualization and heavy workloads.",
      "ru": "Высокопроизводительный сервер с 8 слотами 2.5″ для требовательных задач."
    },
    "specs": {}
  },
  {
    "id": 1202,
    "name": "DELL R760 12*3.5 Low power motherboard",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760 1235 Low power motherboard.jpg",
    "intro": {
      "cn": "节能型2U服务器机箱，支持12个3.5硬盘，适合大容量存储场景。",
      "en": "Energy‑efficient 2U chassis with 12×3.5 bays, ideal for high‑capacity storage.",
      "ru": "Энергоэффективное 2U-шасси с 12 отсеками 3.5″ для масштабируемого хранения."
    },
    "specs": {
      "Model": "PowerEdge R760 (Low Power Motherboard)",
      "Form_Factor": "2U Rack",
      "Drive_Bays": "12 × 3.5-inch LFF",
      "Motherboard": "Low Power Motherboard",
      "Chassis": "Bare chassis without components",
      "Use_Case": "File servers, backup, archival storage",
      "Remote_Management": "iDRAC support"
    }
  },
  {
    "id": 1203,
    "name": "DELL R760 12*3.5 High power motherboard",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760 1235 High power motherboard.jpg",
    "intro": {
      "cn": "2U服务器，支持12个3.5盘位与高性能主板，适合虚拟化及大数据等场景",
      "en": "2U server with 12x3.5 bays and high‑power motherboard for heavy data workloads",
      "ru": "Мощный 2U сервер с 12 слотами 3.5″ и High Power материнской платой для требовательных задач"
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "12 x 3.5 inch",
      "Motherboard": "High Power Motherboard",
      "CPU_Support": "Intel Xeon Scalable 4th Gen",
      "Memory_Type": "DDR5",
      "Chassis": "Bare chassis (no components)"
    }
  },
  {
    "id": 1204,
    "name": "DELL R760 16*2.5 Low power motherboard",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760 1625 Low power motherboard.jpg",
    "intro": {
      "cn": "节能型2U服务器主板，支持16个2.5英寸盘位，适合虚拟化与数据处理。",
      "en": "Energy‑efficient 2U server board with 16×2.5 bays, ideal for virtualization and data tasks.",
      "ru": "Энергоэффективный 2U сервер с поддержкой 16 дисков 2.5″ для хранения и бизнес‑задач."
    },
    "specs": {
      "Form_Factor": "2U rackmount",
      "Drive_Bays": "16 x 2.5-inch",
      "Drive_Support": "SAS, SATA, NVMe",
      "CPU_Support": "Intel Xeon Scalable 4th Gen",
      "Memory_Expandability": "Expandable RAM support",
      "Remote_Management": "Dell iDRAC",
      "Security_Features": "Secure Boot, System Lockdown, TPM"
    }
  },
  {
    "id": 1205,
    "name": "DELL R760 16*2.5 High power motherboard",
    "brand": "DELL",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760 1625 High power motherboard.jpg",
    "intro": {
      "cn": "高性能2U服务器机型，支持16个2.5英寸盘位，适用于虚拟化与AI等负载",
      "en": "High‑performance 2U server with 16×2.5\" bays, ideal for virtualization, AI and HPC",
      "ru": "Высокопроизводительный 2U сервер с 16 накопителями 2.5″ для ресурсоёмких задач"
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "16x 2.5-inch SFF",
      "Motherboard": "High Power Motherboard",
      "Workloads": "Virtualization, Database, AI/ML, HPC",
      "Note": "Ships without CPU, RAM, drives, or add-on components"
    }
  },
  {
    "id": 1206,
    "name": "DELL R760 24*2.5 High power motherboard",
    "brand": "DELL",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760 2425 High power motherboard.jpg",
    "intro": {
      "cn": "R760 2U服务器，支持24个2.5寸硬盘，高性能高扩展性。",
      "en": "R760 2U server with 24x2.5 bays, high performance and scalability.",
      "ru": "Мощный 2U сервер с 24 слотами 2.5″ для высокой производительности и хранения."
    },
    "specs": {
      "Model": "PowerEdge R760",
      "Form_Factor": "2U Rack",
      "Drive_Bays": "24 x 2.5 inch SFF",
      "Drive_Types_Supported": "SAS, SATA, NVMe",
      "CPU_Support": "Intel Xeon Scalable 4th Gen",
      "Memory_Type": "DDR5",
      "Use_Cases": "Virtualization, Databases, AI/ML, HPC"
    }
  },
  {
    "id": 1207,
    "name": "DELL R760 16*2.5SATA/SAS+8NVME High power motherboard",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760 1625SATASAS8NVME High power motherboard.jpg",
    "intro": {
      "cn": "高性能2U服务器，支持16个SATA/SAS与8个NVMe，实现高速与大容量兼具。",
      "en": "High‑performance 2U server with 16 SATA/SAS and 8 NVMe bays for speed and capacity.",
      "ru": "Высокопроизводительный 2U сервер с гибридной подсистемой хранения NVMe и SATA/SAS."
    },
    "specs": {
      "Form_Factor": "2U Rack Server",
      "Drive_Bays": "16x 2.5in SATA/SAS + 8x NVMe",
      "CPU": "Intel Xeon Scalable 4th Gen support",
      "Memory": "DDR5 support",
      "Remote_Management": "Dell iDRAC",
      "Use_Cases": "Virtualization, databases, analytics"
    }
  },
  {
    "id": 1208,
    "name": "DELL R760 8*NVME+8NVME",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760 8NVME8NVME.jpg",
    "intro": {
      "cn": "支持16个NVMe的高性能2U服务器，适用于HPC与AI等高负载场景",
      "en": "High‑performance 2U server with 16 NVMe for ultra‑fast data access in heavy workloads",
      "ru": "2U сервер с поддержкой 16 NVMe для задач, требующих максимальной скорости доступа к данным"
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays_NVMe": "16 NVMe (8+8)",
      "CPU": "Intel Xeon Scalable 4th Gen",
      "Memory": "DDR5, scalable",
      "PSU": "Dual hot‑swap",
      "Use_Cases": "HPC, AI, in‑memory DB, HFT, big data analytics"
    }
  },
  {
    "id": 1209,
    "name": "DELL R760XD2 24*3.5 Low power motherboard",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760XD2 2435 Low power motherboard.jpg",
    "intro": {
      "cn": "高密度2U服务器，支持24个3.5硬盘，低功耗主板适合大容量存储。",
      "en": "High-density 2U server with 24×3.5 bays and low-power board for large storage.",
      "ru": "Высокоплотный 2U сервер с 24 отсеками 3.5\" и низкопотребляющей платой."
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "24 x 3.5 LFF",
      "Motherboard": "Low Power Motherboard",
      "Use_Cases": "File storage, archives, surveillance, scalable storage",
      "Features": "High density, energy optimized, Dell iDRAC support"
    }
  },
  {
    "id": 1210,
    "name": "DELL R7525 Empty machine 8*3.5",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R7525 Empty machine 835.jpg",
    "intro": {
      "cn": "2U空机箱，支持8个3.5硬盘位，兼容双路EPYC处理器，适合自定义配置。",
      "en": "2U empty chassis with 8×3.5 bays, supports dual EPYC CPUs, ideal for custom builds.",
      "ru": "2U шасси без компонентов с 8 отсеками 3.5″, поддержкой двух AMD EPYC 7003."
    },
    "specs": {
      "Model": "PowerEdge R7525",
      "Form_Factor": "2U Rack",
      "Drive_Bays": "8 x 3.5 LFF",
      "CPU_Support": "Dual AMD EPYC 7003 Series",
      "Chassis_Type": "Empty chassis (no CPU, RAM, storage)",
      "Management": "iDRAC support"
    }
  },
  {
    "id": 1211,
    "name": "DELL R7525 Empty machine 12*3.5",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R7525 Empty machine 1235.jpg",
    "intro": {
      "cn": "可定制的2U服务器机箱，支持12个3.5英寸盘位，适合大容量存储。",
      "en": "Customizable 2U chassis with 12×3.5-inch bays, ideal for high-capacity storage.",
      "ru": "Настраиваемое 2U шасси с 12 отсеками 3.5″, без CPU, RAM и дисков."
    },
    "specs": {
      "Form_Factor": "2U Rackmount",
      "Drive_Bays": "12 x 3.5-inch LFF",
      "CPU_Support": "Dual AMD EPYC 7003 Series",
      "Memory_Support": "DDR4 ECC RDIMM/LRDIMM (not included)",
      "Management": "iDRAC (module required)",
      "Configuration": "Empty chassis; no CPU, RAM, or drives"
    }
  },
  {
    "id": 1212,
    "name": "DELL R7525 Empty machine 24*2.5",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R7525 Empty machine 2425.jpg",
    "intro": {
      "cn": "DELL R7525 2U空机箱，支持24个2.5寸盘位，可自由配置CPU与内存。",
      "en": "DELL R7525 2U bare chassis with 24×2.5 bays, fully customizable.",
      "ru": "DELL R7525 — 2U пустое шасси с 24 слотами 2.5\", для гибкой конфигурации."
    },
    "specs": {
      "Model": "PowerEdge R7525",
      "Chassis": "Bare chassis (no CPU, RAM, drives)",
      "Form_Factor": "2U Rack",
      "Drive_Bays": "24 x 2.5\" SFF",
      "CPU_Support": "Up to 2x AMD EPYC 7003 Series",
      "Use_Cases": "Virtualization, HPC, analytics, databases"
    }
  },
  {
    "id": 1213,
    "name": "DELL T150 E2324G/8G/1T/Non-standard configuration",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL T150 E2324G8G1TNon-standard configuration.jpg",
    "intro": {
      "cn": "入门级塔式服务器，配Xeon E2324G、8GB内存与1TB硬盘，适合小型企业。",
      "en": "Entry-level tower server with Xeon E2324G, 8GB RAM and 1TB HDD for small business.",
      "ru": "Надежный башенный сервер с Xeon E2324G, 8GB RAM и 1TB HDD для малого бизнеса."
    },
    "specs": {
      "Model": "PowerEdge T150",
      "CPU": "Intel Xeon E-2324G",
      "RAM": "8GB",
      "Storage": "1TB HDD",
      "Configuration": "Non-standard",
      "Form_Factor": "Tower"
    }
  },
  {
    "id": 1214,
    "name": "DELL T440 8*3.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL T440 835 Empty machine.jpg",
    "intro": {
      "cn": "可扩展塔式服务器，仅机箱，无CPU、内存和硬盘，支持8个3.5寸硬盘位。",
      "en": "Expandable tower server chassis with 8×3.5 bays; no CPU, RAM, or drives included.",
      "ru": "Расширяемое шасси сервера с 8 отсеками 3.5″, поставляется без CPU, RAM и накопителей."
    },
    "specs": {
      "Model": "PowerEdge T440",
      "Form_Factor": "Tower",
      "Drive_Bays": "8 x 3.5-inch LFF",
      "CPU_Support": "Intel Xeon Scalable (not included)",
      "Memory_Support": "DDR4 ECC (not included)",
      "Remote_Management": "Supports iDRAC (module required)",
      "Included": "Chassis only, no components"
    }
  },
  {
    "id": 1215,
    "name": "DELL T640 8*3.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL T640 835 Empty machine.jpg",
    "intro": {
      "cn": "DELL T640塔式服务器空机箱，支持8个3.5寸盘位，灵活可扩展。",
      "en": "Dell T640 tower server chassis with 8x3.5 bays, flexible and scalable.",
      "ru": "Масштабируемое шасси Dell T640 с 8 отсеками 3.5″ для кастомной сборки."
    },
    "specs": {
      "Model": "PowerEdge T640",
      "Chassis": "Tower, empty chassis",
      "Drive_Bays": "8 x 3.5 inch LFF",
      "CPU_Support": "Up to 2x Intel Xeon Scalable",
      "Memory_Support": "Large-capacity DDR4",
      "Expansion": "Multiple PCIe slots",
      "Management": "iDRAC support",
      "Use_Cases": "Virtualization, databases, collaboration, analytics"
    }
  },
  {
    "id": 1216,
    "name": "DELL T550 8*3.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL T550 835 Empty machine.jpg",
    "intro": {
      "cn": "Dell T550空机箱，支持8个3.5硬盘，灵活配置CPU与内存。",
      "en": "Dell T550 chassis only, supports 8×3.5\" bays with flexible CPU and memory options.",
      "ru": "DELL T550 – высокопроизводительный башенный сервер в конфигурации Empty machine."
    },
    "specs": {
      "Model": "PowerEdge T550",
      "Form_Factor": "Tower",
      "CPU_Support": "Up to 2× Intel Xeon Scalable",
      "Memory_Support": "DDR4/DDR5 (chassis only, no RAM)",
      "Drive_Bays": "8×3.5\" LFF",
      "Included_Components": "Chassis only; no CPU, RAM, or drives",
      "Expansion": "Multiple PCIe slots",
      "Remote_Management": "iDRAC",
      "Use_Cases": "Virtualization, databases, analytics"
    }
  },
  {
    "id": 1217,
    "name": "DELL R250 E2314/8G/1T/2*3.5",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R250 E23148G1T235.jpg",
    "intro": {
      "cn": "DELL R250，1U服务器，配E2314、8G内存、1TB硬盘，支持2个3.5英寸盘位。",
      "en": "Dell R250 1U server with E2314 CPU, 8GB RAM, 1TB HDD and two 3.5-inch bays.",
      "ru": "Надежный 1U сервер с Intel Xeon E2314, 8GB ОЗУ и 1TB HDD, с возможностью расширения хранилища."
    },
    "specs": {
      "Model": "PowerEdge R250",
      "CPU": "Intel Xeon E-2314",
      "Memory": "8GB",
      "Storage": "1TB HDD",
      "Drive_Bays": "2 x 3.5 inch",
      "Form_Factor": "1U Rack",
      "Remote_Management": "iDRAC basic"
    }
  },
  {
    "id": 1218,
    "name": "DELL R250 E2314/8G/1T/4*3.5",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R250 E23148G1T435.jpg",
    "intro": {
      "cn": "紧凑型1U服务器，配E2314、8GB内存、1TB硬盘与4个3.5寸盘位。",
      "en": "Compact 1U server with E2314 CPU, 8GB RAM, 1TB disk and four 3.5-inch bays.",
      "ru": "Компактный 1U сервер с Xeon E2314, 8 ГБ ОЗУ, 1 ТБ и четырьмя отсеками 3.5″."
    },
    "specs": {
      "Model": "PowerEdge R250",
      "CPU": "Intel Xeon E2314",
      "RAM": "8GB",
      "Storage": "1TB HDD",
      "Drive_Bays": "4 x 3.5-inch",
      "Form_Factor": "1U Rack",
      "Remote_Management": "iDRAC"
    }
  },
  {
    "id": 1219,
    "name": "DELL R350 E-2314",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R350 E-2314.jpg",
    "intro": {
      "cn": "紧凑1U服务器，搭载Xeon E-2314，适合中小企业基础业务。",
      "en": "Compact 1U server with Xeon E-2314 for SMB basic workloads.",
      "ru": "Надежный и экономичный 1U сервер с Intel Xeon E-2314 для малого бизнеса."
    },
    "specs": {
      "Model": "PowerEdge R350",
      "CPU": "Intel Xeon E-2314",
      "Form_Factor": "1U Rack",
      "Management": "iDRAC",
      "Use_Cases": "File, print, web hosting, backup, small databases",
      "Scalability": "Expandable memory and PCIe slots"
    }
  },
  {
    "id": 1220,
    "name": "DELL R350",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R350.jpg",
    "intro": {
      "cn": "紧凑可靠的1U服务器，适合中小企业与远程办公场景。",
      "en": "Compact and reliable 1U server ideal for small businesses and remote offices.",
      "ru": "Компактный и надежный 1U сервер для малого бизнеса и удалённых офисов."
    },
    "specs": {
      "Model": "PowerEdge R350",
      "Form_Factor": "1U Rack",
      "CPU": "Intel Xeon E-2314",
      "RAM": "8GB",
      "Storage": "1TB HDD",
      "Power_Supply": "600W",
      "Management": "iDRAC Remote Management"
    }
  },
  {
    "id": 1221,
    "name": "DELL R450 4*3.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R450 435 Empty machine.jpg",
    "intro": {
      "cn": "可扩展1U服务器，4个3.5盘位，空机型便于自选配置。",
      "en": "Scalable 1U server with four 3.5 bays; empty unit for custom configuration.",
      "ru": "Масштабируемый 1U сервер с 4 отсекaми 3.5″; версия без CPU, RAM и дисков."
    },
    "specs": {
      "Form_Factor": "1U Rack",
      "Drive_Bays": "4 x 3.5 LFF",
      "Configuration": "Empty (no CPU, RAM, drives)",
      "Management": "iDRAC9 Enterprise",
      "Scalability": "Supports memory and expansion cards",
      "Use_Cases": "File server, backup storage, SMB workloads"
    }
  },
  {
    "id": 1222,
    "name": "DELL R450 8*2.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R450 825 Empty machine.jpg",
    "intro": {
      "cn": "灵活的1U机架服务器，8个2.5盘位，空机型便于自定义配置",
      "en": "Flexible 1U server with 8×2.5 bays; empty configuration for full customization",
      "ru": "Гибкий 1U сервер с 8 отсеками 2.5″ в комплектации без CPU, RAM и дисков"
    },
    "specs": {
      "Form_Factor": "1U Rack",
      "Drive_Bays": "8 x 2.5 inch",
      "Configuration": "Empty (no CPU, RAM, drives)",
      "Platform": "Dell PowerEdge R450",
      "CPU_Support": "Intel Xeon Scalable 3rd Gen",
      "Memory_Support": "DDR4 ECC RDIMM",
      "Management": "iDRAC9 Enterprise",
      "Expansion": "PCIe Gen4"
    }
  },
  {
    "id": 1223,
    "name": "DELL R550 8*3.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R550 835 Empty machine.jpg",
    "intro": {
      "cn": "DELL R550 2U机型，8个3.5盘位，空机配置便于灵活定制。",
      "en": "Dell R550 2U server with 8×3.5 bays; empty config allows flexible customization.",
      "ru": "DELL R550 — масштабируемый 2U сервер с 8 отсеками 3.5″ в комплектации Empty."
    },
    "specs": {
      "Model": "PowerEdge R550",
      "Form_Factor": "2U Rack",
      "Drive_Bays": "8 x 3.5-inch",
      "CPU": "Not included",
      "Memory": "Not included",
      "Storage": "Not included",
      "Management": "iDRAC",
      "Scalability": "Supports memory and PCIe expansion"
    }
  },
  {
    "id": 1224,
    "name": "DELL R650XS 8*2.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R650XS 825 Empty machine.jpg",
    "intro": {
      "cn": "DELL R650XS 1U机型，8盘位，无CPU与内存，适合灵活自选配置。",
      "en": "DELL R650XS 1U chassis with 8 bays, sold barebone without CPU or RAM.",
      "ru": "DELL R650xs — 1U сервер без CPU, RAM и дисков, с 8 отсеками 2.5″."
    },
    "specs": {
      "Form_Factor": "1U Rack",
      "Drive_Bays": "8 x 2.5 inch",
      "Configuration": "Barebone (no CPU, RAM, drives)",
      "CPU_Support": "Intel Xeon Scalable 3rd Gen",
      "Drive_Types_Supported": "SAS, SATA, NVMe",
      "Remote_Management": "iDRAC9 Enterprise",
      "Use_Cases": "Virtualization, cloud, web hosting"
    }
  },
  {
    "id": 1225,
    "name": "DELL R650 8*2.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R650 825 Empty machine.jpg",
    "intro": {
      "cn": "DELL R650 1U机型，支持8个2.5硬盘，空机可自选CPU与内存配置。",
      "en": "DELL R650 1U server with 8×2.5 bays; empty unit allows full CPU and RAM customization.",
      "ru": "Высокопроизводительный 1U сервер с 8 отсеками 2.5″ и полной свободой конфигурации."
    },
    "specs": {
      "Model": "PowerEdge R650",
      "Form_Factor": "1U Rack",
      "Drive_Bays": "8 x 2.5 inch",
      "CPU_Support": "Intel Xeon Scalable 3rd Gen",
      "Memory_Type": "DDR4 ECC RDIMM",
      "Expansion": "PCIe Gen4",
      "Storage_Interface": "SAS/SATA/NVMe",
      "Remote_Management": "iDRAC9",
      "Configuration": "Empty machine (no CPU, RAM, drives)"
    }
  },
  {
    "id": 1226,
    "name": "DELL R660XS",
    "brand": "DELL",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R660XS.jpg",
    "intro": {
      "cn": "经济型1U服务器，具备高性能、可扩展性与能效表现，适合虚拟化与云计算。",
      "en": "Cost‑optimized 1U server with high performance and scalability for virtualization and cloud.",
      "ru": "Оптимизированный по стоимости 1U сервер с высокой производительностью и масштабируемостью."
    },
    "specs": {}
  },
  {
    "id": 1227,
    "name": "DELL R660 8*2.5 High power motherboard Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R660 825 High power motherboard Empty machine.jpg",
    "intro": {
      "cn": "1U机架式空机箱，含高功率主板与8个2.5硬盘位，适合自定义高性能服务器。",
      "en": "1U chassis with high-power motherboard and 8×2.5 bays, ideal for custom high-performance builds.",
      "ru": "Компактное пустое шасси R660 с 8×2.5 отсеками и мощной материнской платой."
    },
    "specs": {
      "Chassis Model": "Dell PowerEdge R660",
      "Form Factor": "1U Rack",
      "Drive Bays": "8 x 2.5 inch (SFF)",
      "Motherboard": "High Power Motherboard",
      "CPU Support": "Supports modern Intel processors (no CPU included)",
      "Memory Support": "DIMM slots available (no memory included)",
      "Storage": "No drives included",
      "Remote Management": "iDRAC support (module required)",
      "Expansion": "Supports additional expansion cards",
      "Included Components": "Empty chassis only"
    }
  },
  {
    "id": 1228,
    "name": "Dell PowerEdge R660 10 x 2.5″ Empty Chassis",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/Dell PowerEdge R660 10 x 25 Empty Chassis.jpg",
    "intro": {
      "cn": "Dell R660空机箱，可装10个2.5寸盘，适合自定义配置。",
      "en": "Dell R660 bare chassis with 10×2.5in bays, ideal for custom server builds.",
      "ru": "Пустое шасси Dell R660 с поддержкой 10 дисков 2.5″, без процессоров и памяти."
    },
    "specs": {
      "Model": "PowerEdge R660",
      "Form_Factor": "1U Rack",
      "Drive_Bays": "10 x 2.5in SFF",
      "Chassis_Type": "Bare chassis (no CPU, RAM, drives)",
      "Motherboard": "Low Power Motherboard",
      "Expansion": "Supports various CPUs, RAM, controllers",
      "Remote_Management": "iDRAC support (module required)",
      "Use_Cases": "Virtualization, hosting, databases, cloud"
    }
  },
  {
    "id": 1229,
    "name": "DELL R750 XS 8*3.5 Empty machine",
    "brand": "DELL",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R750 XS 835 Empty machine.jpg",
    "intro": {
      "cn": "2U机箱，支持8个3.5硬盘，双电源，支持至强三代，无CPU内存硬盘。",
      "en": "2U chassis with 8×3.5 bays, dual PSU, supports 3rd‑Gen Xeon, no CPU/RAM/HDD.",
      "ru": "2U шасси R750xs с поддержкой до 8×3.5″ дисков, двумя БП и установкой двух процессоров Intel Xeon Scalable 3‑го поколения. Без CPU, RAM и HDD."
    },
    "specs": {
      "Form Factor": "2U Rack",
      "Drive Bays": "8 x 3.5in SAS/SATA/SSD",
      "CPU Support": "Dual Intel Xeon Scalable 3rd Gen",
      "Power Supply": "Dual PSU",
      "PCIe": "PCIe Gen4 slots",
      "Included Components": "No CPU, RAM, HDD"
    }
  },
  {
    "id": 1230,
    "name": "DELL R750XS 12*3.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R750XS 1235 Empty machine.jpg",
    "intro": {
      "cn": "2U机架式空载服务器，支持12个3.5英寸硬盘位，适合大容量存储场景。",
      "en": "2U rack chassis with 12×3.5in bays, ideal for cost‑efficient large‑capacity storage.",
      "ru": "Оптимизированный 2U сервер-шасси с 12 отсеками 3.5\" для экономичного хранения."
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "12 x 3.5in LFF",
      "Chassis_Type": "Empty chassis (no components)",
      "Storage_Expansion": "Supports large‑capacity storage configuration",
      "Use_Case": "Cost‑efficient scalable storage"
    }
  },
  {
    "id": 1231,
    "name": "DELL R750 8*2.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R750 825 Empty machine.jpg",
    "intro": {
      "cn": "Dell R750 2U空机箱，支持8个2.5硬盘与双Xeon，可灵活自选配置。",
      "en": "Dell R750 2U chassis with 8x2.5 bays, dual Xeon support, fully customizable.",
      "ru": "Шасси Dell R750 2U, поддержка 8×2.5, 2 CPU Xeon, без компонентов."
    },
    "specs": {
      "Form Factor": "2U Rack",
      "Drive Bays": "8 x 2.5 SAS/SATA/NVMe",
      "CPU Support": "Dual Intel Xeon Scalable 3rd Gen",
      "Expansion Slots": "PCIe Gen4",
      "Power Supply": "Dual PSU",
      "Included Components": "No CPU, RAM, HDD",
      "Management": "iDRAC (module required)"
    }
  },
  {
    "id": 1232,
    "name": "DELL R750 12*3.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R750 1235 Empty machine.jpg",
    "intro": {
      "cn": "2U机架式R750空机箱，支持12个3.5硬盘，双路至强平台，可灵活自配。",
      "en": "2U R750 bare chassis with 12x3.5 bays, dual Xeon sockets and full customization.",
      "ru": "2U шасси R750 с поддержкой 12×3.5, двойных сокетов и полной свободой комплектации."
    },
    "specs": {
      "Form_Factor": "2U Rackmount",
      "Drive_Bays": "12 x 3.5in SAS/SATA",
      "CPU_Sockets": "2 x Intel Xeon Scalable 3rd Gen (empty)",
      "Memory": "DDR4 supported (empty)",
      "Expansion_Slots": "PCIe Gen4",
      "Power_Supply": "Dual PSU",
      "Remote_Management": "iDRAC support",
      "Configuration": "Bare chassis, no CPU/RAM/HDD"
    }
  },
  {
    "id": 1233,
    "name": "DELL R750 16*2.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R750 1625 Empty machine.jpg",
    "intro": {
      "cn": "DELL R750 2U机箱，支持16个2.5寸盘位，空机型可自由配置。",
      "en": "DELL R750 2U chassis with 16x2.5 bays, empty system for flexible configuration.",
      "ru": "2U шасси Dell R750 на 16×2.5, пустая конфигурация для гибкой сборки."
    },
    "specs": {
      "Chassis": "2U rackmount",
      "Drive_Bays": "16 x 2.5 SAS/SATA/NVMe",
      "CPU_Support": "Dual Intel Xeon Scalable 3rd Gen",
      "Included_CPU": "None",
      "RAM_Support": "DDR4",
      "Included_RAM": "None",
      "Storage_Included": "None",
      "PCIe": "PCIe Gen4",
      "Power_Supply": "Dual PSU",
      "Management": "iDRAC (requires components)",
      "Use_Cases": "Virtualization, databases, cloud, AI, HPC"
    }
  },
  {
    "id": 1234,
    "name": "DELL R750 24*2.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R750 2425 Empty machine.jpg",
    "intro": {
      "cn": "2U机架式R750裸机，支持24个2.5寸盘位与双路至强，灵活自定义配置",
      "en": "2U R750 bare chassis with 24×2.5 bays, dual‑socket Xeon support and full customizability",
      "ru": "2U сервер R750 с 24×2.5 отсеками, поддержкой двух Xeon и полной свободой конфигурации"
    },
    "specs": {
      "Form_Factor": "2U Rack",
      "Drive_Bays": "24 x 2.5 SAS/SATA/NVMe",
      "CPU_Sockets": "2 x Intel Xeon Scalable 3rd Gen",
      "PCIe_Slots": "PCIe Gen4",
      "Power_Supply": "Dual redundant PSUs",
      "Configuration": "Empty machine (no CPU, RAM, drives)",
      "Use_Cases": "Virtualization, databases, cloud, VDI"
    }
  },
  {
    "id": 1235,
    "name": "DELL R760XS 8*3.5 Empty machine",
    "brand": "Dell",
    "category": "Серверные платформы",
    "price": "咨询获取",
    "img": "/assets/products/Серверные платформы/DELL R760XS 835 Empty machine.jpg",
    "intro": {
      "cn": "2U机架式R760xs空机型，支持8个3.5硬盘，双路至强，灵活扩展。",
      "en": "2U R760xs empty chassis with 8×3.5 bays, dual Xeon support and flexible expansion.",
      "ru": "2U сервер Dell R760xs с 8 отсеками 3.5″, поддержкой двух Xeon и гибкой конфигурацией."
    },
    "specs": {
      "Form_Factor": "2U rack server",
      "Drive_Bays": "8 x 3.5-inch SAS/SATA",
      "CPU_Sockets": "2 x Intel Xeon Scalable 4th Gen",
      "PCIe_Slots": "PCIe 5.0",
      "Power_Supply": "Redundant PSU",
      "Configuration": "Empty machine (no CPU, RAM, drives)",
      "Management": "Dell OpenManage",
      "Use_Cases": "Virtualization, databases, cloud workloads"
    }
  },
  {
    "id": 1236,
    "name": "Fujitsu DX60S3",
    "brand": "Fujitsu",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Fujitsu DX60S3.jpg",
    "intro": {
      "cn": "面向中小企业的经济型入门级存储系统，提供基础数据保护与管理功能。",
      "en": "Entry-level affordable storage for SMBs with basic data protection and management.",
      "ru": "Экономичная СХД начального уровня для SMB с базовыми функциями хранения и защиты данных."
    },
    "specs": {}
  },
  {
    "id": 1237,
    "name": "Fujitsu DX100S3",
    "brand": "Fujitsu",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Fujitsu DX100S3.jpg",
    "intro": {
      "cn": "面向SMB的经济型入门级存储，提供数据保护、管理与高可用。",
      "en": "Entry-level storage for SMB with data protection, management, and high availability.",
      "ru": "Экономичная и надежная СХД начального уровня для SMB с защитой и управлением данными."
    },
    "specs": {
      "Product_Type": "Entry-level storage system",
      "Drive_Types": "HDD, SSD",
      "Interfaces": "iSCSI, FC, SAS",
      "RAID_Levels": "0, 1, 5, 6, 10",
      "Key_Features": "Snapshots, thin provisioning, auto-tiering, remote replication, SSD caching",
      "Management": "Web interface, SNMP",
      "Redundancy": "Redundant PSUs, fans, RAID controller",
      "Scalability": "Expandable storage capacity",
      "Clustering_Support": "Optional"
    }
  },
  {
    "id": 1238,
    "name": "Fujitsu DX100S5",
    "brand": "Fujitsu",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Fujitsu DX100S5.jpg",
    "intro": {
      "cn": "DX100 S5 为中小企业提供高性能与可扩展的数据存储方案。",
      "en": "DX100 S5 delivers scalable, high‑performance storage for SMBs and branches.",
      "ru": "Современная высокопроизводительная СХД начального уровня для SMB и филиалов."
    },
    "specs": {
      "CPU": "Intel Xeon",
      "Drive_Types": "HDD, SSD",
      "Interfaces": "iSCSI, FC, SAS",
      "Form_Factor": "12 LFF, optional 24 SFF",
      "Power_and_Cooling": "Redundant PSUs and fans",
      "RAID_Support": "RAID 0/1/5/6/10/50/60",
      "Advanced_Features": "Snapshots, thin provisioning, auto-tiering, remote replication, SSD caching",
      "Management": "Web UI, SNMP, REST API, notifications",
      "Security": "Data encryption, access control",
      "Scalability": "Expandable capacity and performance"
    }
  },
  {
    "id": 1239,
    "name": "Fujitsu ETAEADU дисковая полка для  DX100/DX200 S5(2.5inch)",
    "brand": "Fujitsu",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Fujitsu ETAEADU дисковая полка для  DX100DX200 S525inch.jpg",
    "intro": {
      "cn": "适用于DX100/DX200 S5的2.5英寸24盘位扩展柜，具高可靠与易集成。",
      "en": "24‑bay 2.5-inch expansion shelf for Fujitsu DX100/DX200 S5 with high reliability.",
      "ru": "24-отсековая дисковая полка расширения для Fujitsu DX100/DX200 S5."
    },
    "specs": {
      "Product_Type": "Drive Enclosure",
      "Compatibility": "Fujitsu DX100 S5, DX200 S5",
      "Drive_Bays": "24 x 2.5-inch",
      "Drive_Types": "SAS, SATA, NVMe",
      "Interface": "SAS 12 Gbps",
      "Hot_Swap": "Supported",
      "Power_Supply": "Redundant, hot-swappable",
      "Cooling": "Redundant fans",
      "Scalability": "Capacity expansion for Fujitsu storage systems",
      "Integration": "Plug-and-play with Fujitsu DX series"
    }
  },
  {
    "id": 1240,
    "name": "DELL ME5012 ISCSI 25G SFP*2",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/DELL ME5012 ISCSI 25G SFP2.jpg",
    "intro": {
      "cn": "面向SMB的高性能入门级存储，双25GbE iSCSI，可靠且可扩展。",
      "en": "Entry-level SMB storage with dual 25GbE iSCSI, reliable and scalable.",
      "ru": "Надежная СХД начального уровня с двумя 25GbE iSCSI портами."
    },
    "specs": {
      "Connectivity": "2 x 25GbE SFP28 iSCSI",
      "Target_Users": "SMB and branch offices",
      "Performance": "High throughput, low latency",
      "Scalability": "Expandable via storage shelves",
      "Reliability": "Redundant power supplies and controllers",
      "Workloads": "Virtualization, backups, databases"
    }
  },
  {
    "id": 1241,
    "name": "DELL ME5012 10G electrical interface",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/DELL ME5012 10G electrical interface.jpg",
    "intro": {
      "cn": "Dell ME5012是一款具备10G电口的高性能可扩展存储系统。",
      "en": "Dell ME5012 is a scalable high‑performance storage system with a 10G electrical interface.",
      "ru": "Мощная и гибкая СХД Dell ME5012 с 10G Electrical Interface для быстрой передачи данных."
    },
    "specs": {
      "Model": "ME5012",
      "Interface": "10G Electrical Interface",
      "Type": "Enterprise Storage System",
      "Scalability": "Expandable storage capacity"
    }
  },
  {
    "id": 1242,
    "name": "DELL ME412 12*3.5",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/DELL ME412 1235.jpg",
    "intro": {
      "cn": "Dell ME412：面向SMB的入门级存储系统，12盘位，可靠可扩展。",
      "en": "Dell ME412: entry-level SMB storage with 12 bays, reliable and scalable.",
      "ru": "Экономичная и надежная СХД уровня SMB с 12 отсеков и возможностью расширения."
    },
    "specs": {
      "Model": "ME412",
      "Drive_Bays": "12 x 3.5-inch",
      "Scalability": "Expandable with additional shelves",
      "Drive_Types": "HDD or SSD",
      "Redundancy": "Redundant PSU and controllers",
      "Management": "Web-based interface",
      "Use_Cases": "File storage, backup, archiving, virtualization"
    }
  },
  {
    "id": 1243,
    "name": "DELL ME424 24*2.5",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/DELL ME424 2425.jpg",
    "intro": {
      "cn": "Dell ME424为中小企业提供高密度24盘位2.5寸入门级存储。",
      "en": "Dell ME424 is a 24‑bay 2.5-inch entry storage with high density for SMBs.",
      "ru": "Dell ME424 — мощная начального уровня СХД с 24 слотами 2.5\" для высокой плотности хранения."
    },
    "specs": {
      "Drive_Bays": "24 x 2.5-inch",
      "Drive_Support": "HDD and SSD",
      "Use_Cases": "Virtualization, databases, cloud, backup",
      "Scalability": "Supports expansion shelves",
      "Performance": "High throughput with RAID support"
    }
  },
  {
    "id": 1244,
    "name": "DELL MD2412 12*3.5",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/DELL MD2412 1235.jpg",
    "intro": {
      "cn": "经济高效的12盘位3.5英寸企业级存储系统，适合中小企业与远程办公。",
      "en": "Cost‑efficient 12‑bay 3.5-inch storage system ideal for SMB and remote offices.",
      "ru": "Экономичная и надежная СХД с 12 отсеками 3.5'' для SMB и удалённых офисов."
    },
    "specs": {
      "Form_Factor": "12-bay 3.5 inch storage array",
      "Drive_Compatibility": "HDD / SSD",
      "Use_Cases": "File storage, backup, archive",
      "Management": "Easy‑to‑use interface",
      "RAID_Support": "Multiple RAID levels",
      "Key_Features": "High capacity, reliable, cost‑effective"
    }
  },
  {
    "id": 1245,
    "name": "DELL ME5024 FC 32GSFP*4",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/DELL ME5024 FC 32GSFP4.jpg",
    "intro": {
      "cn": "面向中小企业的高性能32Gb FC存储阵列，支持24盘位与虚拟化应用。",
      "en": "High‑performance 32Gb FC storage array with 24 bays, ideal for SMB and virtualization.",
      "ru": "Высокопроизводительная СХД начального уровня с 32Gb FC (4x SFP+)."
    },
    "specs": {
      "Model": "PowerVault ME5024 FC",
      "Interface": "32Gb Fibre Channel (4x SFP+)",
      "Drive_Bays": "24 x 2.5-inch",
      "Drive_Options": "HDD or SSD",
      "Use_Cases": "Virtualization, databases, storage consolidation",
      "Management": "PowerVault Manager (PVM)",
      "Scalability": "Supports PowerVault expansion shelves",
      "Architecture": "Flash‑Ready hybrid"
    }
  },
  {
    "id": 1246,
    "name": "DELL ME5012 FC 32GSFP*4",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/DELL ME5012 FC 32GSFP4.jpg",
    "intro": {
      "cn": "经济高效的ME5012，配备4个32Gb FC端口与12盘位，适合中小企业",
      "en": "Affordable ME5012 with four 32Gb FC ports and 12 bays for SMB storage needs",
      "ru": "Экономичная СХД начального уровня с 4 портами 32Gb FC и 12 отсеками"
    },
    "specs": {
      "Model": "ME5012 FC",
      "FC_Ports": "4 x 32Gb SFP+",
      "Drive_Bays": "12 x 3.5-inch",
      "Use_Cases": "Virtualization, backup, storage consolidation",
      "Interface": "Fibre Channel"
    }
  },
  {
    "id": 1247,
    "name": "DELL ME5024 ISCSI 25G SFP*2",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/DELL ME5024 ISCSI 25G SFP2.jpg",
    "intro": {
      "cn": "高性能25GbE iSCSI存储，支持24盘位与可扩展架构。",
      "en": "High‑performance 25GbE iSCSI storage with 24 bays and scalable design.",
      "ru": "Высокопроизводительная СХД iSCSI с портами 25GbE и 24 отсекaми."
    },
    "specs": {
      "Model": "PowerVault ME5024",
      "Interface": "iSCSI 25GbE SFP28 x2",
      "Drive_Bays": "24 x 2.5-inch",
      "Drive_Types_Supported": "SSD, SAS, Nearline SAS",
      "Scalability": "Supports expansion shelves",
      "Use_Cases": "Virtualization, databases, backup",
      "Management": "Web-based management interface"
    }
  },
  {
    "id": 1248,
    "name": "Dell Unity XT Hybrid New Solution",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Dell Unity XT Hybrid New Solution.jpg",
    "intro": {
      "cn": "企业级混合存储系统，融合SSD与HDD，具高性能与可扩展性。",
      "en": "Enterprise hybrid storage combining SSD and HDD with high performance and scalability.",
      "ru": "Гибридная СХД для предприятий, сочетающая SSD и HDD с высокой производительностью."
    },
    "specs": {
      "Product_Type": "Hybrid Storage System",
      "Storage_Media": "SSD + HDD",
      "Performance": "Flash‑optimized, low latency",
      "Scalability": "Capacity and performance scalable",
      "Data_Protection": "Backup, replication, encryption",
      "Management": "Simplified interface",
      "Use_Cases": "Virtualization, databases, file services, backup"
    }
  },
  {
    "id": 1249,
    "name": "HPE MSA 2062 SFF",
    "brand": "HPE",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/HPE MSA 2062 SFF.jpg",
    "intro": {
      "cn": "HPE MSA 2062 SFF，混合存储，适合中小企业，支持SSD加速与扩展。",
      "en": "HPE MSA 2062 SFF hybrid storage for SMBs with SSD acceleration and expansion.",
      "ru": "Экономичная гибридная СХД для малого и среднего бизнеса."
    },
    "specs": {
      "Model": "HPE MSA 2062 SFF",
      "Form_Factor": "SFF",
      "Storage_Capacity": "2.4TB (2 x 1.2TB SAS HDD)",
      "Drive_Slots": "Up to 24 SFF disks",
      "RAID_Levels": "RAID 5/6/10",
      "Architecture": "Hybrid SSD + HDD",
      "Features": "Automatic Tiering, high availability, easy management",
      "Use_Cases": "Virtualization, databases, backup, archiving",
      "Condition": "Refurbished",
      "Warranty": "6 months"
    }
  },
  {
    "id": 1250,
    "name": "Dell EMC PowerVault ME5024",
    "brand": "Dell EMC",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Dell EMC PowerVault ME5024.jpg",
    "intro": {
      "cn": "2U存储系统，支持24盘位，适合中小企业的高可用可扩展方案。",
      "en": "2U storage system with 24 bays, scalable and reliable for SMB workloads.",
      "ru": "Экономичная СХД 2U для SMB с 24 SFF дисками, масштабируемостью и высокой доступностью."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "Up to 24 SFF SAS/SSD",
      "Max_Capacity": "Up to 336 TB",
      "RAID_Levels": "0, 1, 5, 6, 10",
      "Controller": "Dual controllers, hot‑swap",
      "Drive_Types": "SSD, SAS, Nearline SAS",
      "Use_Cases": "Virtualization, databases, backup, storage consolidation",
      "Management": "Web-based interface",
      "Expansion": "Supports expansion shelves",
      "Software_Features": "Snapshots, replication, RAID"
    }
  },
  {
    "id": 1251,
    "name": "Lenovo TCH ThinkSystem DE4000H",
    "brand": "Lenovo",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Lenovo TCH ThinkSystem DE4000H.jpg",
    "intro": {
      "cn": "混合存储，2U机型，支持SSD与HDD，适合中小企业，高性能易管理。",
      "en": "Hybrid 2U storage with SSD/HDD support, high performance and easy management for SMBs.",
      "ru": "Гибридная СХД 2U с поддержкой SSD/HDD для высокопроизводительных задач SMB."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "Up to 24x SFF",
      "Drive_Support": "SSD and HDD",
      "Architecture": "Hybrid with SSD caching",
      "Use_Cases": "Virtualization, databases, backup, analytics",
      "Management": "Web-based interface",
      "Scalability": "Supports DE120S / DE240S expansion shelves",
      "High_Availability": "Dual controllers, redundant PSUs and fans",
      "Tiering": "Dynamic Disk Pools (DDP)",
      "Virtualization_Support": "VMware integration"
    }
  },
  {
    "id": 1252,
    "name": "Dell ME5084",
    "brand": "Dell",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Dell ME5084.jpg",
    "intro": {
      "cn": "Dell ME5084高密度可扩展存储系统，支持84盘位与多种RAID。",
      "en": "Dell ME5084 is a scalable high‑density storage system with up to 84 drives.",
      "ru": "Dell ME5084 — масштабируемая высокоплотная СХД до 84 дисков для архивирования и резервного копирования."
    },
    "specs": {
      "Form_Factor": "5U",
      "Drive_Bays": "Up to 84 SAS/Nearline SAS/SSD",
      "RAID_Levels": "0,1,5,6,10",
      "Scalability": "Expandable with additional shelves",
      "Management": "Web-based interface",
      "Redundancy": "Dual controllers, hot-swappable PSUs",
      "Use_Cases": "Archiving, backup, analytics, video surveillance"
    }
  },
  {
    "id": 1253,
    "name": "HPE MSA 2060",
    "brand": "HPE",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/HPE MSA 2060.jpg",
    "intro": {
      "cn": "面向中小企业的2U闪存就绪存储，支持24个SFF，性能提升45%。",
      "en": "2U flash‑ready storage for SMB with up to 24 SFF drives and 45% performance boost.",
      "ru": "Доступная флэш-ready СХД 2U для SMB, до 24 SFF, поддержка SAS SSD/HDD."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "Up to 24 SFF",
      "Drive_Support": "SAS SSD, SAS HDD, Nearline SAS",
      "Performance_Improvement": "Up to 45% over previous generation",
      "Scalability": "Supports expansion shelves",
      "Redundancy": "Dual controllers and hot‑swap PSUs",
      "Management": "Intuitive graphical interface"
    }
  },
  {
    "id": 1254,
    "name": "Lenovo ThinkSystem DE240S",
    "brand": "Lenovo",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Lenovo ThinkSystem DE240S.jpg",
    "intro": {
      "cn": "2U高密度企业级存储扩展柜，支持24个SFF盘，性能强、可扩展。",
      "en": "2U high‑density storage expansion shelf with up to 24 SFF drives; scalable and reliable.",
      "ru": "Оптимизированная 2U полка расширения на 24 SFF диска для масштабируемых enterprise‑хранилищ."
    },
    "specs": {
      "Form_Factor": "2U",
      "Drive_Bays": "Up to 24x SFF",
      "Drive_Types_Supported": "HDD, SSD",
      "System_Type": "Storage Expansion Shelf",
      "Compatibility": "Lenovo ThinkSystem DE Series",
      "Scalability": "Expandable with DE Series controllers",
      "Use_Cases": "Databases, virtualization, capacity expansion"
    }
  },
  {
    "id": 1255,
    "name": "Huawei OceanStor Dorado 5000 V6",
    "brand": "Huawei",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/Huawei OceanStor Dorado 5000 V6.jpg",
    "intro": {
      "cn": "新一代全闪存存储，性能强劲、低时延，具备高可靠性与智能管理。",
      "en": "Next‑gen all‑flash storage with high performance, low latency, and enterprise reliability.",
      "ru": "Новая all‑flash СХД с высокой производительностью, низкой задержкой и отказоустойчивостью."
    },
    "specs": {
      "Product Type": "All-Flash Storage System",
      "Model": "OceanStor Dorado 5000 V6",
      "Performance": "Low latency, high throughput",
      "Reliability": "End-to-end protection, component redundancy",
      "Management": "SmartMatrix, AI-powered optimization",
      "Scalability": "Modular capacity and performance expansion",
      "Architecture": "NVMe-based all-flash"
    }
  },
  {
    "id": 1256,
    "name": "NetApp FAS8300 USED",
    "brand": "NetApp",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/NetApp FAS8300 USED.jpg",
    "intro": {
      "cn": "企业级混合存储系统，支持NVMe/SSD/HDD，高性能可扩展。",
      "en": "Enterprise hybrid storage with NVMe/SSD/HDD support, high performance and scalable.",
      "ru": "Гибридная СХД enterprise-класса с поддержкой NVMe, SSD и HDD."
    },
    "specs": {
      "Model": "FAS8300",
      "Condition": "Chassis new, components used",
      "Drive_Shelves": "1x DS224C, 1x DS460C",
      "Storage_Capacity": "12×3.84TB SSD, 40×4TB NL-SAS",
      "Drive_Types": "NVMe, SSD, HDD",
      "OS": "ONTAP",
      "Performance": "High throughput and low latency",
      "Scalability": "Expandable capacity and performance",
      "Protocols": "FC, iSCSI, NVMe-oF",
      "Data_Efficiency": "Deduplication, compression, thin provisioning"
    }
  },
  {
    "id": 1257,
    "name": "NetApp FAS8300 NEW",
    "brand": "NetApp",
    "category": "СХД",
    "price": "咨询获取",
    "img": "/assets/products/СХД/NetApp FAS8300 NEW.jpg",
    "intro": {
      "cn": "NetApp FAS8300混合企业级存储，支持NVMe/SSD/HDD，高性能且可靠。",
      "en": "NetApp FAS8300 hybrid enterprise storage with NVMe/SSD/HDD support, fast and reliable.",
      "ru": "NetApp FAS8300 — гибридная enterprise-СХД с поддержкой NVMe, SSD и HDD, высокой надежностью и производительностью."
    },
    "specs": {
      "Model": "FAS8300",
      "Storage_Type": "Hybrid (NVMe, SSD, HDD)",
      "OS": "NetApp ONTAP",
      "Scalability": "Expandable capacity and performance",
      "Protocols": "FC, iSCSI, NVMe-oF",
      "Data_Protection": "Snapshots, cloning, replication",
      "Efficiency_Features": "Deduplication, compression, thin provisioning"
    }
  },
  {
    "id": 1258,
    "name": "Точка доступа HPE JW811A — Aruba IAP315",
    "brand": "HPE Aruba",
    "category": "Точки доступа",
    "price": "咨询获取",
    "img": "/assets/products/Точки доступа/Точка доступа HPE JW811A  Aruba IAP315.jpg",
    "intro": {
      "cn": "Aruba IAP315是一款支持802.11ac Wave 2的高性能企业级无线接入点。",
      "en": "Aruba IAP315 is a high‑performance 802.11ac Wave 2 access point for dense environments.",
      "ru": "Мощная точка доступа с поддержкой 802.11ac Wave 2 и MU‑MIMO."
    },
    "specs": {
      "Model": "JW811A",
      "Series": "Aruba IAP315",
      "Manufacturer": "HPE",
      "Device_Type": "Indoor wireless access point",
      "WiFi_Standards": "802.11a/b/g/n/ac Wave 2",
      "Frequency_Bands": "2.4 GHz, 5 GHz",
      "Max_Data_Rate": "867 Mbps (2.4 GHz) + 1733 Mbps (5 GHz)",
      "MIMO": "2×2:2 (2.4 GHz), 4×4:4 (5 GHz)",
      "Internal_Antennas": "Yes",
      "Antenna_Gain": "3.5 dBi (2.4 GHz), 5.5 dBi (5 GHz)",
      "Radios": "2",
      "Ethernet_Ports": "2× 10/100/1000BASE‑T (1× PoE 802.3at)",
      "Console_Port": "Micro‑USB",
      "PoE": "802.3at Class 4",
      "External_Power": "48 V DC",
      "Operating_Temperature": "0°C to 40°C",
      "Operating_Humidity": "5%–93% non‑condensing",
      "Dimensions": "203 × 203 × 46 mm",
      "Weight": "850 g",
      "Mounting_Options": "Ceiling, wall",
      "Max_Clients_Per_Radio": "256",
      "Features": "ClientMatch dynamic optimization"
    }
  },
  {
    "id": 1259,
    "name": "Точка доступа HPE JZ320A — Aruba AP303",
    "brand": "HPE Aruba",
    "category": "Точки доступа",
    "price": "咨询获取",
    "img": "/assets/products/Точки доступа/Точка доступа HPE JZ320A  Aruba AP303.jpg",
    "intro": {
      "cn": "HPE Aruba AP303 稳定高性能双频无线接入点，适合各类企业部署。",
      "en": "HPE Aruba AP303 is a reliable dual‑band access point built for fast, stable Wi‑Fi networks.",
      "ru": "Надежная и производительная точка доступа HPE Aruba AP303 для высокоскоростной сети."
    },
    "specs": {
      "Model": "JZ320A",
      "Series": "Aruba AP303",
      "Manufacturer": "HPE",
      "Device_Type": "Wireless Access Point",
      "WiFi_Standards": "802.11a/b/g/n/ac",
      "Frequency_Bands": "2.4 GHz, 5 GHz",
      "Max_Data_Rate": "867 Mbps (5 GHz), 300 Mbps (2.4 GHz)",
      "MIMO": "2x2 MIMO",
      "Internal_Antennas": "Yes",
      "Antenna_Type": "Omnidirectional",
      "Radio_Units": "2",
      "Ethernet_Port": "1× 10/100/1000BASE‑T RJ‑45 with PoE 802.3af",
      "Console_Port": "Micro‑USB",
      "PoE": "802.3af",
      "External_Power": "12V DC (optional)",
      "Operating_Temperature": "0°C to 40°C",
      "Operating_Humidity": "5%–93% non‑condensing",
      "Dimensions": "150 mm × 150 mm"
    }
  },
  {
    "id": 1260,
    "name": "Точка доступа HPE-Aruba  JX936A",
    "brand": "HPE Aruba",
    "category": "Точки доступа",
    "price": "咨询获取",
    "img": "/assets/products/Точки доступа/Точка доступа HPE-Aruba  JX936A.jpg",
    "intro": {
      "cn": "企业级Wi-Fi 6接入点，支持高密度、集中管理与WPA3安全。",
      "en": "Enterprise Wi-Fi 6 access point with high‑density support, centralized management, and WPA3.",
      "ru": "Корпоративная Wi‑Fi 6 точка доступа с централизованным управлением и WPA3."
    },
    "specs": {
      "Wireless_Standard": "Wi‑Fi 6 (802.11ax), backward compatible with 802.11a/b/g/n/ac",
      "Bands": "2.4 GHz 4x4 MU-MIMO, 5 GHz 4x4 MU-MIMO",
      "Max_Speed": "2.97 Gbps",
      "Technologies": "OFDMA, MU-MIMO, Beamforming, WPA3",
      "Ethernet_Port": "1x RJ‑45 Gigabit Ethernet with PoE+ (802.3at)",
      "USB_Port": "1x USB 2.0",
      "Antennas": "8 internal omnidirectional antennas",
      "CPU": "Multi-core ARM Cortex-A72",
      "Management_Platforms": "Aruba Central, Aruba Instant On, AirWave",
      "Security_Features": "AI RF analytics, automatic channel optimization, jamming protection",
      "Power": "PoE+ 30W",
      "Compatibility": "Aruba 7000/7200 controllers, Aruba ESP",
      "Use_Cases": "Offices, education, hotels, industrial IoT"
    }
  }],
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

