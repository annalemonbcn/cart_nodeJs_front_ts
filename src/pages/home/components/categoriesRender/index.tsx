import Carousel from '@/common/carousel'
import Section from '@/common/section'
import Tile from '@/components/tile'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { theme } from '@/theme'
import { StyledFlexContainer } from './styles'
import { getMensCategories, getWomensCategories } from './utils'
import type { CategoriesSectionProps } from './types'
import type { ITileProps } from '@/components/tile/types'

const CategoriesRender = ({ categories }: { categories: ITileProps[] }) => (
  <>
    {categories.map((category) => (
      <Tile key={`key-${category.title}`} {...category} tileStyle="rectangular" />
    ))}
  </>
)

const CategoriesSection = ({ title, getCategories }: CategoriesSectionProps) => {
  const categories = getCategories().map((item) => ({
    ...item,
    description: 'Explore Now!',
    showArrow: true
  }))

  const isDesktop = useMediaQuery(theme.mq.js.up('md'))

  return (
    <Section title={title}>
      {isDesktop ? (
        <StyledFlexContainer justifyContent="space-between">
          <CategoriesRender categories={categories} />
        </StyledFlexContainer>
      ) : (
        <Carousel>
          <CategoriesRender categories={categories} />
        </Carousel>
      )}
    </Section>
  )
}

const MensCategories = () => <CategoriesSection title="Categories For Men" getCategories={getMensCategories} />

const WomensCategories = () => <CategoriesSection title="Categories For Women" getCategories={getWomensCategories} />

export { MensCategories, WomensCategories }
