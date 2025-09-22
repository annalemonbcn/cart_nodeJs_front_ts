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

const COMMON_KEYS = ['address']

const getAddressById = (addressId?: string) => ({
  queryKey: [...COMMON_KEYS, 'getAddressById', addressId],
  queryFn: async (): Promise<GetAddressByIdApiResponse> => {
    const response = await apiClient.get(`/address/${addressId}`)
    return response.data
  },
  enabled: !!addressId
})

const addAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'addAddress'],
  mutationFn: async ({ data }: { data: AddressInputDto }): Promise<AddAddressApiResponse> => {
    const response = await apiClient.post('/address', data)
    return response.data
  }
})

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
