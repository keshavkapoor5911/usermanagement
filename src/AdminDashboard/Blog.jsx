import React, { useState, useEffect, useCallback } from 'react'
import './blog.css';

const Blog = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorname, setAuthorname] = useState('');
  // const [id, setId] = useState('');
  const [image, setImage] = useState();
  // const [ isPublished, setIspublished] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#ADD8E6';
    return () => {
      document.body.style.backgroundColor = ""; // Reset on unmount
    };
  }, []);


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user3") || "[]");
    setData(storedData);
  }, [])

  useEffect(() => {
    localStorage.setItem("user3", JSON.stringify(data));
  }, [data]);



  const handleSave = (e) => {
    e.preventDefault();
    if (title == '' || content == '' || authorname == '' || image == '') {
      alert("fill all the details");
      return
    }

    const existinguser = data.find(item => item.title === title);
    if (existinguser) {
      alert("change your title");
      return
    }

    const now = new Date();

    const dt = [...data];
    const newobject = {
      title: title,
      content: content,
      authorname: authorname,
      // id: id,
      image: image,
      isPublished: false,
      dateTime: now.toISOString()
    }
    dt.push(newobject);
    setData(dt);
    handleClear();
  }

  const handleDelete = (title) => {
    const dt = data.filter(item => item.title !== title);
    setData(dt);
  }

  const handleClear = () => {
    setTitle('');
    setContent('');
    setAuthorname('');
    // setId('');
    setImage('');
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert file to Base64 string
      reader.onloadend = () => {
        setImage(reader.result); // Store Base64 string in state
      };
    }
  };

  // const showOnexplore = (title) =>{
  //   setIspublished(true);
  // }


  const handlePublishChange = (title) => {
    setData(prevData => {
      const updatedData = prevData.map(item => {
        if (item.title === title) {
          return { ...item, isPublished: !item.isPublished };
        }
        return item;
      });
      localStorage.setItem("user3", JSON.stringify(updatedData));
      return updatedData;
    });
  };


  return (
    <div >
      <div className='outerblog' >
        <h1 style={{ paddingLeft: '25px', paddingTop: '12px', color: 'blue' }} >add a new blog</h1>
        <div className='innerblog'>
          <label><br />
            <input style={{ height: '30px', width: '160vh', borderRadius: '5px' }} type="text" placeholder='title' onChange={(e) => { setTitle(e.target.value); console.log(e.target.value) }} value={title} />
          </label>
        </div>
        <div className='innerblog'>
          <label><br />
            <input style={{ height: '45px', width: '160vh', borderRadius: '5px' }} type="text" placeholder='content' onChange={(e) => setContent(e.target.value)} value={content} />
          </label>
        </div>
        <div className='innerblog'>
          <label><br />
            <input style={{ height: '30px', width: '160vh', borderRadius: '5px' }} type="text" placeholder='author name' onChange={(e) => setAuthorname(e.target.value)} value={authorname} />
          </label>
        </div><br />
        {/* <div className='innerblog'>
          <label><br />
            <input className='labeltag' type="number" placeholder='enter your id' onChange={(e) => setId(e.target.value)} value={id} />
          </label>
        </div> */}

        <div className='innerblog' >

          <label>
            <input type="file" id="imageInput" accept="image/*" onChange={handleImageUpload} />
          </label>
        </div>



        <div className='innerblog'>
          <label><br />
            <button className='addblogbtn' onClick={(e) => handleSave(e)}>add blog</button>
          </label>
        </div><br /> <br /> <br />

        <div className='lastdiv'>
          {data.map((item, index) => (
            <div key={index} className='lastinnerdiv'>
              <h3><img src={item.image} alt="image" width="200" height='200'></img></h3>
              <h3> this is our title : {item.title}</h3>
              <h3>this is author name: {item.authorname}</h3>
              <h3>this is our content: {item.content}</h3>
              {item.dateTime && (
                <h3> Date and Time: {new Date(item.dateTime).toLocaleString()}</h3>
                // in this case new Date(item.dateTime)  converts this string back into a JavaScript Date object
                //toLocaleString() formats the Date object into a human-readable format.
              )}

              {/* <div className='innerblog'>
                <label> show on explore page &nbsp;
                  <label><input type="checkbox" placeholder='author name' name="explore" onClick={() => showOnexplore(item.title)} />yes</label>  &nbsp;
                </label>
              </div><br /> */}


              <label htmlFor="HTML">Show on Explore Page&nbsp;
                <input type="checkbox" id='html' name='HTML' checked={item.isPublished} onChange={() => handlePublishChange(item.title)} /></label>


              <button onClick={() => handleDelete(item.title)} className='dltbtn' >delete</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Blog