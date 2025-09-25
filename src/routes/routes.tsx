import type { PageRoute } from './types'
import { HomePage } from '@/pages/home'
import { LoginPage } from '@/pages/loginPage'
import { SignUpPage } from '@/pages/signUp'
import { ResetPasswordPage } from '@/pages/resetPassword'
import { AuthSuccess } from '@/pages/authSuccess'
import { MyAccountPage } from '@/pages/myAccount'
import { ProfilePage } from '@/pages/profile'
import { routesData, type RouteName } from './routesData'
import { AddressAdd } from '@/pages/addressAdd'
import { AddressEdit } from '@/pages/addressEdit'
import { SignOutPage } from '@/pages/signOut'
import { ForgotPasswordPage } from '@/pages/forgotPassword'
import { Cart } from '@/pages/cart'

const routeComponentMap: Record<RouteName, React.JSX.Element> = {
  home: <HomePage />,
  products: <div>Products</div>,
  cart: <Cart />,
  login: <LoginPage />,
  signUp: <SignUpPage />,
  forgotPassword: <ForgotPasswordPage />,
  resetPassword: <ResetPasswordPage />,
  authSuccess: <AuthSuccess />,
  myAccount: <MyAccountPage />,
  profile: <ProfilePage />,
  wishlist: <div>Wishlist</div>,
  orders: <div>Orders</div>,
  signOut: <SignOutPage />,
  address: <div>Not to be rendered</div>,
  addressAdd: <AddressAdd />,
  addressEdit: <AddressEdit />
}

const attachComponents = (routes: Omit<PageRoute, 'component'>[]): PageRoute[] =>
  routes.map((route) => {
    const component = routeComponentMap[route.name as RouteName]

    if (!component) {
      throw new Error(`Missing component for route "${route.name}"`)
    }

    return {
      ...route,
      component: () => component,
      children: route.children ? attachComponents(route.children) : undefined
    }
  })

/**
 * @description Routes
 * This is an array of routes + it's corresponding component
 */
const routes: PageRoute[] = attachComponents(routesData)

export { routes }
