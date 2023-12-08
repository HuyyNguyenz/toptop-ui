import { handleResetPassword } from '@/actions/auth.action'
import { AuthResetPassword, AuthResetPasswordSchema } from '@/schemas/auth.schema'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../Input'
import { useForm } from 'react-hook-form'
import InputSendCode from '../InputSendCode'

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

  return (
    <>
      {isShowForgotPassword && (
        <div className='w-[25rem] mb-4'>
          <button className='text-24 mt-4' onClick={handleCloseForgotPassword}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div className='max-h-[25rem] overflow-y-auto'>
            <h1 className='text-32 font-semibold pt-8 text-center mb-4'>Reset password</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label='Email'
                name='email'
                type='text'
                placeholder='Enter your email'
                errors={errors}
                register={register}
              />
              <InputSendCode register={register} errors={errors} watch={watch} />
              <Input
                label='Password'
                name='password'
                type='password'
                placeholder='Enter your password'
                errors={errors}
                register={register}
              />
              <button type='submit' className={`${checkDisable() ? 'btn-disabled' : 'btn-primary'} mt-4`}>
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
