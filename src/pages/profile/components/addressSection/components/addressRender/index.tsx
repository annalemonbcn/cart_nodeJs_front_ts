import { tokens } from '@/variables/styles'
import { StyledAddressContainer } from './styles'
import type { IAddressProps } from '../../types'
import Text from '@/components/text'
import { ActionButtons } from '../actionButtons'
import { Tags } from '../tags'
import { DeliveryAddress } from '../deliveryAddress'

const AddressRender = ({ firstName, lastName, phoneNumber, deliveryAddress, isDefault, tags }: IAddressProps) => (
  <StyledAddressContainer flexDirection="column" gap={tokens.space.md}>
    <Text size="s5" weight="medium" color="darkNeutral">
      {firstName} {lastName}
    </Text>

    <Text>{phoneNumber}</Text>

    <DeliveryAddress {...deliveryAddress} />

    <Tags isDefault={isDefault} tags={tags} />

    <ActionButtons isDefault={isDefault} />
  </StyledAddressContainer>
)

export { AddressRender }
