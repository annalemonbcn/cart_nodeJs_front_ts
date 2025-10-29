import { CategoriesFilter } from '@/common/filters/components/categoriesFilter'
import { ColorsFilter } from '@/common/filters/components/colorFilter'
import { PriceFilter } from '@/common/filters/components/priceFilter'
import { StyledFiltersSidePanel } from './styles'
import { SizeFilter } from '@/common/filters/components/sizeFilter'

// TODO: add brand selector
const FiltersSidePanel = () => (
  <StyledFiltersSidePanel flexDirection="column">
    <CategoriesFilter />
    <PriceFilter />
    <ColorsFilter />
    <SizeFilter />
  </StyledFiltersSidePanel>
)

export { FiltersSidePanel }
