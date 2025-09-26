import styled from 'styled-components'
import type { IFlexContainerProps } from './types'

const StyledContainer = styled.div<IFlexContainerProps>`
  display: flex;
  ${({ flexDirection }) => (flexDirection ? `flex-direction: ${flexDirection};` : 'flex-direction: row')};
  ${({ wrap }) => (wrap ? `flex-wrap: ${wrap};` : 'flex-wrap: nowrap')};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
`

export { StyledContainer }
