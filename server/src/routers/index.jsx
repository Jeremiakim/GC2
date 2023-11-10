import { createBrowserRouter } from "react-router-dom";

import LoginForm2 from "../views/LoginForm2";
import Parent from "../views/Parent";
import AddUser from "../views/AddUser";
import AddProduct from "../views/AddProduct";
import EditProduct from "../views/EditProduct";
import UploadImage from "../views/UploadImage";
import AddCategory from "../views/AddCategory";
import EditCategory from "../views/EditCategory";
import TableCategory from "../views/TableCategory";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm2 />,
      },
      {
        path: "/addUser",
        element: <AddUser />,
      },
      {
        path: "/product/add",
        element: <AddProduct />,
      },
      {
        path: "/product/:productId/edit",
        element: <EditProduct />,
      },
      {
        path: "product/:productId/uploadImg",
        element: <UploadImage />,
      },
      {
        path: "/category/add",
        element: <AddCategory />,
      },
      {
        path: "/category/:categoryId/edit",
        element: <EditCategory />,
      },
      // {
      //   path: "/tableProduct",
      //   element: <TableProduct />,
      // },
      {
        path: "/category",
        element: <TableCategory />,
      },
    ],
  },
]);

export default router;
