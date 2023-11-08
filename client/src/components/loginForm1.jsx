const loginForm1 = () => {
  return (
    <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded bg-[#f5ebd6]">
      <form action="" method="" className=" my-10 space-y-4 ">
        <div className=" text-center mb-10">
          <h1 className="text-[#8e3000] font-bold text-2xl">
            Login To Unikloh
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
              className="rounded px-3 py-1"
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
              className="rounded px-3 py-1"
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
              className="rounded px-3 py-1"
            />
          </div>
          <div className="mt-8">
            <center>
              <button
                className="bg-[#dea62f] text-white p-2 rounded-lg hover:bg-[#936500]"
                type="submit"
              >
                Login
              </button>
            </center>
          </div>
          <div>
            <center>
              <a href="">
                <button className="bg-[#dea62f] text-white p-2 rounded-lg hover:bg-[#936500] mt-5">
                  Make New Account
                </button>
              </a>
            </center>
          </div>
        </div>
      </form>
    </div>
  );
};

export default loginForm1;
