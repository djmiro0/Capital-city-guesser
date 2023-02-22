import React, { useContext } from 'react'
import './header.css';
import { AuthContext } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext';

export default function Header() {
  const {username, isAuthenticated} = useContext(AuthContext)
  const {theme} = useContext(ThemeContext);

  return (
    <header style={{backgroundColor:theme.background, color:theme.color}}>

        {isAuthenticated ? <h1>Welcome {username}</h1> : <h1>No user signed in</h1> }

        
        {/* <Menu username={username} /> */}
    </header>
  )
}
