// src/i18n/zh/solutionsPage.js
export default {
  header: {
    subTitle: '技术与增值服务',
    title: '一站式算力解决方案',
    desc: '从硬件定制开发、算力租赁到集群组网调优，我们为您提供超越硬件本身的价值。'
  },
  // 1. 定制化 (OEM/ODM)
  custom: {
    title: 'R&D 硬件定制与自研',
    desc: '基于宇凡强大的供应链与研发能力，为特定 AI 场景提供高性价比的改版卡与定制服务器。',
    features: [
      { title: '自研模组', text: '提供 H100 94GB/96GB 等高显存改版方案，显著降低 TCO。' },
      { title: '散热定制', text: '针对高密度机房开发专用水冷/风冷散热模组，解决热失效难题。' },
      { title: '整机 ODM', text: '支持机箱丝印、BIOS 定制及特殊拓扑主板开发，打造您的专属品牌。' }
    ]
  },
  // 2. 租赁 (Leasing)
  leasing: {
    title: '算力租赁服务',
    desc: '无需巨额固定资产投入 (CAPEX)，灵活获取高性能算力，满足大模型训练与微调需求。',
    features: [
      { title: '裸金属服务器', text: '提供 H100/A100/4090 裸金属实例，用户拥有完整 Root 权限，数据更安全。' },
      { title: '集群整租', text: '512+ 节点大规模集群租赁，支持 IB 无损网络互联，按月/季度灵活计费。' },
      { title: '开箱即用', text: '预置 PyTorch, TensorFlow 等主流 AI 框架与驱动，分钟级交付。' }
    ]
  },
  // 3. 组网 (Networking)
  network: {
    title: 'HPC 集群组网设计',
    desc: '专业的网络架构团队，为您规划高吞吐、低延迟的物理网络，释放 GPU 集群的极致性能。',
    features: [
      { title: '拓扑规划', text: '基于 NVIDIA Quantum-2 InfiniBand 或 ROCE v2 的无损网络架构设计。' },
      { title: '综合布线', text: '提供符合国际 TIA-942 标准的数据中心现场布线、标签化理线服务。' },
      { title: '通信调优', text: '针对大模型分布式训练场景，进行 NCCL 通信参数与多机互联优化。' }
    ]
  },
  // 4. 运维 (O&M)
  ops: {
    title: '远程运维技术支持',
    desc: '7x24 小时专家级运维团队，覆盖全品牌硬件故障排查，确保您的算力集群稳定运行。',
    features: [
      { title: '资产梳理', text: '对现网 GPU 服务器、交换机、存储设备进行全面盘点与健康度体检。' },
      { title: '故障排查', text: '远程日志分析与硬件故障定位 (GPU 掉卡、PCIe 降速、网络丢包等)。' },
      { title: '全栈支持', text: '支持华为、联想、Dell、H3C、Cisco、Supermicro 等主流品牌设备。' }
    ]
  },
  cta: {
    title: '寻找特定的技术方案？',
    btn: '预约技术专家咨询'
  }
}