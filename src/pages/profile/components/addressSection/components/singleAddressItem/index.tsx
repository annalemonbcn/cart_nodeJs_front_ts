import { StyledAddressContainer, NameArea, PhoneNumberArea, AddressArea, TagsArea, ActionsArea } from './styles'
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
  <StyledAddressContainer>
    <NameArea>
      <Text size="s5" weight="medium" color="darkNeutral">
        {firstName} {lastName}
      </Text>
    </NameArea>

    <PhoneNumberArea>
      <Text>{phoneNumber}</Text>
    </PhoneNumberArea>

    <AddressArea>
      <DeliveryAddress {...deliveryAddress} />
    </AddressArea>

    <TagsArea>
      <Tags isDefault={isDefault} tags={tags} />
    </TagsArea>

    <ActionsArea>
      <ActionButtons id={_id} isDefault={isDefault} />
    </ActionsArea>
  </StyledAddressContainer>
)

export { SingleAddressItem }
