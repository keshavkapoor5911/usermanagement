import React, { useState,useEffect } from 'react'
import Navbarmain from './Navbarmain'

const Explorepage = () => {

    useEffect(() => {
      document.body.style.backgroundColor = '#ADD8E6';
      return () => {
        document.body.style.backgroundColor = ""; // Reset on unmount
      };
    }, []);

  const [publishedBlogs , setPublishedblogs] = useState([]);

   useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("user3") || "[]");
      if(storedData)
      {
        const publish = storedData.filter(item=>item.isPublished)
        setPublishedblogs(publish);
      }
    }, [])

  return (
    <>
        <Navbarmain/>

        <div className='lastdiv'>
          {publishedBlogs.map((item, index) => (
            <div key={index} className='lastinnerdiv'>
              <h3><img src={item.image} alt="image" width="200" height='200'></img></h3>
              <h3> this is our title : {item.title}</h3>
              <h3>this is author name: {item.authorname}</h3>
              <h3>this is our content: {item.content}</h3>
            </div>
          ))}
        </div>

      



    </>
  )
}

export default Explorepage