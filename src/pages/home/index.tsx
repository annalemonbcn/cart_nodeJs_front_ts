import { useNavigate } from 'react-router-dom'
import Banner from '@/common/banner'
import BaseLayout from '@/common/layouts/baseLayout'
import FlexContainer from '@/components/flexContainer'
import { routeMap } from '@/routes/utils'
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
      description: 'Explore our collection of trendy and comfortable clothing for women.',
      topText: 'T-Shirt / Tops'
    },
    button: {
      label: "View Women's Products",
      onClick: () => navigate(routeMap.women.path)
    },
    bannerProps: {
      textColor: 'darkNeutral'
    }
  }

  return (
    <BaseLayout showBreadcrumb={false} isHome>
      <FlexContainer flexDirection="column" gap="xl4">
        <Banner {...bannerProps} />
        <Content flexDirection="column" gap="xl4">
          <NewArrivals />
          <MensCategories />
          <WomensCategories />
        </Content>
      </FlexContainer>
    </BaseLayout>
  )
}

export { HomePage }
