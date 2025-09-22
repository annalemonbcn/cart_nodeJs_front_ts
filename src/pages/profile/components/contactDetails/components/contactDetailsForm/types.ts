import type { UserProfileDto } from '@/services/user/types'
import type { RegisterOptions } from 'react-hook-form'

type ProfileFormType = Pick<UserProfileDto, 'firstName' | 'lastName' | 'email' | 'phoneNumber'>

type FormField = {
  name: keyof ProfileFormType
  label: string
  component: React.FC<any>
  isRequired?: boolean
  placeholderText?: string
  validationRules?: RegisterOptions
}

export type { ProfileFormType, FormField }
