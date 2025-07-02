import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables'
import styled from 'styled-components'

const StyledShowPasswordIcon = styled(FlexContainer)`
  cursor: pointer;
`

const StyledIcon = styled.img`
  width: ${tokens.space.md};
  height: ${tokens.space.md};
`

export { StyledIcon, StyledShowPasswordIcon }
