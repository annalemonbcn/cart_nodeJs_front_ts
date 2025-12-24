import Breadcrumb from '@/components/breadcrumb'
import { StyledBaseLayout } from './styles'
import type { IBaseLayoutProps } from './types'

const BaseLayout = ({ showBreadcrumb = true, children, isHome }: IBaseLayoutProps) => (
  <StyledBaseLayout flexDirection="column" isHome={isHome}>
    {showBreadcrumb && <Breadcrumb />}
    {children}
  </StyledBaseLayout>
)

export default BaseLayout
