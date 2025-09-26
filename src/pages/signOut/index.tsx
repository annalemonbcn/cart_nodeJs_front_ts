import { useAuthContext } from '@/auth/provider/useAuthContext'
import { useEffect } from 'react'

const SignOutPage = () => {
  const { logout } = useAuthContext()

  useEffect(() => {
    logout()
  }, [logout])

  return null
}

export { SignOutPage }
