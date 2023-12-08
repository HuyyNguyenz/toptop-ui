'use server'

import { AuthLogin, AuthRegister, AuthResetPassword } from '@/schemas/auth.schema'

export const handleLogin = (data: AuthLogin) => {
  console.log('data: ', data)
}

export const handleRegister = (data: AuthRegister) => {
  console.log('data:', data)
}

export const handleResetPassword = (data: AuthResetPassword) => {
  console.log('data: ', data)
}

export const handleSendCode = (email: string) => {
  console.log('email: ', email)
}
