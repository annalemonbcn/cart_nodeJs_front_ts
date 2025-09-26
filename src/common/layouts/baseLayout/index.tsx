import Header from '@/common/header'
import { StyledBaseLayout } from './styles'
import Breadcrumb from '@/components/breadcrumb'
import type { IBaseLayoutProps } from './types'

const BaseLayout = ({ showBreadcrumb = true, children, isHome }: IBaseLayoutProps) => (
  <>
    <Header />
    <StyledBaseLayout flexDirection="column" isHome={isHome}>
      {showBreadcrumb && <Breadcrumb />}
      {children}
    </StyledBaseLayout>
  </>
)

export default BaseLayout
