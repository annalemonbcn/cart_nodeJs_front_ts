import apiClient from '@/lib/axios'
import type {
  AddAddressApiResponse,
  DeleteAddressApiResponse,
  GetAddressByIdApiResponse,
  UpdateAddressApiResponse,
  UpdateIsDefaultAddressApiResponse,
  DefaultAddressDto,
  AddressInputDto
} from './types'
import { API_ROUTES } from '../constants'

const COMMON_KEYS = ['address']

const getAddressById = (addressId: string | undefined) => ({
  queryKey: [...COMMON_KEYS, 'getAddressById', addressId],
  queryFn: async (): Promise<GetAddressByIdApiResponse> => {
    if (!addressId) return Promise.reject(new Error('Address ID is required'))

    const response = await apiClient.get(API_ROUTES.address.getAddressById(addressId))
    return response.data
  },
  enabled: !!addressId
})

const addAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'addAddress'],
  mutationFn: async ({ data }: { data: AddressInputDto }): Promise<AddAddressApiResponse> => {
    const response = await apiClient.post(API_ROUTES.address.addAddress(), data)
    return response.data
  }
})

// TODO: update types on back + front
// sample: type UpdateAddressRequest = { addressId: string; data: AddressInputDto }
// then: mutationFn: async ({addressId, data }: UpdateAddressRequest): Promise<UpdateAddressApiResponse> => {}
const updateAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'updateAddress'],
  mutationFn: async ({
    addressId,
    data
  }: {
    addressId?: string
    data: AddressInputDto
  }): Promise<UpdateAddressApiResponse> => {
    if (!addressId) return Promise.reject(new Error('Address ID is required'))

    const response = await apiClient.put(API_ROUTES.address.updateAddress(addressId), data)
    return response.data
  }
})

const updateIsDefault = () => ({
  mutationKey: [...COMMON_KEYS, 'updateIsDefault'],
  mutationFn: async ({
    addressId,
    isDefault
  }: DefaultAddressDto & { addressId: string }): Promise<UpdateIsDefaultAddressApiResponse> => {
    const response = await apiClient.patch(API_ROUTES.address.updateIsDefault(addressId), { isDefault })
    return response.data
  }
})

const deleteAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'deleteAddress'],
  mutationFn: async (addressId: string): Promise<DeleteAddressApiResponse> => {
    const response = await apiClient.delete(API_ROUTES.address.deleteAddress(addressId))
    return response.data
  }
})

const useAddressServices = () => ({
  getAddressById,
  addAddress,
  updateAddress,
  updateIsDefault,
  deleteAddress
})

export { useAddressServices }
