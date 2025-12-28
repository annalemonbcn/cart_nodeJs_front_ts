import styled, { css, type RuleSet } from 'styled-components'
import { colors, tokens } from './variables/styles'

/** NEW STUFF */
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

const theme2 = {
  bp,
  colors,
  tokens,
  mq
} as const

type AppTheme = typeof theme2

export { theme2, type BreakpointKey, type AppTheme }

/** OLD STUFF */
const theme = {
  breakpoints: {
    mobile: '767px',
    tablet: '1023px',
    desktop: '1024px'
  }
}

const media = {
  mobile: (styles: RuleSet<object>) => css`
    @media (max-width: ${theme.breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: RuleSet<object>) => css`
    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles: RuleSet<object>) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      ${styles}
    }
  `
}

const StyledDesktopWrapper = styled.div`
  ${media.mobile(
    css`
      display: none;
    `
  )}
`

const StyledMobileWrapper = styled.div`
  ${media.tablet(
    css`
      display: none;
    `
  )}
  ${media.desktop(
    css`
      display: none;
    `
  )}
`

export { media, StyledDesktopWrapper, StyledMobileWrapper }
