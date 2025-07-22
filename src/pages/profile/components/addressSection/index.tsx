import FlexContainer from '@/components/flexContainer'
import { InnerTitle } from '../innerTitle'
import Button from '@/components/button'

const AddressSection = () => (
  <FlexContainer justifyContent="space-between" alignItems="center">
    <InnerTitle title="Address" />
    <Button variant="text">Add new</Button>
  </FlexContainer>
)

export { AddressSection }
