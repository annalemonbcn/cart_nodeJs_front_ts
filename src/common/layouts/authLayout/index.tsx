import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { FormContainer, ImageContainer, StyledAuthLayout, StyledInnerContent } from './styles'
import type { IAuthLayoutProps } from './types'

const AuthLayout = ({ imgSrc, headerText, headerDescription, children }: IAuthLayoutProps) => (
  <StyledAuthLayout flexDirection="column">
    <StyledInnerContent>
      <ImageContainer imgSrc={imgSrc} />

      <FormContainer flexDirection="column" gap="xl">
        <FlexContainer flexDirection="column" gap="sm2">
          <Text as="h1" size="s7" weight="bold" color="darkNeutral">
            {headerText}
          </Text>
          <Text>{headerDescription}</Text>
        </FlexContainer>
        {children}
      </FormContainer>
    </StyledInnerContent>
  </StyledAuthLayout>
)

export { AuthLayout }
