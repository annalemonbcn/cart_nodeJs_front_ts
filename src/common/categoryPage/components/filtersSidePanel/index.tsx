import Loader from '@/components/loader'
import { DrawerProvider } from '@/hooks/useDrawerContext/provider'
import { DesktopRender } from './components/desktopRender'
import { MobileRender } from './components/mobileRender'
import { DEFAULT_FILTERS } from './constants'
import { useGetFiltersData } from './hooks'
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
    <>
      <DrawerProvider>
        <MobileRender />
      </DrawerProvider>
      <DesktopRender uniqueFilters={uniqueFilters} cleanedData={cleanedData} />
    </>
  )
}

export { FiltersSidePanel }
