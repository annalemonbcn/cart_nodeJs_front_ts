import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { StyledBody, StyledHeading } from './styles'
import type { IFilterSectionProps, HeadingProps } from './types'

const Heading = ({ title, isOpen = false, customIcon, toggleOpen }: HeadingProps) => {
  const icon = isOpen ? '/icons/chevron-up.svg' : '/icons/chevron-right.svg'

  return (
    <StyledHeading justifyContent="space-between" alignItems="center">
      <Text weight="medium" size="s5">
        {title}
      </Text>

      <img
        src={customIcon || icon}
        alt="arrow"
        width={20}
        height={20}
        onClick={toggleOpen}
        style={{ cursor: 'pointer' }}
      />
    </StyledHeading>
  )
}

const FilterSection = ({ children, ...rest }: IFilterSectionProps) => (
  <FlexContainer flexDirection="column">
    <Heading {...rest} />

    {rest.isOpen && <StyledBody>{children}</StyledBody>}
  </FlexContainer>
)

export { FilterSection }
