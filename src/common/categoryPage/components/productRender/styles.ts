import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { t } from '@/styles/themeHelpers'

const StyledProduct = styled(FlexContainer)`
  min-width: 0;
`

const StyledImageContainer = styled.div`
  width: auto;
  height: auto;
  border-radius: ${t.borderRadius('md')};
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${t.borderRadius('md')};
`

const NoImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: ${t.borderRadius('md')};
  background-color: #e2e2e2;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTextContainer = styled(FlexContainer)`
  min-width: 0;
  flex: '1 1 auto';
`

export { StyledProduct, StyledImageContainer, StyledImg, StyledTextContainer, NoImage }
