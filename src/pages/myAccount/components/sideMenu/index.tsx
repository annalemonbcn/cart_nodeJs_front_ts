import { useAuthContext } from '@/auth/provider/useAuthContext'
import FlexContainer from '@/components/flexContainer'
import Loader from '@/components/loader'
import Text from '@/components/text'
import { useUserServices } from '@/services/user'
import { useQuery } from '@tanstack/react-query'
import VerticalBarDecorator from '@/components/verticalBarDecorator'
import { tokens } from '@/variables/styles'
import { useGenerateMenuOptions } from './hooks'
import { VerticalMenu } from '@/components/verticalMenu'

const useLoadUser = () => {
  const { isAuthenticated } = useAuthContext()

  const { getUserInfo } = useUserServices()
  const { data, isLoading } = useQuery({ ...getUserInfo(), enabled: isAuthenticated })

  return { data, isLoading }
}

const SideMenu = () => {
  const { data, isLoading } = useLoadUser()

  const options = useGenerateMenuOptions()

  if (isLoading) return <Loader />

  if (!data) return <div>No data</div>

  return (
    <FlexContainer flexDirection="column" gap={tokens.space.xl2}>
      <FlexContainer flexDirection="column" gap={tokens.space.sm}>
        <VerticalBarDecorator>
          <Text size="s6" weight="bold" color="darkNeutral">
            Hello&nbsp;{data.payload?.firstName}
          </Text>
        </VerticalBarDecorator>

        <Text>Welcome to your account</Text>
      </FlexContainer>

      <VerticalMenu options={options} />
    </FlexContainer>
  )
}

export { SideMenu }
