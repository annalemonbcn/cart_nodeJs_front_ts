import Section from '@/common/section'
import FlexContainer from '@/components/flexContainer'
import Tile from '@/components/tile'
import type { ITileProps } from '@/components/tile/types'
import { getMensCategories, getWomensCategories } from './utils'

const CategoriesRender = ({ categories }: { categories: ITileProps[] }) => (
  <FlexContainer justifyContent="space-between">
    {categories.map((category, index) => (
      <Tile key={index} {...category} tileStyle="rectangular" />
    ))}
  </FlexContainer>
)

const MensCategories = () => {
  const mensCategories = getMensCategories().map((item) => ({
    ...item,
    description: 'Explore Now!',
    showArrow: true
  }))

  return (
    <Section title="Categories For Men">
      <CategoriesRender categories={mensCategories} />
    </Section>
  )
}

const WomensCategories = () => {
  const womensCategories = getWomensCategories().map((item) => ({
    ...item,
    description: 'Explore Now!',
    showArrow: true
  }))

  return (
    <Section title="Categories For Women">
      <CategoriesRender categories={womensCategories} />
    </Section>
  )
}

export { MensCategories, WomensCategories }
