import TextFormField from '@/common/form/textFormField'
import type { AddAddressFormShape } from '../../types'
import type { RegisterOptions } from 'react-hook-form'
import { IsDefaultField } from '../isDefaultField'
import type { DotNestedKeys } from './types'

// TODO: same as in src/pages/profile/components/contactDetails/components/contactDetailsForm/constants.ts
// TODO: make it global?
const formFields: {
  name: DotNestedKeys<AddAddressFormShape>
  label: string
  component: React.FC<any>
  isRequired?: boolean
  placeholderText?: string
  validationRules?: RegisterOptions
}[] = [
  {
    name: 'firstName',
    label: 'First name',
    component: TextFormField,
    isRequired: true
  },
  {
    name: 'lastName',
    label: 'Last name',
    component: TextFormField,
    isRequired: true
  },
  {
    name: 'deliveryAddress.street',
    label: 'Street address',
    component: TextFormField,
    isRequired: true
  },
  {
    name: 'deliveryAddress.additionalInfo',
    label: 'Additional info (apartment, suite, unit)',
    component: TextFormField,
    isRequired: true
  },
  {
    name: 'deliveryAddress.zipCode',
    label: 'Zip code',
    component: TextFormField,
    isRequired: true
  },
  {
    name: 'deliveryAddress.city',
    label: 'City',
    component: TextFormField,
    isRequired: true
  },
  {
    name: 'deliveryAddress.province',
    label: 'Province',
    component: TextFormField,
    isRequired: true
  },
  {
    name: 'deliveryAddress.country',
    label: 'Country',
    component: TextFormField,
    isRequired: true
  },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    component: TextFormField,
    isRequired: true
  },
  {
    name: 'isDefault',
    label: 'Set as default address',
    component: IsDefaultField,
    isRequired: false
  },
  {
    name: 'tags',
    label: 'Tags',
    placeholderText: 'Separated by commas: home, work, etc.',
    component: TextFormField,
    isRequired: false
  }
]

export { formFields }
