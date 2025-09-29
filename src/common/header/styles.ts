import styled from 'styled-components'
import { colors, tokens } from '@/variables/styles'
import { media } from '@/theme'
import FlexContainer from '@/components/flexContainer'

const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${colors.white};

  padding: 30px 100px;
  ${media.tablet(`padding: ${tokens.space.md} ${tokens.space.lg};`)}

  border-bottom: ${tokens.borders.size.xs} solid ${colors.lightNeutral};

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: ${tokens.space.xl2};

  ${media.mobile(`display: none;`)}
`

const StyledDesktopHeaderLinksWrapper = styled(FlexContainer)`
  ${media.tablet(`gap: ${tokens.space.xl2};`)}
  gap: ${tokens.space.xl5};
`

const StyledMobileHeader = styled.header`
  grid-area: header;
  background-color: ${colors.white};
  padding: ${tokens.space.md} ${tokens.space.lg};

  display: flex;
  align-items: center;

  ${media.tablet(`display: none;`)}
  ${media.desktop(`display: none;`)}
`

const Child = styled.div<{ align?: 'flex-start' | 'center' | 'flex-end' }>`
  flex: 1 0 0;
  display: flex;
  justify-content: ${({ align }) => align || 'flex-start'};
`

export { StyledHeader, StyledMobileHeader, Child, StyledDesktopHeaderLinksWrapper }
