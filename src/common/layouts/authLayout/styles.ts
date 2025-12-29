import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'
import type { IAuthLayoutProps } from './types'

const StyledAuthLayout = styled(FlexContainer)`
  height: 100%;
`

const StyledInnerContent = styled(FlexContainer)`
  height: 100%;
`

const ImageContainer = styled.div<Pick<IAuthLayoutProps, 'imgSrc'>>`
  display: none;

  background-image: url('${({ imgSrc }) => imgSrc}');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  ${media.tablet(css`
    display: block;
    width: 50%;
  `)}
`

const FormContainer = styled(FlexContainer)`
  flex: 0 0 100%;
  padding: ${t.space('xl2')};

  ${media.tablet(
    css`
      padding: ${t.space('xl2')};
    `
  )}
  ${media.desktop(css`
    flex: 0 0 50%;
    padding: ${t.space('xl2')} ${t.space('xl5')};
  `)}
`

export { StyledAuthLayout, StyledInnerContent, ImageContainer, FormContainer }
