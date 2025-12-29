import type { ColorToken, FontSizeToken, FontWeightToken } from '@/theme'
import type { PropsWithChildren } from '@/variables/types/global.types'

interface ITextProps extends PropsWithChildren {
  size?: FontSizeToken
  weight?: FontWeightToken
  color?: ColorToken | 'inherit'
  as?: keyof HTMLElementTagNameMap
  underline?: boolean
  clamp?: boolean
}

type StyledTextProps = {
  size?: FontSizeToken
  weight?: FontWeightToken
  color?: ColorToken | 'inherit'
  underline?: boolean
  clamp?: boolean
}

export type { ITextProps, StyledTextProps }
