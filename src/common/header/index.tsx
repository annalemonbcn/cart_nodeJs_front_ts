import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { StyledHeader } from './styles'
import Link from '@/components/link'
import { useAuthContext } from '@/auth/provider/useAuthContext'

const LoginButtons = () => (
  <>
    <Link to="/login">
      <Button variant="primary">Login</Button>
    </Link>

    <Link to="/signup">
      <Button variant="secondary">Register</Button>
    </Link>
  </>
)

const Header = () => {
  const { isAuthenticated, logout } = useAuthContext()

  return (
    <StyledHeader>
      <FlexContainer justifyContent="flex-end" gap={tokens.space.md}>
        {!isAuthenticated && <LoginButtons />}

        {isAuthenticated && (
          <Button variant="secondary" onClick={logout}>
            Logout
          </Button>
        )}
      </FlexContainer>
    </StyledHeader>
  )
}

export default Header
