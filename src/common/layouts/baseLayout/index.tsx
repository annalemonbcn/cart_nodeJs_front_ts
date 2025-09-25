import Header from '@/common/header'
import { StyledBaseLayout } from './styles'
import Breadcrumb from '@/components/breadcrumb'
import type { IBaseLayoutProps } from './types'

const BaseLayout = ({ showBreadcrumb = true, children, isMyAccount }: IBaseLayoutProps) => (
  <>
    <Header />
    <StyledBaseLayout flexDirection="column" isMyAccount={isMyAccount}>
      {showBreadcrumb && <Breadcrumb />}
      {children}
    </StyledBaseLayout>
  </>
)

export default BaseLayout
