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
  const { getFavourites } = favouritesServices()

  const { mutate, isPending } = useMutation({
    ...toggleFavourite(),
    onSuccess: (data) => {
      const { queryKey } = getFavourites()
      const action = data.meta?.action
      toast.success(action === 'added' ? 'Favourite added' : 'Favourite removed')

      queryClient.invalidateQueries({ queryKey })
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      const errorCode = error.status
      if (errorCode === 401) {
        toast.error('You need to be logged in to add a favourite')
        return
      }
      toast.error(getErrorMessage(error))
    }
  })

  return { toggleFavourite: mutate, isPending }
}

const useGetFavourites = () => {
  const { getFavourites } = favouritesServices()

  const { data, isLoading } = useQuery(getFavourites())

  const favourites: string[] = useMemo(() => {
    if (!data || isLoading) return []

    return data.payload
  }, [data, isLoading])

  return { favourites, isLoading }
}

export { useToggleFavourite, useGetFavourites }
