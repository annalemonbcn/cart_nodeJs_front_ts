import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { useDrawerContext } from '@/hooks/useDrawerContext'
import { tokens } from '@/variables/styles'
import { FiltersDrawer } from './filtersDrawer'
import { StyledFilterIcon, StyledMobileFiltersSidePanel } from './styles'
import { useGetFiltersData } from '../../hooks'
import type { CommonFilterRenderProps } from '../../types'

const MobileRender = ({ filters }: CommonFilterRenderProps) => {
  const { handleOpen } = useDrawerContext()

  const { data } = useGetFiltersData()

  return (
    <>
      <StyledMobileFiltersSidePanel>
        <Button variant="text" onClick={handleOpen}>
          <FlexContainer alignItems="center" gap={tokens.space.xs2}>
            <Text size="s3" weight="bold">
              Filters
            </Text>
            <StyledFilterIcon width={16} height={16} />
          </FlexContainer>
        </Button>
      </StyledMobileFiltersSidePanel>

      <FiltersDrawer filters={filters} data={data} />
    </>
  )
}

export { MobileRender }
