import type { PageRoute } from './types'
import { HomePage } from '@/pages/home'
import { LoginPage } from '@/pages/loginPage'
import { SignUpPage } from '@/pages/signUp'
import { ChangePasswordPage } from '@/pages/changePasswordPage'
import { AuthSuccess } from '@/pages/authSuccess'
import { MyAccountPage } from '@/pages/myAccount'
import { ProfilePage } from '@/pages/profile'
import { routesData, type RouteName } from './routesData'

const routeComponentMap: Record<RouteName, React.JSX.Element> = {
  home: <HomePage />,
  products: <div>Products</div>,
  cart: <div>Cart</div>,
  login: <LoginPage />,
  signUp: <SignUpPage />,
  changePassword: <ChangePasswordPage />,
  authSuccess: <AuthSuccess />,
  myAccount: <MyAccountPage />,
  profile: <ProfilePage />,
  wishlist: <div>Wishlist</div>,
  orders: <div>Orders</div>,
  signOut: <div>Sign Out</div>,
  address: <div>Not to be rendered</div>,
  addressAdd: <div>Add new address</div>
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
