import FlexContainer from '@/components/flexContainer'
import { colors, tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'

const isActiveStyles = css`
  background-color: ${colors.whiteSmoke};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${tokens.borders.size.sm};
    background-color: ${colors.darkNeutral};
  }
`

const StyledMenuItem = styled(FlexContainer)<{ isActive: boolean }>`
  padding: ${tokens.space.sm} ${tokens.space.xl2};
  position: relative;

  ${({ isActive }) => isActive && isActiveStyles}
`

export { StyledMenuItem }
