import type { PropsWithChildren } from '@/variables/types'
import { tokens, colors } from '@/variables'

type FontSize = keyof typeof tokens.font.size
type FontWeight = keyof typeof tokens.font.weight
type TextColor = keyof typeof colors

interface ITextProps extends PropsWithChildren {
  size?: FontSize
  weight?: FontWeight
  color?: TextColor
  as?: keyof HTMLElementTagNameMap
}

export type { ITextProps, FontSize, FontWeight, TextColor }
