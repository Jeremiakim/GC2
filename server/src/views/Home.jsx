import { useEffect, useState } from "react";
import axios from "axios";
import TableProduct from "./TableProduct";
import { urlName } from "../static";
const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const { data } = await axios.get(`${urlName}/product`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      // console.log(data);
      setProducts(data.products);
      // console.log(data, 10);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <>
      {/* <p>hallo</p> */}
      <div className="bg-[#FFF5E0]">
        {products.map((product, index) => {
          // console.log(product, 22);
          return (
            <TableProduct
              product={product}
              index={index}
              key={product.id}
              fetchProducts={fetchProducts}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
