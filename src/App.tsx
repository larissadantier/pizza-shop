import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from '@/routes/index.tsx'

import { ThemeProvider } from './contexts/themeProvider'
import { queryClient } from './lib/react-query'

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
          <Helmet titleTemplate="%s | pizza.shop" />
          <RouterProvider router={router} />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
