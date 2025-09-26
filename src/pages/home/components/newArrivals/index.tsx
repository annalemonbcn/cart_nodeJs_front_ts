import FlexContainer from '@/components/flexContainer'
import { generateTiles } from './utils'
import Section from '@/common/section'
import Tile from '@/components/tile'

const NewArrivals = () => (
  <Section title="New Arrivals">
    <FlexContainer justifyContent="space-between">
      {generateTiles().map((tile, index) => (
        <Tile key={index} {...tile} />
      ))}
    </FlexContainer>
  </Section>
)

export { NewArrivals }
