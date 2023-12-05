import { handleLogin } from '@/actions/auth'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from 'react'
import ForgotPassword from './ForgotPassword'

interface LoginFormProps {
  isShowLoginForm: boolean
  showLoginForm: (value: boolean) => void
}

const LoginForm = (props: LoginFormProps) => {
  const { isShowLoginForm, showLoginForm } = props
  const [isShowForgotPassword, setShowForgotPassword] = useState<boolean>(false)
  const [loginData, setLoginData] = useState<{ email: string; password: string }>({ email: '', password: '' })
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleCloseLoginForm = () => {
    showLoginForm(false)
    setLoginData({ email: '', password: '' })
  }

  const handleShowForgotPassword = () => {
    setShowForgotPassword(true)
    setLoginData({ email: '', password: '' })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginData({ ...loginData, [name]: value })
  }

  useEffect(() => {
    if (loginData.email === '' || loginData.password === '') {
      btnRef.current?.classList.remove('btn-primary')
      btnRef.current?.classList.add('btn-disabled')
    } else {
      btnRef.current?.classList.remove('btn-disabled')
      btnRef.current?.classList.add('btn-primary')
    }
  }, [loginData])

  return (
    <>
      {isShowLoginForm && !isShowForgotPassword && (
        <div className='w-[25rem] mb-4'>
          <button className='text-24 mt-4' onClick={handleCloseLoginForm}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div>
            <h1 className='text-32 font-semibold pt-8 text-center mb-4'>Login</h1>
            <form action={handleLogin}>
              <div className='input-container'>
                <label htmlFor='email' className='font-medium mb-2'>
                  Email
                </label>
                <input
                  value={loginData.email}
                  onChange={handleChange}
                  className='input-item'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  spellCheck={false}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='password' className='font-medium mb-2'>
                  Password
                </label>
                <input
                  value={loginData.password}
                  onChange={handleChange}
                  className='input-item'
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <div className='mb-4'>
                <span
                  onClick={handleShowForgotPassword}
                  className='text-12 hover:underline hover:font-medium cursor-pointer'
                >
                  Forgot password ?
                </span>
              </div>
              <button ref={btnRef} className='btn-disabled'>
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
