import { AuthLayout } from '@/common/layouts/authLayout'
import { ResetPasswordForm } from './components/resetPasswordForm'
import { useSearchParams } from 'react-router-dom'

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams()

  return (
    <AuthLayout
      imgSrc="/images/reset_password.png"
      headerText="Create New Password"
      headerDescription="Reset your password. Remember, passwords must match."
    >
      <ResetPasswordForm mode={(searchParams.get('mode') as 'reset') ?? 'change'} />
    </AuthLayout>
  )
}

export { ResetPasswordPage }
