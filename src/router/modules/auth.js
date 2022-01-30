// Layouts
import NotAuthenticatedLayout from '@/components/layouts/NotAuthenticatedLayout'

// Pages
import LoginPage from '@/pages/auth/Login'

export default [
  {
    path: '/',
    component: LoginPage,
    meta: {
      layout: NotAuthenticatedLayout
    }
  }
]