import { Fragment } from 'react'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Loader from '@/components/loader'
import Text from '@/components/text'
import { useDrawerContext } from '@/hooks/useDrawerContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { theme } from '@/theme'
import { FiltersDrawer } from './components/filtersDrawer'
import { DEFAULT_FILTERS, getFiltersRender } from './constants'
import { useGetFiltersData, useGetUniqueFilters } from './hooks'
import { StyledDesktopFiltersSidePanel, StyledFilterIcon } from './styles'
import type { FiltersSidePanelProps } from './types'
import type { PropsWithChildren } from '@/variables/types/global.types'

const MobileTrigger = () => {
  const { handleOpen } = useDrawerContext()

  return (
    <Button variant="text" onClick={handleOpen}>
      <FlexContainer alignItems="center" gap={'xs2'}>
        <Text size="s3" weight="bold">
          Filters
        </Text>
        <StyledFilterIcon width={16} height={16} />
      </FlexContainer>
    </Button>
  )
}

const FiltersShell = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery(theme.mq.js.up('md'))

  if (isDesktop) {
    return <StyledDesktopFiltersSidePanel flexDirection="column">{children}</StyledDesktopFiltersSidePanel>
  }

  return (
    <>
      <MobileTrigger />
      <FiltersDrawer>{children}</FiltersDrawer>
    </>
  )
}

const FiltersSidePanel = ({ filters = DEFAULT_FILTERS }: FiltersSidePanelProps) => {
  const { data, isLoading } = useGetFiltersData()
  const uniqueFilters = useGetUniqueFilters(filters)

  // TODO: replace loader for skeleton
  if (isLoading) return <Loader />

  return (
    <FiltersShell>
      {uniqueFilters.map((filter) => (
        <Fragment key={`filter-${filter}`}>{getFiltersRender(filter, data)}</Fragment>
      ))}
    </FiltersShell>
  )
}

export { FiltersSidePanel }
