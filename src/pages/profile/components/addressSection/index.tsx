import FlexContainer from '@/components/flexContainer'
import { useGetAddress } from './hooks'
import { tokens } from '@/variables/styles'
import { SingleAddressItem } from './components/singleAddressItem'
import { StyledContainer } from './styles'
import Link from '@/components/link'
import { routeMap } from '@/routes/utils'
import { SubTitle } from '@/common/titles/subTitle'
import type { UserAddressDto } from '@/services/address/types'
import ErrorState from '@/common/errorState'

const AddressRender = ({ data }: { data: UserAddressDto[] }) => {
  const noData = !data || data.length === 0

  if (noData) return <ErrorState message="No addresses found." />

  return (
    <StyledContainer>
      {data?.map((address) => (
        <SingleAddressItem key={`address-${address._id}`} {...address} />
      ))}
    </StyledContainer>
  )
}

const AddressSection = () => {
  const { data } = useGetAddress()

  return (
    <FlexContainer flexDirection="column" gap={tokens.space.md}>
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
