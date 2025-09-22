import type { UserAddressDto } from "@/services/address/types"
import { useLoadUser } from "../useLoadUser"
import { useMemo } from "react"

const useGetAddress = () => {
  const { data, isLoading } = useLoadUser()

  const userAddresses: UserAddressDto[] = useMemo(() => {
    if (!data) return []

    const sorted = [
      ...data.addresses.filter((addr) => addr.isDefault),
      ...data.addresses.filter((addr) => !addr.isDefault)
    ]

    return sorted
  }, [data])

  return {
    data: userAddresses,
    isLoading
  }
}

export { useGetAddress }
