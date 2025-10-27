import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './variables/styles/globalStyles/index.ts'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'
import type { ComponentType } from 'react'
import { AuthProvider } from './auth/provider/authContext.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FiltersStateProvider } from './common/filters/index.tsx'

const queryClient = new QueryClient()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shouldForwardProp(propName: string, target: string | ComponentType<any>) {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName)
  }
  // For other elements, forward all props
  return true
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <FiltersStateProvider>
              <GlobalStyles />
              <App />
            </FiltersStateProvider>
          </StyleSheetManager>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
