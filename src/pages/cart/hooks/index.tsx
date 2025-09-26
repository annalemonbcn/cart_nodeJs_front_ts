import { useGetUserCartId } from '@/hooks/useLoadUser'
import { useCartServices } from '@/services/cart'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

const useGetCartProducts = () => {
  const cartId = useGetUserCartId()
  const { getCart } = useCartServices()

  const { data, isLoading } = useQuery(getCart(cartId))

  const cartProducts = useMemo(() => {
    if (!data || isLoading) return undefined

    return data.payload.products
  }, [data, isLoading])

  return { data: cartProducts, isLoading }
}

export { useGetCartProducts }
