import FlexContainer from '@/components/flexContainer'
import { useGetAddress } from './hooks'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { AddressRender } from './components/addressRender'
import { StyledContainer } from './styles'
import Link from '@/components/link'
import { routeMap } from '@/routes/utils'
import { SubTitle } from '@/common/titles/subTitle'

const AddressSection = () => {
  const { data } = useGetAddress()

  const noData = !data || data.length === 0

  return (
    <FlexContainer flexDirection="column" gap={tokens.space.md}>
      <FlexContainer justifyContent="space-between" alignItems="center">
        <SubTitle title="Address" />
        <Link to={routeMap.addressAdd.path} weight="bold" color="darkNeutral" underline={false}>
          Add new
        </Link>
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
