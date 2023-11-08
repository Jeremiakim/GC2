// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Card2 from "./components/Card2";
import Navbar from "./components/Navbar";
import Card1 from "./components/card1";
import loginForm1 from "./components/loginForm1";

function App() {
  return (
    <>
      <div className="bg-[#FFF5E0]">
        {/* <!-- NAVBAR --> */}
        <Navbar />
        {/* <!-- END NAVBAR --> */}
        {/* <!-- FORM LOGIN --> */}
        <loginForm1 />
        {/* <!-- END FORM LOGIN --> */}
        {/* <!-- FORM REGISTER --> */}
        <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded bg-[#f5ebd6]">
          <form action="" method="" className="my-10 space-y-4">
            <div className="mb-10 text-center">
              <h1 className="text-[#8e3000] font-bold text-2xl">
                Register To Unikloh
              </h1>
            </div>
            <div className="w-3/4 mx-auto">
              <div className="my-3">
                <label for="" className="text-[#8e3000] font-bold">
                  Username
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  value=""
                  className="rounded px-3 py-2 w-full"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-[#8e3000] font-bold">
                  Email
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  value=""
                  className="rounded px-3 py-2 w-full"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-[#8e3000] font-bold">
                  Password
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  value=""
                  className="rounded px-3 py-2 w-full"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-[#8e3000] font-bold">
                  Phone Number
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  value=""
                  className="rounded px-3 py-2 w-full"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-[#8e3000] font-bold">
                  Address
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  value=""
                  className="rounded px-3 py-2 w-full"
                />
                <div className="mt-8">
                  <center>
                    <button
                      className="bg-[#dea62f] text-white p-2 rounded-lg hover:bg-[#936500]"
                      type="submit"
                    >
                      Register
                    </button>
                  </center>
                </div>
                <div className="mt-5">
                  <center>
                    <a href="">
                      <button className="bg-[#dea62f] text-white p-2 rounded-lg hover:bg-[#936500] mt-5">
                        Login
                      </button>
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <!-- END FORM REGISTER --> */}
        {/* <!-- CARD --> */}
        <Card1 />
        {/* <!-- END CARD --> */}

        {/* <!-- PAGE DETAIL  --> */}
        <Card2 />
        {/* <!-- END PAGE DETAIL  --> */}
        {/* <!-- PAGINATION --> */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-[#FFF5E0] px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">10</span>
                of
                <span className="font-medium">97</span>
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- END PAGINATION --> */}
      </div>
    </>
  );
}

export default App;
