import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card1 from "../components/card1";
import Pagination from "../components/Pagination";
import Display from "./Display";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  //   console.log(products, 10);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/pub/product");
      //   console.log(data.data.rows);
      setProducts(data.data.rows);
      // console.log(setProducts(data.data.rows));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-8">
        <Display />
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => {
            return <Card1 product={product} key={product.id} />;
          })}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default Home;
