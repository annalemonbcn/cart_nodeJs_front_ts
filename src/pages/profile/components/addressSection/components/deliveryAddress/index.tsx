import Text from '@/components/text'
import FlexContainer from '@/components/flexContainer'
import type { TDeliveryAddress } from '../../types'

const DeliveryAddress = ({ road, additionalInfo, zipCode, city, province, country }: TDeliveryAddress) => (
  <div>
    <Text>{road}</Text>
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
