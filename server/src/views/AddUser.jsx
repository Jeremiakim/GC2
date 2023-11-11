import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [inputAddUser, setInputAddUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const navigate = useNavigate();
  const onChange = (e) => {
    setInputAddUser({
      ...inputAddUser,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitAddUser = async (e) => {
    e.preventDefault();
    try {
      const access_token = localStorage.getItem("access_token");
      // console.log(access_token);
      await axios.post("http://localhost:3000/addUser", inputAddUser, {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <center>
        <div className="bg-[#FFF5E0]">
          <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded-lg bg-[#f5ebd6]">
            <form
              onSubmit={onSubmitAddUser}
              className="my-10 space-y-4"
              autoComplete="off"
            >
              <div className="mb-10 text-center">
                <h1 className="text-[#8e3000] font-bold text-2xl">
                  Form Add User
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
                    name="username"
                    value={inputAddUser.username}
                    onChange={onChange}
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
                    name="email"
                    value={inputAddUser.email}
                    onChange={onChange}
                    className="rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="my-3">
                  <label for="" className="text-[#8e3000] font-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    id=""
                    name="password"
                    value={inputAddUser.password}
                    onChange={onChange}
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
                    name="phoneNumber"
                    value={inputAddUser.phoneNumber}
                    onChange={onChange}
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
                    name="address"
                    value={inputAddUser.address}
                    onChange={onChange}
                    className="rounded px-3 py-2 w-full"
                  />
                  <div className="mt-8">
                    <center>
                      <button
                        className="bg-[#dea62f] text-white p-2 rounded-lg hover:bg-[#936500]"
                        type="submit"
                      >
                        Add User
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </center>
    </>
  );
};

export default AddUser;
