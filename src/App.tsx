import { AppContainer, MainContainer } from './styles'
import { Toaster } from 'sonner'
import AppRouter from './routes/Router'

const App = () => (
  <AppContainer>
    <Toaster position="top-right" richColors />
    <MainContainer>
      <AppRouter />
    </MainContainer>
  </AppContainer>
)

export default App
