import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const access_token = localStorage.getItem("access_token");
  const fetchCategories = async () => {
    try {
      const data = await axios.get("http://localhost:3000/category", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      // data.data.category
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(fetchCategories(), 23);
  const [inputAddProduct, setInputAddProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imgUrl: "",
  });
  const onChange = async (e) => {
    // console.log(e, 32);
    // console.log(e.target.value);
    // console.log(e.target.name);
    setInputAddProduct({
      ...inputAddProduct,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(inputAddProduct);
  const navigate = useNavigate();
  const onSubmitAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/product", inputAddProduct, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error) {
      console.log(error.response);
    }

    navigate("/");
  };
  return (
    <>
      <center>
        <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded bg-[#739072]">
          <form
            onSubmit={onSubmitAddProduct}
            className=" my-10 space-y-4 "
            autoComplete="off"
          >
            <div className=" text-center mb-10">
              <h1 className="text-white font-bold text-2xl">
                Form Add Product
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
                  value={inputAddProduct.name}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Description
                </label>
                <input
                  type="text"
                  id=""
                  name="description"
                  value={inputAddProduct.description}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Price
                </label>
                <input
                  type="number"
                  id=""
                  name="price"
                  value={inputAddProduct.price}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Stock
                </label>
                <input
                  type="number"
                  id=""
                  name="stock"
                  value={inputAddProduct.stock}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Image Url
                </label>
                <input
                  type="text"
                  id=""
                  name="imgUrl"
                  value={inputAddProduct.imgUrl}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Category
                </label>
                <br />
                <select name="categoryId" id="">
                  <option value=""></option>
                </select>
              </div>
              <div className="mt-8">
                <center>
                  <button
                    className="bg-[#E1C78F] text-white p-2 rounded-lg hover:bg-[#C1A36F] px-10 py-2"
                    type="submit"
                  >
                    Add Product
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

export default AddProduct;
