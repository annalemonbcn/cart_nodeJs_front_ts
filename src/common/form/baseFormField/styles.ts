import Input from '@/components/input'
import styled from 'styled-components'
import { tokens } from '@/variables/styles'

const StyledInput = styled(Input)<{ hasError?: boolean }>`
  margin-top: ${tokens.space.xs};
`

export { StyledInput }
