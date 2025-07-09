import { tokens } from '@/variables/styles'
import type { IAuthLayoutProps } from './types'
import { FormContainer, ImageContainer, StyledAuthLayout, StyledInnerContent } from './styles'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import Header from '@/common/header'

const AuthLayout = ({ imgSrc, headerText, headerDescription, children }: IAuthLayoutProps) => (
  <StyledAuthLayout flexDirection="column">
    <Header />

    <StyledInnerContent>
      <ImageContainer imgSrc={imgSrc} />

      <FormContainer flexDirection="column" gap={tokens.space.xl}>
        <FlexContainer flexDirection="column" gap={tokens.space.sm2}>
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
