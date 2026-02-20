import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout'


export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/contact',
            element: <Contact />
          },
          {
            path: '/shop',
            element: <Shop />
          }
        ]
      }
    ]
  )


  return (
    <RouterProvider router={routes} />
  )
}
