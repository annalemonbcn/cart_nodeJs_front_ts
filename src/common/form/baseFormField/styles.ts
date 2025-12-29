import styled from 'styled-components'
import Input from '@/components/input'
import { t } from '@/styles/themeHelpers'

const StyledInput = styled(Input)<{ hasError?: boolean }>`
  margin-top: ${t.space('xs')};
`

export { StyledInput }
