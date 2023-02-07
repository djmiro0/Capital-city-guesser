import React from 'react';
import "./Header.css"
import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <div id='header'>
    
{/* nested components*/}
    <Logo/> 
    <Nav/>

    </div>
  )
}
