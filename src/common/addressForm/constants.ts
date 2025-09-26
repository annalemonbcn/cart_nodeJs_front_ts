import TextFormField from '@/common/form/textFormField'
import { IsDefaultField } from './components/isDefaultField'
import type { AddressFormShape, FormField } from './types'
import { countries } from 'countries-list'
import { regex } from '@/utils/constants'

const formDefaultValues: AddressFormShape = {
  firstName: '',
  lastName: '',
  deliveryAddress: {
    street: '',
    zipCode: '',
    city: '',
    province: '',
    country: '',
    additionalInfo: ''
  },
  phoneNumber: '',
  isDefault: false,
  tags: undefined
}

const validCountries = Object.values(countries).map((c) => c.name)
const maxTags = 5
const maxTagLength = 20

const formFields: FormField[] = [
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
    isRequired: false
  },
  {
    name: 'deliveryAddress.zipCode',
    label: 'Zip code',
    component: TextFormField,
    isRequired: true,
    validationRules: {
      pattern: {
        value: regex.zipCodeRegex,
        message: 'Zip code must be 3-10 characters long'
      }
    }
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
    isRequired: true,
    validationRules: {
      validate: (value: string) => {
        if (!validCountries.includes(value)) {
          return 'Invalid country'
        }
        return true
      }
    }
  },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    component: TextFormField,
    isRequired: true,
    placeholderText: 'Include country code: +34...',
    validationRules: {
      pattern: {
        value: regex.phoneNumberRegex,
        message: 'Phone number must include country prefix (e.g. +34...)'
      }
    }
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
    placeholderText: 'Separated by commas (e.g. home, work, etc.)',
    component: TextFormField,
    isRequired: false,
    validationRules: {
      validate: (value: string) => {
        if (!value) return true

        const tagsArray = value
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean)

        if (tagsArray.length > maxTags) return 'You can add up to 5 tags maximum'
        if (tagsArray.some((t) => t.length > maxTagLength)) return 'Each tag must be ≤ 20 characters'

        return true
      }
    }
  }
]

export { formDefaultValues, formFields }
