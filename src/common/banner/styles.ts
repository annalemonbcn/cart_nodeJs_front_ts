import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'
import type { BannerProps } from './types'

const StyledBanner = styled.div`
  position: relative;
`

const ImageContainer = styled.div<{ imgSrc: string }>`
  width: 100%;
  height: 75vh;
  background-image: url('${({ imgSrc }) => imgSrc}');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`

const StyledTextContainer = styled(FlexContainer)<Pick<BannerProps, 'align'>>`
  position: absolute;
  top: 0;
  ${({ align }) => align === 'right' && 'right: 0;'};

  width: 100%;
  padding: ${t.space('lg')};

  ${media.tablet(css`
    width: 70%;
    padding: ${t.space('xl4')};
  `)}
  ${media.desktop(css`
    width: 50%;
    padding: ${t.space('xl4')};
  `)}
`

const StyledButtonContainer = styled.div`
  width: 100%;

  ${media.tablet(css`
    width: 50%;
  `)}

  & > button {
    width: 100%;
  }
`

export { StyledBanner, ImageContainer, StyledTextContainer, StyledButtonContainer }
