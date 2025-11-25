import { Fragment } from 'react'
import Loader from '@/components/loader'
import { DEFAULT_FILTERS, getFiltersRender } from './constants'
import { useGetFiltersData } from './hooks'
import { StyledFiltersSidePanel } from './styles'
import { cleanFiltersData } from './utils'
import type { IFiltersSidePanelProps } from './types'
import type { FiltersUI } from '@/common/filters/types'

const FiltersSidePanel = ({ filters = DEFAULT_FILTERS }: IFiltersSidePanelProps) => {
  const { data, isLoading } = useGetFiltersData()
  const cleanedData = cleanFiltersData(data)

  const withCategory: FiltersUI[] =
    filters.length === 0 || !filters.includes('category') ? ['category', ...filters] : filters

  const uniqueFilters = Array.from(new Set(withCategory))

  // TODO: replace loader for skeleton
  if (isLoading) return <Loader />

  return (
    <StyledFiltersSidePanel flexDirection="column">
      {uniqueFilters.map((filter) => (
        <Fragment key={`filter-${filter}`}>{getFiltersRender(filter, cleanedData)}</Fragment>
      ))}
    </StyledFiltersSidePanel>
  )
}

export { FiltersSidePanel }
