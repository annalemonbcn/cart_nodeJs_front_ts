import EmailFormField from '@/common/form/emailFormField'
import TextFormField from '@/common/form/textFormField'
import type { ProfileFormType } from './types'

const formFields: {
  name: keyof ProfileFormType
  label: string
  component: React.FC<any>
  isRequired?: boolean
  placeholderText?: string
}[] = [
  { name: 'firstName', label: 'First name', component: TextFormField, isRequired: true },
  { name: 'lastName', label: 'Last name', component: TextFormField, isRequired: true },
  { name: 'email', label: 'Email', component: EmailFormField, isRequired: true },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    component: TextFormField,
    isRequired: false,
    placeholderText: 'Provide a valid phone number'
  }
]

export { formFields }
