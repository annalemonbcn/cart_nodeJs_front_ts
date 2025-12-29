import styled, { css } from 'styled-components'
import { media, t } from '@/styles/themeHelpers'

const StyledHeader = styled.div`
  padding: ${t.space('md')} 0;

  ${media.tablet(css`
    padding: ${t.space('xl2')} 0;
  `)}
`

const tabletGridColumns = css`
  grid-template-columns: repeat(2, minmax(0, 1fr));
`

const desktopGridColumns = css`
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: ${t.space('lg')};
  row-gap: ${t.space('xl2')};

  ${media.tablet(tabletGridColumns)}
  ${media.desktop(desktopGridColumns)}
`

const mobileGridStyles = css`
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'filters'
    'body';
`

const desktopGridStyles = css`
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'filters header'
    'filters body';
`

const StyledCategoryLayout = styled.div`
  display: grid;
  gap: ${t.space('md')};
  align-items: flex-start;

  ${mobileGridStyles};
  ${media.tablet(desktopGridStyles)};
`

const StyledHeaderArea = styled.div`
  grid-area: header;
`

const StyledFiltersArea = styled.div`
  grid-area: filters;
`

const StyledBodyArea = styled.div`
  grid-area: body;
`

export { StyledHeader, StyledProductList, StyledCategoryLayout, StyledHeaderArea, StyledFiltersArea, StyledBodyArea }
