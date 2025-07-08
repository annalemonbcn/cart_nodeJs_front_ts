import type { PropsWithChildren } from '@/variables/types/global.types'
import { createContext, useState } from 'react'
import { toast } from 'sonner'

type AuthContextType = {
  token: string | null
  setToken: React.Dispatch<React.SetStateAction<string | null>>
  isAuthenticated: boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null)

  const isAuthenticated = !!token

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    toast.success('Logout successful')
  }

  return <AuthContext.Provider value={{ token, setToken, isAuthenticated, logout }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
