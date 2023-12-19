'use client'

import { UseFormRegister, FieldErrors } from 'react-hook-form'

interface InputProps {
  label: string
  type: string
  name: string
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  placeholder: string
  className?: string
}

const Input = (props: InputProps) => {
  const { label, type, name, register, errors, placeholder, className } = props
  return (
    <div className='input-container'>
      <label htmlFor={name} className='font-medium mb-2'>
        {label}
      </label>
      <input
        className={`${errors[name] ? 'input-item-error' : 'input-item'} ${className}`}
        type={type}
        id={name}
        placeholder={placeholder}
        spellCheck={false}
        {...register(name)}
      />
      {errors[name] && <span className='error-message'>{`${errors[name]?.message}`}</span>}
    </div>
  )
}

export default Input
