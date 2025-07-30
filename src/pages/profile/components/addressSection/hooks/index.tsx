import { useQuery } from '@tanstack/react-query'
import { useAddressServices } from '@/services/address'

const useGetAddress = () => {
  const { getAllAddresses } = useAddressServices()

  const { data, isLoading } = useQuery(getAllAddresses())

  // TODO: logic: if no data

  return {
    isLoading,
    data: data?.payload
  }
}

export { useGetAddress }
