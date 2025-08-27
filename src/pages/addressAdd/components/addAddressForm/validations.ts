import type { UserAddressDto } from '@/services/address/types'
import type { AddAddressFormShape } from '../../types'

const maxAddresses = 5

const isDefaultUnique = (data: AddAddressFormShape, addresses: UserAddressDto[]) =>
  data.isDefault && addresses?.some((addr) => addr.isDefault) ? 'You can only have one default address' : null

const userHasLessThan5Addresses = (addresses: UserAddressDto[]) =>
  addresses?.length < maxAddresses ? null : 'You can only have 5 addresses'

const validateUserAddresses = (data: AddAddressFormShape, addresses: UserAddressDto[]) =>
  isDefaultUnique(data, addresses) || userHasLessThan5Addresses(addresses)

export { validateUserAddresses }
