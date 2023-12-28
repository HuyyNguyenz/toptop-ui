import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'TopTop - Make your day better',
  description: 'TopTop - Make your day better'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
