import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants.js";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";

const VideoBox = () => {
  const [videos, setVideos] = useState([]);
  console.log(videos);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    };

    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to={`/watch?v=${video.id}`}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoBox;
