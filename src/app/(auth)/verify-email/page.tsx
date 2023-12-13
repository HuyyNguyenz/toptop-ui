'use client'

import { handleVerifyEmail } from '@/actions'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const VerifyEmailPage = ({ searchParams }: { searchParams: { token: string } }) => {
  const { token } = searchParams
  const [message, setMessage] = useState<string>('Loading...')

  const verifyEmail = async (token: string) => {
    const result = await handleVerifyEmail(token)
    setMessage(result.message)
  }

  useEffect(() => {
    if (token) {
      verifyEmail(token)
    }
  }, [token])

  return (
    <>
      <div className='center bg-bg-login-color w-[31.25rem] max-h-[35rem] rounded-md border-default flex flex-col items-start justify-start animate-scale-center px-2 py-4'>
        <h1 className='text-20 font-semibold text-text-title-color'>Verify Email</h1>
        <p className='text-text-color py-2'>{message}</p>
        <button className='btn-primary w-1/4'>
          <Link href='/' scroll={false}>
            Got it, thanks!
          </Link>
        </button>
      </div>
      <div className='overlay'></div>
    </>
  )
}

export default VerifyEmailPage
