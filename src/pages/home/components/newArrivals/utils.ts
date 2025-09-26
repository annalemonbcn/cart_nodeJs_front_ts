import type { ITileProps } from '../../../../components/tile/types'

const generateTiles = () => {
  const tiles: ITileProps[] = [
    {
      imgSrc: '/images/new_arrivals_1.png',
      title: 'Knitted Joggers'
    },
    {
      imgSrc: '/images/new_arrivals_2.png',
      title: 'Full Sleeve'
    },
    {
      imgSrc: '/images/new_arrivals_3.png',
      title: 'Active T-Shirts'
    },
    {
      imgSrc: '/images/new_arrivals_4.png',
      title: 'Urban T-Shirts'
    }
  ]

  return tiles
}

export { generateTiles }
