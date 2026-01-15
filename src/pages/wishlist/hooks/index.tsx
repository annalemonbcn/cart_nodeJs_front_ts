import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { favouritesServices } from '@/services/favourites'

const useGetFavouritesProducts = () => {
  const { getFavouriteProducts } = favouritesServices()

  const { data, isLoading } = useQuery(getFavouriteProducts())

  const favourites = useMemo(() => {
    if (!data || isLoading) return []

    return data.payload
  }, [data, isLoading])

  return { data: favourites, isLoading }
}

export { useGetFavouritesProducts }
