import FlexContainer from '@/components/flexContainer'
import { SubTitle } from '@/common/titles/subTitle'
import Link from '@/components/link'
import { routeMap } from '@/routes/utils'

const ChangePassword = () => (
  <FlexContainer justifyContent="space-between" alignItems="center">
    <SubTitle title="Password" />
    <Link to={routeMap.changePassword.path} weight="bold" color="darkNeutral" underline={false}>
      Change password
    </Link>
  </FlexContainer>
)

export { ChangePassword }
