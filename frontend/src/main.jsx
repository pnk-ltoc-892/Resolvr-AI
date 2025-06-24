import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CheckAuth from './components/CheckAuth.jsx'
import Tickets from './pages/Tickets.jsx'
import Ticket from './pages/Ticket.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' 
              element={
                  <CheckAuth protectedRoute={true}>
                    <Tickets />
                  </CheckAuth>
              }
        />

        <Route path='/tickets/:id' 
              element={
                  <CheckAuth protectedRoute={true}>
                    <Ticket />
                  </CheckAuth>
              }
        />
        <Route path='/login' 
              element={
                  <CheckAuth protectedRoute={false}>
                    <Login />
                  </CheckAuth>
              }
        />
        <Route path='/signup' 
              element={
                  <CheckAuth protectedRoute={false}>
                    <Signup />
                  </CheckAuth>
              }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
