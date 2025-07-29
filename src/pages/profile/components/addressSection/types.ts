type TDeliveryAddress = {
  street: string
  additionalInfo?: string
  zipCode: string
  city: string
  province: string
  country: string
}

interface IAddressProps {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  deliveryAddress: TDeliveryAddress
  isDefault: boolean
  tags?: string[]
}

export type { IAddressProps, TDeliveryAddress }
