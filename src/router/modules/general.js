// Layouts
import NotAuthenticatedLayout from '@/components/layouts/NotAuthenticatedLayout'

// Pages
import WelcomePage from '@/pages/general/Welcome'

export default [
  {
    path: '/',
    component: WelcomePage,
    meta: {
      layout: NotAuthenticatedLayout
    }
  }
]