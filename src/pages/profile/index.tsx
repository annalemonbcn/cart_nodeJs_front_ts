import FlexContainer from '@/components/flexContainer'
import { AddressSection } from './components/addressSection'
import { ChangePassword } from './components/changePassword'
import { DeleteAccount } from './components/deleteAccount'
import { ProfileDetails } from './components/profileDetails'
import { MyAccountOutletLayout } from '../../common/layouts/myAccountOutletLayout'

const ProfilePage = () => (
  <MyAccountOutletLayout title="My Info">
    <FlexContainer flexDirection="column" gap="xl">
      <ProfileDetails />
      <ChangePassword />
      <AddressSection />
      <DeleteAccount />
    </FlexContainer>
  </MyAccountOutletLayout>
)

export { ProfilePage }
