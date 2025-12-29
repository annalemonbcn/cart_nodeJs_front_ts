import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import CloseIcon from '@/icons/close.svg?react'
import { media, t } from '@/styles/themeHelpers'
import type { HeaderProps, ModalWidth } from './types'

const StyledHeader = styled.div<Partial<HeaderProps>>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${t.space('sm')};
  align-items: ${({ alignCenter }) => alignCenter && 'center'};
`

const StyledCloseIconContainer = styled(FlexContainer)`
  cursor: pointer;
  align-self: flex-end;
`

const StyledCloseIcon = styled(CloseIcon)`
  color: ${t.color('darkNeutral')};
`

const StyledModalBody = styled(FlexContainer)`
  gap: ${t.space('md')};
  padding: ${t.space('md')} 0px;
  height: 100%;
  overflow-y: auto;
`

const StyledFooter = styled.div`
  display: flex;
  gap: ${t.space('md')};

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

const StyledModalWrapper = styled(FlexContainer)<{ width?: ModalWidth }>`
  width: 300px;
  height: ${({ width }) => HeightStyles[width || 'auto']};
  max-height: 700px;
  padding: ${t.space('lg')};
  box-sizing: content-box;

  ${({ width }) =>
    media.tablet(css`
      width: ${WidthStyles[width ?? 'auto']};
    `)}
`

export { StyledHeader, StyledCloseIconContainer, StyledCloseIcon, StyledModalBody, StyledFooter, StyledModalWrapper }
