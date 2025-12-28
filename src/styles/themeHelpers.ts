import { css } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

const fromTheme =
  <T>(pick: (theme: DefaultTheme) => T) =>
  ({ theme }: { theme: DefaultTheme }) =>
    pick(theme)

const t = {
  space: (key: keyof DefaultTheme['tokens']['space']) => fromTheme((th) => th.tokens.space[key]),

  borderSize: (key: keyof DefaultTheme['tokens']['borders']['size']) => fromTheme((th) => th.tokens.borders.size[key]),

  radius: (key: keyof DefaultTheme['tokens']['borders']['radius']) => fromTheme((th) => th.tokens.borders.radius[key]),

  color: (key: keyof DefaultTheme['colors']) => fromTheme((th) => th.colors[key])
}

const media = {
  tablet: (styles: ReturnType<typeof css>) => css`
    ${({ theme }: { theme: DefaultTheme }) => theme.mq.css.up('md')} {
      ${styles}
    }
  `,
  desktop: (styles: ReturnType<typeof css>) => css`
    ${({ theme }: { theme: DefaultTheme }) => theme.mq.css.up('lg')} {
      ${styles}
    }
  `
}

export { t, media }
