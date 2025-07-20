import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Events from './Components/Events/Events.jsx'
import Leadership from './Components/Leadership/Leadership.jsx'
import Membership from './Components/Membership/Membership.jsx'
import Contact from './Components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },

  {
    path : '/about',
    element : <About />
  },

  {
    path: '/events',
    element: <Events />
  },

  {
    path : '/leadership',
    element : <Leadership />
  },

  {
    path : '/membership',
    element : <Membership />
  },

  {
    path : '/contact',
    element : <Contact />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
