import { tokens } from '@/variables/styles'
import type { IMyAccountLayoutProps } from './types'
import { StyledContainer } from './styles'
import Title from '@/common/titles/title'

const MyAccountOutletLayout = ({ title, children }: IMyAccountLayoutProps) => (
  <StyledContainer flexDirection="column" gap={tokens.space.lg}>
    <Title title={title} />
    {children}
  </StyledContainer>
)

export { MyAccountOutletLayout }
