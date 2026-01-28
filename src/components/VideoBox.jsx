import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API_KEY from "../../utils/constants.js";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";

const VideoBox = () => {
  const [videos, setVideos] = useState([]);
  const category = useSelector((state) => state.category.category);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=ES&videoCategoryId=${category}&key=${API_KEY}`,
      );
      const json = await data.json();
      setVideos(json.items || []);
    };

    getVideos();
  }, [category]);

  return (
    <div className="responsive-box">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch/${video.id}`} state={{ video }}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoBox;
