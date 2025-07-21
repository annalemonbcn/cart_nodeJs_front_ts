import Button from '@/components/button'
import { colors } from '@/variables/styles'
import styled from 'styled-components'

const StyledButton = styled(Button)<{ isActive: boolean }>`
max-width: 44px;
max-height: 44px;

  & path {
    ${({ isActive }) => isActive && `stroke: ${colors.white};`}
  }
`

export { StyledButton }
