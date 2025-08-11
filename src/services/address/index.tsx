import apiClient from '@/lib/axios'
import type {
  AddAddressApiResponse,
  AddressDeleteApiResponse,
  AddressDto,
  GetAddressByIdApiResponse,
  GetAllAddressApiResponse
} from './types'

const COMMON_KEYS = ['address']

// TODO: i don't think it will be used
const getAllAddresses = () => ({
  queryKey: [...COMMON_KEYS, 'getAllAddresses'],
  queryFn: async (): Promise<GetAllAddressApiResponse> => {
    const response = await apiClient.get('/address')
    return response.data
  }
})

const getAddressById = () => ({
  queryKey: [...COMMON_KEYS, 'getAddressById'],
  queryFn: async (): Promise<GetAddressByIdApiResponse> => {
    const response = await apiClient.get('/address')
    return response.data
  }
})

const addAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'addAddress'],
  mutationFn: async (data: AddressDto): Promise<AddAddressApiResponse> => {
    const response = await apiClient.post('/address', data)
    return response.data
  }
})

const deleteAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'deleteAddress'],
  mutationFn: async (addressId: string): Promise<AddressDeleteApiResponse> => {
    const response = await apiClient.delete(`/address/${addressId}`)
    return response.data
  }
})

const useAddressServices = () => ({
  getAllAddresses,
  getAddressById,
  addAddress,
  deleteAddress
})

export { useAddressServices }
