import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import AdminLogin from '../AdminDashboard/AdminLogin';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();



  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if ("email" == name) {
      setEmail(value);
    }
    if ("password" == name) {
      setPassword(value);
    }

  }
  const adminEmail = "admin@gmail.com";
  const adminPassword = 123456;

  // const adminEmail1 = "admin@gmail1.com";
  // const adminPassword1 = 123456;

  // const adminEmail2 = "admin@gmail2.com";
  // const adminPassword2 = 123456;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email == "" || password == "") {
      alert("please enter the details");
    }
    if (email == adminEmail && password == adminPassword ) {
      alert("admin login succesfully");
      navigate("/adminlogin")
      return
    }
    else {


      let getDetails = JSON.parse(localStorage.getItem("user"));
      console.log(getDetails);
      getDetails.map((curValue) => {
        console.log(curValue.email);
        let storeEmail = curValue.email;
        let storePassword = curValue.password;


        if (storeEmail == email && storePassword == password) {
          alert("login succesfully");
          navigate("/home")
          return
        }


        else {
          return setMsg("invalid email or password");
        }
      })
    }

  }
  return (
    <div>
      {/* <Navbar /> */}
      <div >
        <p className='errmsg'>{msg}</p>
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='heading'>
            <p>log in</p>
          </div>
          <div className="account">
            <input type="text" name='email' placeholder='enter your mail' onChange={handleInput} />
            <input type="password" name='password' placeholder='enter your password' onChange={handleInput} />
            <p>if you have to create account ? <a href="/signup">sign up</a></p>
          </div>
          <button>log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login