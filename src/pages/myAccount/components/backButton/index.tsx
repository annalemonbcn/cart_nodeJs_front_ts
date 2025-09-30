import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { StyledIconContainer } from './styles'
import Text from '@/components/text'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <FlexContainer alignItems="center" gap={tokens.space.sm} onClick={() => navigate(-1)}>
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
