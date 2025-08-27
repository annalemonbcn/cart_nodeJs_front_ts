import apiClient from '@/lib/axios'
import type {
  AddAddressApiResponse,
  DeleteAddressApiResponse,
  AddressDto,
  GetAddressByIdApiResponse,
  UpdateAddressApiResponse,
  UpdateIsDefaultAddressApiResponse,
  DefaultAddressDto,
  AddressInputDto
} from './types'

const COMMON_KEYS = ['address']

const getAddressById = () => ({
  queryKey: [...COMMON_KEYS, 'getAddressById'],
  queryFn: async (addressId: string): Promise<GetAddressByIdApiResponse> => {
    const response = await apiClient.get(`/address/${addressId}`)
    return response.data
  }
})

const addAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'addAddress'],
  mutationFn: async (data: AddressInputDto): Promise<AddAddressApiResponse> => {
    const response = await apiClient.post('/address', data)
    return response.data
  }
})

const updateAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'updateAddress'],
  mutationFn: async (addressId: string, data: AddressDto): Promise<UpdateAddressApiResponse> => {
    const response = await apiClient.put(`/address/${addressId}`, data)
    return response.data
  }
})

const updateIsDefault = () => ({
  mutationKey: [...COMMON_KEYS, 'updateIsDefault'],
  mutationFn: async ({
    addressId,
    isDefault
  }: DefaultAddressDto & { addressId: string }): Promise<UpdateIsDefaultAddressApiResponse> => {
    const response = await apiClient.patch(`/address/${addressId}/default`, { isDefault })
    return response.data
  }
})

const deleteAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'deleteAddress'],
  mutationFn: async (addressId: string): Promise<DeleteAddressApiResponse> => {
    const response = await apiClient.delete(`/address/${addressId}`)
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
