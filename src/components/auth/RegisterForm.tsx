import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthRegisterSchema, AuthRegister } from '@/schemas/auth.schema'
import { handleRegister } from '@/actions/auth.action'
import Input from '../Input'
import InputSendCode from '../InputSendCode'

interface RegisterFormProps {
  isShowRegisterForm: boolean
  showRegisterForm: (value: boolean) => void
}

const RegisterForm = (props: RegisterFormProps) => {
  const {
    register,
    unregister,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(AuthRegisterSchema)
  })
  const { isShowRegisterForm, showRegisterForm } = props

  const handleCloseRegisterForm = () => {
    showRegisterForm(false)
    unregister('email')
    unregister('password')
    unregister('dateOfBirth')
    unregister('firstName')
    unregister('lastName')
  }

  const isError = () => {
    return errors.email || errors.password || errors.dateOfBirth || errors.firstName || errors.lastName || errors.code
  }

  const checkDisable = () => {
    return (
      !watch('email') ||
      !watch('password') ||
      !watch('dateOfBirth') ||
      !watch('firstName') ||
      !watch('lastName') ||
      !watch('code') ||
      isError()
    )
  }

  const onSubmit = (data: AuthRegister) => {
    handleRegister(data)
  }

  return (
    <>
      {isShowRegisterForm && (
        <div className='w-[25rem] mb-4'>
          <button className='text-24 mt-4' onClick={handleCloseRegisterForm}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div className='max-h-[25rem] overflow-y-auto'>
            <h1 className='text-32 font-semibold pt-8 text-center mb-4'>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label='First name'
                name='firstName'
                placeholder='Enter your first name'
                type='text'
                errors={errors}
                register={register}
              />
              <Input
                label='Last name'
                name='lastName'
                placeholder='Enter your last name'
                type='text'
                errors={errors}
                register={register}
              />
              <Input
                label="When's your birthday"
                name='dateOfBirth'
                placeholder='Enter your birthday'
                type='date'
                errors={errors}
                register={register}
              />
              <Input
                label='Email'
                name='email'
                placeholder='Enter your email'
                type='email'
                errors={errors}
                register={register}
              />
              <Input
                label='Password'
                name='password'
                placeholder='Enter your password'
                type='password'
                errors={errors}
                register={register}
              />
              <InputSendCode errors={errors} register={register} watch={watch} />
              <button type='submit' className={`${checkDisable() ? 'btn-disabled' : 'btn-primary'} mt-2`}>
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default RegisterForm
