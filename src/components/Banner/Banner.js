import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
function Banner() {

    const [Movie, setMovie] = useState()
     useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response=>{
        setInterval(()=>{
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/>
            setMovie(Response.data.results[Math.floor(Math.random() * Response.data.results.length -1)]
        },5000)}
      ))},[])

  return (
    <div
    style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path:""})`}}
        className='banner'>
    
    <div className='content' >
                <h1 className='title'>{Movie ? Movie.title:"" }{Movie ? Movie.name:""}</h1>
                <h1 className='rating'> {Movie ? Movie.vote_average:""}</h1>
               <button className='button' ><Link className='links' to='movie/book' >BOOK TICKET</Link></button>
                
            </div>
            <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
