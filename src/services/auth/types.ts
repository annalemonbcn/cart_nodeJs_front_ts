import type { components } from '@/variables/types/openapi'

type SignUpType = components['schemas']['RegisterUserInput']
type SignUpApiResponse = components['responses']['AuthRegister']['content']['application/json']

type LoginType = components['schemas']['LoginUserInput']
type LoginApiResponse = components['responses']['AuthLogin']['content']['application/json']

export type { SignUpType, SignUpApiResponse, LoginType, LoginApiResponse }
