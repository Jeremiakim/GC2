import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const EditProduct = () => {
  const { productId } = useParams();
  const access_token = localStorage.getItem("access_token");
  // const [inputEditProduct, setInputEditProduct] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [stock, setStock] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
  // const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imgUrl: "",
    categoryId: "",
  });
  const navigate = useNavigate();
  const fetchProductById = async () => {
    try {
      let { data } = await axios.get(
        `http://localhost:3000/product/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      // console.log(data.findProductById, 27);
      setProducts({
        name: data.findProductById.name,
        description: data.findProductById.description,
        price: data.findProductById.price,
        stock: data.findProductById.stock,
        imgUrl: data.findProductById.imgUrl,
        categoryId: data.findProductById.categoryId,
      });
      // setName(data.findProductById.name);
      // setDescription(data.findProductById.description);
      // setPrice(data.findProductById.price);
      // setStock(data.findProductById.stock);
      // setImgUrl(data.findProductById.imgUrl);
      // setCategoryId(data.findProductById.categoryId);
    } catch (error) {
      setError(error);
    }
  };
  const fetchCategories = async () => {
    try {
      const data = await axios.get("http://localhost:3000/category", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      // console.log(data.data.category, 46);
      setCategories(data.data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchProductById();
  }, []);
  // console.log(categories, 55);
  const onChange = async (e) => {
    // console.log(e, "inii");
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.name, e.target.value, 37);
  };
  // console.log(inputEditProduct, 66);
  const onSubmitEditProduct = async (e) => {
    e.preventDefault();
    // console.log("Sending data:", { product: inputAddProduct });
    try {
      let access_token = localStorage.getItem("access_token");
      let data = await axios.put(
        `http://localhost:3000/product/${productId}`,
        products,
        {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        }
      );
      console.log(data, 56);
    } catch (error) {
      console.log(error.response);
    }

    navigate("/");
  };
  return (
    <>
      <center>
        <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded bg-[#739072]">
          <form onSubmit={onSubmitEditProduct} className=" my-10 space-y-4 ">
            <div className=" text-center mb-10">
              <h1 className="text-white font-bold text-2xl">
                Form Edit Product
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
                  value={products.name}
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
                  value={products.description}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Price
                </label>
                <input
                  type="text"
                  id=""
                  name="price"
                  value={products.price}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Stock
                </label>
                <input
                  type="text"
                  id=""
                  name="stock"
                  value={products.stock}
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
                  value={products.imgUrl}
                  onChange={onChange}
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Category
                </label>
                <br />
                <select
                  name="categoryId"
                  className="rounded"
                  value={products.categoryId}
                  defaultValue={products.categoryId}
                  onChange={onChange}
                >
                  <option value="categoryId"></option>
                  {categories.map((el) => {
                    // console.log(el.id, products.categoryId, 191);
                    return (
                      <option key={el.id} value={el.id ? el.id : 0}>
                        {el.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mt-8">
                <center>
                  <CustomButton
                    className="bg-[#E1C78F] text-white p-2 rounded-lg hover:bg-[#C1A36F] px-10 py-2"
                    type="submit"
                  />
                </center>
              </div>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

export default EditProduct;
