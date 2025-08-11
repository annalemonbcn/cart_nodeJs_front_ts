import { useLoadUser } from '@/hooks/useLoadUser'
import type { UserAddressDto } from '@/services/address/types'
import { useMemo } from 'react'

const useGetAddress = () => {
  const { data, isLoading } = useLoadUser()

  const userAddresses: UserAddressDto[] = useMemo(() => {
    if (!data) return []

    return data.addresses
  }, [data])

  return {
    data: userAddresses,
    isLoading
  }
}

export { useGetAddress }
