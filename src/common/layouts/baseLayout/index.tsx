import Header from '@/common/header'
import type { PropsWithChildren } from '@/variables/types/global.types'
import { StyledBaseLayout } from './styles'

const BaseLayout = ({ children }: PropsWithChildren) => (
  <StyledBaseLayout flexDirection="column">
    <Header />
    {children}
  </StyledBaseLayout>
)

export default BaseLayout
