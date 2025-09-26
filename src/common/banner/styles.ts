import FlexContainer from '@/components/flexContainer'
import styled from 'styled-components'
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
  width: 50%;
  position: absolute;
  top: 0;
  padding: 4rem;
  ${({ align }) => align === 'right' && 'right: 0;'};
`

const StyledButtonContainer = styled.div`
  width: 50%;

  & > button {
    width: 100%;
  }
`

export { StyledBanner, ImageContainer, StyledTextContainer, StyledButtonContainer }
