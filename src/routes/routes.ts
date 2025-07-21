const routes = {
  homePage: {
    path: '/shop',
    title: 'Home'
  },
  login: {
    path: '/login',
    title: 'Login'
  },
  myAccount: {
    path: '/my-account',
    title: 'My Account'
  },
  favourites: {
    path: ['/my-account', 'favourites'].join('/'),
    title: 'Favourites'
  },
  cart: {
    path: '/cart',
    title: 'Cart'
  }
} as const

export default routes
