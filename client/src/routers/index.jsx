import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Parent from "../views/Parent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
