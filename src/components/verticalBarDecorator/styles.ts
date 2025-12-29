import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'

const StyledDecorator = styled.div`
  background-color: ${t.color('primary')};
  width: 6px;
  height: auto;
  border-radius: ${t.borderRadius('md')};
`

export { StyledDecorator }
