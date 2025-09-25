import BaseLayout from '@/common/layouts/baseLayout'
import { routeMap } from '@/routes/utils'
import { useNavigate } from 'react-router-dom'
import { NewArrivals } from './components/newArrivals'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import Banner from '@/common/banner'
import type { IBannerProps } from '@/common/banner/types'
import { MensCategories, WomensCategories } from './components/categoriesRender'
import { Content } from './styles'

const HomePage = () => {
  const navigate = useNavigate()

  const bannerProps: IBannerProps = {
    imgSrc: '/images/home_banner.jpg',
    h1: 'Summer Value Pack',
    description: 'Go to your profile to start the demo.\nThis is a sample home page.',
    topText: 'T-Shirt / Tops',
    button: {
      label: 'Go to Profile',
      onClick: () => navigate(routeMap.profile.path)
    }
  }

  return (
    <BaseLayout showBreadcrumb={false}>
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
