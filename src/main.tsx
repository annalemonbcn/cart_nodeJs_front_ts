import { StrictMode } from 'react'
import type { ComponentType } from 'react'
import isPropValid from '@emotion/is-prop-valid'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { AuthProvider } from './auth/provider/authContext.tsx'
import { FiltersStateProvider } from './common/filters/index.tsx'
import { MultiModalProvider } from './hooks/useMultiModal/provider.tsx'
import { theme2 } from './theme.ts'
import GlobalStyles from './variables/styles/globalStyles/index.ts'

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
              <MultiModalProvider>
                <ThemeProvider theme={theme2}>
                  <App />
                </ThemeProvider>
              </MultiModalProvider>
            </FiltersStateProvider>
          </StyleSheetManager>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
