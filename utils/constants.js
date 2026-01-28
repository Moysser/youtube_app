const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = import.meta.env.VITE_YOUTUBE_API_BASE_URL;

export default API_KEY;

export const YOUTUBE_VIDEOS_API = `${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=ES&key=${API_KEY}`;
export const YOUTUBE_VIDEOS_Category = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=ES&videoCategoryId=0&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const value_converter = (val) => {
  if (val >= 1000000) {
    return Math.floor(val / 1000000) + "M";
  } else if (val >= 1000) {
    return Math.floor(val / 1000) + "K";
  } else {
    return val;
  }
};

export function timeAgo(publishedAt) {
  const publishedDate = new Date(publishedAt);
  const now = new Date();

  const seconds = Math.floor((now - publishedDate) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const value = Math.floor(seconds / interval.seconds);
    if (value >= 1) {
      return new Intl.RelativeTimeFormat("en", {
        numeric: "auto",
      }).format(-value, interval.label);
    }
  }

  return "just now";
}
