import FlexContainer from '@/components/flexContainer'
import Loader from '@/components/loader'
import Text from '@/components/text'
import VerticalBarDecorator from '@/components/verticalBarDecorator'
import { tokens } from '@/variables/styles'
import { useGenerateMenuOptions } from './hooks'
import { VerticalMenu } from '@/components/verticalMenu'
import { useLoadUser } from '@/hooks/useLoadUser'
import { StyledSideMenu } from './styles'
import Title from '@/common/titles/title'

const SideMenu = () => {
  const { data, isLoading } = useLoadUser()
  const options = useGenerateMenuOptions()

  if (isLoading) return <Loader />

  if (!data) return <div>No data</div>

  return (
    <StyledSideMenu flexDirection="column" gap={tokens.space.xl2}>
      <FlexContainer flexDirection="column" gap={tokens.space.sm}>
        <VerticalBarDecorator>
          <Title title={`Hello, ${data.payload?.firstName}`} />
        </VerticalBarDecorator>

        <Text>Welcome to your account</Text>
      </FlexContainer>

      <VerticalMenu options={options} />
    </StyledSideMenu>
  )
}

export { SideMenu }
