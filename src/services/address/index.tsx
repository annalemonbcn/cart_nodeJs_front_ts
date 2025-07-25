import apiClient from '@/lib/axios'

const COMMON_KEYS = ['address']

type SampleAddress = {
  _id: string
  user: string
  firstName: string
  lastName: string
  deliveryAddress: {
    street: string
    additionalInfo?: string
    zipCode: string
    city: string
    province: string
    country: string
  }
  phoneNumber: string
  isDefault: boolean
  tags?: string[]
}

type SampleResponse = {
  status?: string
  code?: number
  payload?: SampleAddress[]
}

const getAllAddresses = () => ({
  queryKey: [...COMMON_KEYS, 'getAllAddresses'],
  queryFn: async (): Promise<SampleResponse> => {
    const response = await apiClient.get('/address')
    return response.data
  }
})

const getAddressById = () => ({
  queryKey: [...COMMON_KEYS, 'getAddressById'],
  queryFn: async (): Promise<SampleResponse> => {
    const response = await apiClient.get('/address')
    return response.data
  }
})

const addAddress = () => ({
  mutationKey: [...COMMON_KEYS, 'addAddress'],
  mutationFn: async (data: SampleAddress) => {
    const response = await apiClient.post('/address', data)
    return response.data
  }
})

const useAddressServices = () => ({
  getAllAddresses,
  getAddressById,
  addAddress
})

export { useAddressServices }
export type { SampleAddress }
