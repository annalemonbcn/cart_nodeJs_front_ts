import { AppContainer, MainContainer } from './styles'
import { Toaster } from 'sonner'
import AppRouter from './routes/router.tsx'
import Footer from './common/footer'
import Header from './common/header'

const App = () => (
  <AppContainer>
    <Toaster position="top-right" richColors />
    <Header />
    <MainContainer>
      <AppRouter />
    </MainContainer>
    <Footer />
  </AppContainer>
)

export default App
