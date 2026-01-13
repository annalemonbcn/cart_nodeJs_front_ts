import styled from 'styled-components'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 100px;
  grid-template-areas: 'header' 'main' 'footer';

  min-height: 100vh;
`

const MainContainer = styled.div`
  grid-area: main;
`

export { AppContainer, MainContainer }
