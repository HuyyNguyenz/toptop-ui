'use client'

import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import { handleGetMe } from '@/apis'
import { UserType } from '@/types'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

const queryClient = new QueryClient()
export const UserContext = createContext<UserType | null>(null)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const access_token = getCookie('access_token')
  const [user, setUser] = useState<UserType | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (!access_token) {
      router.push('/login', { scroll: false })
    }
  }, [access_token, router])

  console.log('user:', user)

  return (
    <html lang='en'>
      <body className={roboto.className}>
        <QueryClientProvider client={queryClient}>
          <UserContext.Provider value={user}>
            <Header />
            {children}
            <ToastContainer />
          </UserContext.Provider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  )
}
