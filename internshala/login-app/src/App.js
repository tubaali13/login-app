import './App.css';
import React, {useState} from 'react';
import Login from './components/login/login';
import Register from './components/register/register';
import Navbar from './components/navbar/navbar';


function App() {
  const [route, setRoute] = useState('Login');
  return (
    <div className="App">
      <Navbar route={route} setRoute={setRoute}/>
      { route === "Login" 
        ? 
        <Login />
        :
        <Register/> 
      }
    </div>
  );
}

export default App;
