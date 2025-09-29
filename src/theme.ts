import styled from "styled-components"

const theme = {
  breakpoints: {
    mobile: '767px',
    tablet: '1023px',
    desktop: '1024px'
  }
}

const media = {
  mobile: (styles: string) => `
    @media (max-width: ${theme.breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: string) => `
    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles: string) => `
    @media (min-width: ${theme.breakpoints.desktop}) {
      ${styles}
    }
  `
}

const StyledDesktopWrapper = styled.div`
  ${media.mobile(`display: none;`)}
`

const StyledMobileWrapper = styled.div`
  ${media.tablet(`display: none;`)}
  ${media.desktop(`display: none;`)}
`

export { media, StyledDesktopWrapper, StyledMobileWrapper }
