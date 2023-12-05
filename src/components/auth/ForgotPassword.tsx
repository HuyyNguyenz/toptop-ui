import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'

interface ForgotPasswordProps {
  isShowForgotPassword: boolean
  showForgotPassword: (value: boolean) => void
}

const ForgotPassword = (props: ForgotPasswordProps) => {
  const { isShowForgotPassword, showForgotPassword } = props
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleCloseForgotPassword = () => {
    showForgotPassword(false)
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
            <form>
              <div className='input-container'>
                <label htmlFor='email' className='font-medium mb-2'>
                  Email address
                </label>
                <input
                  className='input-item'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email address'
                  spellCheck={false}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='code' className='font-medium mb-2'>
                  Enter code
                </label>
                <div className='flex items-center justify-start w-full'>
                  <input
                    maxLength={6}
                    className='input-item w-[70%]'
                    type='text'
                    name='code'
                    id='code'
                    placeholder='Enter code length 6 characters'
                  />
                  <button className='btn-disabled rounded-none border-input flex-1'>Send code</button>
                </div>
              </div>
              <div className='input-container'>
                <label htmlFor='password' className='font-medium mb-2'>
                  Password
                </label>
                <input className='input-item' type='password' name='password' id='password' placeholder='Password' />
              </div>
              <button ref={btnRef} className='btn-disabled mt-8'>
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
