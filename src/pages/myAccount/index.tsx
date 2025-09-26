import { useAuthContext } from '@/auth/provider/useAuthContext'
import BaseLayout from '@/common/layouts/baseLayout'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { SideMenu } from './components/sideMenu'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { routeMap } from '@/routes/utils'

const MyAccountPage = () => {
  const { isAuthenticated } = useAuthContext()

  const location = useLocation()

  if (!isAuthenticated) return <div>You must login to access this page</div>

  if (location.pathname === routeMap.myAccount.path) return <Navigate to={routeMap.profile.path} replace />

  return (
    <BaseLayout>
      <FlexContainer gap={tokens.space.xl3}>
        <SideMenu />
        <Outlet />
      </FlexContainer>
    </BaseLayout>
  )
}

export { MyAccountPage }
