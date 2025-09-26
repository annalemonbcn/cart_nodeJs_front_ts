import { AddressForm } from "@/common/addressForm"
import { MyAccountOutletLayout } from "@/common/layouts/myAccountOutletLayout"
import { SubTitle } from "@/common/titles/subTitle"

const AddressEdit = () => (
  <MyAccountOutletLayout title="My Info">
    <SubTitle title="Edit Address" />

    <AddressForm />
  </MyAccountOutletLayout>
)

export { AddressEdit }
