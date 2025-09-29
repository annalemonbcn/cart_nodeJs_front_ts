import { useAuthContext } from '@/auth/provider/useAuthContext'
import BaseLayout from '@/common/layouts/baseLayout'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { SideMenu } from './components/sideMenu'
import { tokens } from '@/variables/styles'
import { routeMap } from '@/routes/utils'
import { StyledFlexContainer } from './styles'

const MyAccountPage = () => {
  const { isAuthenticated } = useAuthContext()

  const location = useLocation()

  if (!isAuthenticated) return <div>You must login to access this page</div>

  if (location.pathname === routeMap.myAccount.path) return <Navigate to={routeMap.profile.path} replace />

  return (
    <BaseLayout>
      <StyledFlexContainer gap={tokens.space.xl3}>
        <SideMenu />
        <Outlet />
      </StyledFlexContainer>
    </BaseLayout>
  )
}

export { MyAccountPage }
