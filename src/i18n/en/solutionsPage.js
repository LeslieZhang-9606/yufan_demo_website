export default {
  header: {
    subTitle: 'Technical & Value-Added Services',
    title: 'One-Stop Compute Solutions',
    desc: 'From custom hardware R&D and compute leasing to cluster networking and tuning, we deliver value far beyond hardware.'
  },
  // 1. Customization (OEM/ODM)
  custom: {
    title: 'R&D Hardware Customization',
    desc: 'Leveraging Yufan’s robust supply chain and R&D capabilities, we provide cost-effective modified cards and custom servers for specific AI scenarios.',
    features: [
      { title: 'Proprietary Modules', text: 'Solutions like H100 94GB/96GB modified variants to significantly lower TCO.' },
      { title: 'Custom Cooling', text: 'Dedicated liquid/air cooling modules designed for high-density data centers.' },
      { title: 'Turnkey ODM', text: 'Chassis branding, BIOS customization, and custom motherboard topology development.' }
    ]
  },
  // 2. Leasing
  leasing: {
    title: 'Compute Leasing Services',
    desc: 'Flexible access to high-performance compute without heavy CAPEX. Perfect for LLM training and fine-tuning.',
    features: [
      { title: 'Bare Metal Servers', text: 'H100/A100/4090 bare metal instances with full Root access and data security.' },
      { title: 'Cluster Rental', text: '512+ node large-scale cluster rental supporting IB lossless networking. Monthly/Quarterly billing.' },
      { title: 'Ready-to-Use', text: 'Pre-configured with mainstream AI frameworks (PyTorch, TensorFlow) and drivers.' }
    ]
  },
  // 3. Networking
  network: {
    title: 'HPC Cluster Network Design',
    desc: 'Expert network architecture team planning high-throughput, low-latency physical networks to unleash extreme GPU performance.',
    features: [
      { title: 'Topology Planning', text: 'Architecture design based on NVIDIA Quantum-2 InfiniBand or ROCE v2 lossless networks.' },
      { title: 'Integrated Cabling', text: 'On-site data center cabling and labeling services compliant with TIA-942 standards.' },
      { title: 'Comm. Tuning', text: 'NCCL parameter tuning and multi-node interconnect optimization for distributed training.' }
    ]
  },
  // 4. O&M
  ops: {
    title: 'Remote O&M Support',
    desc: '7x24 expert O&M team covering hardware troubleshooting for all brands to ensure stable cluster operation.',
    features: [
      { title: 'Asset Audit', text: 'Comprehensive inventory and health check for existing GPU servers, switches, and storage.' },
      { title: 'Troubleshooting', text: 'Remote log analysis and hardware fault localization (GPU dropouts, PCIe degradation, packet loss).' },
      { title: 'Full Stack Support', text: 'Support for Huawei, Lenovo, Dell, H3C, Cisco, Supermicro, and more.' }
    ]
  },
  cta: {
    title: 'Looking for a specific solution?',
    btn: 'Book a Technical Consultation'
  }
}