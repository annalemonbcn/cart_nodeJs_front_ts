type TDeliveryAddress = {
  road: string
  additionalInfo?: string
  zipCode: string
  city: string
  province: string
  country: string
}

interface IAddressProps {
  id: string
  name: string
  phoneNumber: string
  deliveryAddress: TDeliveryAddress
  isDefault: boolean
  tags?: string[]
}

export type { IAddressProps, TDeliveryAddress }
