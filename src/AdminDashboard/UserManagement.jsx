import React from 'react'
import './usermanagement.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Country, State } from 'country-state-city';
import Dropdown from './Dropdown'; // Assuming Dropdown.js is in the same directory

const UserManagement = () => {
  const [data, setData] = useState([]);
  const [firstName, setfirstName] = useState('')
  const [gender, setGender] = useState('')
  const [skills, setSkills] = useState([])
  const [email, setEmail] = useState('')
  const [studentId, setStudentId] = useState('')
  const [age, setAge] = useState('')
  const [course, setCourse] = useState('')
  const [year, setYear] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [arrDisabled, setArrDisabled] = useState([]);
  const [search, setsearch] = useState('');
  const [isUpdate, setisUpdate] = useState(false);
  const [editingRow, setEditingRow] = useState(null);


  // this is our pegination work
  const [currentPage, setCurrentpage] = useState(1);
  const [rowsPerpage, setRowsperpage] = useState(5);
  const indexOflastitem = currentPage * rowsPerpage;
  const indexOffirstitem = indexOflastitem - rowsPerpage;
  const currentItems = data?.slice(indexOffirstitem, indexOflastitem);
  // const totalPages = 20 / rowsPerpage;
  const totalPages = Math.ceil(data.length / rowsPerpage);

  // this is dropdown work
  const [countryCode, setCountryCode] = useState('IN');
  const [countryName, setCountryName] = useState('India');

  const [image, setImage] = useState('')

  useEffect(() => {
      document.body.style.backgroundColor = ' #FFFFF0';
      return () => {
        document.body.style.backgroundColor = ""; // Reset on unmount
      };
    }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user2") || "[]");
    setData(storedData);
  }, [])

  useEffect(() => {
    localStorage.setItem("user2", JSON.stringify(data));
  }, [data]);


  const handleData = (e) => {
    e.preventDefault();
    if (firstName == '' || gender == '' || skills == '' || email == '' || studentId == '' || age == '' || course == ' ' || year == '' || country == '' || state == '' || phone == '' || role == '' || countryCode == '' || image == '') {
      alert("fill the all details");
      return;
    }

    const existingStudentid = data.find((item) => item.studentId === studentId);
    if (existingStudentid) {
      alert("Student ID already exists");
      return;
    }

    const dt = [...data];
    const newObject = {
      firstName: firstName,
      gender: gender,
      skills: skills,
      email: email,
      studentId: studentId,
      age: age,
      course: course,
      year: year,
      state: state,
      country: country,
      phone: phone,
      role: role,
      image: image
    }
    dt.push(newObject);
    setData(dt);
    handleClear();
  }

  const handleDelete = (studentId) => {
    const dt = data.filter(item => item.studentId !== studentId);
    setData(dt);
  }

  const handleEdit = (studentId) => {
    const dt = data.filter(item => item.studentId === studentId);
    if (dt !== undefined) {
      setisUpdate(true);

      setfirstName(dt[0].firstName);
      setGender(dt[0].gender);
      // setSkills(Array.isArray(itemToEdit.skills) ? itemToEdit.skills : []);
      setSkills(dt[0].skills);
      setEmail(dt[0].email);
      setStudentId(dt[0].studentId);
      setAge(dt[0].age);
      setCourse(dt[0].course);
      setYear(dt[0].year);
      setState(dt[0].state);
      setCountry(dt[0].country);
      setPhone(dt[0].phone);
      setRole(dt[0].role);
      setImage(dt[0].image);
      // setSkills(Array.isArray(itemToEdit.skills) ? itemToEdit.skills : []);
      

    }
  }

  const handleDisable = (studentId) => {

    const dt = data.find(item => item.studentId === studentId);

    if (!arrDisabled.includes(dt.studentId)) {
      setArrDisabled([...arrDisabled, dt.studentId]);
    } else {
      setArrDisabled([...arrDisabled.filter(x => x != studentId)]);
    }
  }

  const handleupdate = () => {
    const index = data.map((item) => {
      return item.studentId
    }).indexOf(studentId);

    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].gender = gender;
    dt[index].skills = skills;
    dt[index].email = email;
    dt[index].studentId = studentId;
    dt[index].age = age;
    dt[index].course = course;
    dt[index].year = year;
    dt[index].state = state;
    dt[index].country = country;
    dt[index].phone = phone;
    dt[index].role = role;
    dt[index].image = image;
    setData(dt);
    setisUpdate(false)
    handleClear();
  
  }

  const handleClear = () => {
    setfirstName('');
    setGender('');
    setSkills([]);
    setEmail('');
    setStudentId('');
    setAge('');
    setCourse('');
    setYear('');
    setState('');
    setCountry('');
    setPhone('')
    setRole('');
    setImage('')
    
  }

  const searchOption = () => {
    const filterData = data.filter((item) =>
      item.firstName.tolowercase().includes(search.toLowerCase()));
    return filterData;
  }


  // this is  our pagination work
  const handlePrev = () => {
    setCurrentpage((prev) => Math.max(prev - 1, 1));
  }

  const handleNext = () => {
    setCurrentpage((prev) => Math.min(prev + 1, totalPages))
  }
  const handlePageclick = (pageNumber) => {
    setCurrentpage(pageNumber)
  }
  // this or skill edit code
  const handleSkillChange = (e) => {
    const skillValue = e.target.name;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSkills([...skills, skillValue]);
    } else {
      setSkills(skills.filter((skill) => skill !== skillValue));
    }
  };

  // this is dropdown code
  const countryData = Country.getAllCountries().map((country) => ({

    value: country.isoCode,
    displayValue: country.name,
  }));
  // console.log(countryData)

  const stateData = State.getStatesOfCountry(countryCode).map((state) => ({
    value: state.name,
    displayValue: state.name,
  }));



  const handleCountryChange = (event) => {
    debugger
    const selectedCode = event.target.value;
    console.log(selectedCode);
    setCountry(selectedCode);  // Set ISO code to ensure state fetching works
    setCountryCode(selectedCode);
    setState(""); // Reset state when changing country
  };

  const handleStateChange = (event) => {
    setState(event.target.value); // Store selected state name
  };

  // this is image code

  const handleImageUpload = (e) => {
    debugger;
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert file to Base64 string
      reader.onloadend = () => {
        setImage(reader.result); // Store Base64 string in state
      };
    }
  };


  return (
    <>

      <div className='app'>
        {/* <h1 className='userh1'> User Management</h1> */}
        <div className='search_option'>
          <label>serach &nbsp;
            <input className='labeltag' type="text" placeholder='search' onChange={(e) => setsearch(e.target.value)} onClick={searchOption} />
          </label>
        </div><br />

        <div className='table'>
          <div className='p'>
            <label>Firstname : <br />
              <input className='labeltag' type="text" placeholder='firstname' onChange={(e) => {
                setfirstName(e.target.value);
                console.log(e.target.value)
              }} value={firstName} />
            </label>
          </div>
          <div className='p'>
            <h4>Choose your GENDER</h4>
            <label className='labeltag' htmlFor="male"><input type="radio" id="male" name="gender" onChange={(e) => setGender(e.target.value)} value="MALE" checked={gender === "MALE"} /> MALE &nbsp;</label>
            <label className='labeltag' htmlFor="female"><input type="radio" id="female" name="gender" onChange={(e) => setGender(e.target.value)} value="FEMALE" checked={gender === "FEMALE"} /> FEMALE &nbsp;</label>
            <label className='labeltag' htmlFor="other"><input type="radio" id="other" name="gender" onChange={(e) => setGender(e.target.value)} value="OTHER" checked={gender === "OTHER"} /> OTHER &nbsp;</label>
          </div>


          <div className='p'>
            <h4>Skills:</h4>
            <label className='labeltag' htmlFor="HTML"> <input type="checkbox" id='html' name='HTML' onChange={handleSkillChange} checked={skills.includes('HTML')} />HTML &nbsp;</label>
            <label className='labeltag' htmlFor="CSS"> <input type="checkbox" id='css' name='CSS' onChange={handleSkillChange} checked={skills.includes('CSS')} />CSS &nbsp;</label>
            <label className='labeltag' htmlFor="JS"> <input type="checkbox" id='js' name='JS' onChange={handleSkillChange} checked={skills.includes('JS')} />JS &nbsp;</label>
            <label className='labeltag' htmlFor="REACT"> <input type="checkbox" id='REACT' name='REACT' onChange={handleSkillChange} checked={skills.includes('REACT')} />REACT</label>
          </div>

          <div className='p'>
            <label for="email">email :<br />
              <input className='labeltag' type="email" id='email' name='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
          </div>
          <div className='p'>
            <label>Student id :<br />
              <input className='labeltag' type="text" placeholder='studentid' onChange={(e) => setStudentId(e.target.value)} value={studentId} />
            </label>
          </div>
          <div className='p'>
            <label>Age :<br />
              <input className='labeltag' type="number" placeholder='age' onChange={(e) => setAge(e.target.value)} value={age} />
            </label>
          </div>
          <div className='p'>
            <label>Course :<br />
              <input className='labeltag' type="text" placeholder='course' onChange={(e) => setCourse(e.target.value)} value={course} />
            </label>
          </div>
          <div className='p'>
            <label>DOB:<br />
              <input className='labeltag' type="date" placeholder='year' onChange={(e) => setYear(e.target.value)} value={year} />
            </label>
          </div>

          <div className='p'>
            <label >Country:</label>
            <select onChange={handleCountryChange} value={country}>
              <option value="" className='countrylabel' >Select Country</option>
              {Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className='p'>
            <label>State:</label>
            <select onChange={handleStateChange} value={state}>
              <option value="">Select State</option>
              {State.getStatesOfCountry(countryCode).map((state) => (
                <option key={state.isoCode} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className='p'>
            <label > Phone<br />
              <input className='labeltag' type="number" placeholder='phone number' onChange={(e) => setPhone(e.target.value)} value={phone} />
            </label>
          </div>
          <div className='p'>
            <label > Role<br />
              <input className='labeltag' type="text" placeholder='role' onChange={(e) => setRole(e.target.value)} value={role} />
            </label>
          </div>


          <div className='p'>
            <h4>Upload Image:</h4><br />
            <label>
              <input type="file" id="imageInput" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div>


          <div className='app2'>
            {
              !isUpdate ?

                <button onClick={(e) => handleData(e)}>add user</button>
                :
                <button onClick={() => handleupdate()}> update</button>
            }
          </div>
        </div>

        <div className='bottom-table'>
          <table border={1}>
            <thead>
              <tr>
                <td>Sr. No</td>
                <td>firstName</td>
                <td>gender</td>
                <td>skills</td>
                <td>email</td>
                <td>studentId</td>
                <td>age</td>
                <td>course</td>
                <td>year</td>
                <td>country</td>
                <td>state</td>
                <td>phone</td>
                <td>role</td>
                <td>image</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {
                currentItems.filter((item) =>
                  item.firstName.includes(search.toLowerCase()))./*currentItems.*/map((item, index) => {
                    return (
                      <tr key={index} style={{background: item.studentId===studentId && 'skyblue'}}>

                      
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{index + 1}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.firstName}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.gender}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{Array.isArray(item.skills) ? item.skills.join(", ") : item.skills}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.email}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.studentId}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.age}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.course}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.year}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.country}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.state}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.phone}</td>
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.role}</td>
                        {/* <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}>{item.image}</td> */}
                        <td className={arrDisabled.includes(item.studentId) ? "keshav" : ""}><img src={item.image} alt="image" width="50" height='50'></img></td> 
                        <td >
                          <div >
                            <button className='tablebtn' onClick={() => handleDelete(item.studentId)}>delete</button>
                            <button className='tablebtn' onClick={() => handleEdit(item.studentId)}>edit</button>
                            <button className='tablebtn' onClick={() => handleDisable(item.studentId)}>disable</button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </div>
        <div className='pagination'>
          <button onClick={handlePrev} disabled={currentPage === 1}>prev</button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button onClick={() => handlePageclick(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>{index + 1}</button>
          ))}

          <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>



      </div>
    </>
  )
}

export default UserManagement