const auth = {
  registerUser: '/auth/register',
  loginUser: '/auth/login',
  forgotPassword: '/auth/forgot-password',
  resetPassword: '/auth/reset-password'
} as const

const user = {
  getUserProfile: '/user/me',
  changePassword: '/user/change-password',
  deleteUser: '/user/soft'
} as const

const address = {
  getAddresses: (id: string) => `/address/${id}`,
  addAddress: '/address',
  updateAddress: (id: string) => `/address/${id}`,
  updateIsDefault: (id: string) => `/address/${id}/default`,
  deleteAddress: (id: string) => `/address/${id}`
} as const

const API_ROUTES = {
  auth,
  user,
  address
} as const

export { API_ROUTES }
