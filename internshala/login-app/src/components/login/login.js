import React, {useState} from 'react';
import Axios from 'axios';
import './login.css';
const Login = () => {

	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    }).then((response) => {
      if(response.data === "User does'nt exist" || response.data === "") {
        alert("Error login");
      }
      else {
        alert("Successful logged in");
      }
    })
  }
  	return (
  		<div className="login">
        <h1>Login</h1>
        <div className="login-username">
        	<label>Username</label>
        	<input type="text"
          		onChange = { (e) => {
          		setUsername(e.target.value);
        	}}/>
        </div>
        <div className="login-password">
        	<label>Password</label>
        	<input type="password"
          		onChange = { (e) => {
          		setPassword(e.target.value);
        	}}/>
        </div>
        <button className="login-button" onClick={login}>Login</button>
    </div>  
  		)
}

export default Login;