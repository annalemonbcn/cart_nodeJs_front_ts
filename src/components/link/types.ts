import type { PropsWithChildren } from '@/variables/types/global.types'
import type { FontSize } from '../text/types'
import type { FontWeight } from '../text/types'
import type { TextColor } from '../text/types'

interface LinkProps extends PropsWithChildren {
  to: string
  size?: FontSize
  weight?: FontWeight
  color?: TextColor
}

export type { LinkProps }
