import styled, { css } from 'styled-components'
import { colors, tokens } from '@/variables/styles'
import FlexContainer from '@/components/flexContainer'

const borders = css`
  border: ${tokens.borders.size.xs} solid ${colors.lightNeutral};
  border-top: 0;
`

const StyledHeading = styled(FlexContainer)`
  padding: ${tokens.space.md} ${tokens.space.xl};
  ${borders};
  cursor: pointer;
`

const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
`

const StyledBody = styled.div`
  padding: ${tokens.space.xl2} ${tokens.space.xl};
  ${borders}
`

const hoveredStyles = css`
  width: auto;
  padding: ${tokens.space.xs2};
  border-radius: ${tokens.borders.radius.md};
  opacity: 0.8;
`

const StyledIndicator = styled(FlexContainer)<{ hovered: boolean }>`
  background-color: ${colors.primary};
  border-radius: ${tokens.borders.radius.full};
  width: 20px;
  height: 20px;

  ${({ hovered }) => hovered && hoveredStyles}
`

export { StyledHeading, StyledBody, StyledIcon, StyledIndicator }
