import type { AddressOutputDto } from '@/services/address/types'
import type { AddressFormShape } from '../types'

const mapAddressDtoToFormShape = (dto: AddressOutputDto): AddressFormShape => ({
  id: dto._id,
  firstName: dto.firstName,
  lastName: dto.lastName,
  deliveryAddress: {
    street: dto.deliveryAddress.street,
    additionalInfo: dto.deliveryAddress.additionalInfo,
    zipCode: dto.deliveryAddress.zipCode,
    city: dto.deliveryAddress.city,
    province: dto.deliveryAddress.province,
    country: dto.deliveryAddress.country
  },
  phoneNumber: dto.phoneNumber,
  isDefault: dto.isDefault,
  tags: dto.tags ? dto.tags.join(', ') : undefined
})

export { mapAddressDtoToFormShape }
