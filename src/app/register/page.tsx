'use client'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
import RegisterForm from '@/components/form/RegisterForm'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next'

const RegisterPage = () => {
  const [isShowRegisterForm, setShowRegisterForm] = useState<boolean>(false)
  const access_token = getCookie('access_token')
  const [isLogin, setLogin] = useState<boolean>(true)
  const router = useRouter()

  const handleOpenRegisterForm = () => {
    setShowRegisterForm(true)
  }

  useEffect(() => {
    if (!access_token) {
      setLogin(false)
    } else {
      router.push('/')
    }
  }, [access_token, router])

  return (
    <>
      {isLogin ? null : (
        <>
          <div className='center bg-bg-login-color w-[31.25rem] max-h-[35rem] rounded-md border-default flex flex-col items-center justify-center animate-scale-center'>
            {!isShowRegisterForm && (
              <div className='max-w-[25rem] text-center'>
                <h1 className='text-32 font-semibold pt-8'>Register to TikTok</h1>
                <div onClick={handleOpenRegisterForm} className='login-item'>
                  <FontAwesomeIcon icon={faUser} />
                  <span className='w-full font-medium'>Use email register</span>
                </div>
                <div className='login-item'>
                  <FontAwesomeIcon icon={faFacebook} />
                  <span className='w-full font-medium'>Continue with Facebook</span>
                </div>
                <div className='login-item'>
                  <FontAwesomeIcon icon={faGoogle} />
                  <span className='w-full font-medium'>Continue with Google</span>
                </div>
                <p className='text-14 mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eius error magnam eaque facere. Cumque,
                  expedita repellendus recusandae et nam vel voluptatem magni. Illo exercitationem quia aut maiores,
                  veritatis enim?
                </p>
              </div>
            )}
            <RegisterForm isShowRegisterForm={isShowRegisterForm} showRegisterForm={setShowRegisterForm} />
            <div className='flex items-center justify-center border-default border-l-transparent border-r-transparent border-b-transparent w-full py-4'>
              <span>Already have an account ?</span>
              <Link href='/login' scroll={false}>
                <button className='text-primary-color ml-2 font-medium'>Login</button>
              </Link>
            </div>
          </div>
          <div className='overlay'></div>
        </>
      )}
    </>
  )
}

export default RegisterPage
