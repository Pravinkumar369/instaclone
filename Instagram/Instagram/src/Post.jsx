import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Post() {
  const [posts, setPosts] = useState([]);
  const [like,setlike]=useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/users/feed")
       .then((data)=>data.json())
  .then((data)=>setPosts(data))
    
},[like])

const likePost=async(postId)=>{
  axios.put(`http://localhost:8080/api/posts/${postId}/like`)
  .then(alert("liked"))
.then(err=>{console.log(`hffgggghggggggffd${postId}`)})
.then(setlike(! like))
  .catch(err=>console.log(err))
}
  return (
    <div className='d-flex flex-column '>
      {posts.map((user,idx)=>(
        <div key={idx}>
          <div className='d-flex'>
        <img className='dp rounded-circle me-2' src={user.profilePicture} alt="" />
        <h5 className='m-0'>{user.name}</h5>
        </div>

        {user.posts.map((post)=>(
              <div key={post.id} className='mb-4'>
                <img className ="post img-fluid" src={post.image} alt="" />
                <div className='my-2'>

               <i className='bi bi-heart me-2' onClick={()=>likePost(post.id)}></i>
                  <i className='bi bi-chat me-2'></i>
                  <i className='bi bi-send me-2'></i>
                </div>

               <b>{post.likeCount} Likes</b> <br />
              <b>{post.caption}</b>
              <p>{post.time}</p>
              
              </div>
              
        ))}
        </div>

      //comment
                 
     ) )}
    </div>
  );
  }

export default Post;