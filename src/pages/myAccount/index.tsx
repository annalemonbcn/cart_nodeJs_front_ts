import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthContext } from '@/auth/provider/useAuthContext'
import BaseLayout from '@/common/layouts/baseLayout'
import { routeMap } from '@/routes/utils'
import { SideMenu } from './components/sideMenu'
import { StyledFlexContainer } from './styles'

const MyAccountPage = () => {
  const { isAuthenticated } = useAuthContext()

  const location = useLocation()

  if (!isAuthenticated) return <div>You must login to access this page</div>

  if (location.pathname === routeMap.myAccount.path) return <Navigate to={routeMap.profile.path} replace />

  return (
    <BaseLayout>
      <StyledFlexContainer gap="xl3">
        <SideMenu />
        <Outlet />
      </StyledFlexContainer>
    </BaseLayout>
  )
}

export { MyAccountPage }
