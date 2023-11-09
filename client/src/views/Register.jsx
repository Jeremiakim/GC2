const Register = ({ showRegister }) => {
  return (
    <>
      {/* {showRegister && ( */}
      {/* <center> */}
      <div className="flex flex-col items-center mt-[3%]">
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
      </div>
      {/* </center> */}
      {/* )} */}
    </>
  );
};

export default Register;
