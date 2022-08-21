 import React from 'react'
 import logo from '../images/logo.webp'
 import { Link } from 'react-router-dom';
 


 export default function Navbar() {
   return (
     <nav>
        <a href='#' className='logo'>
        <Link to='/'>
           <img src={logo} alt='' />
         </Link>
        </a>
         <input className='menu-btn' type='checkbox' id='menu-btn'></input>
          <label className='menu-icon'>
         <span className='nav-icon'></span>
         </label>
         <ul className='menu'>
             <Link to='/'><li><a href='#' className='active'>Home</a></li></Link>
             <li><a href='#'>About</a></li>
             <li><a href='#'>property</a></li>
             <li><a href='Contact'>Contact</a></li>
       </ul>

        
 </nav>
  )
 }
 
 
 
