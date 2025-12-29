import styled, { css } from 'styled-components'
import { media, t } from '@/styles/themeHelpers'

const StyledContainer = styled.div`
  display: grid;
  gap: ${t.space('lg')};

  grid-template-columns: 1fr;
  ${media.tablet(css`
    grid-template-columns: repeat(2, 1fr);
  `)}
`

export { StyledContainer }
