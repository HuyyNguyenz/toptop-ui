import axios, { AxiosInstance } from 'axios'
import { getCookie, setCookie } from 'cookies-next'

class FetchApi {
  instance: AxiosInstance
  private requestRefreshToken: any
  constructor() {
    this.requestRefreshToken = null
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL as string,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        const access_token = getCookie('access_token') as string
        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )
    this.instance.interceptors.response.use(
      (config) => config,
      (error) => {
        if (error.response.data.statusCode === 403) {
          this.requestRefreshToken = this.requestRefreshToken
            ? this.requestRefreshToken
            : handleRefreshToken().finally(() => (this.requestRefreshToken = null))
          return this.requestRefreshToken.then(() => this.instance(error.response.config))
        } else {
          return Promise.reject(error)
        }
      }
    )
  }
}

const handleRefreshToken = async () => {
  const refresh_token = getCookie('refresh_token') as string
  if (refresh_token) {
    try {
      const result = (await fetchApi.patch('/auth/refresh-token', { refresh_token })).data
      const { access_token, refresh_token: new_refresh_token } = result.result
      setCookie('access_token', access_token)
      setCookie('refresh_token', new_refresh_token)
      return result
    } catch (error: any) {
      throw error
    }
  }
}

const fetchApi = new FetchApi().instance
export default fetchApi
