// src/locales/modules/catalogPage.js (EN)
export default {
  header: {
    subTitle: 'Hardware Inventory',
    mainTitle: 'Product Catalog',
    description:
      'Real-time aggregation of global mainstream computing hardware. Prices fluctuate with exchange rates; please click "Request Quote" for the latest DDP/DAP offers.',
    synced: 'Synced: {count} models'
  },

  view: {
    grid: 'Grid',
    list: 'List'
  },

  filter: {
    title: 'Filter',
    categories: 'Categories',
    brands: 'Brands',
    reset: 'Reset',
    allHardware: 'All Hardware'
  },

  product: {
    estPrice: 'Est. Price:',
    priceOnRequest: 'Call for Price',
    inquire: 'Request Quote',
    inquireShort: 'Quote',
    currency: '$' // change currency symbol if needed
  },

  pagination: {
    prev: 'Prev',
    next: 'Next',
    showing: 'Showing {start} - {end} of {total}'
  },

  empty: 'No products found.',

  /**
   * Category Mapping
   *
   * Keys MUST match `siteData.products[*].category` exactly.
   * This is the display name used on the catalog page.
   */
  categoryMap: {
    'gpu-cards': 'GPU Accelerator Cards',
    'wlan-controllers': 'WLAN Controllers',
    'base-stations': 'Base Stations & RRUs',
    'power-supplies': 'Power Supply Units',
    'high-performance-servers': 'High-Performance GPU Servers',
    'interface-modules': 'Interface Modules',
    'switches': 'Switches',
    'tape-libraries': 'Tape Libraries & Tape Drives',
    'line-cards': 'Router Line Cards',
    'routers': 'Routers',
    'firewalls': 'Firewalls & Security Gateways',
    'multiplexers': 'Multiplexers',
    'laptops-mobile-servers': 'Rugged Laptops & Mobile Servers',
    'workstations': 'Workstations',
    'server-platforms': 'Server Platforms (Barebone)',
    'storage-systems': 'Storage Systems & Disk Arrays',
    'access-points': 'Wireless Access Points'
  }
}
