import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { Bookmark, ExternalLink, ThumbsDown, ThumbsUp } from "lucide-react";

import { closeMenu } from "../../utils/appSlice";
import CommentsBox from "./CommentsBox";
import API_KEY, { timeAgo, value_converter } from "../../utils/constants";

const Watchpage = () => {
  const { videoId } = useParams();
  const location = useLocation();
  const video = location.state?.video;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div class="flex flex-col lg:flex-row px-4 md:px-6 lg:px-8 gap-6">
      <main class="flex-1 space-y-4">
        <div class="w-full aspect-video bg-black rounded-xl">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={video?.snippet.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <h1 class="text-lg md:text-xl font-semibold line-clamp-2">
          {video.snippet.title}
        </h1>

        <div className="flex gap-4 items-center justify-between">
          <p class="text-sm text-gray-500">
            {value_converter(video?.statistics.viewCount)} •{" "}
            {timeAgo(video.snippet.publishedAt)}
          </p>

          <div className="flex gap-2 text-gray-400 ">
            <span className="flex items-center gap-2 cursor-pointer">
              <ThumbsUp />
              <p>{value_converter(video.statistics.likeCount)}</p>
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <ThumbsDown />
              <p>0</p>
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <ExternalLink />
              <p>Share</p>
            </span>
            <span className="flex items-centers gap-2 cursor-pointer">
              <Bookmark />
              <p>Save</p>
            </span>
          </div>
        </div>
        <hr className="border-gray-400" />
        <div class="flex items-center justify-between py-4">
          <div class="flex items-center gap-4">
            <img
              src="https://picsum.photos/48"
              alt="Channel avatar"
              class="w-12 h-12 rounded-full"
            />
            <div>
              <p class="font-medium text-sm">Channel Name</p>
              <p class="text-xs text-gray-500">1.5M subscribers</p>
            </div>
          </div>
          <button class="bg-red-600 text-white px-4 py-1 rounded-md font-semibold">
            Subscribe
          </button>
        </div>

        <div class="text-sm text-gray-700 space-y-2 ">
          <p>{video.snippet.description.slice(0, 250)}</p>
          <p class="text-gray-500">#tag1 #tag2 #tag3</p>
          <button class="text-blue-600 font-medium">Show more</button>
        </div>
        <hr className="border-gray-300" />
        <h4 className="text-2xl font-bold">
          {" "}
          {value_converter(video.statistics.commentCount)} Comments
        </h4>
        <CommentsBox />
      </main>

      <aside class="hidden lg:block w-80 space-y-4">
        <div class="flex gap-3">
          <div class="w-36 aspect-video bg-gray-300 rounded-lg"></div>
          <div class="flex-1 space-y-1">
            <h3 class="text-sm font-medium line-clamp-2">
              Related Video Title
            </h3>
            <p class="text-xs text-gray-500">Channel Name • 120K views</p>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="w-36 aspect-video bg-gray-300 rounded-lg"></div>
          <div class="flex-1 space-y-1">
            <h3 class="text-sm font-medium line-clamp-2">
              Another Related Video
            </h3>
            <p class="text-xs text-gray-500">Channel Name • 90K views</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Watchpage;
