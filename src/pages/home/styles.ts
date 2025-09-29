import { tokens } from '@/variables/styles'
import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'

const Content = styled(FlexContainer)`
  ${media.mobile(`padding: 0 ${tokens.space.lg};`)}
  ${media.tablet(`padding: 0 ${tokens.space.xl3};`)}
  padding: 0 ${tokens.space.xl6};
`

export { Content }
