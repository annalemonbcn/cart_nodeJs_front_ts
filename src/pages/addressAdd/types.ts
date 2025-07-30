import type { AddressDto } from '@/services/address/types'

type AddAddressFormShape = Omit<AddressDto, 'tags'> & {
  tags?: string
}

export type { AddAddressFormShape }
