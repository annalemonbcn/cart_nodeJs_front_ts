import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'

const activeStyles = css`
  background-color: ${t.color('whiteSmoke')};
  border-top-right-radius: ${t.borderRadius('sm')};
  border-bottom-right-radius: ${t.borderRadius('sm')};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${t.borderSize('sm')};
    background-color: ${t.color('darkNeutral')};
  }
`

const activeStylesMobile = css`
  background-color: ${t.color('whiteSmoke')};
  border-radius: ${t.borderRadius('sm')};
`

const StyledMenuItem = styled(FlexContainer)<{ isActive: boolean }>`
  padding: ${t.space('sm')} ${t.space('xl2')};
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      ${activeStylesMobile};
      ${media.tablet(activeStyles)};
    `}
`

export { StyledMenuItem }
