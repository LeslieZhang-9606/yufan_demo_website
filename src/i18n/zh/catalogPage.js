// src/locales/modules/catalogPage.js
export default {
  header: {
    subTitle: 'Hardware Inventory',
    mainTitle: '产品目录汇总',
    description: '实时汇总全球主流算力硬件。价格随汇率波动，请点击“发起询价”获取最新 DDP/DAP 报价。',
    synced: '已同步: {count} 型号'
  },
  view: {
    grid: '网格',
    list: '列表'
  },
  filter: {
    categories: '产品分类',
    brands: '品牌筛选',
    reset: '重置',
    allHardware: '全部硬件' // 修复 image_cfbe50.png 中的大写 Key
  },
  product: {
    estPrice: '参考价:',
    priceOnRequest: '咨询获取', // 修复 image_d01feb.png 中的缺失 Key
    inquire: '发起询价',
    inquireShort: '询价',
    currency: '₽'
  },
  pagination: {
    prev: '上一页',
    next: '下一页',
    showing: '显示 {start} - {end} 条，共 {total} 条' // 修复分页文案
  },
  empty: '暂无相关产品。',

  // 🔥 核心：根据你文件夹名进行的映射 (image_da9bf9.png)
  categoryMap: {
    'gpuvideo_cards': 'GPU 显卡',
    'gpuвидеокарты': 'GPU 显卡',
    'gpu servers': 'GPU 服务器',
    'general servers': '通用服务器',
    'kommutatory': '核心交换机',
    'коммутаторы': '核心交换机',
    'linejnye-karty': '线卡模块',
    'линейные карты': '线卡模块',
    'marshrutizatory': '企业级路由器',
    'маршрутизаторы': '企业级路由器',
    'vysokoproizvoditelnye-servery': '高性能服务器',
    'Высокопроизводительные серверы': '高性能服务器',
    'ВЫСОКОПРОИЗВОДИТЕЛЬНЫЕ СЕРВЕРЫ':'高性能服务器',
    'wlan_controllers': 'WLAN 控制器',
    'wlan контроллеры': 'WLAN 控制器',
    'base_stations': '基站设备',
    'базовые станции': '基站设备',
    'power_units': '电源模块',
    'блоки питания': '电源模块',
    'used_equipment': '二手备件',
    'бу оборудование': '二手备件',
    'interface_modules': '接口模块',
    'интерфейсные модули': '接口模块',
    'tape_libraries': '磁带库',
    'ленточные библиотеки': '磁带库',
    'firewalls': '防火墙/安全',
    'межсетевые экраны': '防火墙/安全',
    'multiplexers': '多路复用器',
    'мультиплексоры': '多路复用器',
    'laptops_mobile_servers': '笔记本与移动服务器',
    'ноутбукимобильные серверы': '笔记本与移动服务器',
    'workstations': '工作站',
    'рабочие станции': '工作站',
    'server_platforms': '服务器准系统',
    'серверные платформы': '服务器准系统',
    'servers': '服务器',
    'серверы': '服务器',
    'san_storage': '存储系统/СХД',
    'схд': '存储系统/СХД',
    'access_points': '无线接入点',
    'точки доступа': '无线接入点',
    'высокопроизводительные серверы': '高性能服务器', 
    // 备用修复：以防后端传回来的是下划线而不是连字符的拼音
    'vysokoproizvoditelnye_servery': '高性能服务器',
  }
}