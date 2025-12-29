import Select from 'react-select'
import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'

const StyledSelect = styled(Select)`
  & * {
    font-size: ${t.fontSize('s3')};
  }
`

export { StyledSelect }
