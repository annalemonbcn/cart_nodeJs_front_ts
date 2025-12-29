import { useNavigate } from 'react-router-dom'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { StyledIconContainer } from './styles'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <FlexContainer alignItems="center" gap="sm" onClick={() => navigate(-1)}>
      <StyledIconContainer>
        <img src="/icons/chevron-left.svg" alt="back" width={16} height={16} />
      </StyledIconContainer>
      <Text size="s4" weight="medium">
        Back
      </Text>
    </FlexContainer>
  )
}

export { BackButton }
