import type { IAddressProps } from '../types'
import { mockAddress } from './mock.data'

const useGetAddress = () => {
  const address: IAddressProps[] = mockAddress
  const isLoading = false

  return {
    isLoading,
    data: address
  }
}

export { useGetAddress }
