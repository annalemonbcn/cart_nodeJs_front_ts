import type { components } from '@/variables/types/openapi'

type SignUpType = components['schemas']['RegisterUserInput']
type SignUpApiResponse = components['responses']['AuthRegister']['content']['application/json']

type LoginType = components['schemas']['LoginUserInput']
type LoginApiResponse = components['responses']['AuthLogin']['content']['application/json']

type ForgotPasswordType = components['schemas']['ForgotPasswordInput']
type ForgotPasswordApiResponse = components['responses']['AuthForgotPassword']['content']['application/json']

type ResetPasswordType = components['schemas']['ResetPasswordInput']
type ResetPasswordApiResponse = components['responses']['AuthResetPassword']['content']['application/json']

export type {
  SignUpType,
  SignUpApiResponse,
  LoginType,
  LoginApiResponse,
  ForgotPasswordType,
  ForgotPasswordApiResponse,
  ResetPasswordType,
  ResetPasswordApiResponse
}
