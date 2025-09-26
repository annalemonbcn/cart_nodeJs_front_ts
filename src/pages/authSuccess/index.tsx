import { useAuthContext } from '@/auth/provider/useAuthContext'
import Loader from '@/components/loader'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { routeMap } from '@/routes/utils'
import { STORAGE_KEYS } from '@/variables/constants'

/**
 * 🔐 AuthSuccess page
 *
 * This component is necessary for the backend — it's used by the passport-google strategy.
 * The BE expects the route `/auth/success` to exist and return 200.
 *
 * ⚠️ Do NOT remove or rename.
 */
const AuthSuccess = () => {
  const navigate = useNavigate()
  const { setToken } = useAuthContext()

  const hasRunRef = useRef(false)

  useEffect(() => {
    if (hasRunRef.current) return
    hasRunRef.current = true

    const params = new URLSearchParams(window.location.search)
    const token = params.get(STORAGE_KEYS.token)

    if (!token) {
      toast.error('Unauthorized. Please, log in again.')
      navigate(routeMap.login.path, { replace: true })
      return
    }

    localStorage.setItem(STORAGE_KEYS.token, token)
    setToken(token)
    toast.success('Login successful! 🎉')
    navigate(routeMap.myAccount.path, { replace: true })
  }, [navigate, setToken])

  return <Loader />
}

export { AuthSuccess }
