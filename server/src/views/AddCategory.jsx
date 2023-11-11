import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddCategory = () => {
  const [inputAddCategory, setInputAddCategory] = useState({
    name: "",
  });
  const access_token = localStorage.getItem("access_token");
  const onChange = async (e) => {
    setInputAddCategory({
      ...inputAddCategory,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const onSubmitCategory = async (e) => {
    e.preventDefault();
    try {
      let data = await axios.post(`${urlName}/category`, inputAddCategory, {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <center>
        <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded bg-[#dea62f]">
          <form onSubmit={onSubmitCategory} className=" my-10 space-y-4 ">
            <div className=" text-center mb-10">
              <h1 className="text-white font-bold text-2xl">
                Form Add Category
              </h1>
            </div>
            <div className="w-3/4 mx-auto">
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id=""
                  name="name"
                  value={inputAddCategory.name}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="mt-8">
                <center>
                  <button
                    className="bg-[#936500] text-white p-2 rounded-lg hover:bg-[#272216]"
                    type="submit"
                  >
                    Add Category
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

export default AddCategory;
