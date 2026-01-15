import { useMemo } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { favouritesServices } from '@/services/favourites'
import { getErrorMessage } from '@/utils/objects'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import type { AxiosError } from 'axios'

const useToggleFavourite = () => {
  const { toggleFavourite } = favouritesServices()

  const queryClient = useQueryClient()
  const { getFavouriteIds, getFavouriteProducts } = favouritesServices()

  const { mutate, isPending } = useMutation({
    ...toggleFavourite(),
    onSuccess: (data) => {
      const { queryKey: getFavouriteIdsQueryKey } = getFavouriteIds()
      const { queryKey: getFavouriteProductsQueryKey } = getFavouriteProducts()
      const action = data.meta?.action
      toast.success(action === 'added' ? 'Product added to your wishlist' : 'Product removed from your wishlist')

      queryClient.invalidateQueries({ queryKey: getFavouriteIdsQueryKey })
      queryClient.invalidateQueries({ queryKey: getFavouriteProductsQueryKey })
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      const errorCode = error.status
      if (errorCode === 401) {
        toast.error('You need to be logged in to add a product to your wishlist')
        return
      }
      toast.error(getErrorMessage(error))
    }
  })

  return { toggleFavourite: mutate, isPending }
}

const useGetFavouritesIds = () => {
  const { getFavouriteIds } = favouritesServices()

  const { data, isLoading } = useQuery(getFavouriteIds())

  const favourites: string[] = useMemo(() => {
    if (!data || isLoading) return []

    return data.payload
  }, [data, isLoading])

  return { favourites, isLoading }
}

export { useToggleFavourite, useGetFavouritesIds }
