import type { UserAddressDto } from '@/services/address/types'
import type { AddressFormShape } from './types'

const maxAddresses = 5

const isDefaultUnique = (data: AddressFormShape, addresses: UserAddressDto[]) =>
  data.isDefault && addresses.filter((addr) => addr.id !== data.id).some((addr) => addr.isDefault)
    ? 'You already have a default address'
    : null

const userHasLessThan5Addresses = (addresses: UserAddressDto[]) =>
  addresses?.length < maxAddresses ? null : 'You can only have 5 addresses'

const validateUserAddresses = (data: AddressFormShape, addresses: UserAddressDto[]) =>
  isDefaultUnique(data, addresses) || userHasLessThan5Addresses(addresses)

export { validateUserAddresses }
