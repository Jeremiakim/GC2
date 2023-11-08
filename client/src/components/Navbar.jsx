const Navbar = () => {
  return (
    <nav
      className="
            mb-2 
            font-mono 
            font-bold 
            text-xl 
            text-black 
            px-7 
            py-2 
            flex 
            justify-between
            border-b-2 
            border-black
            bg-[#ccc2ae]
            "
    >
      <div>
        <button className="text-red-700">
          Unik<span className="text-slate-200 text-mono">loh</span>
        </button>
        {/* <!-- <button className="mr-3 text-slate-500">Male</button> */}
        {/* <button className="mr-3 text-slate-500">Female</button> */}
        {/* <button className="mr-3 text-slate-500">Child</button> */}
        {/* <button className="mr-3 text-slate-500">Baby</button> --> */}
        {/* <!-- <input type="text" id="" placeholder="Search . . ." className="rounded p-1"> --> */}
        <button type="submit" className="ml-2 mr-5">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        {/* <!-- SORT --> */}
        <button type="btn" className="mr-2">
          Sort
        </button>
        {/* <!-- END SORT --> */}
        {/* <!-- FILTER --> */}
        <select
          className="form-control mr-2 bg-[#ccc2ae]"
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
      {/* <!-- SEARCH --> */}
      <div>
        <button>
          <i className="fa-solid fa-user mr-3"></i>
        </button>
        <button>
          <i className="fa-solid fa-cart-shopping mr-3"></i>
        </button>
        <button className="ml-auto text-lg">Logout</button>
      </div>
      {/* <!--END SEARCH --> */}
    </nav>
  );
};

export default Navbar;
