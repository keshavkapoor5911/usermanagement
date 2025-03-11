import React from 'react'
import Navbarmain from './Navbarmain'
import './aboutpage.css'

const Aboutpage = () => {
  return (
    <div>
        <Navbarmain />
        <h1 className='abouth1'>about</h1>
        <div className='outerabout'>
        <p>
        Founded on the principle that user management should be simple and secure,
          User Managemnt was created to address the growing challenges businesses face
          in managing user access. We believe that efficient user administration is
          crucial for maintaining data security and operational efficiency.
          Our team has a deep understanding of the intricacies of user management,
          and we're passionate about providing a platform that simplifies these processes.
          We're constantly innovating and improving our platform to meet the evolving needs of our users.
          We value our customer's feedback and strive to create a partnership that helps their business succeed.
        </p>
        </div>
    </div>

  )
}

export default Aboutpage