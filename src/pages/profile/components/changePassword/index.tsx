import FlexContainer from '@/components/flexContainer'
import { InnerTitle } from '../innerTitle'
import routes from '@/routes/routes'
import Link from '@/components/link'

const ChangePassword = () => (
  <FlexContainer justifyContent="space-between" alignItems="center">
    <InnerTitle title="Password" />
    <Link to={routes.changePassword.path} weight="bold" color="darkNeutral" underline={false}>
      Change password
    </Link>
  </FlexContainer>
)

export { ChangePassword }
