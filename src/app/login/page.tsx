'use client'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
import LoginForm from '@/components/auth/LoginForm'
import Link from 'next/link'

const LoginPage = () => {
  const [isShowLoginForm, setShowLoginForm] = useState<boolean>(false)

  const handleOpenLoginForm = () => {
    setShowLoginForm(true)
  }

  return (
    <>
      <div className='center bg-bg-login-color w-[31.25rem] max-h-[35rem] rounded-md border-default flex flex-col items-center justify-center animate-scale-center'>
        {!isShowLoginForm && (
          <div className='max-w-[25rem] text-center'>
            <h1 className='text-32 font-semibold pt-8'>Login to TikTok</h1>
            <div onClick={handleOpenLoginForm} className='login-item'>
              <FontAwesomeIcon icon={faUser} />
              <span className='w-full font-medium'>Use account login</span>
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
        <LoginForm isShowLoginForm={isShowLoginForm} showLoginForm={setShowLoginForm} />
        <div className='flex items-center justify-center border-default border-l-transparent border-r-transparent border-b-transparent w-full py-4'>
          <span>{"Don't have an account ?"}</span>
          <Link href='/register' scroll={false}>
            <button className='text-primary-color ml-2 font-medium'>Register</button>
          </Link>
        </div>
      </div>
      <div className='overlay'></div>
    </>
  )
}

export default LoginPage
