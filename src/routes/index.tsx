import LoginRoute from '@/pages/loginPage/routes'
import SignUpRoute from '@/pages/signUp/routes'
import MyAccountRoute from '@/pages/myAccount/routes'
import { Routes, Route } from 'react-router'
import ProtectedRoute from './protectedRoute'

const Router = () => (
  <Routes>
    <Route path="/" element={<div>Home</div>} />
    <Route path="/products" element={<div>Products</div>} />
    <Route path="/cart" element={<div>Cart</div>} />
    <Route path={LoginRoute.path} element={<LoginRoute.component />} />
    <Route path={SignUpRoute.path} element={<SignUpRoute.component />} />

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
