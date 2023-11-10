import { FaUserPlus } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="font-sans font-bold text-xl text-black px-7 py-2 flex justify-between border-b-2 border-black bg-[#ccc2ae]">
      <div className="flex gap-5 items-center">
        <Link to="/">
          <button className="text-red-700">
            Unik<span className="text-slate-200 text-mono">loh</span>
          </button>
        </Link>
        {/* Add more buttons or links   here */}
        {/* <!-- SORT --> */}
        <button type="btn" className="">
          Sort
        </button>
        {/* <!-- END SORT --> */}
        {/* <!-- FILTER --> */}
        <select
          className="form-control mr-2 bg-[#ccc2ae] "
          aria-describedby="clear-addon"
        >
          <option selected disabled>
            Filter
          </option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
        {/* <!-- END FILTER --> */}
      </div>
      <div className="flex gap-3 items-center">
        <div className="relative">
          <input
            type="text"
            id=""
            placeholder="Search..."
            className="rounded-full px-[13px] w-[30vw] h-[3vw] text-sm border border-gray-400"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <BiSearchAlt />
          </button>
        </div>
        <Link to="/addUser">
          <button className=" hover:text-red-900">
            <FaUserPlus />
          </button>
        </Link>
        <Link to="/product/add">
          <button className=" hover:text-red-900 text-lg">Add Product</button>
        </Link>
        <Link to="/category">
          <button className=" hover:text-red-900 text-lg">Category</button>
        </Link>
        <Link to="/login">
          <button className="ml-auto text-lg  hover:text-red-900">
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
