import { Fragment } from 'react'
import { DEFAULT_FILTERS, getFiltersRender } from './constants'
import { StyledFiltersSidePanel } from './styles'
import type { IFiltersSidePanelProps } from './types'
import type { FiltersUI } from '@/common/filters/types'

const FiltersSidePanel = ({ filters = DEFAULT_FILTERS }: IFiltersSidePanelProps) => {
  const withCategory: FiltersUI[] =
    filters.length === 0 || !filters.includes('category') ? ['category', ...filters] : filters

  const uniqueFilters = Array.from(new Set(withCategory))

  return (
    <StyledFiltersSidePanel flexDirection="column">
      {uniqueFilters.map((filter) => (
        <Fragment key={`filter-${filter}`}>{getFiltersRender(filter)}</Fragment>
      ))}
    </StyledFiltersSidePanel>
  )
}

export { FiltersSidePanel }
