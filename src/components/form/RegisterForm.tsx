'use client'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthRegisterSchema, AuthRegister } from '@/schemas'
import Input from '../input/Input'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import * as lodash from 'lodash'

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
  const router = useRouter()

  const handleCloseRegisterForm = () => {
    showRegisterForm(false)
    unregister('email')
    unregister('password')
    unregister('date_of_birth')
    unregister('first_name')
    unregister('last_name')
  }

  const isError = () => {
    return errors.email || errors.password || errors.date_of_birth || errors.first_name || errors.last_name
  }

  const checkDisable = () => {
    return (
      !watch('email') ||
      !watch('password') ||
      !watch('date_of_birth') ||
      !watch('first_name') ||
      !watch('last_name') ||
      isError()
    )
  }

  const onSubmit = async (data: AuthRegister) => {
    // const result = await handleRegister(data)
    // const message = Array.isArray(result.message) ? result.message[0] : result.message
    // if (result.error) {
    //   return toast.error(lodash.capitalize(message), {
    //     autoClose: 2000,
    //     position: 'top-center'
    //   })
    // }
    // router.push('/login', { scroll: false })
    // toast.success(lodash.capitalize(message), {
    //   autoClose: 2000,
    //   position: 'top-center'
    // })
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
                name='first_name'
                placeholder='Enter your first name'
                type='text'
                errors={errors}
                register={register}
              />
              <Input
                label='Last name'
                name='last_name'
                placeholder='Enter your last name'
                type='text'
                errors={errors}
                register={register}
              />
              <Input
                label="When's your birthday"
                name='date_of_birth'
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
