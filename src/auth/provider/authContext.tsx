import { STORAGE_KEYS } from '@/variables/constants'
import type { PropsWithChildren } from '@/variables/types/global.types'
import { createContext, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import type { AuthContextType, DecodedToken } from './types'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setTokenState] = useState(() => localStorage.getItem(STORAGE_KEYS.token) || null)
  const logoutTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const logout = () => {
    localStorage.setItem(STORAGE_KEYS.manualLogout, 'true')
    localStorage.removeItem(STORAGE_KEYS.token)
    setTokenState(null)
    if (logoutTimer.current) clearTimeout(logoutTimer.current)
    toast.success('Logout successful')
  }

  const setToken = (newToken: string | null) => {
    if (logoutTimer.current) clearTimeout(logoutTimer.current)

    if (newToken) {
      localStorage.setItem(STORAGE_KEYS.token, newToken)
      localStorage.removeItem(STORAGE_KEYS.manualLogout)
      setTokenState(newToken)

      try {
        const decoded = jwtDecode<DecodedToken>(newToken)

        if (decoded.exp) {
          const expiresInMs = decoded.exp * 1000 - Date.now()

          if (expiresInMs <= 0) {
            logout()
          } else {
            logoutTimer.current = setTimeout(() => {
              logout()
            }, expiresInMs)
          }
        }
      } catch (e) {
        console.error('Invalid token', e)
        logout()
      }
    } else {
      logout()
    }
  }

  useEffect(() => {
    if (token) {
      setToken(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isAuthenticated = !!token

  return <AuthContext.Provider value={{ token, setToken, isAuthenticated, logout }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
