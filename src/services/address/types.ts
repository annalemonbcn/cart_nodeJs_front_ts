import type { components } from '@/variables/types/openapi'

type UserAddressDto = components['schemas']['AddressOutput']
type DeliveryAddressDto = components['schemas']['DeliveryAddress']

// TODO: remove ?
type AddressDto = components['schemas']['Address']

type GetAllAddressApiResponse = components['responses']['AllAddressFound']['content']['application/json']
type GetAddressByIdApiResponse = components['responses']['AddressFound']['content']['application/json']
type AddAddressApiResponse = components['responses']['AddressCreated']['content']['application/json']
type AddressDeleteApiResponse = components['responses']['AddressDeleted']['content']['application/json']

export type {
  UserAddressDto,
  DeliveryAddressDto,
  AddressDto,
  AddAddressApiResponse,
  GetAllAddressApiResponse,
  GetAddressByIdApiResponse,
  AddressDeleteApiResponse
}
