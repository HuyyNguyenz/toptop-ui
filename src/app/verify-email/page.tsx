'use client'

import { useEffect } from 'react'
import { toast } from 'react-toastify'

const VerifyEmailPage = ({ searchParams }: { searchParams: { token: string } }) => {
  const { token } = searchParams

  useEffect(() => {
    token && toast.info(token, { autoClose: 2000 })
  }, [token])

  return (
    <>
      <div className='center bg-bg-login-color w-[31.25rem] max-h-[35rem] rounded-md border-default flex flex-col items-center justify-center animate-scale-center'>
        <h1 className='text-32 font-semibold'>Verify email successfully</h1>
      </div>
      <div className='overlay'></div>
    </>
  )
}

export default VerifyEmailPage
