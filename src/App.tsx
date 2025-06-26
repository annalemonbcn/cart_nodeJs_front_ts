import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AppContainer, MainContainer } from './styles'
import Header from './common/header'
import { Routes, Route } from 'react-router'
import LoginPage from './pages/loginPage'

const useFetchSample = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:8080/api/products')
      return res.data
    }
  })

  return { data, isLoading, isError }
}

const App = () => {
  useFetchSample()

  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<div>Signup</div>} />
          {/* <Route path="/signup" element={<SignUpPage />} /> */}
        </Routes>
      </MainContainer>
    </AppContainer>
  )
}

export default App
