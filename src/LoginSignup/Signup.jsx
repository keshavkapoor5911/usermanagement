import React, { useState } from 'react'
import main from "../Images/main.jpg"
// import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const userDetail = {
        name: "",
        email: "",
        password: ""
    }

    const [data, setData] = useState(userDetail);
    const navigate = useNavigate();

    const handleInput = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);
        const name = event.target.name;
        const value = event.target.value;

        setData({ ...data, [name]: value })
    }

    console.log(data);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (data.name == "" || data.email == "" || data.password == "") {
            alert("please enter the values");
        }

        else {
            const getData = JSON.parse(localStorage.getItem("user")) || [];
            let arr = [];
            arr = [...getData];
            arr.push(data);
            localStorage.setItem("user", JSON.stringify(arr));
            alert("sign up successfully") /// this part in 45-48 time in youtube
            navigate("/login")
        }
    }

    return (
        <div>
            {/* <Navbar /> */}
            <div className='main-page'>
                <form onSubmit={handleSubmit}>
                    <div className='heading'>
                        <p>sign up</p>
                    </div>
                    <div className="account">
                        <input type="text" name='name' placeholder='enter your name' onChange={handleInput} />
                        <input type="email" name='email' placeholder='enter your mail' onChange={handleInput} />
                        <input type="password" name='password' placeholder='enter your password' onChange={handleInput} />
                        <p>Already have an account ? <a href="/login">login</a></p>
                    </div>
                    <button>signup</button>
                </form>
                <div>
                    <img src={main} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Signup