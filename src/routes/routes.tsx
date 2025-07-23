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
  'my-account': <MyAccountPage />,
  profile: <ProfilePage />,
  wishlist: <div>Wishlist</div>,
  orders: <div>Orders</div>,
  'sign-out': <div>Sign Out</div>
}

const routes: PageRoute[] = routesData.map((r) => {
  const component = routeComponentMap[r.name as RouteName]

  if (!component) {
    throw new Error(`Missing component for route "${r.name}"`)
  }

  return {
    ...r,
    component: () => component
  }
})

export { routes }
