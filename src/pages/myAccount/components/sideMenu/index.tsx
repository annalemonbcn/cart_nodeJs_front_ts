import FlexContainer from '@/components/flexContainer'
import Loader from '@/components/loader'
import Text from '@/components/text'
import VerticalBarDecorator from '@/components/verticalBarDecorator'
import { tokens } from '@/variables/styles'
import { useGenerateMenuOptions } from './hooks'
import { VerticalMenu } from '@/common/menus/verticalMenu'
import { useLoadUser } from '@/hooks/useLoadUser'
import { StyledSideMenu } from './styles'
import Title from '@/common/titles/title'
import { HorizontalMenu } from '@/common/menus/horizontalMenu'
import { StyledDesktopWrapper, StyledMobileWrapper } from '@/theme'

const Menu = () => {
  const options = useGenerateMenuOptions()

  return (
    <>
      <StyledDesktopWrapper>
        <VerticalMenu options={options} />
      </StyledDesktopWrapper>
      <StyledMobileWrapper>
        <HorizontalMenu options={options} />
      </StyledMobileWrapper>
    </>
  )
}

const SideMenu = () => {
  const { data, isLoading } = useLoadUser()

  if (isLoading) return <Loader />

  if (!data) return <div>No data</div>

  return (
    <StyledSideMenu flexDirection="column" gap={tokens.space.xl2}>
      <FlexContainer flexDirection="column" gap={tokens.space.sm}>
        <VerticalBarDecorator>
          <Title title={`Hello, ${data.firstName}`} />
        </VerticalBarDecorator>

        <Text>Welcome to your account</Text>
      </FlexContainer>

      <Menu />
    </StyledSideMenu>
  )
}

export { SideMenu }
