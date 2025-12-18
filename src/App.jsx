import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "../utils/store";
import MainBox from "./components/MainBox";
import Watchpage from "./components/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainBox />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <>
        <Head />
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
