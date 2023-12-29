'use client'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { userData } from '@/store'
import { handleGetMe } from '@/apis'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

// export const metadata: Metadata = {
//   title: 'TopTop - Make your day better',
//   description: 'TopTop - Make your day better'
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const access_token = getCookie('access_token')
  const router = useRouter()
  const [user, setUser] = useAtom(userData)

  useEffect(() => {
    if (!access_token) {
      router.push('/login', { scroll: false })
    } else {
      !user &&
        handleGetMe().then((res) => {
          setUser(res)
        })
    }
  }, [access_token, router, user, setUser])

  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
