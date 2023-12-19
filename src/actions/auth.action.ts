import { AuthLogin } from '@/schemas'
import fetchApi from '@/utils/fetchApi'
import { AxiosError } from 'axios'
import { setCookie } from 'cookies-next'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { toast } from 'react-toastify'

export const handleLogin = async (data: AuthLogin, router: AppRouterInstance) => {
  try {
    const result = (await fetchApi.post('/auth/login', data)).data
    const { access_token, refresh_token } = result.result
    setCookie('access_token', access_token)
    setCookie('refresh_token', refresh_token)
    router.push('/', { scroll: false })
    toast.success(result.message, {
      autoClose: 2000,
      position: 'top-center',
      icon: '✅'
    })
  } catch (error: any) {
    if (error.response) {
      const { message } = error.response.data
      return toast.error(message, {
        autoClose: 2000,
        position: 'top-center',
        icon: '❌'
      })
    }
    throw error
  }
}
