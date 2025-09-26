import type { ITileProps } from '@/components/tile/types'

const getMensCategories = () => {
  const tiles: ITileProps[] = [
    {
      imgSrc: '/images/categories/men/men_categories_1.png',
      title: 'Shirts'
    },
    {
      imgSrc: '/images/categories/men/men_categories_2.png',
      title: 'Printed T-Shirts'
    },
    {
      imgSrc: '/images/categories/men/men_categories_3.png',
      title: 'Plain T-Shirts'
    },
    {
      imgSrc: '/images/categories/men/men_categories_4.png',
      title: 'Polo T-Shirts'
    }
  ]

  return tiles
}

const getWomensCategories = () => {
  const tiles: ITileProps[] = [
    {
      imgSrc: '/images/categories/women/women_categories_1.png',
      title: 'Hoodies & Sweetshirts'
    },
    {
      imgSrc: '/images/categories/women/women_categories_2.png',
      title: 'Coats & Parkas'
    },
    {
      imgSrc: '/images/categories/women/women_categories_3.png',
      title: 'Tees & T-Shirts'
    },
    {
      imgSrc: '/images/categories/women/women_categories_4.png',
      title: 'Shorts'
    }
  ]

  return tiles
}

export { getMensCategories, getWomensCategories }
