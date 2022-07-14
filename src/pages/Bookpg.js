import React from 'react'
import Book from '../components/Book/Bookbar'
import Booklist from '../components/Booklist/Booklist'
import Footer from '../components/footer/Footer'
import {motion} from 'framer-motion'

function Bookpg() {
  
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
       <Book />
    <Booklist></Booklist>
    <Footer></Footer></motion.div>
    

  )
}

export default Bookpg