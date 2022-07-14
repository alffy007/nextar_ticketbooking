import React from 'react'
import  './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <hr ></hr>
        <div  className='heading'>
        <p ><strong>MOVIES NOW PLAYING IN KOCHI</strong></p>
        <p className='p1'>Thor: Love and Thunder | Jugjugg Jeeyo | Rashtra Kavach OM | Rocketry: The Nambi Effect | Minions: The Rise of Gru | Vikram | Jujutsu Kaisen 0</p>
<br></br>
        <p><strong>UPCOMING MOVIES</strong></p>
        <p className='p2'>Kaduva |Pyali | Alone | Thallumaala
 | Gold | Padavettu</p></div>
       <img className='logo1' src='/images/logo3.png' alt=''/>
       <a className='sub' href='https://alffy007.github.io/Metaflix-React-project/'>@powered by metaflix</a>
    </div>
  )
}

export default Footer