import LoginRoute from '@/pages/loginPage/routes'
import SignUpRoute from '@/pages/signUp/routes'
import MyAccountRoute from '@/pages/myAccount/routes'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
import HomePageRoute from '@/pages/home/routes'
import AuthSuccessRoute from '@/pages/authSuccess/routes'

const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to={HomePageRoute.path} replace />} />
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
    >
      <Route index element={<Navigate to="profile" replace />} />
      <Route path="profile" element={<div>Profile</div>} />
      <Route path="favourites" element={<div>Favourites</div>} />
      <Route path="orders" element={<div>orders</div>} />
      <Route path="sign-out" element={<div>sign-out</div>} />
    </Route>
  </Routes>
)

export default Router
