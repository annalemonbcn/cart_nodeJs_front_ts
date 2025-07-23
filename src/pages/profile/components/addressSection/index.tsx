import FlexContainer from '@/components/flexContainer'
import { InnerTitle } from '../innerTitle'
import Button from '@/components/button'
import { useGetAddress } from './hooks'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { AddressRender } from './components/addressRender'
import { StyledContainer } from './styles'

const AddressSection = () => {
  const { data } = useGetAddress()

  const noData = !data || data.length === 0

  return (
    <FlexContainer flexDirection="column" gap={tokens.space.md}>
      <FlexContainer justifyContent="space-between" alignItems="center">
        <InnerTitle title="Address" />
        <Button variant="text">Add new</Button>
      </FlexContainer>

      {noData && <Text>No addresses found</Text>}
      {!noData && (
        <StyledContainer>
          {data.map((address) => (
            <AddressRender key={`address-${address.id}`} {...address} />
          ))}
        </StyledContainer>
      )}
    </FlexContainer>
  )
}

export { AddressSection }
