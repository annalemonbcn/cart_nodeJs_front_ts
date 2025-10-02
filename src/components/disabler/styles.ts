import styled from 'styled-components'
import { colors, tokens } from '@/variables/styles'

const StyledWrapper = styled.div`
  position: relative;
`

const StyledDisabler = styled.div`
  background-color: ${colors.lightNeutral};

  &:hover {
    cursor: not-allowed;
  }

  opacity: 0.5;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: ${tokens.borders.radius.sm};
`

export { StyledWrapper, StyledDisabler }
