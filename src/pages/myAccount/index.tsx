import { useAuthContext } from '@/auth/provider/useAuthContext'
import Breadcrumb from '@/components/breadcrumb'
import Loader from '@/components/loader'
import { useUserServices } from '@/services/user'
import { useQuery } from '@tanstack/react-query'

const useLoadUser = () => {
  const { isAuthenticated } = useAuthContext()

  const { getUserInfo } = useUserServices()
  const { data, isLoading } = useQuery({ ...getUserInfo(), enabled: isAuthenticated })

  return { data, isLoading }
}

const MyAccount = () => {
  const { data, isLoading } = useLoadUser()

  if (isLoading) return <Loader />

  if (!data) return <div>No Data</div>

  return (
    <div>
      <Breadcrumb />
      <div>Welcome, {data.payload?.firstName}</div>
    </div>
  )
}

export { MyAccount }
