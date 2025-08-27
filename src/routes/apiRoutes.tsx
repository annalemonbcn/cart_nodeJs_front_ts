// TODO: is this useful?
const authRoutes = {
  registerUser: '/auth/register',
  loginUser: '/auth/login'
} as const

const userRoutes = {
  getUserProfile: '/user/me'
} as const

const API_ROUTES = {
  ...authRoutes,
  ...userRoutes
} as const

export { API_ROUTES }
