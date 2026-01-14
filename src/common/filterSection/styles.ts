import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'

const borders = css`
  border: 0;

  ${media.tablet(css`
    border: 1px solid ${t.color('lightNeutral')};
    border-top: 0;
  `)};
`

const paddingHeader = css`
  ${media.tablet(css`
    padding: ${t.space('md')} ${t.space('xl')};
  `)};
`

const StyledHeading = styled(FlexContainer)`
  ${paddingHeader};
  ${borders};
  cursor: pointer;
`

const StyledIcon = styled.img`
  display: none;

  ${media.tablet(css`
    display: block;
    width: 20px;
    height: 20px;
  `)};
`

const paddingBody = css`
  ${media.tablet(css`
    padding: ${t.space('lg')};
  `)};

  ${media.desktop(css`
    padding: ${t.space('xl2')} ${t.space('xl')};
  `)};
`

const StyledBody = styled.div`
  ${borders};
  ${paddingBody};
`

const hoveredStyles = css`
  width: auto;
  padding: ${t.space('xs2')};
  border-radius: ${t.borderRadius('md')};
  opacity: 0.8;
`

const StyledIndicator = styled(FlexContainer)<{ hovered: boolean }>`
  background-color: ${t.color('primary')};
  border-radius: ${t.borderRadius('full')};
  width: 20px;
  height: 20px;

  ${({ hovered }) => hovered && hoveredStyles};
`

export { StyledHeading, StyledBody, StyledIcon, StyledIndicator }
