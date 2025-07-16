import LoginRoute from '@/pages/loginPage/routes'
import SignUpRoute from '@/pages/signUp/routes'
import MyAccountRoute from '@/pages/myAccount/routes'
import { Routes, Route } from 'react-router'
import ProtectedRoute from './protectedRoute'
import HomePageRoute from '@/pages/home/routes'
import AuthSuccessRoute from '@/pages/authSuccess/routes'

const Router = () => (
  <Routes>
    <Route path={HomePageRoute.path} element={<HomePageRoute.component />} />
    <Route path="/products" element={<div>Products</div>} />
    <Route path="/cart" element={<div>Cart</div>} />
    <Route path={LoginRoute.path} element={<LoginRoute.component />} />
    <Route path={SignUpRoute.path} element={<SignUpRoute.component />} />
    <Route path={AuthSuccessRoute.path} element={<AuthSuccessRoute.component />} />

    <Route
      path={MyAccountRoute.path}
      element={
        <ProtectedRoute>
          <MyAccountRoute.component />
        </ProtectedRoute>
      }
    />
  </Routes>
)

export default Router
