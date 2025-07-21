const routes = {
  homePage: {
    path: '/shop',
    title: 'Home'
  },
  login: {
    path: '/login',
    title: 'Login'
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
  favourites: {
    path: ['/my-account', 'favourites'].join('/'),
    title: 'Favourites'
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
