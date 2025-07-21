import { useAuthContext } from '@/auth/provider/useAuthContext'
import BaseLayout from '@/common/layouts/baseLayout'
import { Outlet } from 'react-router-dom'
import { SideMenu } from './components/sideMenu'

const MyAccount = () => {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) return <div>You must login to access this page</div>

  return (
    <BaseLayout>
      <SideMenu />
      <Outlet />
    </BaseLayout>
  )
}

export { MyAccount }
