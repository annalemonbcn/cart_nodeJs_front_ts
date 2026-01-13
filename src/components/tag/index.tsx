import Text from '../text'
import { StyledTag } from './styles'
import type { TagProps } from './types'

const Tag = ({ text, onClick, isActive, ...rest }: TagProps) => (
  <StyledTag onClick={onClick} isActive={isActive} {...rest}>
    <Text color="darkNeutral" size="s3" weight={isActive ? 'bold' : 'medium'}>
      {text}
    </Text>
  </StyledTag>
)

export { Tag }
