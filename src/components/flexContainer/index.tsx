import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { StyledContainer } from './styles'

const FlexContainer: FC<PropsWithChildren<ComponentProps<typeof StyledContainer>>> = ({ children, ...rest }) => (
  <StyledContainer {...rest}>{children}</StyledContainer>
)

export default FlexContainer
