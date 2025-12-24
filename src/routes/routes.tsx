import { AddressAdd } from '@/pages/addressAdd'
import { AddressEdit } from '@/pages/addressEdit'
import { AuthSuccess } from '@/pages/authSuccess'
import { Cart } from '@/pages/cart'
import { ForgotPasswordPage } from '@/pages/forgotPassword'
import { HomePage } from '@/pages/home'
import { LoginPage } from '@/pages/loginPage'
import { MenPage } from '@/pages/men'
import { MyAccountPage } from '@/pages/myAccount'
import { Orders } from '@/pages/orders'
import { ProfilePage } from '@/pages/profile'
import { ResetPasswordPage } from '@/pages/resetPassword'
import { SignOutPage } from '@/pages/signOut'
import { SignUpPage } from '@/pages/signUp'
import { Wishlist } from '@/pages/wishlist'
import { WomenPage } from '@/pages/women'
import { routesData, type RouteName } from './routesData'
import type { PageRoute } from './types'

const routeComponentMap: Record<RouteName, React.JSX.Element> = {
  home: <HomePage />,
  men: <MenPage />,
  women: <WomenPage />,
  cart: <Cart />,
  login: <LoginPage />,
  signUp: <SignUpPage />,
  forgotPassword: <ForgotPasswordPage />,
  resetPassword: <ResetPasswordPage />,
  authSuccess: <AuthSuccess />,
  myAccount: <MyAccountPage />,
  profile: <ProfilePage />,
  wishlist: <Wishlist />,
  orders: <Orders />,
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
