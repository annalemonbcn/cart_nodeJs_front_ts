import EmailFormField from '@/common/form/emailFormField'
import TextFormField from '@/common/form/textFormField'
import type { FormField } from './types'
import { regex } from '@/utils/constants'

const formFields: FormField[] = [
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
        value: regex.phoneNumberRegex,
        message: 'Phone number must include country prefix (e.g. +34...)'
      }
    }
  }
]

export { formFields }
