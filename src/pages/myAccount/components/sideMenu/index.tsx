import Title from '@/common/titles/title'
import FlexContainer from '@/components/flexContainer'
import Loader from '@/components/loader'
import Text from '@/components/text'
import VerticalBarDecorator from '@/components/verticalBarDecorator'
import { useLoadUser } from '@/hooks/useLoadUser'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { theme } from '@/theme'
import { useDisplayBackButton, useGenerateMenuOptions } from './hooks'
import { StyledSideMenu } from './styles'
import { BackButton } from '../backButton'
import { ProfileMenu } from '../profileMenu'

const Menu = () => {
  const options = useGenerateMenuOptions()

  return <ProfileMenu {...{ options }} />
}

const SideMenu = () => {
  const { data, isLoading } = useLoadUser()

  const showBackButton = useDisplayBackButton()
  const isDesktop = useMediaQuery(theme.mq.js.up('md'))

  if (isLoading) return <Loader />
  if (!data) return <div>No data</div>

  return (
    <StyledSideMenu flexDirection="column" gap="xl2">
      <FlexContainer flexDirection="column" gap="sm">
        <VerticalBarDecorator>
          <Title title={`Hello, ${data.firstName}`} />
        </VerticalBarDecorator>
        <Text>Welcome to your account</Text>
      </FlexContainer>

      {showBackButton && !isDesktop && <BackButton />}
      {(!showBackButton || isDesktop) && <Menu />}
    </StyledSideMenu>
  )
}

export { SideMenu }
