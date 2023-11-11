import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import axios from "axios";
import { urlName } from "../static";

const DetailProduct = () => {
  let [product, setProduct] = useState({});
  const { name, description, price, stock, imgUrl } = product;
  const { productId } = useParams();
  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`${urlName}/pub/product/` + productId);

      setProduct(data.findProductById);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      {/* {showDetailProduct && ( */}
      <div className="card lg:card-side bg-base-100 shadow-inner rounded-lg mx-[2rem] flex flex-row bg-gray-300">
        <div className="w-[40%]">
          <img src={imgUrl} alt="Album" className="h-full object-fill" />
        </div>
        <div className="ml-20 mr-10 h-full w-[60%]">
          <div className="card-body py-16 flex flex-col gap-3">
            <h2 className="card-title font-bold text-5xl">{name}</h2>
            <p className="mt-4 overflow-hidden text-justify flex-grow">
              {description}
            </p>
            <div className="badge badge-outline font-bold text-2xl">
              Rp{price}
            </div>
            <div className="badge badge-outline font-bold text-xl text-gray-500">
              Stock : {stock}
            </div>
            <div className="card-actions justify-end">
              <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-700">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default DetailProduct;
