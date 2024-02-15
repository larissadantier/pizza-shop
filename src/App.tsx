import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from '@/routes/index.tsx'

import { ThemeProvider } from './contexts/themeProvider'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
