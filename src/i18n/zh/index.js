import common from './common'
import siteHeader from './siteHeader'
import siteFooter from './siteFooter'
import homePage from './homePage'
import leadForm from './leadForm'
import catalogPage from './catalogPage'
import solutionsPage from './solutionsPage'
import servicesPage from './servicesPage'
import aboutPage from './aboutPage'

export default {
  // $t('common.action.quote')
  common, 
  // $t('siteHeader.nav.products')  <-- 注意：前缀变了，更直观
  siteHeader,
  // $t('siteFooter.brand.description')
  siteFooter,
  // $t('homePage.hero.title1')
  homePage,
  // $t('leadForm.sectionTitle')
  leadForm,
  catalogPage,
  solutionsPage,
  servicesPage,
  aboutPage

}