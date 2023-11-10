import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm2 = () => {
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setInputLogin(() => ({
      ...inputLogin,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        inputLogin
      );
      // console.log(response, 20);
      const access_token = response.data.access_token;
      // console.log(access_token);
      localStorage.setItem("access_token", access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(inputLogin, 27);
  console.log(inputLogin, "render");
  return (
    <>
      <center>
        <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded bg-[#f5ebd6] mt-[3%]">
          <form
            onSubmit={submitForm}
            className=" my-10 space-y-4"
            autoComplete="off"
          >
            <div className=" text-center mb-10">
              <h1 className="text-[#8e3000] font-bold text-2xl">Login</h1>
            </div>
            <div className="w-3/4 mx-auto">
              <div className="my-3">
                <label for="" className="text-[#8e3000] font-bold">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={inputLogin.email}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-[#8e3000] font-bold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={inputLogin.password}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="mt-8">
                <center>
                  <button
                    className="bg-[#dea62f] text-white p-2 rounded-lg hover:bg-[#936500]"
                    type="submit"
                    onClick={submitForm}
                  >
                    Login
                  </button>
                </center>
              </div>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

export default LoginForm2;
