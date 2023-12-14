import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ForgotPassword from './ForgotPassword'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthLogin, AuthLoginSchema } from '@/schemas'
import { handleLogin } from '@/actions'
import Input from '../Input'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { setCookie } from 'cookies-next'

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

  const onSubmit = async (data: AuthLogin) => {
    const result = await handleLogin(data)
    const { access_token, refresh_token } = result.result
    if (result.error) {
      return toast.error(result.message, {
        autoClose: 2000,
        position: 'top-center'
      })
    }
    setCookie('access_token', access_token)
    setCookie('refresh_token', refresh_token)
    router.push('/')
    toast.success(result.message, {
      autoClose: 2000,
      position: 'top-center'
    })
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
        <ForgotPassword isShowForgotPassword={isShowForgotPassword} showForgotPassword={setShowForgotPassword} />
      )}
    </>
  )
}

export default LoginForm
