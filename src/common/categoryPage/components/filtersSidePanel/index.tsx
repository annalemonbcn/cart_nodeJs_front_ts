import Loader from '@/components/loader'
import { DrawerProvider } from '@/hooks/useDrawerContext/provider'
import { DesktopRender } from './components/desktopRender'
import { MobileRender } from './components/mobileRender'
import { DEFAULT_FILTERS } from './constants'
import { useGetFiltersData, useGetUniqueFilters } from './hooks'
import type { FiltersSidePanelProps } from './types'

// TODO: don't duplicate tree elements for mobile and desktop ! 
// use useIsMobile instead
// change everywhere
const FiltersSidePanel = ({ filters = DEFAULT_FILTERS }: FiltersSidePanelProps) => {
  const { isLoading } = useGetFiltersData()
  const uniqueFilters = useGetUniqueFilters(filters)

  // TODO: replace loader for skeleton
  if (isLoading) return <Loader />

  return (
    <>
      <DrawerProvider>
        <MobileRender filters={uniqueFilters} />
      </DrawerProvider>
      <DesktopRender filters={uniqueFilters} />
    </>
  )
}

export { FiltersSidePanel }
