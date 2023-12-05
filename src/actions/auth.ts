'use server'

export const handleLogin = (data: FormData) => {
  const email = data.get('email')
  const password = data.get('password')
  if (email && password) {
    console.log('Login success')
  }
}

export const handleRegister = (data: FormData) => {
  console.log('data:', data)
}
