import FlexContainer from '@/components/flexContainer'
import { MyAccountOutletLayout } from '../../common/layouts/myAccountOutletLayout'
import { ChangePassword } from './components/changePassword'
import { tokens } from '@/variables/styles'
import { AddressSection } from './components/addressSection'
import { ContactDetails } from './components/contactDetails'

const ProfilePage = () => (
  <MyAccountOutletLayout title="My Info">
    <FlexContainer flexDirection="column" gap={tokens.space.xl}>
      <ContactDetails />
      <ChangePassword />
      <AddressSection />
    </FlexContainer>
  </MyAccountOutletLayout>
)

export { ProfilePage }
