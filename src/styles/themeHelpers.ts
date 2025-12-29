import { css } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

const fromTheme =
  <T>(pick: (theme: DefaultTheme) => T) =>
  ({ theme }: { theme: DefaultTheme }) =>
    pick(theme)

const t = {
  space: (key: keyof DefaultTheme['tokens']['space']) => fromTheme((th) => th.tokens.space[key]),
  borderSize: (key: keyof DefaultTheme['tokens']['borders']['size']) => fromTheme((th) => th.tokens.borders.size[key]),
  borderRadius: (key: keyof DefaultTheme['tokens']['borders']['radius']) =>
    fromTheme((th) => th.tokens.borders.radius[key]),
  fontSize: (key: keyof DefaultTheme['tokens']['font']['size']) => fromTheme((th) => th.tokens.font.size[key]),
  fontWeight: (key: keyof DefaultTheme['tokens']['font']['weight']) => fromTheme((th) => th.tokens.font.weight[key]),
  shadows: (key: keyof DefaultTheme['tokens']['shadows']) => fromTheme((th) => th.tokens.shadows[key]),
  color: <K extends keyof DefaultTheme['colors']>(
    key: K,
    shade?: K extends 'danger' ? keyof DefaultTheme['colors']['danger'] : undefined
  ) =>
    fromTheme((th) =>
      key === 'danger' ? th.colors.danger[shade as keyof DefaultTheme['colors']['danger']] : th.colors[key]
    )
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
