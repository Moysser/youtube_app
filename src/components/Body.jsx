import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div class="flex ">
      <Sidebar class="w-64" />
      <main class="flex-1 m-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Body;
