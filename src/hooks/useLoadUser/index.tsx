import { useAuthContext } from '@/auth/provider/useAuthContext'
import { useUserServices } from '@/services/user'
import type { UserProfileDto } from '@/services/user/types'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

const useLoadUser = () => {
  const { isAuthenticated } = useAuthContext()

  const { getUserInfo } = useUserServices()
  const { data, isLoading } = useQuery({ ...getUserInfo(), enabled: isAuthenticated })

  const userData: UserProfileDto | undefined = useMemo(() => {
    if (!data || isLoading) return undefined

    return data.payload
  }, [data, isLoading])

  return { data: userData, isLoading }
}

const useGetUserId = () => {
  const { data } = useLoadUser()

  return data?._id || ''
}

export { useLoadUser, useGetUserId }
