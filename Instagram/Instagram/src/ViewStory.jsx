import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ViewStory() {
  const { id , total} = useParams();
  const [story, setStory] = useState(null);

const navi=useNavigate();
  // Load all images in assets folder
  const images = import.meta.glob('./assets/*', { eager: true });

  useEffect(() => {
    fetch(`http://localhost:8080/story/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStory(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!story) return <p>Loading...</p>;

  // Convert string path to actual image import
  const profileSrc = images[`./assets/${story.profile.split('/').pop()}`]?.default;
  const imageSrc = images[`./assets/${story.image.split('/').pop()}`]?.default;

  if(id > total || id<=0 ){
    navi('/')
  }
 
  return (
    <div>
      <div className=' d-flex ms-3'>
      <img src={profileSrc} alt="Profile" width="100" className='dp rounded-circle me-2 mt-3 '/>
      <h4 className='mt-4'>{story.name} </h4>
      </div>
       <div className='vh-100 container d-flex justify-content-center '>
            <Link className='arrow' to={`http://localhost:5173/story/${Number(id)-1}/${total}`}><i class="bi bi-arrow-left-circle-fill  "></i> </Link>
             <img src={imageSrc} alt="Story"  className='vh-100'/>
             <Link className='arrow' to={`http://localhost:5173/story/${Number(id)+1}/${total}`}><i className="bi bi-arrow-right-circle-fill " ></i> </Link>
      </div>
      
  
  
      </div  >
     

   
  );
}

export default ViewStory;