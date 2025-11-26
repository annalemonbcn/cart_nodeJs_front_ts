import { useNavigate } from 'react-router-dom'
import Banner from '@/common/banner'
import BaseLayout from '@/common/layouts/baseLayout'
import FlexContainer from '@/components/flexContainer'
import { routeMap } from '@/routes/utils'
import { tokens } from '@/variables/styles'
import { MensCategories, WomensCategories } from './components/categoriesRender'
import { NewArrivals } from './components/newArrivals'
import { Content } from './styles'
import type { IBannerProps } from '@/common/banner/types'

const HomePage = () => {
  const navigate = useNavigate()

  const bannerProps: IBannerProps = {
    content: {
      imgSrc: '/images/home_banner.jpg',
      h1: 'Summer Value Pack',
      description: 'Go to your profile to start the demo.\nThis is a sample home page.',
      topText: 'T-Shirt / Tops'
    },
    button: {
      label: 'Go to Profile',
      onClick: () => navigate(routeMap.profile.path)
    },
    bannerProps: {
      textColor: 'darkNeutral'
    }
  }

  return (
    <BaseLayout showBreadcrumb={false} isHome>
      <FlexContainer flexDirection="column" gap={tokens.space.xl4}>
        <Banner {...bannerProps} />
        <Content flexDirection="column" gap={tokens.space.xl4}>
          <NewArrivals />
          <MensCategories />
          <WomensCategories />
        </Content>
      </FlexContainer>
    </BaseLayout>
  )
}

export { HomePage }
