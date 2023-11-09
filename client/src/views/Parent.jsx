import { Outlet } from "react-router-dom";
import Navbar from "../../../server/src/components/Navbar";

const Parent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Parent;
