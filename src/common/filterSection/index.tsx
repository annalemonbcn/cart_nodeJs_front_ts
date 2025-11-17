import { useState } from 'react'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { StyledBody, StyledHeading, StyledIcon, StyledIndicator } from './styles'
import type { IFilterSectionProps } from './types'

const FilterSection = ({
  title,
  children,
  customIcon,
  defaultOpen = false,
  numberOfSelected,
  onClear
}: IFilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [hovered, setHovered] = useState<boolean>(false)

  const icon = isOpen ? '/icons/chevron-up.svg' : '/icons/chevron-right.svg'

  const isFilterActive = !!(numberOfSelected && numberOfSelected > 0)

  return (
    <FlexContainer flexDirection="column">
      <StyledHeading justifyContent="space-between" alignItems="center" onClick={() => setIsOpen(!isOpen)}>
        <Text weight="medium" size="s5">
          {title}
        </Text>

        <FlexContainer justifyContent="space-between" alignItems="center" gap={tokens.space.sm}>
          {isFilterActive && (
            <StyledIndicator
              justifyContent="center"
              alignItems="center"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              hovered={hovered}
              onClick={(e) => {
                e.stopPropagation()
                if (onClear) {
                  onClear()
                }
              }}
            >
              <Text size="s2" color="white">
                {hovered ? 'Clear' : numberOfSelected}
              </Text>
            </StyledIndicator>
          )}

          <StyledIcon src={customIcon || icon} alt="chevron" />
        </FlexContainer>
      </StyledHeading>

      {isOpen && <StyledBody>{children}</StyledBody>}
    </FlexContainer>
  )
}

export { FilterSection }
