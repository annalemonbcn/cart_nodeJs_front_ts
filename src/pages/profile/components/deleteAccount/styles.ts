import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'

const StyledFooter = styled(FlexContainer)`
  margin-top: ${t.space('sm2')};
  flex-direction: column;

  ${media.tablet(css`
    flex-direction: row;
    gap: ${t.space('md')};
  `)}

  & * {
    flex: 1 0 0;
  }
`

export { StyledFooter }
