import { AUTH_MESSAGES } from '@/constants/message'
import { regexPassword } from '@/constants/regex'
import * as yup from 'yup'

const email = yup.string().required(AUTH_MESSAGES.EMAIL_REQUIRED).email(AUTH_MESSAGES.EMAIL_INVALID)
const password = yup
  .string()
  .required(AUTH_MESSAGES.PASSWORD_REQUIRED)
  .matches(regexPassword, AUTH_MESSAGES.PASSWORD_MUST_BE_STRONG)
const code = yup
  .string()
  .required(AUTH_MESSAGES.CODE_REQUIRED)
  .min(6, AUTH_MESSAGES.CODE_LENGTH)
  .max(6, AUTH_MESSAGES.CODE_LENGTH)

export const AuthLoginSchema = yup
  .object({
    email,
    password: yup.string().required(AUTH_MESSAGES.PASSWORD_REQUIRED)
  })
  .required()
export type AuthLogin = yup.InferType<typeof AuthLoginSchema>

export const AuthRegisterSchema = yup
  .object({
    email,
    password,
    date_of_birth: yup.date(),
    first_name: yup.string().required(AUTH_MESSAGES.FIRST_NAME_REQUIRED),
    last_name: yup.string().required(AUTH_MESSAGES.LAST_NAME_REQUIRED)
  })
  .required()
export type AuthRegister = yup.InferType<typeof AuthRegisterSchema>

export const AuthResetPasswordSchema = yup.object({
  email,
  code,
  password
})
export type AuthResetPassword = yup.InferType<typeof AuthResetPasswordSchema>
