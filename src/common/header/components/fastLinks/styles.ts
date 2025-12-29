import styled, { css } from 'styled-components'
import Button from '@/components/button'
import { t } from '@/styles/themeHelpers'

const StyledButton = styled(Button)<{ isActive: boolean }>`
  max-width: 44px;
  max-height: 44px;

  & path {
    ${({ isActive }) =>
      isActive &&
      css`
        stroke: ${t.color('white')};
      `}
  }
`

export { StyledButton }
