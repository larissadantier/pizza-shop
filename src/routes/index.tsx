import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/layouts/app'
import { AuthLayout } from '@/layouts/auth'
import { Dashboard, Orders, SignIn, SignUp } from '@/pages'
import { NotFound } from '@/pages/404'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
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
