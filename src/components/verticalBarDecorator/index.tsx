import FlexContainer from '../flexContainer'
import { StyledDecorator } from './styles'
import type { PropsWithChildren } from '@/variables/types/global.types'

const VerticalBarDecorator = ({ children }: PropsWithChildren) => (
  <FlexContainer gap="md">
    <StyledDecorator />
    {children}
  </FlexContainer>
)

export default VerticalBarDecorator
