import { Menu } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Search } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleMenu } from "../../utils/appSlice";
import { cacheResults } from "../../utils/searchSlice";
import logo from "../assets/logo.png";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_VIDEOS_API,
} from "../../utils/constants.js";

const Head = ({ setVideos }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSuggestions = useCallback(async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await res.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (err) {
      console.error(err);
    }
  }, [searchQuery, dispatch]);

  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      const response = await fetch(YOUTUBE_VIDEOS_API + searchQuery);
      const data = await response.json();

      setVideos(data.items);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };

  useEffect(() => {
    if (!searchQuery) return;

    const timeoutId = setTimeout(async () => {
      searchCache[searchQuery]
        ? setSuggestions(searchCache[searchQuery])
        : getSearchSuggestions();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, searchCache, getSearchSuggestions]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="grid grid-flow-col p-1.5 shadow-lg bg-white items-center sticky top-0">
      <div className="flex col-span-1 gap-4 ml-4">
        <Menu
          className="cursor-pointer"
          size={25}
          onClick={toggleMenuHandler}
        />
        <img src={logo} alt="youtube-logo" className="h-5" />
      </div>
      <div className="searchBox col-span-10 flex justify-center">
        <div className="col-span-10 flex justify-center items-center">
          {/* Full search input */}
          <div className="hidden sm:flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              className="w-full pl-2 py-1 rounded-bl-2xl rounded-tl-2xl border-2 border-gray-200"
            />
            <button
              onClick={handleSearch}
              className="px-4 bg-gray-200 rounded-br-2xl rounded-tr-2xl"
            >
              <Search />
            </button>
          </div>

          {/* Mobile search */}
          <button
            onClick={handleSearch}
            className="sm:hidden p-2 rounded-full bg-gray-200"
          >
            <Search size={20} />
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed mt-10 mr-12 bg-white py-2 px-2 w-116 shadow-lg rounded-lg border-gray-200">
            <ul>
              {suggestions.map((sgstion) => (
                <li
                  key={sgstion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  {sgstion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <CircleUserRound size={30} />
      </div>
    </header>
  );
};

export default Head;
