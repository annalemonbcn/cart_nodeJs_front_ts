import { AuthLayout } from '@/common/layouts/authLayout'
import { ChangePasswordForm } from './components/changePasswordForm'

const ChangePasswordPage = () => (
  <AuthLayout
    imgSrc="/images/change_password.png"
    headerText="Create New Password"
    headerDescription="Reset your password."
  >
    <ChangePasswordForm />
  </AuthLayout>
)

export { ChangePasswordPage }
