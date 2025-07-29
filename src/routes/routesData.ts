import type { PageRoute } from './types'

type RouteName =
  | 'home'
  | 'products'
  | 'cart'
  | 'login'
  | 'signUp'
  | 'changePassword'
  | 'authSuccess'
  | 'myAccount'
  | 'profile'
  | 'wishlist'
  | 'orders'
  | 'signOut'
  | 'address'
  | 'addressAdd'

/**
 * @description Routes data
 * This is a flat array of routes + paths + titles
 */
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
    path: '/auth/success'
  },
  {
    name: 'myAccount',
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
        name: 'signOut',
        path: 'sign-out',
        title: 'Sign Out'
      },
      {
        name: 'address',
        path: 'address',
        isWrapper: true,
        redirectTo: '/my-account/profile',
        children: [
          {
            name: 'addressAdd',
            path: 'add',
            title: 'Add New Address'
          }
        ]
      }
    ]
  }
]

export { routesData }
export type { RouteName }
