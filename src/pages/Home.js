import React from 'react'
import Banner from '../components/Banner/Banner';
import RowPost from '../components/Rowpost/RowPost';
import {trending} from '../constants/constants';
import Footer from '../components/footer/Footer';
import {motion} from 'framer-motion'
function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      
<Banner/>
<RowPost title='Recommended Movies' genre={trending} />

<Footer/>
     </motion.div>
  )
}

export default Home