import { RangeFilter } from '@/common/filters/components/rangeFilter'

const useGetPriceRanges = () => {
  const minPrice = 40
  const maxPrice = 340

  return { minPrice, maxPrice }
}

const PriceFilter = () => {
  const { minPrice, maxPrice } = useGetPriceRanges()

  return (
    <RangeFilter minPrice={minPrice} maxPrice={maxPrice} noDataText="No price ranges availables for this criteria" />
  )
}

export { PriceFilter }
