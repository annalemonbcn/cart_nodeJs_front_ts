import { BrandSelector } from '@/common/filters/components/brandSelector'
import { CategoriesFilter } from '@/common/filters/components/categoriesFilter'
import { ColorsFilter } from '@/common/filters/components/colorFilter'
import { PriceFilter } from '@/common/filters/components/priceFilter'
import { SizeFilter } from '@/common/filters/components/sizeFilter'
import { StyledFiltersSidePanel } from './styles'

// TODO: create a filters to use array
const FiltersSidePanel = () => (
  <StyledFiltersSidePanel flexDirection="column">
    <CategoriesFilter />
    <PriceFilter />
    <BrandSelector />
    <ColorsFilter />
    <SizeFilter />
  </StyledFiltersSidePanel>
)

export { FiltersSidePanel }
