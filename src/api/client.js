import axios from 'axios'

import store from '@/store'

const apiClient = axios.create({
    baseUrl: process.env.VUE_APP_API_URL
})

apiClient.interceptors.request.use(config => {
  const jwtToken = store.getters.accessToken
  const headers = jwtToken ? {
    Authorization: `Bearer ${jwtToken}`
  } : {}

  return {
    ...config,
    headers: {
      ...config.headers,
      ...headers
    }
  }
})

apiClient.interceptors.request.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default apiClient