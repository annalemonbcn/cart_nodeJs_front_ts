import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import type { DeliveryAddressDto } from '@/services/address/types'

const DeliveryAddress = ({ street, additionalInfo, zipCode, city, province, country }: DeliveryAddressDto) => (
  <div>
    <Text>{street}</Text>
    {additionalInfo && <Text>{additionalInfo}</Text>}
    <FlexContainer>
      <Text>
        {zipCode} - {city}
      </Text>
    </FlexContainer>
    <FlexContainer>
      <Text>
        {province} - {country}
      </Text>
    </FlexContainer>
  </div>
)

export { DeliveryAddress }
