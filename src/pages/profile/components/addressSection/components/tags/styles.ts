import Button from '@/components/button'
import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledTag = styled(Button)`
  cursor: auto;
  color: ${colors.mediumNeutral};
  border-color: ${colors.mediumNeutral};
  padding: ${tokens.space.xs} ${tokens.space.md};

  &:hover {
    opacity: 1;
  }
`

export { StyledTag }
