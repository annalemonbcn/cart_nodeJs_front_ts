import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import type { IAuthLayoutProps } from './types'
import { tokens } from '@/variables/styles'
import { media } from '@/theme'

const StyledAuthLayout = styled(FlexContainer)`
  height: 100%;
`

const StyledInnerContent = styled(FlexContainer)`
  height: 100%;
`

const ImageContainer = styled.div<Pick<IAuthLayoutProps, 'imgSrc'>>`
  ${media.mobile(
    css`
      display: none;
    `
  )}
  width: 50%;
  background-image: url('${({ imgSrc }) => imgSrc}');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`

const FormContainer = styled(FlexContainer)`
  ${media.mobile(
    css`
      flex: 0 0 100%;
      padding: ${tokens.space.xl2};
    `
  )}
  ${media.tablet(
    css`
      padding: ${tokens.space.xl2};
    `
  )}

  flex: 0 0 50%;
  padding: ${tokens.space.xl2} ${tokens.space.xl5};
`

export { StyledAuthLayout, StyledInnerContent, ImageContainer, FormContainer }
