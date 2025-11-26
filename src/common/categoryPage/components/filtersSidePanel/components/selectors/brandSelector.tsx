import { SelectorFilter } from '@/common/filters/components/selectorFilter'
import type { SelectorOption } from '@/common/filters/components/selectorFilter/types'

const BrandSelector = ({ brands }: { brands: SelectorOption[] }) => (
  <SelectorFilter
    options={brands}
    title="Brand"
    filterName="brand"
    noDataText="No brands available for this criteria"
  />
)

export { BrandSelector }
