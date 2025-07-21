import { useAuthContext } from '@/auth/provider/useAuthContext'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import routes from '@/routes/routes'
import { tokens } from '@/variables/styles'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {
  const { isAuthenticated, logout } = useAuthContext()

  const navigate = useNavigate()

  const goToLogin = () => navigate(routes.login.path)

  return (
    <FlexContainer justifyContent="flex-end" gap={tokens.space.md}>
      {!isAuthenticated && (
        <Button variant="primary" onClick={goToLogin}>
          Login
        </Button>
      )}

      {isAuthenticated && (
        <Button variant="secondary" onClick={logout}>
          Logout
        </Button>
      )}
    </FlexContainer>
  )
}

export { Buttons }
