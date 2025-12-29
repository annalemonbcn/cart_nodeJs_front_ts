import Title from '@/common/titles/title'
import { StyledContainer } from './styles'
import type { IMyAccountLayoutProps } from './types'

const MyAccountOutletLayout = ({ title, children }: IMyAccountLayoutProps) => (
  <StyledContainer flexDirection="column" gap="lg">
    <Title title={title} />
    {children}
  </StyledContainer>
)

export { MyAccountOutletLayout }
