import React, { useEffect, useState } from 'react';
import './userdetails.css';

const UserDetails = () => {
    const [userDataArray, setUserDataArray] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('user')) || [];
        setUserDataArray(storedData); 
    }, []);

    if (userDataArray.length === 0) {
        return <div>No user data found.</div>; 
    }

    return (
        <>
        <h1 className='h1'>User Details</h1>
        <div className='table_data'>
          <table border={1}>
            <thead>
              <tr className='table_head'>
                <td>Sr no.</td>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
              </tr>
            </thead>
            <tbody>
            {userDataArray.map((user, index) =>  (
                
                  <tr key={index} className='table_body'>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                
            ))}
            </tbody>
          </table>
        </div>
           
        </>
    );
};

export default UserDetails;

