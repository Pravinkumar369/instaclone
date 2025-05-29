import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {

const [mypost,SetMypost]=useState([]);
//myprofile
useEffect(()=>{
  fetch("http://localhost:8080/profile")
  .then((data)=>data.json())
  .then((data)=>{SetMypost(data[0]);console.log(data)})
    .catch((error)=>console.log(error))
},[])


//follower
const [profile,setProfile]=useState([]);

useEffect(()=>{
  fetch("http://localhost:8080/followers")
  .then((data)=>data.json())
  .then((data)=>setProfile(data))
    .catch((error)=>console.log(error))
},[])



   const handlefollow=async(name,profileImage)=>{
    axios.post("http://localhost:8080/followers",{"name":name,"profileImage":profileImage})
    .then(alert("followed"))
    .catch(err=>console.log(err))
   }

  return (
    <div className='d-flex flex-column ms-5 '>

      {mypost ?(
        <div >
          <div className='d-flex '>
                        <img className='dp rounded-circle' src={mypost.image} alt="" />
                        <div>
                        <h5 className='m-1 mt-3'>{mypost.username}</h5>
                        </div>
                       <button className='btn btn-outline-primary btn-sm  ms-5  mt-3 ' margin="40px">switch</button>
                        
                        </div>
                        <hr />
                        <h5 className='mb-3'>Suggestion</h5>

        </div>
      ):(
        <div>loading</div>
      )}


{profile.map((user)=>(
                    <div key={user.id}>
                        <div className='d-flex  '>
                        <img className='dp rounded-circle' src={user.profileImage} alt="" />
                        <div>
                        <h5 className='m-1 '>{user.name}</h5>
                        </div>
                       <button  className='btn btn-outline-primary btn-sm   ' onClick={()=>{handlefollow(user.name,user.profileImage)}}>follow</button>
                        
                        </div>

                        </div>
                ))}
            </div>
  )
}

export default Suggestions;