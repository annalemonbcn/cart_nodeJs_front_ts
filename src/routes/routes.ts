// TODO: unify as unique source of truth

const routes = {
  homePage: {
    path: '/shop',
    title: 'Home'
  },
  login: {
    path: '/login',
    title: 'Login'
  },
  changePassword: {
    path: '/change-password',
    title: 'Change Password'
  },
  cart: {
    path: '/cart',
    title: 'Cart'
  },
  myAccount: {
    path: '/my-account',
    title: 'My Account'
  },
  profile: {
    path: ['/my-account', 'profile'].join('/'),
    title: 'Profile'
  },
  wishlist: {
    path: ['/my-account', 'wishlist'].join('/'),
    title: 'Wishlist'
  },
  orders: {
    path: ['/my-account', 'orders'].join('/'),
    title: 'Orders'
  },
  signOut: {
    path: ['/my-account', 'sign-out'].join('/'),
    title: 'Sign Out'
  }
} as const

export default routes
