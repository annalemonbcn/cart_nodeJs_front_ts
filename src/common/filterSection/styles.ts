import styled, { css } from 'styled-components'
import { colors, tokens } from '@/variables/styles'
import FlexContainer from '@/components/flexContainer'

const BorderBottom = css`
  border-bottom: 1px solid ${colors.lightNeutral};
`

const StyledHeading = styled(FlexContainer)`
  padding: ${tokens.space.md} ${tokens.space.xl};
  ${BorderBottom}
`

const StyledBody = styled.div`
  padding: ${tokens.space.md} ${tokens.space.xl};
  ${BorderBottom}
`

export { StyledHeading, StyledBody }
