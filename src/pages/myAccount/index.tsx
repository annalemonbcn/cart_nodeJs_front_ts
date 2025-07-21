import { useAuthContext } from '@/auth/provider/useAuthContext'
import BaseLayout from '@/common/layouts/baseLayout'
import Loader from '@/components/loader'
import { useUserServices } from '@/services/user'
import { useQuery } from '@tanstack/react-query'

const useLoadUser = () => {
  const { isAuthenticated } = useAuthContext()

  const { getUserInfo } = useUserServices()
  const { data, isLoading } = useQuery({ ...getUserInfo(), enabled: isAuthenticated })

  return { isAuthenticated, data, isLoading }
}

const MyAccount = () => {
  const { isAuthenticated, data, isLoading } = useLoadUser()

  if (isLoading) return <Loader />

  if (!isAuthenticated || !data) return <div>You must login to access this page</div>

  return (
    <BaseLayout>
      <div>Welcome, {data.payload?.firstName}</div>
    </BaseLayout>
  )
}

export { MyAccount }
