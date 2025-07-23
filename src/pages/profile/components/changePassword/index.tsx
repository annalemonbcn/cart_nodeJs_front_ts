import FlexContainer from '@/components/flexContainer'
import { InnerTitle } from '../innerTitle'
import Link from '@/components/link'
import { routeMap } from '@/routes/routeMap'

const ChangePassword = () => (
  <FlexContainer justifyContent="space-between" alignItems="center">
    <InnerTitle title="Password" />
    <Link to={routeMap.changePassword.path} weight="bold" color="darkNeutral" underline={false}>
      Change password
    </Link>
  </FlexContainer>
)

export { ChangePassword }
