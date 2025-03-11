import React from 'react'
import './navbarmain.css';
import { NavLink, Outlet } from 'react-router-dom'
const Navbarmain = () => {
    return (
        <>
            <div className='allList'>
                <ul>
                    <span><h1 className='h1'>User Management</h1></span>
                    <NavLink to='../homepage' style={{ textDecoration: "none", fontSize: "20px", paddingLeft: "170px" , paddingTop:"8px"  }} ><p>home</p></NavLink>
                    <NavLink to='../aboutpage' style={{ textDecoration: "none", fontSize: "20px" , paddingTop:"8px" }}><p>about</p></NavLink>
                    <NavLink to='../servicepage' style={{ textDecoration: "none", fontSize: "20px" , paddingTop:"8px" }}><p>service</p></NavLink>
                    <NavLink to='../contactpage' style={{ textDecoration: "none", fontSize: "20px" , paddingTop:"8px" }}><p>contact</p></NavLink>
                    <NavLink to='../explorepage' style={{ textDecoration: "none", fontSize: "20px" , paddingTop:"8px" }}><p>explore</p></NavLink>
                    <NavLink to='../signup' style={{ textDecoration: "none", fontSize: "20px", paddingTop:"8px" }}><p>login/signup</p></NavLink>
                    {/* <li>home</li>
        <li>about</li>
        <li>services</li>
        <li>contact</li>
        <li>explore</li>
        <li>login</li> */}
                </ul>
            </div>

        </>
    )
}

export default Navbarmain