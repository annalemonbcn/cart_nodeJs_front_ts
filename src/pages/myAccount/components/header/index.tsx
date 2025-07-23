import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import type { IMyAccountLayoutProps } from './types'
import { StyledContainer } from './styles'

const MyAccountLayout = ({ title, children }: IMyAccountLayoutProps) => (
  <StyledContainer flexDirection="column" gap={tokens.space.lg}>
    <Text size="s6" weight="bold" color="darkNeutral">
      {title}
    </Text>
    {children}
  </StyledContainer>
)

export { MyAccountLayout }
