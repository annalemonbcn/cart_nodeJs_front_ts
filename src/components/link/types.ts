import type { ColorToken, FontSizeToken, FontWeightToken } from '@/theme'
import type { PropsWithChildren } from '@/variables/types/global.types'
import type { LinkProps as RouterLinkProps } from 'react-router-dom'
import type { DefaultTheme } from 'styled-components'

interface LinkProps extends PropsWithChildren {
  to: string
  size?: FontSizeToken
  weight?: FontWeightToken
  color?: ColorToken | 'inherit'
  underline?: boolean
  className?: string
}

type StyledLinkProps = {
  size?: keyof DefaultTheme['tokens']['font']['size']
  weight?: keyof DefaultTheme['tokens']['font']['weight']
  color?: ColorToken | 'inherit'
  underline?: boolean
} & RouterLinkProps

export type { LinkProps, StyledLinkProps }
