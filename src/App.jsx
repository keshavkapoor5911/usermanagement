import React from 'react'
import './App.css'
import Signup from './LoginSignup/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './LoginSignup/Home'
import Login from './LoginSignup/Login'
import AdminLogin from './AdminDashboard/AdminLogin'
// import AdminLogin from './AdminDashboard/AdminLogin'
import Blog from './AdminDashboard/Blog'
import Overview from './AdminDashboard/Overview'
import Settings from './AdminDashboard/Settings'
import UserDetails from './AdminDashboard/UserDetails'
import UserManagement from './AdminDashboard/UserManagement'
import Navbarmain from './Pages/Navbarmain'
import Homepage from './Pages/Homepage'
import Aboutpage from './Pages/Aboutpage'
import Contactpage from './Pages/Contactpage'
import Explorepage from './Pages/Explorepage'
import Servicepage from './Pages/Servicepage'
import NotFound from './LoginSignup/NotFound'



function App() {

  return (
    <BrowserRouter>
      {/* <Navbarmain/> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/aboutpage' element={<Aboutpage />} />
        <Route path='/contactpage' element={<Contactpage />} />
        <Route path='/explorepage' element={<Explorepage />} />
        <Route path='/servicepage' element={<Servicepage />} />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/adminlogin' element={<AdminLogin />} >
          <Route path='blog' element={<Blog />} />
          <Route path='overview' element={<Overview />} />
          <Route path='settings' element={<Settings />} />
          <Route path='userdetails' element={<UserDetails />} />
          <Route path='usermanagement' element={<UserManagement />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
