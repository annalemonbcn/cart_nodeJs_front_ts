import { useAuthContext } from '@/auth/provider/useAuthContext'
import type { PropsWithChildren } from '@/variables/types/global.types'
import { useEffect, useRef } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { toast } from 'sonner'
import { routeMap } from '../utils'
import { STORAGE_KEYS } from '@/variables/constants'

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuthContext()
  const location = useLocation()
  const hasShownToast = useRef(false)

  useEffect(() => {
    const manualLogout = localStorage.getItem(STORAGE_KEYS.manualLogout) === 'true'

    if (!isAuthenticated && !hasShownToast.current && !manualLogout) {
      toast.warning('You must be logged in to access this page.')
      hasShownToast.current = true
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return <Navigate to={routeMap.login.path} replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute
