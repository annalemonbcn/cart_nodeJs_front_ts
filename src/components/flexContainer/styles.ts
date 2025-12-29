import styled from 'styled-components'
import type { IFlexContainerProps } from './types'

const StyledContainer = styled.div<IFlexContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};

  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  
${({ theme, gap }) => gap && `gap: ${theme.tokens.space[gap]};`}

  ${({ theme, rowGap }) => rowGap && `row-gap: ${theme.tokens.space[rowGap]};`}
`

export { StyledContainer }
