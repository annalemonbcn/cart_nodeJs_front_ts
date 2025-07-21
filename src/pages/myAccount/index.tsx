import { useAuthContext } from '@/auth/provider/useAuthContext'
import BaseLayout from '@/common/layouts/baseLayout'
import { Outlet } from 'react-router-dom'
import { SideMenu } from './components/sideMenu'
import FlexContainer from '@/components/flexContainer'

const MyAccount = () => {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) return <div>You must login to access this page</div>

  return (
    <BaseLayout>
      <FlexContainer>
        <SideMenu />
        <Outlet />
      </FlexContainer>
    </BaseLayout>
  )
}

export { MyAccount }
