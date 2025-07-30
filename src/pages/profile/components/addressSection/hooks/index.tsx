import { useQuery } from '@tanstack/react-query'
import { useAddressServices } from '@/services/address'

const useGetAddress = () => {
  const { getAllAddresses } = useAddressServices()

  const { data, isLoading } = useQuery(getAllAddresses())

  return {
    isLoading,
    data
  }
}

export { useGetAddress }
