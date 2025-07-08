import { AppContainer, MainContainer } from './styles'
import { Toaster } from 'sonner'
import Header from './common/header'
import Router from './routes'

const App = () => (
  <AppContainer>
    <Toaster position="top-right" richColors />
    <Header />
    <MainContainer>
      <Router />
    </MainContainer>
  </AppContainer>
)

export default App
