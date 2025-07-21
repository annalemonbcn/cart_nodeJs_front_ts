import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { MyAccountLayout } from '../myAccount/components/header'
import { ContactDetailsForm } from './components/contactDetailsForm'

const ProfilePage = () => (
  <MyAccountLayout title="My Info">
    <FlexContainer flexDirection="column">
      <Text size="s5" weight="medium" color="darkNeutral">
        Contact Details
      </Text>

      <ContactDetailsForm />
    </FlexContainer>
  </MyAccountLayout>
)

export { ProfilePage }
