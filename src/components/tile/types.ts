type TileStyle = 'square' | 'rectangular'

interface ITileProps {
  imgSrc: string
  title: string
  description?: string
  showArrow?: boolean
  tileStyle?: TileStyle
}

export type { ITileProps, TileStyle }
