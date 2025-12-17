const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = import.meta.env.VITE_YOUTUBE_API_BASE_URL;

export const YOUTUBE_VIDEOS_API = `${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=ES&key=${API_KEY}`;
