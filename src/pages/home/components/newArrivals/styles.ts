import { media } from '@/theme'
import styled from 'styled-components'

const StyledDesktopWrapper = styled.div`
  ${media.mobile(`display: none;`)}
`

const StyledMobileWrapper = styled.div`
  ${media.tablet(`display: none;`)}
  ${media.desktop(`display: none;`)}
`

export { StyledDesktopWrapper, StyledMobileWrapper }
