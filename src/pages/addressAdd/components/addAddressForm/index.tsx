import TextFormField from '@/common/form/textFormField'
import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { useForm } from 'react-hook-form'

// TODO: check types, make them global
type TDeliveryAddress = {
  street: string
  zipCode: string
  city: string
  province: string
  country: string
  additionalInfo?: string
}

type AddAddressFormShape = {
  firstName: string
  lastName: string
  deliveryAddress: TDeliveryAddress
  phoneNumber: string
  isDefault: boolean
  tags?: string[]
}

const AddAddressForm = () => {
  const methods = useForm<AddAddressFormShape>()

  const variant = 'tertiary'

  return (
    <CustomForm methods={methods}>
      <FlexContainer justifyContent="space-between" gap={tokens.space.xl2}>
        <TextFormField label="First Name" inputName="firstName" isRequired variant={variant} />
        <TextFormField label="Last Name" inputName="lastName" isRequired variant={variant} />
      </FlexContainer>
    </CustomForm>
  )
}

export { AddAddressForm }
