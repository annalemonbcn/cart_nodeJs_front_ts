import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'

const StyledTag = styled.div`
  text-align: center;
  padding: ${t.space('sm2')} ${t.space('md')};
  background-color: ${t.color('whiteSmoke')};
  border-radius: ${t.borderRadius('sm')};
`

export { StyledTag }
