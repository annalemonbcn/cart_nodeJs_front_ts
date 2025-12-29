import styled from 'styled-components'
import Button from '@/components/button'
import { t } from '@/styles/themeHelpers'

const StyledTag = styled(Button)`
  cursor: auto;
  color: ${t.color('mediumNeutral')};
  border-color: ${t.color('mediumNeutral')};
  padding: ${t.space('xs')} ${t.space('md')};

  &:hover {
    opacity: 1;
  }
`

export { StyledTag }
