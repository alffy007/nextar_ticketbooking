import React from 'react'
import RowPost from '../components/Rowpost/RowPost';
import {playing, upcoming } from '../constants/constants';
import Footer from '../components/footer/Footer';
import {motion} from 'framer-motion'
function Movie() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>

<br></br>
<RowPost title='Now Showing' genre={playing} book='0' />
<RowPost title='Upcoming Movies' genre={upcoming} />

<Footer/> </motion.div>
  )
}

export default Movie