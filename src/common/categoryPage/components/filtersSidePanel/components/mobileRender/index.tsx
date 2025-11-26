import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { useDrawerContext } from '@/hooks/useDrawerContext'
import { tokens } from '@/variables/styles'
import { FiltersDrawer } from './filtersDrawer'
import { StyledFilterIcon, StyledMobileFiltersSidePanel } from './styles'

const MobileRender = () => {
  const { handleOpen } = useDrawerContext()

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

      <FiltersDrawer />
    </>
  )
}

export { MobileRender }
