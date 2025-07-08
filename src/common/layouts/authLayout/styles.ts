import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import type { IAuthLayoutProps } from './types'
import { tokens } from '@/variables/styles'

const StyledAuthLayout = styled(FlexContainer)`
  height: 100%;
`

const ImageContainer = styled.div<Pick<IAuthLayoutProps, 'imgSrc'>>`
  width: 50%;
  background-image: url('${({ imgSrc }) => imgSrc}');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`

const FormContainer = styled(FlexContainer)`
  flex: 0 0 50%;

  padding: ${tokens.space.xl2} ${tokens.space.xl5};
`

export { StyledAuthLayout, ImageContainer, FormContainer }
