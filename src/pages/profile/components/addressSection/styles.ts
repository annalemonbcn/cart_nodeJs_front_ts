import { media } from '@/theme'
import { tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'

const StyledContainer = styled.div`
  display: grid;
  gap: ${tokens.space.lg};

  ${media.mobile(
    css`
      grid-template-columns: 1fr;
    `
  )}
  grid-template-columns: repeat(2, 1fr);
`

export { StyledContainer }
