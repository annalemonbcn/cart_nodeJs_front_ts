import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledTag = styled.div`
  text-align: center;
  padding: ${tokens.space.sm2} ${tokens.space.md};
  background-color: ${colors.whiteSmoke};
  border-radius: ${tokens.borders.radius.sm};
`

export { StyledTag }
