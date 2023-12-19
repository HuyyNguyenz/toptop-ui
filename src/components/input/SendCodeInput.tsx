'use client'

import { regexEmail } from '@/constants/regex'
import { useEffect, useState } from 'react'
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form'

interface SendCodeInputProps {
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  watch: UseFormWatch<any>
}

const SendCodeInput = (props: SendCodeInputProps) => {
  const { register, errors, watch } = props
  const [timer, setTimer] = useState<number>(60)

  const handleClick = () => {
    if (watch('email').match(regexEmail) && timer === 60) {
      setTimer((prev) => prev - 1)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (timer < 60 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    } else {
      setTimer(60)
    }
    return () => clearInterval(interval)
  }, [timer])

  return (
    <div className='input-container'>
      <label htmlFor='code' className='font-medium mb-2'>
        Enter code
      </label>
      <div className='flex items-center justify-start w-full'>
        <input
          spellCheck={false}
          className={`${errors.code ? 'input-item-error' : 'input-item'} rounded-r-none max-w-[65%]`}
          type='text'
          id='code'
          placeholder='Enter code length 6 characters'
          {...register('code')}
        />
        <button
          onClick={handleClick}
          type='button'
          className={`btn-disabled rounded-l-none rounded-r-sm border-input flex-1 ${
            watch('email') && watch('email').match(regexEmail) && timer === 60 ? 'cursor-pointer text-black' : ''
          }`}
        >
          {timer < 60 ? `Resend code ${timer}s` : 'Send code'}
        </button>
      </div>
      {errors.code && <span className='error-message'>{`${errors.code.message}`}</span>}
    </div>
  )
}

export default SendCodeInput
