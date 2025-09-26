import { MyAccountOutletLayout } from '../../common/layouts/myAccountOutletLayout'
import { SubTitle } from '@/common/titles/subTitle'
import { AddressForm } from '../../common/addressForm'

const AddressAdd = () => (
  <MyAccountOutletLayout title="My Info">
    <SubTitle title="Add Address" />

    <AddressForm />
  </MyAccountOutletLayout>
)

export { AddressAdd }
