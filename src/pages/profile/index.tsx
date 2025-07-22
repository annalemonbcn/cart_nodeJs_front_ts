import FlexContainer from '@/components/flexContainer'
import { MyAccountLayout } from '../myAccount/components/header'
import { ChangePassword } from './components/changePassword'
import { tokens } from '@/variables/styles'
import { AddressSection } from './components/addressSection'
import { ContactDetails } from './components/contactDetails'

const ProfilePage = () => (
  <MyAccountLayout title="My Info">
    <FlexContainer flexDirection="column" gap={tokens.space.xl}>
      <ContactDetails />

      <ChangePassword />

      <AddressSection />
    </FlexContainer>
  </MyAccountLayout>
)

export { ProfilePage }
