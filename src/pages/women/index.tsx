import Banner from '@/common/banner'
import type { IBannerProps } from '@/common/banner/types'
import BaseLayout from '@/common/layouts/baseLayout'
import FlexContainer from '@/components/flexContainer'
import { routeMap } from '@/routes/utils'
import { tokens } from '@/variables/styles'
import { useNavigate } from 'react-router-dom'

const WomenPage = () => {
  const navigate = useNavigate()

  const bannerProps: IBannerProps = {
    content: {
      imgSrc: '/images/women_banner.jpg',
      h1: 'Summer Value Pack',
      description: 'Go to your profile to start the demo.\nThis is a sample home page.',
      topText: 'T-Shirt / Tops'
    },
    button: {
      label: 'Go to Profile',
      onClick: () => navigate(routeMap.profile.path)
    },
    bannerProps: {
      align: 'right'
    }
  }

  return (
    <BaseLayout showBreadcrumb={false} isHome>
      <FlexContainer flexDirection="column" gap={tokens.space.xl4}>
        <Banner {...bannerProps} />
      </FlexContainer>
    </BaseLayout>
  )
}

export { WomenPage }
