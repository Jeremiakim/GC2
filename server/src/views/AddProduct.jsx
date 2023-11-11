import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Form from "../components/Form";
import { urlName } from "../static";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [inputAddProduct, setInputAddProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imgUrl: "",
    categoryId: "",
  });
  const access_token = localStorage.getItem("access_token");
  const fetchCategories = async () => {
    try {
      const data = await axios.get(`${urlName}/category`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      // data.data.category
      setCategories(data.data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  // console.log(categories);
  // console.log(fetchCategories(), 23);

  const onChange = async (e) => {
    // console.log(e, "inii");
    setInputAddProduct({
      ...inputAddProduct,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.name, e.target.value, 37);
  };
  // console.log(inputAddProduct, 41);
  const navigate = useNavigate();
  const onSubmitAddProduct = async (e) => {
    e.preventDefault();
    // console.log("Sending data:", { product: inputAddProduct });
    try {
      let access_token = localStorage.getItem("access_token");
      let data = await axios.post(`${urlName}/product`, inputAddProduct, {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });
      // console.log(data, 56);
    } catch (error) {
      console.log(error.response);
    }

    navigate("/");
  };
  return (
    <>
      <center>
        <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded bg-[#739072]">
          <Form
            categories={categories}
            onChange={onChange}
            onSubmitAddProduct={onSubmitAddProduct}
            inputAddProduct={inputAddProduct}
          />
        </div>
      </center>
    </>
  );
};

export default AddProduct;
