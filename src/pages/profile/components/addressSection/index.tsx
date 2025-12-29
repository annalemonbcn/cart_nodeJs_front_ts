import ErrorState from '@/common/errorState'
import { SubTitle } from '@/common/titles/subTitle'
import FlexContainer from '@/components/flexContainer'
import Link from '@/components/link'
import { useGetAddress } from '@/hooks/useGetAddress'
import { routeMap } from '@/routes/utils'
import { SingleAddressItem } from './components/singleAddressItem'
import { StyledContainer } from './styles'
import type { UserAddressDto } from '@/services/address/types'

const AddressRender = ({ data }: { data: UserAddressDto[] }) => {
  const noData = !data || data.length === 0

  if (noData) return <ErrorState message="No addresses found." />

  return (
    <StyledContainer>
      {data?.map((address) => (
        <SingleAddressItem key={`address-${address.id}`} {...address} />
      ))}
    </StyledContainer>
  )
}

const AddressSection = () => {
  const { data } = useGetAddress()

  return (
    <FlexContainer flexDirection="column" gap="md">
      <FlexContainer justifyContent="space-between" alignItems="center">
        <SubTitle title="Address" />
        <Link to={routeMap.addressAdd.path} weight="bold" color="darkNeutral" underline={false}>
          Add new
        </Link>
      </FlexContainer>

      <AddressRender data={data} />
    </FlexContainer>
  )
}

export { AddressSection }
