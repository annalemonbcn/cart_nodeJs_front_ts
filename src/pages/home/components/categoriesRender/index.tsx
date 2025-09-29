import Section from '@/common/section'
import Tile from '@/components/tile'
import type { ITileProps } from '@/components/tile/types'
import { getMensCategories, getWomensCategories } from './utils'
import { StyledDesktopWrapper, StyledMobileWrapper } from '@/theme'
import Carousel from '@/common/carousel'
import { StyledFlexContainer } from './styles'

const MensCategoriesDesktop = ({ categories }: { categories: ITileProps[] }) => (
  <StyledDesktopWrapper>
    <StyledFlexContainer justifyContent="space-between">
      {categories.map((category, index) => (
        <Tile key={index} {...category} tileStyle="rectangular" />
      ))}
    </StyledFlexContainer>
  </StyledDesktopWrapper>
)

const MensCategoriesMobile = ({ categories }: { categories: ITileProps[] }) => (
  <StyledMobileWrapper>
    <Carousel>
      {categories.map((category, index) => (
        <Tile key={index} {...category} tileStyle="rectangular" />
      ))}
    </Carousel>
  </StyledMobileWrapper>
)

const MensCategories = () => {
  const mensCategories = getMensCategories().map((item) => ({
    ...item,
    description: 'Explore Now!',
    showArrow: true
  }))

  return (
    <Section title="Categories For Men">
      <MensCategoriesDesktop categories={mensCategories} />
      <MensCategoriesMobile categories={mensCategories} />
    </Section>
  )
}

const WomensCategoriesDesktop = ({ categories }: { categories: ITileProps[] }) => (
  <StyledDesktopWrapper>
    <StyledFlexContainer justifyContent="space-between">
      {categories.map((category, index) => (
        <Tile key={index} {...category} tileStyle="rectangular" />
      ))}
    </StyledFlexContainer>
  </StyledDesktopWrapper>
)

const WomensCategoriesMobile = ({ categories }: { categories: ITileProps[] }) => (
  <StyledMobileWrapper>
    <Carousel>
      {categories.map((category, index) => (
        <Tile key={index} {...category} tileStyle="rectangular" />
      ))}
    </Carousel>
  </StyledMobileWrapper>
)

const WomensCategories = () => {
  const womensCategories = getWomensCategories().map((item) => ({
    ...item,
    description: 'Explore Now!',
    showArrow: true
  }))

  return (
    <Section title="Categories For Women">
      <WomensCategoriesDesktop categories={womensCategories} />
      <WomensCategoriesMobile categories={womensCategories} />
    </Section>
  )
}

export { MensCategories, WomensCategories }
