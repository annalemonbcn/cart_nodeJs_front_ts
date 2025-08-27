import type { AddressInputDto } from '@/services/address/types'

type AddAddressFormShape = Omit<AddressInputDto, 'tags'> & {
  tags?: string
}

export type { AddAddressFormShape }
