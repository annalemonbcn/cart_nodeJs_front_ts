import { useState } from 'react'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { theme } from '@/theme'
import { StyledBody, StyledHeading, StyledIcon, StyledIndicator } from './styles'
import type { FilterSectionProps, HeaderProps, SelectionIndicatorProps } from './types'

const SelectionIndicator = ({
  hovered,
  setHovered,
  numberOfSelected,
  showClearOnHover = false,
  onClick
}: SelectionIndicatorProps) => (
  <StyledIndicator
    justifyContent="center"
    alignItems="center"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    hovered={hovered}
    onClick={onClick}
  >
    <Text size="s2" color="white">
      {showClearOnHover && hovered ? 'Clear' : numberOfSelected}
    </Text>
  </StyledIndicator>
)

const Header = ({ variant, title, isFilterActive, numberOfSelected, onClear, customIcon, onToggle }: HeaderProps) => {
  const [hovered, setHovered] = useState(false)

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClear?.()
  }

  if (variant === 'desktop') {
    return (
      <StyledHeading justifyContent="space-between" alignItems="center" onClick={onToggle}>
        <Text weight="medium" size="s5">
          {title}
        </Text>

        <FlexContainer justifyContent="space-between" alignItems="center" gap="sm">
          {isFilterActive && (
            <SelectionIndicator
              hovered={hovered}
              setHovered={setHovered}
              numberOfSelected={numberOfSelected}
              showClearOnHover
              onClick={handleClear}
            />
          )}

          <StyledIcon src={customIcon} alt="chevron" />
        </FlexContainer>
      </StyledHeading>
    )
  }

  return (
    <FlexContainer justifyContent="space-between" alignItems="center">
      <Text weight="medium" size="s5" color="darkNeutral">
        {title}
      </Text>

      {isFilterActive && (
        <FlexContainer alignItems="center" gap="xs">
          <SelectionIndicator hovered={hovered} setHovered={setHovered} numberOfSelected={numberOfSelected} />

          <div onClick={handleClear}>
            <Text size="s2" color="darkNeutral" weight="medium">
              Clear
            </Text>
          </div>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}

const FilterSection = ({
  title,
  children,
  customIcon,
  defaultOpen = false,
  numberOfSelected,
  onClear
}: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const isFilterActive = Boolean(numberOfSelected && numberOfSelected > 0)
  const isDesktop = useMediaQuery(theme.mq.js.up('md'))

  const iconSrc = () => {
    if (customIcon) return customIcon
    return isOpen ? '/icons/chevron-up.svg' : '/icons/chevron-right.svg'
  }

  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <FlexContainer flexDirection="column" {...(!isDesktop ? { gap: 'md' } : {})}>
      <Header
        variant={!isDesktop ? 'mobile' : 'desktop'}
        title={title}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isFilterActive={isFilterActive}
        onClear={onClear}
        customIcon={iconSrc()}
        numberOfSelected={numberOfSelected}
        onToggle={isDesktop? toggle : undefined}
      />

      {(isOpen || !isDesktop) && <StyledBody>{children}</StyledBody>}
    </FlexContainer>
  )
}

export { FilterSection }
