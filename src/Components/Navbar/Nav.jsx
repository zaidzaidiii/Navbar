import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Nav.css'


function Nav(props) {
  return (
    <div className='navbar'>
      <div className="logo">
        <Link to="/"><h1>{props.title}</h1></Link>
      </div>
      <div className="nav">
        <Link to="/"><p>Home</p></Link>    
        <Link to='/about'><p>About</p></Link>
        <Link to="/contact"><p>CONTACT</p></Link>
      </div>
      <div className="login">
        <Link to="/login"><h1>Login</h1>
        </Link>
      </div>


    
    </div>
  )
}


export default Nav