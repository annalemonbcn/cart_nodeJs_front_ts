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

export { media }
