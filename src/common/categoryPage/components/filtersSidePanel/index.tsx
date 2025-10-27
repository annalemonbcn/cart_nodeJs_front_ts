import { StyledFiltersSidePanel } from './styles'
import { CategoriesFilter } from '../../../filters/components/categoriesFilter'
import { PriceFilter } from '../../../filters/components/priceFilter'

const FiltersSidePanel = () => (
  <StyledFiltersSidePanel flexDirection="column">
    <CategoriesFilter />
    <PriceFilter />
  </StyledFiltersSidePanel>
)

export { FiltersSidePanel }
