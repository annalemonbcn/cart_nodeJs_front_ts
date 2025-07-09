import { AppContainer, MainContainer } from './styles'
import { Toaster } from 'sonner'
import Router from './routes'

const App = () => (
  <AppContainer>
    <Toaster position="top-right" richColors />
    <MainContainer>
      <Router />
    </MainContainer>
  </AppContainer>
)

export default App
