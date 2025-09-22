import FlexContainer from '@/components/flexContainer'
import { MyAccountOutletLayout } from '../../common/layouts/myAccountOutletLayout'
import { ChangePassword } from './components/changePassword'
import { tokens } from '@/variables/styles'
import { AddressSection } from './components/addressSection'
import { ContactDetails } from './components/contactDetails'
import { DeleteAccount } from './components/deleteAccount'
import { MultiModalProvider } from '@/hooks/useMultiModal/provider'

const ProfilePage = () => (
  <MyAccountOutletLayout title="My Info">
    <MultiModalProvider>
      <FlexContainer flexDirection="column" gap={tokens.space.xl}>
        <ContactDetails />
        <ChangePassword />
        <AddressSection />
        <DeleteAccount />
      </FlexContainer>
    </MultiModalProvider>
  </MyAccountOutletLayout>
)

export { ProfilePage }
