import { Toaster } from 'sonner'
import Footer from './common/footer'
import Header from './common/header'
import AppRouter from './routes/router.tsx'
import { AppContainer, MainContainer } from './styles'

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
