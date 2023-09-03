import { createBrowserRouter } from "react-router-dom";
// import DefaultLayout from "./components/DefaultLayout";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      //   {
      //     path: "/projects",
      //     element: <Projects />,
      //   },
    ],
  },
]);

export default router;
