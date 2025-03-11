import React from 'react'
import './servicepage.css'
import Navbarmain from './Navbarmain'

const Servicepage = () => {
  return (
    <div>
        <Navbarmain/>
        <h1 className='serviceh1'>our services</h1>
        <div className='outer_box'>
          <div className='box'><h3>services 1</h3> <p>We provide exceptional quality in Service 1, ensuring client satisfaction and value.</p> </div>
          <div className='box'><h3>services 2</h3> <p>Our Service 2 is designed to meet all your needs with precision and expertise.</p> </div>
          <div className='box'><h3>services 3</h3> <p>Experience top-notch solutions with our comprehensive Service 3 offerings.</p> </div>
        </div>
    </div>
  )
}

export default Servicepage