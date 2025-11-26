import { useState } from 'react'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { StyledFilterIcon, StyledMobileFiltersSidePanel } from './styles'

const MobileRender = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <StyledMobileFiltersSidePanel>
      <Button variant="text" onClick={toggle}>
        <FlexContainer alignItems="center" gap={tokens.space.xs2}>
          <Text size="s3" weight="bold">
            Filters
          </Text>
          <StyledFilterIcon width={16} height={16} />
        </FlexContainer>
      </Button>
    </StyledMobileFiltersSidePanel>
  )
}

export { MobileRender }
