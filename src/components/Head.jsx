import { Menu } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Search } from "lucide-react";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="grid grid-flow-col p-1.5 m-2 shadow-lg items-center">
      <div className="flex col-span-1 gap-2">
        <Menu
          className="cursor-pointer"
          size={20}
          onClick={toggleMenuHandler}
        />
        <img src={logo} alt="youtube-logo" className="h-5" />
      </div>
      <div className="searchBox col-span-10 flex justify-center">
        <input
          type="text"
          placeholder="search"
          className="searchInput w-1/2 py-1 mr-0 rounded-bl-2xl rounded-tl-2xl border-2 border-gray-200"
        />
        <button className="searchBtn px-4 cursor-pointer bg-gray-200 rounded-br-2xl rounded-tr-2xl ">
          <Search />
        </button>
      </div>
      <div className="col-span-1">
        <CircleUserRound size={30} />
      </div>
    </header>
  );
};

export default Head;
