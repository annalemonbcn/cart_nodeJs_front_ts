import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/auth/provider/useAuthContext'
import FlexContainer from '@/components/flexContainer'
import { routeMap } from '@/routes/utils'
import { StyledButton } from './styles'

const Buttons = () => {
  const { isAuthenticated, logout } = useAuthContext()

  const navigate = useNavigate()

  const goToLogin = () => navigate(routeMap.login.path)

  return (
    <FlexContainer justifyContent="flex-end" gap="md" className="auth">
      {!isAuthenticated && (
        <StyledButton variant="primary" onClick={goToLogin}>
          Login
        </StyledButton>
      )}

      {isAuthenticated && (
        <StyledButton variant="secondary" onClick={logout}>
          Logout
        </StyledButton>
      )}
    </FlexContainer>
  )
}

export { Buttons }
