import Select from 'react-select'
import styled from 'styled-components'
import { tokens } from '@/variables/styles'

const StyledSelect = styled(Select)`
  & * {
    font-size: ${tokens.font.size.s3};
  }
`

export { StyledSelect }
