import { RangeFilter } from '@/common/filters/components/rangeFilter'
import type { PriceRange } from '@/domain/filters/types'

const PriceFilter = ({ priceRange: { min, max } }: { priceRange: PriceRange }) => (
  <RangeFilter minPrice={min} maxPrice={max} noDataText="No price ranges availables for this criteria" />
)

export { PriceFilter }
