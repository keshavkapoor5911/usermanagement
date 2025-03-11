import React from 'react'
import './adminlogin.css';
import {NavLink, Outlet} from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div className='container'>

    <div className='box_1'>
    <h1>Admin Sidebar</h1>

    <div className='alllinks'>
  <NavLink  to ='overview'><button className='links'>Overview</button></NavLink><br />
   <NavLink to='blog'><button className='links'>blog</button></NavLink> <br />
   <NavLink to='settings'><button className='links'>setting</button></NavLink>   <br />
    <NavLink to='userdetails'> <button className='links'>userdetails</button></NavLink> <br />
   <NavLink to='UserManagement'><button className='links'>usermange</button></NavLink> 
   </div>
    </div>
  
    <div className='box_2'>
      <Outlet/>
    </div>

    </div>
  )
}

export default AdminLogin