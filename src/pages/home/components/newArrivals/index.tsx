import Carousel from '@/common/carousel'
import Section from '@/common/section'
import Tile from '@/components/tile'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { theme } from '@/theme'
import { StyledFlexContainer } from './styles'
import { generateTiles } from './utils'

const NewArrivalsRender = () => (
  <>
    {generateTiles().map((tile, index) => (
      <Tile key={index} {...tile} />
    ))}
  </>
)

const NewArrivals = () => {
  const isDesktop = useMediaQuery(theme.mq.js.up('md'))

  return (
    <Section title="New Arrivals">
      {isDesktop ? (
        <StyledFlexContainer justifyContent="space-between">
          <NewArrivalsRender />
        </StyledFlexContainer>
      ) : (
        <Carousel>
          <NewArrivalsRender />
        </Carousel>
      )}
    </Section>
  )
}

export { NewArrivals }
