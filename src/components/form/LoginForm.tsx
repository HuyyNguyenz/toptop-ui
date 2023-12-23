'use client'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthLogin, AuthLoginSchema } from '@/schemas'
import Input from '../input/Input'
import { useRouter } from 'next/navigation'
import ForgotPasswordForm from './ForgotPasswordForm'
import { handleLogin } from '@/apis'

interface LoginFormProps {
  isShowLoginForm: boolean
  showLoginForm: (value: boolean) => void
}

const LoginForm = (props: LoginFormProps) => {
  const {
    register,
    unregister,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(AuthLoginSchema)
  })
  const { isShowLoginForm, showLoginForm } = props
  const [isShowForgotPassword, setShowForgotPassword] = useState<boolean>(false)
  const router = useRouter()

  const handleCloseLoginForm = () => {
    showLoginForm(false)
    unregister('email')
    unregister('password')
  }

  const handleShowForgotPassword = () => {
    setShowForgotPassword(true)
    unregister('email')
    unregister('password')
  }

  const isError = () => {
    return errors.email || errors.password
  }

  const checkDisable = () => {
    return !watch('email') || !watch('password') || isError()
  }

  const onSubmit = (data: AuthLogin) => {
    handleLogin(data, router)
  }

  return (
    <>
      {isShowLoginForm && !isShowForgotPassword && (
        <div className='w-[25rem] mb-4'>
          <button className='text-24 mt-4' onClick={handleCloseLoginForm}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div>
            <h1 className='text-32 font-semibold pt-8 text-center mb-4'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label='Email'
                name='email'
                type='text'
                placeholder='Enter your email'
                errors={errors}
                register={register}
              />
              <Input
                label='Password'
                name='password'
                type='password'
                placeholder='Enter your password'
                errors={errors}
                register={register}
              />
              <div className='mb-4'>
                <span
                  onClick={handleShowForgotPassword}
                  className='text-12 hover:underline hover:font-medium cursor-pointer'
                >
                  Forgot password ?
                </span>
              </div>
              <button type='submit' className={`${checkDisable() ? 'btn-disabled' : 'btn-primary'}`}>
                Login
              </button>
            </form>
          </div>
        </div>
      )}
      {isShowLoginForm && (
        <ForgotPasswordForm
          isShowForgotPasswordForm={isShowForgotPassword}
          showForgotPasswordForm={setShowForgotPassword}
        />
      )}
    </>
  )
}

export default LoginForm
