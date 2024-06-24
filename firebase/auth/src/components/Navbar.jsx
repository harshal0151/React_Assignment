import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <nav>
   <div className='logo'>
        <h3>Firebase</h3>
    </div>
    <div className='navlinks'>
        <ul>
           <Link to= "/home"><li>Home</li></Link> 
           <Link to = "/"><li>Login</li></Link> 
           <Link to = "/register"><li>Regeter</li></Link> 
        </ul>
    </div>
   </nav>
   </>

  )
}

export default Navbar