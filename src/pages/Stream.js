import React from 'react'
import RowPost from '../components/Rowpost/RowPost';
import {original,action,comedy,horror,romance} from '../constants/constants';
import Footer from '../components/footer/Footer';
import {motion} from 'framer-motion'
function Stream() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}> 
<br></br>
<br></br>
<RowPost title='Metaflix Originals' genre={original} />
<RowPost title='Action'  genre={action}/>
        <RowPost title='Comedy'  genre={comedy}/>
        <RowPost title='Horror'  genre={horror}/>
        <RowPost title='Romance'  genre={romance}/>


<Footer/></motion.div>
  )
}

export default Stream