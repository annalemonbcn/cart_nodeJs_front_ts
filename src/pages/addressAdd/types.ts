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
  tags?: string
}

export type { AddAddressFormShape }
