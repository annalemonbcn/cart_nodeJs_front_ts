import { useAuthContext } from '@/auth/provider/useAuthContext'
import Loader from '@/components/loader'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import routes from '@/routes/routes'

const AuthSuccess = () => {
  const navigate = useNavigate()
  const { setToken } = useAuthContext()

  const hasRunRef = useRef(false)

  useEffect(() => {
    if (hasRunRef.current) return
    hasRunRef.current = true

    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (!token) {
      toast.error('Unauthorized. Please, log in again.')
      navigate(routes.login.path, { replace: true })
      return
    }

    localStorage.setItem('token', token)
    setToken(token)
    toast.success('Login successful! 🎉')
    navigate(routes.myAccount.path, { replace: true })
  }, [navigate, setToken])

  return <Loader />
}

export default AuthSuccess
