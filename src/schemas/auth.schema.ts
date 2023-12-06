import { AUTH_MESSAGES } from '@/constants/message'
import { regexPassword } from '@/constants/regex'
import * as yup from 'yup'

export const AuthLoginSchema = yup
  .object({
    email: yup.string().email(AUTH_MESSAGES.EMAIL_INVALID).required(AUTH_MESSAGES.EMAIL_REQUIRED),
    password: yup.string().required(AUTH_MESSAGES.PASSWORD_REQUIRED)
  })
  .required()
export type AuthLogin = yup.InferType<typeof AuthLoginSchema>

export const AuthResetPasswordSchema = yup.object({
  email: yup.string().required(AUTH_MESSAGES.EMAIL_REQUIRED).email(AUTH_MESSAGES.EMAIL_INVALID),
  code: yup
    .string()
    .required(AUTH_MESSAGES.CODE_REQUIRED)
    .min(6, AUTH_MESSAGES.CODE_LENGTH)
    .max(6, AUTH_MESSAGES.CODE_LENGTH),
  password: yup
    .string()
    .required(AUTH_MESSAGES.PASSWORD_REQUIRED)
    .matches(regexPassword, AUTH_MESSAGES.PASSWORD_MUST_BE_STRONG)
})
export type AuthResetPassword = yup.InferType<typeof AuthResetPasswordSchema>
