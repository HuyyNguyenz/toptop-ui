import { AuthLogin } from '@/schemas'
import fetchApi from '@/utils/fetchApi'
import { setCookie } from 'cookies-next'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { toast } from 'react-toastify'

export const handleLogin = async (data: AuthLogin, router: AppRouterInstance) => {
  try {
    const result = (
      await fetchApi.post<{ message: string; result: { access_token: string; refresh_token: string } }>(
        '/auth/login',
        data
      )
    ).data
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

export const handleRegister = async (data: AuthLogin, router: AppRouterInstance) => {
  try {
    const result = (await fetchApi.post<{ message: string }>('/auth/register', data)).data
    toast.success(result.message, {
      autoClose: 2000,
      position: 'top-center',
      icon: '✅'
    })
    router.push('/login', { scroll: false })
  } catch (error: any) {
    if (error.response.data) {
      toast.error(error.response.data.message, {
        autoClose: 2000,
        position: 'top-center',
        icon: '❌'
      })
      return
    }
    throw error
  }
}

export const handleVerifyEmail = async (token: string) => {
  try {
    const result = (await fetchApi.patch<{ message: string }>('/auth/verify-email', { token })).data
    return result
  } catch (error) {
    throw error
  }
}
