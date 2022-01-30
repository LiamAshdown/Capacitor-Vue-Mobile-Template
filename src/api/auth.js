import apiClient from './client'

const PREFIX = 'auth'

const URL = {
  LOGIN: `${PREFIX}/login`
}

export default {
  async login (payload) {
    const response = apiClient.post(URL.LOGIN, payload).then(response => {
      return response.data
    })

    return response
  }
}