import React, { useEffect, useState } from 'react'
import axios from 'axios';



function Profile() {
    const [profile,setProfile]=useState(null);
    const [followers,setFollowers]=useState([])
    const[unfollow,Setunfollow]=useState(0);
    
    useEffect(()=>{
axios.get("http://localhost:8080/profile")
.then(data=>{setProfile(data.data[0]);console.log(data)})
.catch(err=>{console.log(err)})

//followeres
axios.get("http://localhost:8080/followers")
.then(data=>{setFollowers(data.data);console.log(data)})
.catch(err=>{console.log(err)})

    },[unfollow])

    function HandleOnChange(e){
        setProfile(prev=>({
            ...prev,
           [e.target.name]:e.target.value
        }))
    }
    const updateDB= async()=>{
        axios.put(`http://localhost:8080/profile`,profile)
        .then(console.log("update"))
        .catch(err=>console.log(err))
    }

    const handleUnfollow=async(id)=>{
      axios.delete(`http://localhost:8080/followers/${id}`)
      .then(alert("unfollow"))
      .then(Setunfollow(!unfollow))
      .catch(err=>console.log(err))
    }
    
  return (

    <div className='m-5'>
        {profile ? (
            <div>
                <img src={profile.image} alt="" className='profile rounded-circle'/>
                <h2>{profile.username}</h2>

                <input type="text" value={profile.username}name='username' className='form-control my-4' onChange={HandleOnChange}/>
                <input type="text" value={profile.image}name='image' className='form-control' onChange={HandleOnChange} />

                <button className='btn btn-primary my-4' onClick={updateDB}>update</button>
            </div>
        ):(
        <h2>Loading</h2>
        )}
 <h5>Followers</h5>

        {followers.length > 0 ? (
        followers.map(follower => {
        

          return (
            <div key={follower.id} >
              <div className="d-flex">
<               img src={follower.profileImage} alt="Profile" width="100"  className='dp rounded-circle'/>
              <p>{follower.name || "No Name"}</p>
              <button className='btn btn-primary' onClick={()=>{handleUnfollow(follower.id)}}> unfollow</button>
              </div>
              
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}

export default Profile;