import styled, { css, type RuleSet } from 'styled-components'

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
