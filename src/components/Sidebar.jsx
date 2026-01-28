import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../utils/categorySlice";
import { Link } from "react-router-dom";
import {
  Home,
  Gamepad2,
  Car,
  Volleyball,
  Tv,
  Cpu,
  Music4,
  Newspaper,
} from "lucide-react";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const category = useSelector((store) => store.category.category);
  const dispatch = useDispatch();

  return (
    <aside
      className={`pt-3 pl-[2%] pr-[2%] shadow-lg ${!isMenuOpen ? "" : "small-sidebar"}`}
    >
      <ul className="flex flex-col gap-2">
        <li className="flex gap-2">
          <Link
            to="/"
            onClick={() => dispatch(setCategory(0))}
            className="flex gap-2 items-center"
          >
            <span
              className={`pb-1 ${
                category === 0 ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Home size={20} />
            </span>
            <p>Home</p>
          </Link>
        </li>

        <li className="">
          <Link
            className="flex gap-2"
            to=""
            onClick={() => dispatch(setCategory(20))}
          >
            <span
              className={`pb-1 ${
                category === 20 ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Gamepad2 size={20} />
            </span>

            <p>Games</p>
          </Link>
        </li>

        <li>
          <Link
            className="flex gap-2"
            to="./"
            onClick={() => dispatch(setCategory(2))}
          >
            <span
              className={`pb-1 ${
                category === 2 ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Car size={20} className="red-bottom" />
            </span>

            <p>Automobiles</p>
          </Link>
        </li>

        <li>
          <Link
            className="flex gap-2"
            to="./"
            onClick={() => dispatch(setCategory(17))}
          >
            <span
              className={`pb-1 ${
                category === 17 ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Volleyball size={20} className="red-bottom" />
            </span>

            <p>Sports</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex gap-2"
            to="./"
            onClick={() => dispatch(setCategory(24))}
          >
            <span
              className={`pb-1 ${
                category === 24 ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Tv size={20} className="red-bottom" />
            </span>

            <p>Entertainment</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex gap-2"
            to="./"
            onClick={() => dispatch(setCategory(28))}
          >
            <span
              className={`pb-1 ${
                category === 28 ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Cpu size={20} className="red-bottom" />
            </span>

            <p>Techology</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex gap-2"
            to="./"
            onClick={() => dispatch(setCategory(10))}
          >
            <span
              className={`pb-1 ${
                category === 10 ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Music4 size={20} className="red-bottom" />
            </span>

            <p>Music</p>
          </Link>
        </li>

        <li>
          <Link
            className="flex gap-2"
            to="./"
            onClick={() => dispatch(setCategory(25))}
          >
            <span
              className={`pb-1 ${
                category === 25 ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Newspaper size={20} className="red-bottom" />
            </span>

            <p>News</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
