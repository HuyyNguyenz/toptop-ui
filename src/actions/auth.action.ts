'use server'

import { AuthLogin, AuthRegister, AuthResetPassword } from '@/schemas/auth.schema'
import fetchApi from '@/utils/fetchApi'

export const handleLogin = (data: AuthLogin) => {
  console.log('data: ', data)
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
