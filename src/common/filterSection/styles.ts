import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'

const borders = css`
  border: 0;

  ${media.desktop(css`
    border: 1px solid ${t.color('lightNeutral')};
    border-top: 0;
  `)};
`

const mobilePadding = css`
  padding: 0 ${({ theme }) => theme.tokens.space.xl};
`

const paddingHeader = css`
  ${mobilePadding};

  ${media.desktop(css`
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

  ${media.desktop(css`
    display: block;
    width: 20px;
    height: 20px;
  `)};
`

const paddingBody = css`
  ${mobilePadding};

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
  border-radius: ${t.radius('md')};
  opacity: 0.8;
`

const StyledIndicator = styled(FlexContainer)<{ hovered: boolean }>`
  background-color: ${t.color('primary')};
  border-radius: ${t.radius('full')};
  width: 20px;
  height: 20px;

  ${({ hovered }) => hovered && hoveredStyles};
`

export { StyledHeading, StyledBody, StyledIcon, StyledIndicator }
