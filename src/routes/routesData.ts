import type { PageRoute } from './types'

type RouteName =
  | 'home'
  | 'products'
  | 'cart'
  | 'login'
  | 'signUp'
  | 'changePassword'
  | 'authSuccess'
  | 'my-account'
  | 'profile'
  | 'wishlist'
  | 'orders'
  | 'sign-out'

const routesData: Omit<PageRoute, 'component'>[] = [
  {
    name: 'home',
    path: '/shop',
    title: 'Home'
  },
  {
    name: 'products',
    path: '/products',
    title: 'Products'
  },
  {
    name: 'cart',
    path: '/cart',
    title: 'Cart'
  },
  {
    name: 'login',
    path: '/login',
    title: 'Login'
  },
  {
    name: 'signUp',
    path: '/sign-up',
    title: 'Sign Up'
  },
  {
    name: 'changePassword',
    path: '/change-password',
    title: 'Change Password'
  },
  {
    name: 'authSuccess',
    path: '/auth-success'
  },
  {
    name: 'my-account',
    path: '/my-account',
    title: 'My Account',
    protected: true,
    children: [
      {
        name: 'profile',
        path: 'profile',
        title: 'Profile'
      },
      {
        name: 'wishlist',
        path: 'wishlist',
        title: 'Wishlist'
      },
      {
        name: 'orders',
        path: 'orders',
        title: 'Orders'
      },
      {
        name: 'sign-out',
        path: 'sign-out',
        title: 'Sign Out'
      }
    ]
  }
]

export { routesData }
export type { RouteName }
