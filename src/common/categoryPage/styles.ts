import styled, { css } from 'styled-components'
import { media } from '@/theme'
import { tokens } from '@/variables/styles'

const StyledHeader = styled.div`
  padding: ${tokens.space.xl2} 0;

  ${media.mobile(css`
    padding: ${tokens.space.md} 0;
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
  column-gap: ${tokens.space.lg};
  row-gap: ${tokens.space.xl2};

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
  gap: ${tokens.space.md};
  align-items: flex-start;

  ${media.mobile(mobileGridStyles)};
  ${media.tablet(desktopGridStyles)};
  ${media.desktop(desktopGridStyles)};
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
