import { AppContainer, MainContainer } from './styles'
import { Toaster } from 'sonner'
import AppRouter from './routes/Router'
import Footer from './common/footer'

const App = () => (
  <AppContainer>
    <Toaster position="top-right" richColors />
    <MainContainer>
      <AppRouter />
    </MainContainer>
    <Footer />
  </AppContainer>
)

export default App
