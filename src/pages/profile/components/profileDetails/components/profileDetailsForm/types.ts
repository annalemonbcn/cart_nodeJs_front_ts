import type { UserProfileDto } from '@/services/user/types'
import type { RegisterOptions } from 'react-hook-form'

type ProfileDetailsFormType = Pick<UserProfileDto, 'firstName' | 'lastName' | 'email' | 'phoneNumber'>

type FormField = {
  name: keyof ProfileDetailsFormType
  label: string
  component: React.FC<any>
  isRequired?: boolean
  placeholderText?: string
  validationRules?: RegisterOptions
}

export type { ProfileDetailsFormType, FormField }
