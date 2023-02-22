import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

export default function LoginStatus() {

  const[usernameInput, setUsernameInput] = useState(""); //local state = used in only one component/ part of the component
  const {username, isAuthenticated, setIsAuthenticated, setUsername} = useContext(AuthContext);

  const login = (isLoggedIn) => {
    if(isLoggedIn) {
        setIsAuthenticated(true);
        setUsername(usernameInput);
    } else {
        setIsAuthenticated(false);
        setUsername("");
    }
  }

  return (
    <div> 
        {isAuthenticated ? 
        <>
          <h2>STATUS: {username} is signed in right now.</h2>
          <button onClick={() => login(false)} >Log out</button>
        </> 
        :
        <>
         <h2>STATUS: user is signed out right now</h2>
         <input type="text" placeholder='username' onChange={(e) => setUsernameInput(e.target.value)} />
        <input type="password" placeholder='password' />
        <button onClick={() => login(true)}>Log in</button>
        </>}
    </div>
  )
}
