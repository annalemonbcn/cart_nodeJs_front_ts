import Text from '../text'
import { StyledTag } from './styles'

const Tag = ({ text }: { text: string }) => (
  <StyledTag>
    <Text weight="bold" color="darkNeutral" size="s3">
      {text}
    </Text>
  </StyledTag>
)

export { Tag }
