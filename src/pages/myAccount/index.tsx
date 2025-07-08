import Loader from '@/components/loader'
import { useUserServices } from '@/services/user'
import { useQuery } from '@tanstack/react-query'

const useLoadUser = () => {
  const { getUserInfo } = useUserServices()
  const { data, isLoading } = useQuery(getUserInfo())

  return { data, isLoading }
}

const MyAccount = () => {
  const { isLoading } = useLoadUser()

  if (isLoading) return <Loader />

  return <div>MyAccount</div>
}

export default MyAccount
