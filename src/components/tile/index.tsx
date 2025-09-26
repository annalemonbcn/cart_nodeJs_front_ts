import FlexContainer from '@/components/flexContainer'
import { StyledArrow, StyledTile } from './styles'
import type { ITileProps } from './types'
import { tokens } from '@/variables/styles'
import Text from '@/components/text'

const Tile = ({ tileStyle = 'square', imgSrc, title, description, showArrow }: ITileProps) => (
  <FlexContainer flexDirection="column" gap={tokens.space.lg}>
    <StyledTile tileStyle={tileStyle}>
      <img src={imgSrc} alt={title} />
    </StyledTile>

    <FlexContainer justifyContent="space-between" alignItems="center">
      <FlexContainer flexDirection="column" gap={tokens.space.xs2}>
        <Text weight="bold" color="darkNeutral">
          {title}
        </Text>
        <Text size="s3">{description}</Text>
      </FlexContainer>

      {showArrow && <StyledArrow src="/icons/arrow.svg" alt="arrow-icon" />}
    </FlexContainer>
  </FlexContainer>
)

export default Tile
