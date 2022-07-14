import React from 'react'
import Home from './pages/Home';
import Movie from './pages/Movie';
import { Routes, Route} from 'react-router-dom';
import{useLocation} from 'react-router-dom';
import Stream from './pages/Stream';
import Bookpg from './pages/Bookpg';
import {AnimatePresence} from 'framer-motion'
function Animatedroutes() {
    const location=useLocation();
  return (
    <AnimatePresence><Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home/>} />
    <Route path="movie" element={<Movie/>} />
    <Route path="stream" element={<Stream/>} />
<Route path="movie/book" element={<Bookpg/>}/>
   </Routes></AnimatePresence>
    
  )
}

export default Animatedroutes