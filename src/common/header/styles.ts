import styled, { css } from 'styled-components'
import { media, t } from '@/styles/themeHelpers'

const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${t.color('white')};
  padding: ${t.space('md')} ${t.space('lg')};

  display: grid;
  align-items: center;
  gap: ${t.space('md')};

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'left center right';

  ${media.tablet(css`
    grid-template-columns: auto 1fr;
    grid-template-areas: 'left right';
  `)}

  ${media.desktop(css`
    padding: ${t.space('xl')} ${t.space('xl5')};
  `)}
`

const SlotLeft = styled.div`
  grid-area: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${t.space('md')};

  .logoDesktop {
    display: none;
  }

  ${media.tablet(css`
    .logoDesktop {
      display: block;
    }
  `)}
`

const SlotCenter = styled.div`
  grid-area: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .logoMobile {
    display: block;
  }

  ${media.tablet(css`
    display: none;
  `)}
`

const SlotRight = styled.div`
  grid-area: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.space('xl2')};

  .nav,
  .auth {
    display: none;
  }

  ${media.tablet(css`
    .nav,
    .auth {
      display: flex;
      gap: ${t.space('lg')};
    }
  `)}

  ${media.desktop(css`
    gap: ${t.space('xl5')};
    .nav {
      gap: ${t.space('xl2')};
    }
  `)}
`

const HamburgerButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;

  ${media.tablet(css`
    display: none;
  `)}
`

export { StyledHeader, HamburgerButton, SlotLeft, SlotCenter, SlotRight }
