type AuthContextType = {
  token: string | null
  // eslint-disable-next-line no-unused-vars
  setToken: (token: string | null) => void
  isAuthenticated: boolean
  logout: () => void
}

type DecodedToken = {
  exp: number
  [key: string]: any
}

export type { AuthContextType, DecodedToken }
