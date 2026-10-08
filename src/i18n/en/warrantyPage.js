export default {
  header: { subTitle: 'After-sales service', title: 'Warranty verification', desc: 'Enter the serial number shown on the product label to view its public warranty information.' },
  form: {
    modeLabel: 'Query mode', singleMode: 'Single query', batchMode: 'Batch query',
    singleLabel: 'Serial number (SN)', batchLabel: 'Serial numbers (SN)', batchHint: 'One per line, up to 20',
    singlePlaceholder: 'Enter serial number', batchPlaceholder: 'Enter one serial number per line',
    check: 'Verify', checkBatch: 'Verify batch', checking: 'Checking…',
  },
  result: { title: 'Coverage details', count: '{count} result | {count} results', sn: 'Serial number', status: 'Status', term: 'Warranty term', start: 'Start date', end: 'Expiration date' },
  status: { under_warranty: 'Under warranty', expired: 'Expired', pending: 'Pending', contact_support: 'Contact support', not_found: 'Not found' },
  errors: {
    required: 'Enter at least one serial number.', invalid: 'One or more serial numbers are invalid.',
    batchLimit: 'A maximum of {max} serial numbers may be checked at once.', rateLimit: 'Too many requests. Please try again in one minute.',
    unavailable: 'The warranty service is temporarily unavailable. Please try again later.',
  },
  privacy: 'Only public warranty information for the serial numbers submitted in this query is returned. Product specifications, customer records and order details are not displayed.',
}
