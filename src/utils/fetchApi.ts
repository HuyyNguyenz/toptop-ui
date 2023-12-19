import axios, { AxiosInstance } from 'axios'
import { getCookie, setCookie } from 'cookies-next'

class FetchApi {
  private instance: AxiosInstance
  private requestRefreshToken: any
  constructor() {
    this.requestRefreshToken = null
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL as string,
      timeout: 10000
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
  get(url: string, config?: object) {
    return this.instance.get(url, config)
  }
  post(url: string, body: object, config?: object) {
    return this.instance.post(url, body, config)
  }
  put(url: string, body: object, config?: object) {
    return this.instance.put(url, body, config)
  }
  patch(url: string, body: object, config?: object) {
    return this.instance.patch(url, body, config)
  }
  delete(url: string, config?: object) {
    return this.instance.delete(url, config)
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

const fetchApi = new FetchApi()
export default fetchApi
