import { useAuthContext } from '@/auth/provider/useAuthContext'
import { useUserServices } from '@/services/user'
import { useQuery } from '@tanstack/react-query'

const useLoadUser = () => {
  const { isAuthenticated } = useAuthContext()

  const { getUserInfo } = useUserServices()
  const { data, isLoading } = useQuery({ ...getUserInfo(), enabled: isAuthenticated })

  return { data, isLoading }
}

export { useLoadUser }
