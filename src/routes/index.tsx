import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/layouts/app'
import { AuthLayout } from '@/layouts/auth'
import { Dashboard, SignIn, SignUp } from '@/pages'
import { Orders } from '@/pages/app/orders/orders'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
