import React from "react"
import {Link} from 'react-router-dom'
 

export default function Navbar() {
  return (
    <header>
        
            <ul>
            <Link to='/' >Home </Link>
            </ul>
            
            <ul>
            <Link to='/about'>About</Link>
            </ul>

            <ul>
            <Link to='/portfolio'>Portfolio</Link>
            {/* <li><a href="Portfolio">Portfolio</a></li> */}
            </ul>

            <ul>
            <li><a href="contact">Contact</a></li>
            </ul>
            
    </header>
  )
}
