import { useNavigate } from 'react-router-dom'
import Banner from '@/common/banner'
import BaseLayout from '@/common/layouts/baseLayout'
import FlexContainer from '@/components/flexContainer'
import { routeMap } from '@/routes/utils'
import type { IBannerProps } from '@/common/banner/types'

const MenPage = () => {
  const navigate = useNavigate()

  const bannerProps: IBannerProps = {
    content: {
      imgSrc: '/images/men_banner.jpg',
      h1: 'Summer Value Pack',
      description: 'Go to your profile to start the demo.\nThis is a sample home page.',
      topText: 'T-Shirt / Tops'
    },
    button: {
      label: 'Go to Profile',
      onClick: () => navigate(routeMap.profile.path)
    }
  }

  return (
    <BaseLayout showBreadcrumb={false} isHome>
      <FlexContainer flexDirection="column" gap="xl4">
        <Banner {...bannerProps} bannerProps={{ textColor: 'darkNeutral' }} />
      </FlexContainer>
    </BaseLayout>
  )
}

export { MenPage }
