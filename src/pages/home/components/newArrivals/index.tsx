import { generateTiles } from './utils'
import Section from '@/common/section'
import Tile from '@/components/tile'
import Carousel from '@/common/carousel'
import { StyledDesktopWrapper, StyledMobileWrapper } from '@/theme'
import { StyledFlexContainer } from './styles'

const NewArrivalsDesktop = () => (
  <StyledDesktopWrapper>
    <StyledFlexContainer justifyContent="space-between">
      {generateTiles().map((tile, index) => (
        <Tile key={index} {...tile} />
      ))}
    </StyledFlexContainer>
  </StyledDesktopWrapper>
)

const NewArrivalsMobile = () => (
  <StyledMobileWrapper>
    <Carousel>
      {generateTiles().map((tile, index) => (
        <Tile key={index} {...tile} />
      ))}
    </Carousel>
  </StyledMobileWrapper>
)

const NewArrivals = () => (
  <Section title="New Arrivals">
    <NewArrivalsDesktop />
    <NewArrivalsMobile />
  </Section>
)

export { NewArrivals }
