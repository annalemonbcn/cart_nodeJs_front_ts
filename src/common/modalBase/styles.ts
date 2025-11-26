import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'
import { tokens } from '@/variables/styles'
import type { HeaderProps, ModalWidth } from './types'

const StyledHeader = styled.div<Partial<HeaderProps>>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${tokens.space.sm};
  align-items: ${({ alignCenter }) => alignCenter && 'center'};
`

const StyledCloseIcon = styled(FlexContainer)`
  cursor: pointer;
  align-self: flex-end;
`

const StyledModalBody = styled(FlexContainer)`
  gap: ${tokens.space.md};
  padding: ${tokens.space.md} 0px;
  height: 100%;
  overflow-y: auto;
`

const StyledFooter = styled.div`
  display: flex;
  gap: ${tokens.space.md};

  & * {
    flex-grow: 1;
  }
`

const WidthStyles: Record<ModalWidth, string> = {
  sm: '300px',
  md: '500px',
  lg: '800px',
  full: '90vw',
  auto: ''
}

const HeightStyles: Record<ModalWidth, string> = {
  sm: 'auto',
  md: 'auto',
  lg: 'auto',
  full: '80vh',
  auto: 'auto'
}

const StyledModalWrapper = styled.div<{ width?: ModalWidth }>`
  width: ${({ width }) => WidthStyles[width || 'auto']};
  height: ${({ width }) => HeightStyles[width || 'auto']};
  max-height: 700px;
  padding: ${tokens.space.lg};
  box-sizing: content-box;
  display: flex;
  flex-direction: column;

  ${media.mobile(
    css`
      width: 300px;
    `
  )}
`

export { StyledHeader, StyledCloseIcon, StyledModalBody, StyledFooter, StyledModalWrapper }
