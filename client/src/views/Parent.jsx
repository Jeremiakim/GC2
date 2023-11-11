import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const Parent = () => {
  return (
    <>
      <div className="bg-[#FFF5E0] h-screen">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Parent;
