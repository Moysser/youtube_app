import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <h2 className="font-bold">Subscriptions</h2>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Lives</li>
        <li>You</li>
      </ul>
      <h2 className="font-bold">Subscriptions</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h2 className="font-bold">Watch later</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
