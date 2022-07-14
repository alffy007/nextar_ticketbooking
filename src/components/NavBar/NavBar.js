import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
function NavBar() {
 
  return (
    <div className='navbar'>
      <Link  to='/'><img className='logo' src="/images/logo3.png" alt="logo" /></Link>
        
       <hr ></hr>
       
      
      
       <input className='search' placeholder='Search Movie,Events,Streams...' type="text" />
       <h2 className='place'>Kochi</h2>
       
       <button className='sign'>Sign In</button>
     <nav className='option'>

<ul >
<Link className='link1' to='/'>Home</Link>
    <Link className='link2' to='/movie'>Movie</Link>
    <Link className='link3' to='/stream'>Stream</Link>

    </ul>
   
     </nav>
     
    
      
      </div>

    
  )

  }


export default NavBar