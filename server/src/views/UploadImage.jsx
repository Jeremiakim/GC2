import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { urlName } from "../static";
import { useEffect, useState } from "react";

const UploadImage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [imgFile, setImgFile] = useState();
  const [products, setProducts] = useState({});

  const inputImgFileHandler = (e) => {
    const inputImgFile = e.target.files[0];
    setImgFile(inputImgFile);
  };
  const access_token = localStorage.getItem("access_token");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("imgUrl", imgFile);
      const response = await axios.patch(
        `${urlName}/product/${productId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(products, 33);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${urlName}/pub/product/${productId}`);
      setProducts(data.findProductById);
      // console.log(data, 38);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <center>
        <div className="card w-100 flex justify-center bg-base-100 shadow-xl rounded opacity-81 image-full bg-[#739072]">
          <div>
            <img
              src={products.imgUrl}
              alt="T-shirt Oversize"
              className="rounded-t-lg h-[100%]"
            />
          </div>
          <div className=" my-5 ml-10">
            <h1 className="card-title font-bold text-sm text-white">
              AIRsim Katun T-shirt Oversize (Lengan Half)
            </h1>
            <div className="badge badge-outline font-bold text-sm text-white">
              Price : Rp100.000
            </div>
            <div className="badge badge-outline font-bold text-sm text-white">
              Stock : 50
            </div>
          </div>
          <div className="card-body m-3">
            <div className="flex justify-between mb-1">
              <form className="bg-white p-4 rounded">
                <div className="text-center">
                  <input
                    type="file"
                    className="form-control"
                    id="uploadImage"
                    onChange={inputImgFileHandler}
                  />
                </div>
                <div className="mt-3">
                  <button
                    onClick={onSubmit}
                    className=" bg-red-500 text-white p-2 rounded-lg hover:bg-blue-900 px-10 py-2"
                  >
                    Upload Image
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default UploadImage;
