import styled, { css, keyframes } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'
import { tokens } from '@/variables/styles'

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 100;
`

const mobileStyles = css`
  border-radius: 0;
  width: 100%;
`

const desktopStyles = css`
  border-top-left-radius: ${tokens.borders.radius.md};
  border-bottom-left-radius: ${tokens.borders.radius.md};
  width: 400px;
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: ${tokens.space.lg};

  height: 100dvh;
  padding: ${tokens.space.lg};

  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999;

  background-color: white;
  box-shadow: ${tokens.shadows.basic};

  ${media.mobile(mobileStyles)};
  ${media.tablet(desktopStyles)};
  ${media.desktop(desktopStyles)};

  animation: ${slideIn} 0.3s ease-out;
`

const StyledBody = styled(FlexContainer)`
  flex-direction: column;
  justify-content: flex-start;

  padding-right: ${tokens.space.xs};

  overflow-x: hidden;
`

const StyledFooter = styled(FlexContainer)`
  & > * {
    flex-grow: 1;
  }
`

export { StyledOverlay, StyledContainer, StyledBody, StyledFooter }
