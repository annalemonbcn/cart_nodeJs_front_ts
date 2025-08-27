import type { RegisterOptions } from 'react-hook-form'
import type { AddAddressFormShape } from '../../types'

/**
 * Recursively constructs a union type of dot-separated keys for a given object type T.
 * If a key's value is an object, it traverses into that object to generate nested keys.
 * If a key's value is an array, it stops recursion at that key.
 * The result is a type representing all possible dot-separated key paths within the object.
 */
type DotNestedKeys<T> = {
  [K in keyof T & string]: T[K] extends object ? (T[K] extends Array<any> ? K : `${K}.${DotNestedKeys<T[K]>}`) : K
}[keyof T & string]

type FormField = {
  name: DotNestedKeys<AddAddressFormShape>
  label: string
  component: React.FC<any>
  isRequired?: boolean
  placeholderText?: string
  validationRules?: RegisterOptions
}

export type { DotNestedKeys, FormField }
