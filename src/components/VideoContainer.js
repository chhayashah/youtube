import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    }

  return (
    <div className='flex flex-wrap'>
      {videos.map((video) =>(
        <Link to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} info={video} />
        </Link>
        ))}
    </div>
  )
}

export default VideoContainer;

// import React, { useEffect, useState } from 'react';
// import { YOUTUBE_VIDEOS_API } from '../utils/contants';
// import VideoCard from './VideoCard';

// const VideoContainer = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     getVideos();
//   }, []);

//   const getVideos = async () => {
//     try {
//       const data = await fetch(YOUTUBE_VIDEOS_API);
//       const json = await data.json();
//       console.log(json.items);
//       setVideos(json.items);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   return (
//     <div className='flex flex-wrap'>
//       {videos && videos.length > 0 ? (
//         videos.map((video) => <VideoCard key={video.id} info={video} />)
//       ) : (
//         <p>Loading videos...</p>
//       )}
//     </div>
//   );
// };

// export default VideoContainer;

