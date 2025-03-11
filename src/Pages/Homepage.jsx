import React from 'react'
import Navbarmain from './Navbarmain'
import backGroundimage from '../Images/back-ground.jpg'
import './homepage.css'

const Homepage = () => {
    return (
        <div className='outerdiv'>
            <Navbarmain />
            <img className='ppp' src={backGroundimage} alt="ht" />
        </div>
    )
}

export default Homepage