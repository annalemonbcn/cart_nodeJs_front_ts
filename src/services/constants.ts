const auth = {
  registerUser: () => '/auth/register',
  loginUser: () => '/auth/login',
  forgotPassword: () => '/auth/forgot-password',
  resetPassword: () => '/auth/reset-password',
  googleLogin: () => '/auth/google'
} as const

const user = {
  getUserProfile: () => '/user/me',
  changePassword: () => '/user/change-password',
  updateUser: () => '/user',
  deleteUser: () => '/user/soft'
} as const

const address = {
  getAddressById: (id: string) => `/address/${id}`,
  addAddress: () => '/address',
  updateAddress: (id: string) => `/address/${id}`,
  updateIsDefault: (id: string) => `/address/${id}/default`,
  deleteAddress: (id: string) => `/address/${id}`
} as const

const cart = {
  getCartById: (id: string) => `/carts/${id}`,
}

const API_ROUTES = {
  auth,
  user,
  address,
  cart
} as const

export { API_ROUTES }
