// Layouts
import NotAuthenticatedLayout from '@/components/layouts/NotAuthenticatedLayout'

// Pages
import LoginPage from '@/pages/auth/Login'

export default [
  {
    path: '/login',
    component: LoginPage,
    meta: {
      layout: NotAuthenticatedLayout
    }
  }
]