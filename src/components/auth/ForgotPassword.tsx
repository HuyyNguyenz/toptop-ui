import { handleResetPassword, handleSendCode } from '@/actions/auth.action'
import { regexEmail } from '@/constants/regex'
import { AuthResetPassword, AuthResetPasswordSchema } from '@/schemas/auth.schema'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

interface ForgotPasswordProps {
  isShowForgotPassword: boolean
  showForgotPassword: (value: boolean) => void
}

const ForgotPassword = (props: ForgotPasswordProps) => {
  const {
    register,
    unregister,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(AuthResetPasswordSchema)
  })
  const { isShowForgotPassword, showForgotPassword } = props

  const handleCloseForgotPassword = () => {
    showForgotPassword(false)
    unregister('email')
    unregister('code')
    unregister('password')
  }

  const isError = () => {
    return errors.email || errors.code || errors.password
  }

  const checkDisable = () => {
    return !watch('email') || !watch('code') || !watch('password') || isError()
  }

  const onSubmit = (data: AuthResetPassword) => {
    handleResetPassword(data)
  }

  const handleClick = () => {
    watch('email').match(regexEmail) && handleSendCode(watch('email'))
  }

  return (
    <>
      {isShowForgotPassword && (
        <div className='w-[25rem] mb-4'>
          <button className='text-24 mt-4' onClick={handleCloseForgotPassword}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div>
            <h1 className='text-32 font-semibold pt-8 text-center mb-4'>Reset password</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='input-container'>
                <label htmlFor='email' className='font-medium mb-2'>
                  Email address
                </label>
                <input
                  className='input-item'
                  type='text'
                  id='email'
                  placeholder='Email address'
                  spellCheck={false}
                  {...register('email')}
                />
                {errors.email && <span className='error-message'>{errors.email.message}</span>}
              </div>
              <div className='input-container'>
                <label htmlFor='code' className='font-medium mb-2'>
                  Enter code
                </label>
                <div className='flex items-center justify-start w-full'>
                  <input
                    spellCheck={false}
                    className='input-item rounded-r-none w-[70%]'
                    type='text'
                    id='code'
                    placeholder='Enter code length 6 characters'
                    {...register('code')}
                  />
                  <button
                    onClick={handleClick}
                    type='button'
                    className={`btn-disabled rounded-l-none rounded-r-sm border-input flex-1 ${
                      watch('email') && watch('email').match(regexEmail) ? 'cursor-pointer text-black' : ''
                    }`}
                  >
                    Send code
                  </button>
                </div>
                {errors.code && <span className='error-message'>{errors.code.message}</span>}
              </div>
              <div className='input-container'>
                <label htmlFor='password' className='font-medium mb-2'>
                  Password
                </label>
                <input
                  className='input-item'
                  type='password'
                  id='password'
                  placeholder='Password'
                  {...register('password')}
                />
                {errors.password && <span className='error-message'>{errors.password.message}</span>}
              </div>
              <button type='submit' className={`${checkDisable() ? 'btn-disabled' : 'btn-primary'} mt-8`}>
                Reset password
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ForgotPassword
