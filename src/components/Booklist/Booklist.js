import React from 'react'
import './Booklist.css'
import { Link } from "react-router-dom";
function Booklist() {
  return (
    <div className='list'><ul>
        <h2>Vanitha Veneetha CINEPLEX RGB LASER 4K3D:Edappally
          <button className='time'>1.00am<br></br>3D/4K/LASER</button>
          <button className='time'>3.00am<br></br>3D/4K/LASER</button>
          <button className='time'>7.45pm<br></br>3D/4K/LASER</button>
          <button className='time'>8.15pm<br></br>3D/4K/LASER</button>
          <h2>M-Ticket</h2>        </h2>
        <h2>EVM Cinema Fort Kochi 4K 3D Dolby Atmos
        <button className='time'>11.45pm<br></br>3D/4K/LASER</button>
        <button className='time'>1.30pm<br></br>3D/4K/LASER</button>
        </h2>
        <h2>G Cinemas Fort: Kochi, 4K Dolby ATMOS
        <button className='time'>12.30pm</button>
        <button className='time'>4.00pm</button><button className='time'>10.40pm</button><button className='time'>10.40pm</button>
        </h2>
        
        <h2>New Central Talkies Dolby Atmos 2K and 3D: Thripununthura
        <button className='time'>2.00pm<br></br></button>
        <button className='time'>5.30pm<br></br></button>
        <button className='time'>8.30pm<br></br></button>

        </h2>

        <h2>Pan Cinemas: Nucleus Mall
        <button className='time'>12.30pm<br></br>3D/4K/LASER</button>
        <button className='time'>3.45pm<br></br>3D/4K/LASER</button>
        </h2>
        <h2>PVR: Lulu (Gold), Kochi
        <button className='time'>3.00pm<br></br>3D/4K/LASER</button>
                
        <button className='time'>11.00pm<br></br>3D/4K/LASER</button>
        <button className='time'>12.30pm<br></br>3D/4K/LASER</button>
        <button className='time'>1.45pm<br></br>3D/4K/LASER</button>
        <button className='time'>2.30pm<br></br>3D/4K/LASER</button>

        <button className='time'>4.00pm<br></br>3D/4K/LASER</button>
        <button className='time'>7.00pm<br></br>3D/4K/LASER</button>
        <h2>M-Ticket</h2>
        </h2>

        <h2>PVR: Oberon Mall, Kochi
        <button className='time'>4.00pm<br></br>3D/4K/LASER</button>
        <button className='time'>5.00pm<br></br>3D/4K/LASER</button>

        <button className='time'>6.30pm<br></br>3D/4K/LASER</button>
        <button className='time'>9.00pm<br></br>3D/4K/LASER</button>
        <h2>M-Ticket</h2>

        </h2>
        </ul>
        <Link className='nxt' to='/'>Home</Link>
        <br></br>
    <Link className='nxt' to='/movie'>Movie</Link></div>
  )
}

export default Booklist