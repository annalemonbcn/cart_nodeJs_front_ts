import styled from 'styled-components'
import { colors, tokens } from '@/variables/styles'

const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${colors.white};
  padding: 30px 100px;

  border-bottom: ${tokens.borders.size.xs} solid ${colors.lightNeutral};

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

export { StyledHeader }
