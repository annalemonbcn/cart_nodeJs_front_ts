import type { components } from '@/variables/types/openapi'

type AddressDto = components['schemas']['Address']

type GetAllAddressApiResponse = components['responses']['AllAddressFound']['content']['application/json']
type GetAddressByIdApiResponse = components['responses']['AddressFound']['content']['application/json']
type AddAddressApiResponse = components['responses']['AddressCreated']['content']['application/json']

export type { AddressDto, AddAddressApiResponse, GetAllAddressApiResponse, GetAddressByIdApiResponse }
