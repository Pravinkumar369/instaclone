import React, { useEffect, useState ,} from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {
//create const variable
const navi=useNavigate()
const [Story,SetStory]=useState([]);
useEffect(()=>{
  fetch("http://localhost:8080/story")
  .then((data)=>data.json())
  .then((data)=>SetStory(data))
  .catch((err)=>console.log(err))
},[]);
let total=0;
  return (
    <div className='story d-flex '>
      <div className='d-none'>
         {total=Story.length}
      </div>
     
      {Story.length > 0 ? (
        Story.map((story)=>(
          <div key={story.id} className='mx-1 mt-2' onClick={()=>{navi(`/story/${story.id}/${total}`)}}>
            <div className='gradient-border'>
            
                <img src={story.profile} alt="" className='story-dp rounded-circle' />   
            </div>
           
            <p className='text-truncate'style={{width:"50px"}}>{story.name}</p>
            </div>
        ))
      ):(
        <p>LOADING</p>
      ) }
     
    </div>
  )
}

export default Stories