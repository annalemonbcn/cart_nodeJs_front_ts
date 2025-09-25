import { createGlobalStyle } from 'styled-components'
import { colors } from '../index.ts'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: ${colors.white};
    color: ${colors.mediumNeutral};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

const MAX_VIEW_WIDTH = '1440px'

export default GlobalStyles
export { MAX_VIEW_WIDTH }
