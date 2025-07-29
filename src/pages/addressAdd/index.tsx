import { MyAccountOutletLayout } from '../../common/layouts/myAccountOutletLayout'
import { SubTitle } from '@/common/titles/subTitle'
import { AddAddressForm } from './components/addAddressForm'

const AddressAdd = () => (
  <MyAccountOutletLayout title="My Info">
    <SubTitle title="Add Address" />

    <AddAddressForm />
  </MyAccountOutletLayout>
)

export { AddressAdd }
