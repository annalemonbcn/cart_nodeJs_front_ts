import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { StyledContainer } from './styles'
import Title from '../titles/title'
import type { INoDataProps } from './types'

const NoDataRender = ({ title, description }: INoDataProps) => (
  <StyledContainer flexDirection="column" gap={tokens.space.sm}>
    <Title title={title} />
    <Text>{description}</Text>
  </StyledContainer>
)

export default NoDataRender
