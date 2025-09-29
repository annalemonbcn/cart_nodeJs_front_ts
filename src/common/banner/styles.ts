import FlexContainer from '@/components/flexContainer'
import styled from 'styled-components'
import type { BannerProps } from './types'
import { media } from '@/theme'
import { tokens } from '@/variables/styles'

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

  ${media.mobile(`
    width: 100%;
    padding: ${tokens.space.lg}
    `)}
  width: 50%;
  padding: 4rem;
`

const StyledButtonContainer = styled.div`
  ${media.mobile(`width: 100%;`)}
  width: 50%;

  & > button {
    width: 100%;
  }
`

export { StyledBanner, ImageContainer, StyledTextContainer, StyledButtonContainer }
