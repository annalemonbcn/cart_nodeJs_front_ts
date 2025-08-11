import { tokens } from '@/variables/styles'
import { StyledAddressContainer } from './styles'
import Text from '@/components/text'
import { ActionButtons } from '../actionButtons'
import { Tags } from '../tags'
import { DeliveryAddress } from '../deliveryAddress'
import type { UserAddressDto } from '@/services/address/types'

const SingleAddressItem = ({
  _id,
  firstName,
  lastName,
  phoneNumber,
  deliveryAddress,
  isDefault,
  tags
}: UserAddressDto) => (
  <StyledAddressContainer flexDirection="column" gap={tokens.space.md}>
    <Text size="s5" weight="medium" color="darkNeutral">
      {firstName} {lastName}
    </Text>

    <Text>{phoneNumber}</Text>

    <DeliveryAddress {...deliveryAddress} />

    <Tags isDefault={isDefault} tags={tags} />

    <ActionButtons id={_id} isDefault={isDefault} />
  </StyledAddressContainer>
)

export { SingleAddressItem }
