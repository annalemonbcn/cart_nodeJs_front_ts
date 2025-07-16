import { useAuthContext } from "@/auth/provider/useAuthContext"
import Button from "@/components/button"
import FlexContainer from "@/components/flexContainer"
import Link from "@/components/link"
import { tokens } from "@/variables/styles"

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

const Buttons = () => {
  const { isAuthenticated, logout } = useAuthContext()

  return (
    <FlexContainer justifyContent="flex-end" gap={tokens.space.md}>
      {!isAuthenticated && <LoginButtons />}

      {isAuthenticated && (
        <Button variant="secondary" onClick={logout}>
          Logout
        </Button>
      )}
    </FlexContainer>
  )
}

export { Buttons }
