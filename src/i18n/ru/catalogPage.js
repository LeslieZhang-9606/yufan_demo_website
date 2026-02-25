// src/locales/modules/catalogPage.js (RU)
export default {
  header: {
    subTitle: 'Склад оборудования',
    mainTitle: 'Каталог продукции',
    description:
      'Онлайн‑каталог актуального вычислительного оборудования. Цены зависят от курса и рынка — для актуального предложения DDP / DAP нажмите «Запросить цену».',
    synced: 'Синхронизировано: {count} моделей'
  },

  view: {
    grid: 'Сетка',
    list: 'Список'
  },

  filter: {
    title: 'Фильтр',
    categories: 'Категории',
    brands: 'Бренды',
    reset: 'Сбросить',
    allHardware: 'Всё оборудование'
  },

  product: {
    estPrice: 'Ориентировочная цена:',
    priceOnRequest: 'Цена по запросу',
    inquire: 'Запросить цену',
    inquireShort: 'Запрос',
    currency: '$' // при необходимости смените валюту
  },

  pagination: {
    prev: 'Назад',
    next: 'Вперёд',
    showing: 'Показано {start} – {end} из {total}'
  },

  empty: 'Товары не найдены.',

  /**
   * Отображаемые названия категорий
   *
   * Ключи ДОЛЖНЫ совпадать со значением `siteData.products[*].category`.
   */
  categoryMap: {
    'gpu-cards': 'GPU‑акселераторы',
    'wlan-controllers': 'Контроллеры WLAN',
    'base-stations': 'Базовые станции и RRU',
    'power-supplies': 'Блоки питания',
    'high-performance-servers': 'Высокопроизводительные GPU‑серверы',
    'interface-modules': 'Интерфейсные модули',
    'switches': 'Коммутаторы',
    'tape-libraries': 'Ленточные библиотеки и приводы',
    'line-cards': 'Линейные карты маршрутизаторов',
    'routers': 'Маршрутизаторы',
    'firewalls': 'Межсетевые экраны и шлюзы безопасности',
    'multiplexers': 'Мультиплексоры',
    'laptops-mobile-servers': 'Защищённые ноутбуки и мобильные серверы',
    'workstations': 'Рабочие станции',
    'server-platforms': 'Серверные платформы (barebone)',
    'storage-systems': 'Системы хранения данных',
    'access-points': 'Точки доступа Wi‑Fi'
  }
}
