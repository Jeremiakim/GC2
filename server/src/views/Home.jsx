import { useEffect, useState } from "react";
import axios from "axios";
import TableProduct from "./TableProduct";
const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/product");
      setProducts(data.products);
      // console.log(data, 10);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-[#FFF5E0]">
        {products.map((product, index) => {
          // console.log(product, 22);
          return (
            <TableProduct product={product} index={index} key={product.id} />
          );
        })}
      </div>
    </>
  );
};

export default Home;
