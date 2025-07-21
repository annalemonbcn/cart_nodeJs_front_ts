const colors = {
  darkNeutral: '#3C4242',
  mediumNeutral: '#807D7E',
  white: '#FFFFFF',
  lightNeutral: '#BEBCBD',
  offWhite: '#EDEEF2',
  whiteSmoke: '#F6F6F6',
  primary: '#8A33FD',
  danger: '#EE1D52'
}

const space = {
  xs2: '0.25rem', // 4px
  xs: '0.5rem', // 8px
  sm2: '0.625rem', // 10px
  sm: '0.75rem', // 12px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  xl2: '2.5rem', // 40px
  xl3: '3rem', // 48px
  xl4: '4rem', // 64px
  xl5: '5rem', // 80px
  xl6: '6rem' // 96px
}

const fontSize = {
  s1: '0.625rem', // 10px
  s2: '0.75rem', // 12px
  s3: '0.875rem', // 14px
  s4: '1rem', // 16px
  s5: '1.25rem', // 20px
  s6: '1.5rem', // 24px
  s7: '2.125rem', // 34px
  s8: '2.5rem' // 40px
}

const fontWeight = {
  regular: '400',
  medium: '500',
  bold: '600'
}

const borderSize = {
  xs: '1px',
  sm: '2px',
  md: '4px',
  lg: '8px'
}

const borderRadius = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  full: '100%'
}

const tokens = {
  font: {
    size: fontSize,
    weight: fontWeight
  },
  borders: {
    size: borderSize,
    radius: borderRadius
  },
  space
}

export { colors, tokens }
