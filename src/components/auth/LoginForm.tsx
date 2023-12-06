import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ForgotPassword from './ForgotPassword'
import { useForm } from 'react-hook-form'
import { AUTH_MESSAGES } from '@/constants/message'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthLogin, AuthLoginSchema } from '@/schemas/auth.schema'
import { handleLogin } from '@/actions/auth.action'

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
    handleLogin(data)
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
              <div className='input-container'>
                <label htmlFor='email' className='font-medium mb-2'>
                  Email
                </label>
                <input
                  className={`${errors.email ? 'input-item-error' : 'input-item'}`}
                  type='text'
                  id='email'
                  placeholder='Email'
                  spellCheck={false}
                  {...register('email', { required: AUTH_MESSAGES.EMAIL_REQUIRED })}
                />
                {errors.email && <span className='error-message'>{errors.email.message}</span>}
              </div>
              <div className='input-container'>
                <label htmlFor='password' className='font-medium mb-2'>
                  Password
                </label>
                <input
                  className={`${errors.password ? 'input-item-error' : 'input-item'}`}
                  type='password'
                  id='password'
                  placeholder='Password'
                  {...register('password', { required: AUTH_MESSAGES.PASSWORD_REQUIRED })}
                />
                {errors.password && <span className='error-message'>{errors.password.message}</span>}
              </div>
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
        <ForgotPassword isShowForgotPassword={isShowForgotPassword} showForgotPassword={setShowForgotPassword} />
      )}
    </>
  )
}

export default LoginForm
