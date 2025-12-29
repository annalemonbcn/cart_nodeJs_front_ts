import { type DefaultTheme } from 'styled-components'
import { colors, tokens } from './variables/styles'

const bp = {
  md: 768,
  lg: 1024
} as const

type BreakpointKey = keyof typeof bp

const mq = {
  css: {
    up: (key: BreakpointKey) => `@media (min-width: ${bp[key]}px)`,
    down: (key: BreakpointKey) => `@media (max-width: ${bp[key] - 1}px)`,
    between: (from: BreakpointKey, to: BreakpointKey) =>
      `@media (min-width: ${bp[from]}px) and (max-width: ${bp[to] - 1}px)`
  },
  js: {
    up: (key: BreakpointKey) => `(min-width: ${bp[key]}px)`,
    down: (key: BreakpointKey) => `(max-width: ${bp[key] - 1}px)`,
    between: (from: BreakpointKey, to: BreakpointKey) => `(min-width: ${bp[from]}px) and (max-width: ${bp[to] - 1}px)`
  }
} as const

const theme = {
  bp,
  colors,
  tokens,
  mq
} as const

type AppTheme = typeof theme
type SpaceToken = keyof DefaultTheme['tokens']['space']
type FontSizeToken = keyof DefaultTheme['tokens']['font']['size']
type FontWeightToken = keyof DefaultTheme['tokens']['font']['weight']

type ThemeColors = DefaultTheme['colors']
type SolidColorKey = {
  [K in keyof ThemeColors]: ThemeColors[K] extends string ? K : never
}[keyof ThemeColors]
type ShadedColorKey = {
  [K in keyof ThemeColors]: ThemeColors[K] extends Record<number, string> ? K : never
}[keyof ThemeColors]
type Shade<K extends ShadedColorKey> = keyof ThemeColors[K]
type ColorToken =
  | SolidColorKey
  | {
      [K in ShadedColorKey]: `${K}.${Shade<K> & number}`
    }[ShadedColorKey]

export {
  theme,
  type BreakpointKey,
  type AppTheme,
  type SpaceToken,
  type FontSizeToken,
  type FontWeightToken,
  type ColorToken
}
