import EmailFormField from '@/common/form/emailFormField'
import TextFormField from '@/common/form/textFormField'
import type { ProfileFormType } from './types'
import type { RegisterOptions } from 'react-hook-form'

const formFields: {
  name: keyof ProfileFormType
  label: string
  component: React.FC<any>
  isRequired?: boolean
  placeholderText?: string
  validationRules?: RegisterOptions
}[] = [
  { name: 'firstName', label: 'First name', component: TextFormField, isRequired: true },
  { name: 'lastName', label: 'Last name', component: TextFormField, isRequired: true },
  { name: 'email', label: 'Email', component: EmailFormField, isRequired: true },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    component: TextFormField,
    isRequired: false,
    placeholderText: 'Provide a valid phone number',
    validationRules: {
      pattern: {
        value: /^[0-9]{9}$/,
        message: 'Phone number must be 9 digits'
      }
    }
  }
]

export { formFields }
