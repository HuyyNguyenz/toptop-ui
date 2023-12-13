'use server'

import { AuthLogin, AuthRegister, AuthResetPassword } from '@/schemas'
import fetchApi from '@/utils/fetchApi'

export const handleLogin = (data: AuthLogin) => {
  const result = fetchApi.post('/users/login', data)
  return result
}

export const handleRegister = async (data: AuthRegister) => {
  const result = await fetchApi.post('/users/register', data)
  return result
}

export const handleResetPassword = (data: AuthResetPassword) => {
  console.log('data: ', data)
}

export const handleSendCode = (email: string) => {
  console.log('email: ', email)
}

export const handleVerifyEmail = async (token: string) => {
  const result = await fetchApi.patch('/users/verify-email', { token })
  return result
}
