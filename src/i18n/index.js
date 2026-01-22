// src/i18n/index.js
import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    common: {
      nav: {
        catalog: '产品目录',
        services: '交付与服务',
        about: '关于我们',
        contact: '联系我们',
      },
      lang: {
        label: '语言',
        zh: '中文',
        en: 'English',
        ru: 'Русский',
      },
    },
    home: {
      performance: '高性能 IT 供应链',
      server: '服务器与',
      gpu: 'GPU 算力系统',
      description:
        '我们从中国及香港直发高性能计算硬件。提供全套报关文件（GTD）、含增值税（NDS 20%）价格，并依托自有备件库提供本地化维保支持。',
      catalogButton: '浏览目录',
      quoteButton: '获取报价',
      aboutTitle: '关于我们',
      expertise: '专业的 IT 设备贸易商',
      aboutText1:
        'Yufan Tech 是您在高性能计算硬件领域的全球供应链合作伙伴。依托在中国和香港的深度资源，我们解决了大宗硬件采购中的交付和合规难题。',
      aboutText2:
        '我们不仅仅是搬运工，更通过在俄罗斯本地建立的备件仓库和技术支持团队，为客户提供 SLA 24/7 的维保服务，填补跨境贸易的售后空白。',
      airFreight: '天内航空直达',
      customClearance: '正规报关 (GTD)',
      localSupport: '本地维保支持',
      services: {
        logistics: {
          title: '跨境物流',
          desc: '中国至俄罗斯全境直达。处理所有海关手续、保险和尾程派送。',
          item1: '航空货运 8–12 天',
          item2: 'GTD 报关单支持',
          item3: '全白贸易流程',
        },
        support: {
          title: '技术维保',
          desc: '我们在莫斯科设有备件库，为您采购的硬件提供 SLA 级别的保修支持。',
          item1: '工程师现场支持',
          item2: '备件 48 小时换新',
          item3: 'SLA 24/7 服务',
        },
        sourcing: {
          title: '供应链代采',
          desc: '根据您的技术指标，从全球范围内筛选最优质、最快速的硬件货源。',
          item1: '原厂正品保证',
          item2: '配置兼容性审核',
          item3: '供应链金融支持',
        },
      },
    },
    leadForm: {
      sectionTitle: '获取报价',
      headingLine1: '我们为你的需求',
      headingLine2: '提供最快的供货与交付方案',
      description:
        '请填写型号/数量/交付城市。我们将在最短时间内回复：含税报价、交付周期、清关与维保方案。',
      tagGtd: 'GTD / NDS 20%',
      tagAir: '8–12 天航空直达',
      tagSla: 'SLA 24/7',
      placeholderName: '姓名 / 公司（必填）',
      placeholderPhone: '电话 / Telegram / WhatsApp（必填）',
      placeholderEmail: '邮箱（选填）',
      placeholderComment: '需求说明（型号 / 数量 / 交付城市 / 是否含税等）',
      attachLabel: '夹带技术规格 / реквизиты',
      noFile: '未选择文件',
      requiredFieldsNote: '* 必填字段',
      acceptPrivacy: '我已阅读并同意隐私政策（必须）',
      acceptData: '同意处理个人信息用于报价沟通（必须）',
      acceptMarketing: '同意接收产品/供货通知（可选）',
      submit: '发送需求',
      submitting: '提交中…',
      success: '已提交！我们会尽快联系你。',
      modalTitle: '快速咨询',
      modalHeading: '获取报价与交付方案',
      estimateTime: '我们通常会在 2 小时内为您提供初步报价',
    },
    footer: {
      brand: {
        description: '直供高性能 IT 硬件，支持合规报关与本地维保。',
      },
      contact: {
        telegramButton: 'Telegram 助手 (待关联)',
      },
      channels: {
        title: 'Official Channels / 官方频道',
        stock: {
          name: '库存 / 现货频道',
          subtitle: '库存更新 / 现货通知',
        },
        news: {
          name: '官方新闻',
          subtitle: '新品 / 活动 / 更新',
        },
        contact: {
          name: '联系负责人',
          subtitle: '销售 / 供应链负责人',
        },
        support: {
          name: '技术支持',
          subtitle: '售后 / 故障排查',
        },
      },
      company: {
        name: 'YUFAN TECH (ООО "XXXX XXXX")',
        legalAddress: '法定地址: [此处填写详细的俄罗斯法定注册地址]',
        actualAddress: '实际地址: [此处填写实际办公或收发货地址]',
        innLabel: 'INN (税号)',
        kppLabel: 'KPP',
        ogrnLabel: 'OGRN',
      },
      legalNotice: '© 2026 YOURDOMAIN.RU. 本页面信息不构成公开要约。',
      assistant: {
        role: 'Assistant / 助理',
        greeting: '您好！请问有什么可以帮您的？',
      },
    },
  },

  en: {
    common: {
      nav: {
        catalog: 'Catalog',
        services: 'Delivery & Service',
        about: 'About Us',
        contact: 'Contact',
      },
      lang: {
        label: 'Language',
        zh: 'Chinese',
        en: 'English',
        ru: 'Russian',
      },
    },
    home: {
      performance: 'High-performance IT supply chain',
      server: 'Servers and',
      gpu: 'GPU Computing Systems',
      description:
        'We ship high-performance computing hardware directly from China and Hong Kong. We provide full customs documentation (GTD), VAT-inclusive prices (NDS 20%), and local maintenance support with our own spare parts warehouse.',
      catalogButton: 'Browse Catalog',
      quoteButton: 'Get a Quote',
      aboutTitle: 'About Us',
      expertise: 'Professional IT Equipment Supplier',
      aboutText1:
        'Yufan Tech is your global supply chain partner in high-performance computing hardware.',
      aboutText2:
        'We are not just logistics providers; we offer 24/7 SLA maintenance through local spare parts warehouses and support teams in Russia.',
      airFreight: 'Air delivery in 8–12 days',
      customClearance: 'Official Customs Clearance (GTD)',
      localSupport: 'Local Maintenance Support',
      services: {
        logistics: {
          title: 'Cross-border logistics',
          desc: 'Direct routes from China to all regions of Russia. We take care of customs, insurance and last-mile delivery.',
          item1: 'Air freight 8–12 days',
          item2: 'Support with GTD customs declaration',
          item3: 'Fully compliant “white” trade flow',
        },
        support: {
          title: 'Technical maintenance',
          desc: 'With a spare parts warehouse in Moscow, we provide SLA-level warranty support for the hardware you purchase.',
          item1: 'On-site engineer support',
          item2: 'Spare parts replacement within 48 hours',
          item3: '24/7 SLA service',
        },
        sourcing: {
          title: 'Supply chain sourcing',
          desc: 'Based on your technical requirements, we source the best and fastest hardware options worldwide.',
          item1: 'Genuine OEM hardware guaranteed',
          item2: 'Configuration compatibility review',
          item3: 'Supply-chain financing options',
        },
      },
    },
    leadForm: {
      sectionTitle: 'Get a quote',
      headingLine1: 'We design a supply plan',
      headingLine2: 'that fits your needs',
      description:
        'Please specify models, quantities and destination city. We will respond with a VAT-inclusive quote, delivery timeline, customs and support options.',
      tagGtd: 'GTD / NDS 20%',
      tagAir: '8–12 days by air',
      tagSla: 'SLA 24/7',
      placeholderName: 'Name / company (required)',
      placeholderPhone: 'Phone / Telegram / WhatsApp (required)',
      placeholderEmail: 'Email (optional)',
      placeholderComment: 'Request details (models / qty / destination / VAT, etc.)',
      attachLabel: 'Attach technical specs / реквизиты',
      noFile: 'No file chosen',
      requiredFieldsNote: '* Required fields',
      acceptPrivacy: 'I have read and accept the privacy policy (required)',
      acceptData:
        'I agree to the processing of my personal data for quotation purposes (required)',
      acceptMarketing: 'I agree to receive product and supply updates (optional)',
      submit: 'Send Request',
      submitting: 'Submitting…',
      success: 'Submitted! We will contact you shortly.',
      modalTitle: 'Quick enquiry',
      modalHeading: 'Get a quote and delivery plan',
      estimateTime: 'We typically provide an initial quote within 2 hours.',
    },
    footer: {
      brand: {
        description:
          'Direct supplier of high-performance IT hardware with compliant customs clearance and local maintenance.',
      },
      contact: {
        telegramButton: 'Telegram assistant (to be linked)',
      },
      channels: {
        title: 'Official Channels',
        stock: {
          name: 'Stock & Availability',
          subtitle: 'Inventory updates / ready to ship',
        },
        news: {
          name: 'Official News',
          subtitle: 'Product launches and updates',
        },
        contact: {
          name: 'Key Contacts',
          subtitle: 'Sales / supply contacts',
        },
        support: {
          name: 'Technical Support',
          subtitle: 'After-sales / troubleshooting',
        },
      },
      company: {
        name: 'YUFAN TECH (LLC "XXXX XXXX")',
        legalAddress: 'Legal address: [put registered address in Russia]',
        actualAddress: 'Actual address: [put office or warehouse address]',
        innLabel: 'INN (tax ID)',
        kppLabel: 'KPP',
        ogrnLabel: 'OGRN',
      },
      legalNotice:
        '© 2026 YOURDOMAIN.RU. Information on this site does not constitute a public offer.',
      assistant: {
        role: 'Assistant',
        greeting: 'Hi! How can I help you?',
      },
    },
  },

  ru: {
    common: {
      nav: {
        catalog: 'Каталог',
        services: 'Доставка и сервис',
        about: 'О нас',
        contact: 'Контакты',
      },
      lang: {
        label: 'Язык',
        zh: 'Китайский',
        en: 'Английский',
        ru: 'Русский',
      },
    },
    home: {
      performance: 'Высокопроизводительная ИТ-цепочка поставок',
      server: 'Серверы и',
      gpu: 'GPU-вычислительные системы',
      description:
        'Мы поставляем высокопроизводительное вычислительное оборудование напрямую из Китая и Гонконга. Предоставляем полный комплект таможенных документов (GTD), цены с НДС (NDS 20%) и локальную сервисную поддержку за счёт собственного склада запчастей.',
      catalogButton: 'Посмотреть каталог',
      quoteButton: 'Получить предложение',
      aboutTitle: 'О компании',
      expertise: 'Профессиональный поставщик ИТ-оборудования',
      aboutText1:
        'Yufan Tech — ваш глобальный партнёр по цепочке поставок высокопроизводительного вычислительного оборудования.',
      aboutText2:
        'Мы не просто логистический оператор: через склад запчастей и техническую команду в России обеспечиваем сервис по SLA 24/7 и закрываем разрыв в пост-продажной поддержке.',
      airFreight: 'Авиадоставка 8–12 дней',
      customClearance: 'Официальное оформление (GTD)',
      localSupport: 'Локальная сервисная поддержка',
      services: {
        logistics: {
          title: 'Кросс-граничная логистика',
          desc: 'Поставки из Китая по всей территории России. Берём на себя растаможку, страхование и доставку до двери.',
          item1: 'Авиадоставка 8–12 дней',
          item2: 'Поддержка оформления GTD',
          item3: 'Полностью “белая” схема поставки',
        },
        support: {
          title: 'Техническое обслуживание',
          desc: 'Склад запчастей в Москве позволяет оказывать сервисную поддержку по SLA для поставленного оборудования.',
          item1: 'Выезд инженера на площадку',
          item2: 'Замена запчастей до 48 часов',
          item3: 'Сервис по SLA 24/7',
        },
        sourcing: {
          title: 'Аутсорсинг закупок',
          desc: 'По вашим техническим требованиям подбираем лучшие и самые быстрые варианты поставок по всему миру.',
          item1: 'Гарантия оригинального оборудования',
          item2: 'Проверка совместимости конфигурации',
          item3: 'Поддержка финансирования цепочки поставок',
        },
      },
    },
    leadForm: {
      sectionTitle: 'Получить предложение',
      headingLine1: 'Мы подберём схему поставки',
      headingLine2: 'под ваши задачи',
      description:
        'Укажите модели, количество и город поставки. Мы ответим в кратчайшие сроки: ценой с НДС, сроками поставки, условиями таможенного оформления и сервисной поддержки.',
      tagGtd: 'GTD / NDS 20%',
      tagAir: '8–12 дней авиадоставка',
      tagSla: 'SLA 24/7',
      placeholderName: 'Имя / компания (обязательно)',
      placeholderPhone: 'Телефон / Telegram / WhatsApp (обязательно)',
      placeholderEmail: 'E-mail (по желанию)',
      placeholderComment:
        'Описание запроса (модели / количество / город поставки / с НДС или без и т.д.)',
      attachLabel: 'Прикрепить ТЗ / реквизиты',
      noFile: 'Файл не выбран',
      requiredFieldsNote: '* Обязательные поля',
      acceptPrivacy:
        'Я прочитал(а) и согласен(на) с политикой конфиденциальности (обязательно)',
      acceptData:
        'Согласен(на) на обработку персональных данных для подготовки предложения (обязательно)',
      acceptMarketing:
        'Согласен(на) получать новости о продуктах и поставках (по желанию)',
      submit: 'Отправить запрос',
      submitting: 'Отправка…',
      success: 'Запрос отправлен! Мы свяжемся с вами в ближайшее время.',
      modalTitle: 'Быстрый запрос',
      modalHeading: 'Получить предложение и план поставки',
      estimateTime:
        'Обычно мы предоставляем предварительное предложение в течение 2 часов.',
    },
    footer: {
      brand: {
        description:
          'Поставщик высокопроизводительного ИТ-оборудования с легальным таможенным оформлением и локальным сервисом.',
      },
      contact: {
        telegramButton: 'Telegram-ассистент (скоро)',
      },
      channels: {
        title: 'Официальные каналы',
        stock: {
          name: 'Склад / наличие',
          subtitle: 'Обновления по остаткам и готовому к отгрузке товару',
        },
        news: {
          name: 'Официальные новости',
          subtitle: 'Запуски продуктов и обновления',
        },
        contact: {
          name: 'Контакты ответственных',
          subtitle: 'Продажи / логистика',
        },
        support: {
          name: 'Техническая поддержка',
          subtitle: 'Сервис и диагностика',
        },
      },
      company: {
        name: 'YUFAN TECH (ООО "XXXX XXXX")',
        legalAddress: 'Юридический адрес: [укажите юридический адрес в РФ]',
        actualAddress: 'Фактический адрес: [укажите офис или склад]',
        innLabel: 'ИНН',
        kppLabel: 'КПП',
        ogrnLabel: 'ОГРН',
      },
      legalNotice:
        '© 2026 YOURDOMAIN.RU. Информация на сайте не является публичной офертой.',
      assistant: {
        role: 'Ассистент',
        greeting: 'Здравствуйте! Чем я могу помочь?',
      },
    },
  },
}

const localeFromStorage = localStorage.getItem('locale') || 'zh'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localeFromStorage,
  fallbackLocale: 'en',
  messages,
})
