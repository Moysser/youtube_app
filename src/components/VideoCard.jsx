import { value_converter, timeAgo } from "../../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" h-60 cursor-pointer flex flex-col">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-lg w-full object-cover aspect-video"
      />
      <ul className="flex flex-col">
        <li className="font-semibold text-sm py-1">{title}</li>
        <li className="font-bold text-gray-500 text-sm">{channelTitle}</li>
        <li>
          {value_converter(statistics.viewCount)} views &bull;{" "}
          {timeAgo(snippet.publishedAt)}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
