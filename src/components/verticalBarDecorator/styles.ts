import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledDecorator = styled.div`
  background-color: ${colors.primary};
  width: 6px;
  height: auto;
  border-radius: ${tokens.borders.radius.md};
`

export { StyledDecorator }
