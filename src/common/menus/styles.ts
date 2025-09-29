import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'
import { colors, tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'

const activeStyles = css`
  background-color: ${colors.whiteSmoke};
  border-top-right-radius: ${tokens.borders.radius.sm};
  border-bottom-right-radius: ${tokens.borders.radius.sm};

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

const activeStylesMobile = css`
  background-color: ${colors.whiteSmoke};
  border-radius: ${tokens.borders.radius.sm};
`

const StyledMenuItem = styled(FlexContainer)<{ isActive: boolean }>`
  padding: ${tokens.space.sm} ${tokens.space.xl2};
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      ${media.mobile(activeStylesMobile)}
      ${media.tablet(activeStyles)}
      ${media.desktop(activeStyles)}
    `}
`

export { StyledMenuItem }
