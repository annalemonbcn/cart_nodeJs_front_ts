type ResetPasswordMode = 'reset' | 'change'

interface IResetPasswordFormProps {
  mode: ResetPasswordMode
}

type ResetPasswordFormShape = {
  password: string
  confirmPassword: string
}

export type { IResetPasswordFormProps, ResetPasswordFormShape }
