import Vue from 'vue'
import VueRouter from 'vue-router'

// Used by the middleware
import store from '@/store'

// Middleware
import middlewarePipeline from '@/router/middlewarePipeline'

// Modules
import authModule from './modules/auth'

Vue.use(VueRouter)

// Add our routes
const routes = [
  ...authModule
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// Pipelines
// This is the pipeline that will be used to call the middleware
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router