import { useAuthContext } from '@/auth/provider/useAuthContext'
import Loader from '@/components/loader'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'

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
      navigate('/login', { replace: true })
      return
    }

    localStorage.setItem('token', token)
    setToken(token)
    toast.success('Login successful! 🎉')
    navigate('/my-account', { replace: true }) // TODO: create routes.ts and grab routes from there
  }, [navigate, setToken])

  return <Loader />
}

export default AuthSuccess
