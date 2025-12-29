import styled, { css } from 'styled-components'
import { media, t } from '@/styles/themeHelpers'

const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${t.color('white')};

  padding: ${t.space('md')} ${t.space('lg')};

  display: flex;
  align-items: center;

  ${media.tablet(css`
    justify-content: space-between;
  `)};

  ${media.desktop(css`
    padding: 30px 100px;
    gap: ${t.space('xl2')};
  `)};
`

const Child = styled.div<{ align?: 'flex-start' | 'center' | 'flex-end' }>`
  flex: 1 0 0;
  display: flex;
  justify-content: ${({ align }) => align || 'flex-start'};
`

export { StyledHeader, Child }
