import type { components } from '@/variables/types/openapi'

type UserAddressDto = components['schemas']['AddressOutput']
type DeliveryAddressDto = components['schemas']['DeliveryAddress']
type DefaultAddressDto = components['schemas']['AddressDefaultInput']

// input
type AddressInputDto = components['schemas']['AddressAddInput']

// output
type AddressOutputDto = components['schemas']['AddressOutput']

// responses
type GetAddressByIdApiResponse = components['responses']['AddressFound']['content']['application/json']
type AddAddressApiResponse = components['responses']['AddressCreated']['content']['application/json']
type UpdateAddressApiResponse = components['responses']['AddressUpdated']['content']['application/json']
type DeleteAddressApiResponse = components['responses']['AddressDeleted']['content']['application/json']
type UpdateIsDefaultAddressApiResponse = components['responses']['AddressDefaultSet']['content']['application/json']

export type {
  AddressInputDto,
  AddressOutputDto,
  UserAddressDto,
  DeliveryAddressDto,
  DefaultAddressDto,
  GetAddressByIdApiResponse,
  AddAddressApiResponse,
  UpdateAddressApiResponse,
  DeleteAddressApiResponse,
  UpdateIsDefaultAddressApiResponse
}
