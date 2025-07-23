import Input from '@/components/input'
import styled, { css } from 'styled-components'
import { colors, tokens } from '@/variables/styles'

const errorStyles = css`
  padding-left: ${tokens.space.sm2};
  background: linear-gradient(65deg, ${colors.danger[100]} 0%, ${colors.white} 100%);
  color: ${colors.danger[800]};
`

const StyledInput = styled(Input)<{ hasError?: boolean }>`
  margin-top: ${tokens.space.xs};

  transition: all 0.2s ease-in-out;

  &:focus {
    background-color: ${colors.whiteSmoke};
    padding-left: ${tokens.space.sm2};
  }

  ${({ hasError }) => hasError && errorStyles};
`

export { StyledInput }
