import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'

const Content = styled(FlexContainer)`
  padding: 0 ${t.space('lg')} ${t.space('xl3')};

  ${media.tablet(
    css`
      padding: 0 ${t.space('xl3')} ${t.space('xl3')};
    `
  )}
  ${media.desktop(css`
    padding: 0 ${t.space('xl6')} ${t.space('xl3')};
  `)}
`

export { Content }
