import { useState } from 'react'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { StyledBody, StyledHeading, StyledIcon, StyledIndicator } from './styles'
import type { IFilterSectionProps, IHeaderProps } from './types'

const Header = ({ title, isOpen, setIsOpen, isFilterActive, onClear, customIcon, numberOfSelected }: IHeaderProps) => {
  const [hovered, setHovered] = useState<boolean>(false)

  const getIcon = () => {
    if (customIcon) return customIcon
    return isOpen ? '/icons/chevron-up.svg' : '/icons/chevron-right.svg'
  }

  return (
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

        <StyledIcon src={getIcon()} alt="chevron" />
      </FlexContainer>
    </StyledHeading>
  )
}

const FilterSection = ({
  title,
  children,
  customIcon,
  defaultOpen = false,
  numberOfSelected,
  onClear
}: IFilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const isFilterActive = !!(numberOfSelected && numberOfSelected > 0)

  return (
    <FlexContainer flexDirection="column">
      <Header
        title={title}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isFilterActive={isFilterActive}
        onClear={onClear}
        customIcon={customIcon}
        numberOfSelected={numberOfSelected}
      />
      {isOpen && <StyledBody>{children}</StyledBody>}
    </FlexContainer>
  )
}

export { FilterSection }
