import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'
import { theme } from '@/theme'

const StyledMenuWrapper = styled(FlexContainer)`
  gap: ${t.space('sm2')};

  overflow-x: auto;
  max-width: calc(100vw - (${t.space('lg')}*2));
  padding-bottom: ${t.space('xs')};
  scroll-snap-type: x mandatory;

  ${theme.mq.css.up('md')} {
    flex-direction: column;
  }
`

const menuItemMobileStyles = css`
  border: ${t.borderSize('xs')} solid ${t.color('lightNeutral')};
  border-radius: ${t.borderRadius('sm')};
`

const menuItemDesktopStyles = css`
  border: 0;
  border-radius: 0;
`

const menuItemActiveMobileStyles = css`
  background-color: ${t.color('lightPrimary')};
  border-color: ${t.color('darkNeutral')};
`

const menuItemActiveDesktopStyles = css`
  background-color: ${t.color('lightPrimary')};
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

const StyledMenuItem = styled(FlexContainer)<{ isActive: boolean }>`
  padding: ${t.space('sm')} ${t.space('xl2')};
  position: relative;

  ${menuItemMobileStyles};
  ${media.tablet(menuItemDesktopStyles)};

  ${({ isActive }) =>
    isActive &&
    css`
      ${menuItemActiveMobileStyles};
      ${media.tablet(menuItemActiveDesktopStyles)};
    `}
`

export { StyledMenuWrapper, StyledMenuItem }
