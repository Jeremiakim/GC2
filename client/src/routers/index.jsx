import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Parent from "../views/Parent";
import DetailProduct from "../views/DetailProduct";
import Register from "../views/Register";
import LoginForm1 from "../views/LoginForm1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LoginForm1 />,
      },
      {
        path: "/product/:productId",
        element: <DetailProduct />,
      },
    ],
  },
]);

export default router;
