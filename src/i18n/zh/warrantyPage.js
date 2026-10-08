export default {
  header: { subTitle: '售后服务', title: '保修查询', desc: '输入产品标签上的序列号，查询对应的公开保修信息。' },
  form: {
    modeLabel: '查询方式', singleMode: '单次查询', batchMode: '批量查询',
    singleLabel: '序列号（SN）', batchLabel: '序列号（SN）', batchHint: '每行一个，最多 20 条',
    singlePlaceholder: '请输入序列号', batchPlaceholder: '每行输入一个序列号',
    check: '查询', checkBatch: '批量查询', checking: '查询中…',
  },
  result: { title: '覆盖范围详情', export: '导出', sn: '序列号', pn: 'PN', status: 'RMA类型', end: '截止日期' },
  status: { under_warranty: '保修期内', expired: '已过保', pending: '待生效', contact_support: '请联系售后', not_found: '未查询到' },
  errors: {
    required: '请至少输入一个序列号。', invalid: '一个或多个序列号格式不正确。',
    batchLimit: '单次最多查询 {max} 个序列号。', rateLimit: '查询次数过多，请一分钟后再试。',
    unavailable: '保修查询服务暂时不可用，请稍后再试。',
  },
  privacy: '系统只返回本次提交序列号对应的公开保修信息，不显示产品规格、客户资料和订单信息。',
}
