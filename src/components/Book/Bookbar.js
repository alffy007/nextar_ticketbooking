import react from 'react'
import './Bookbar.css'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'
import  { useEffect, useState } from 'react'
function Book() {

    const [Movie, setMovie] = useState()
     useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response=>{
        setMovie(Response.data.results[Math.floor(Math.random() * Response.data.results.length -1)])
        console.log(Math.floor(Math.random() * Response.data.results.length -1)!==-1)}
      ))},[])

  return (
    <div className='book'>
        
        <div className='dash' style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path:""})`}}>
       
        <img className='post' src={Movie ? imageUrl+Movie.poster_path:""} alt='post'/>
<div className='con'>

    <div  className='titl'>
       
<h1>{Movie ? Movie.title:"" }{Movie ? Movie.name:""}</h1>
<h4 className='h'>❤️ :  {Movie ? Movie.vote_average:""}</h4>
<h4 className='h'>vote : {Movie ? Movie.vote_count:""}</h4>
</div>
</div>

        </div>
        <div className='color'>

            <img className='icon1' src='https://img.icons8.com/ios-glyphs/344/arrow.png' alt='ar'/>
            <img  className='icon2' src='https://img.icons8.com/ios-glyphs/344/arrow.png' alt='ar'/>
        <div className='date'>
            
        <div className='mon' >
    <button className='end'>MON
    <br></br>11<br></br>JUL
    </button>

    
</div>
<div className='mon'>
<button className='end'>TUE
    <br></br>12<br></br>JUL
    </button>
</div>
<div className='mon'>
<button className='end'>WED
    <br></br>13<br></br>JUL
    </button>
</div>
<div className='mon'>
<button className='end'>THU
    <br></br>14<br></br>JUL
    </button>
</div>
<div className='mon'>
<button className='end'>FRI
    <br></br>15<br></br>JUL
    </button>
</div>
<div className='mon'>
<button className='end'>SAT
    <br></br>16<br></br>JUL
    </button>
</div>
<div className='mon'>
<button className='end'>SUN
    <br></br>17<br></br>JUL
    </button>
</div>

</div>

</div>
    </div>
  )
}

export default Book