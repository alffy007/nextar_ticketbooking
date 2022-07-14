import React from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'
import {Link} from 'react-router-dom'

import  { useEffect, useState } from 'react'
function RowPost(props) {
  let component
  let icon
  let but
    const [Movie, setMovie] = useState([])
    const [Idea, setIdea] = useState('')
    const [state, setState] = useState(false)
    useEffect(() => {
      axios.get(props.genre).then((response)=>{
     console.log(response.data.results)
     setMovie(response.data.results)
})

}, [])
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    //https://developers.google.com/youtube/player_parameters
    autoplay:1 
    
  },
};

  const handeleMovie=(id)=>{
console.log(id)
axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
if(Response.data.results.length!==0){
setIdea(Response.data.results[0])
setState(true)
}
})

  }
if(state===true)
{
  icon=<img className='icon' alt='' onClick={()=>setState(false)} src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMyZWNjNzEiPjxwYXRoIGQ9Ik00MC4xMzMzMywyMi45MzMzM2MtMS40NjcwMiwwIC0yLjkzNTY1LDAuNTU4ODIgLTQuMDUzNjUsMS42Nzk2OWwtMTEuNDY2NjcsMTEuNDY2NjdjLTIuMjQxNzMsMi4yNDE3MyAtMi4yNDE3Myw1Ljg3MTI5IDAsOC4xMDcyOWw0MS44MTMwMiw0MS44MTMwMmwtNDEuODEzMDIsNDEuODEzMDJjLTIuMjQxNzMsMi4yNDE3MyAtMi4yNDE3Myw1Ljg3MTI5IDAsOC4xMDcyOWwxMS40NjY2NywxMS40NjY2N2MyLjI0MTczLDIuMjQxNzMgNS44NzEyOSwyLjI0MTczIDguMTA3MjksMGw0MS44MTMwMiwtNDEuODEzMDJsNDEuODEzMDIsNDEuODEzMDJjMi4yMzYsMi4yNDE3MyA1Ljg3MTI5LDIuMjQxNzMgOC4xMDcyOSwwbDExLjQ2NjY3LC0xMS40NjY2N2MyLjI0MTczLC0yLjI0MTczIDIuMjQxNzMsLTUuODcxMjkgMCwtOC4xMDcyOWwtNDEuODEzMDIsLTQxLjgxMzAybDQxLjgxMzAyLC00MS44MTMwMmMyLjI0MTczLC0yLjIzNiAyLjI0MTczLC01Ljg3MTI5IDAsLTguMTA3MjlsLTExLjQ2NjY3LC0xMS40NjY2N2MtMi4yNDE3MywtMi4yNDE3MyAtNS44NzEyOSwtMi4yNDE3MyAtOC4xMDcyOSwwbC00MS44MTMwMiw0MS44MTMwMmwtNDEuODEzMDIsLTQxLjgxMzAyYy0xLjEyMDg3LC0xLjEyMDg3IC0yLjU4NjYzLC0xLjY3OTY5IC00LjA1MzY1LC0xLjY3OTY5eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+' ></img>
 component=     Idea && <YouTube opts={opts} videoId={Idea.key} />
}
else{
  component=''
}
if(props.book==='0')
{
but=<button className='button' ><Link className='links' to='book' >BOOK TICKET</Link></button>
}
else{
but=''
}
    return (    
        <div className='row'>
         
            <h1>{props.title}</h1>
            {icon}
            {component}
            <div className='posters'>
            {Movie.map((obj)=>
            <img onClick={()=>handeleMovie(obj.id)} className='poster' alt='poster' src={imageUrl+obj.poster_path}/>
            
            )}
           
           
           {but}
            </div>
     
       
        </div>
      
    )
}
 
export default RowPost