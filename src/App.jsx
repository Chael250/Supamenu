import React from 'react'
import { BrowserRouter, Routes , Route  } from 'react-router-dom'
import Landing from "./pages/landing-page/Landing"
import Signup from './pages/Signup/Signup'
import Login from './pages/login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import AddClient from './pages/Addclient/AddClient'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />}/>
        <Route path="/dashboard" exact element={<Dashboard />}/>
        <Route path='/addclient' exact element={<AddClient />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App