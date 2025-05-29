import React from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar() {

  const navi=useNavigate();
  return (
    <div className='m-3 position-fixed'>
    <div className='d-flex flex-column gap-3'>
       <img className='Insat_text' src="./src/assets/instaImage.png" alt="" />
       <div><i class="bi bi-house-door"></i>Home</div>
       <div><i class="bi bi-search"></i>Search</div>
       <div><i class="bi bi-compass"></i>Explore</div>
       <div><i class="bi bi-play-btn"></i>Reels</div>
       <div><i class="bi bi-chat-dots-fill"></i>Message</div>
       <div><i class="bi bi-suit-heart"></i>Notification</div>
       <div><i class="bi bi-plus-square"></i>Create</div>

       
       <div onClick={()=>{navi(`/profile`)}}><i class="bi bi-person-circle"></i>Profile</div>
    </div>

    <div className='d-flex flex-column gap-3 position-fixed bottom-0 mb-3'>
      <div><i class="bi bi-circle"></i>Meat Ai</div>
      <div><i class="bi bi-threads"></i>Thread</div>
      <div><i class="bi bi-list"></i>More</div>
    </div>
    </div>
  )
}

export default Sidebar