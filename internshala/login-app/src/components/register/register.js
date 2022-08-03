import React, {useState} from 'react';
import Axios from 'axios';
import './register.css';

const Register = () => {

	const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
      alert("Successfully registered");
    })
  }
   return(
   	<div className="registration">
        <h1>Registration</h1>
        <div className="register-username">
        	<label>Username</label>
        	<input type="text"
          		onChange = { (e) => {
          		setUsernameReg(e.target.value);
        		}}/>
        </div>
        <div className="register-password">
        	<label>Password</label>
        	<input type="password" 
          		onChange = { (e) => {
          		setPasswordReg(e.target.value);
        	}}/>
        </div>
        <button className="register-button" onClick={register}>Register</button>
    </div>
   	)
}

export default Register;