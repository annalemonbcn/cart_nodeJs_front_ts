import Text from '@/components/text'
import { StyledContainer } from './styles'
import Title from '../titles/title'
import type { NoDataProps } from './types'

const NoDataRender = ({ title, description, align = 'center', children }: NoDataProps) => (
  <StyledContainer flexDirection="column" gap="sm" align={align}>
    <Title title={title} />
    <Text>{description}</Text>
    {children && children}
  </StyledContainer>
)

export default NoDataRender
