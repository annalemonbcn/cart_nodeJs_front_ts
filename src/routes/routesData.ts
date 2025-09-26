import type { PageRoute } from './types'

const routeNames = [
  'home',
  'men',
  'women',
  'cart',
  'login',
  'signUp',
  'forgotPassword',
  'resetPassword',
  'authSuccess',
  'myAccount',
  'profile',
  'wishlist',
  'orders',
  'signOut',
  'address',
  'addressAdd',
  'addressEdit'
] as const

type RouteName = (typeof routeNames)[number]

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
    name: 'men',
    path: '/shop/men',
    title: 'Men'
  },
  {
    name: 'women',
    path: '/shop/women',
    title: 'Women'
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
    name: 'forgotPassword',
    path: '/forgot-password',
    title: 'Forgot Password'
  },
  {
    name: 'resetPassword',
    path: '/reset-password',
    title: 'Reset Password'
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
          },
          {
            name: 'addressEdit',
            path: 'edit/:addressId',
            title: 'Edit Address'
          }
        ]
      }
    ]
  }
]

export { routeNames, routesData }
export type { RouteName }
