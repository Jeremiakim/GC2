import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card1 from "../components/card1";

const Home = () => {
  const dataProducts = [
    {
      id: 1,
      name: "T-Shirt Oversize",
      description: "T-Shirt For Male",
      price: 299000,
      stock: 50,
      imgUrl:
        "https://hooligans.co.id/cdn/shop/products/OLIVER22.1-BLACK_800x.jpg?v=1662434626",
      categoryId: 2,
      authorId: 1,
    },
    {
      id: 2,
      name: "Black Dress",
      description: "Color black of dress For Female",
      price: 599000,
      stock: 40,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKeqDCPI4pB7LIDjr4LIBww1Kasrz4iLyqkg&usqp=CAU",
      categoryId: 2,
      authorId: 1,
    },
    {
      id: 3,
      name: "Sweater JJK",
      description: "Outer for Male",
      price: 399000,
      stock: 60,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwvX0s6Sr0OIv9s-6U9rteP7vhiX8pEsEUg&usqp=CAU",
      categoryId: 3,
      authorId: 1,
    },
    {
      id: 4,
      name: "White Dress",
      description: "Dress for Married",
      price: 499000,
      stock: 30,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeN4syTpDX-cDLRy60QVnPHAy8CARLoa-vOQ&usqp=CAU",
      categoryId: 2,
      authorId: 1,
    },
    {
      id: 5,
      name: "Blue Jeans",
      description: "Classic blue jeans for Men",
      price: 349000,
      stock: 45,
      imgUrl: "https://example.com/blue-jeans.jpg",
      categoryId: 1,
      authorId: 2,
    },
    {
      id: 6,
      name: "Summer Dress",
      description: "Stylish summer dress for Women",
      price: 449000,
      stock: 55,
      imgUrl: "https://example.com/summer-dress.jpg",
      categoryId: 2,
      authorId: 2,
    },
    {
      id: 7,
      name: "Leather Jacket",
      description: "Fashionable leather jacket for Men",
      price: 799000,
      stock: 25,
      imgUrl: "https://example.com/leather-jacket.jpg",
      categoryId: 3,
      authorId: 3,
    },
    {
      id: 8,
      name: "Red Skirt",
      description: "Elegant red skirt for Women",
      price: 329000,
      stock: 60,
      imgUrl: "https://example.com/red-skirt.jpg",
      categoryId: 2,
      authorId: 3,
    },
    {
      id: 9,
      name: "Hooded Sweatshirt",
      description: "Comfortable hooded sweatshirt for Men",
      price: 499000,
      stock: 35,
      imgUrl: "https://example.com/hooded-sweatshirt.jpg",
      categoryId: 3,
      authorId: 4,
    },
    {
      id: 10,
      name: "Floral Blouse",
      description: "Beautiful floral blouse for Women",
      price: 379000,
      stock: 50,
      imgUrl: "https://example.com/floral-blouse.jpg",
      categoryId: 2,
      authorId: 4,
    },
  ];
  const [products, setProducts] = useState(dataProducts);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showDetailProduct, setShowDetailProduct] = useState(false);
  return (
    <>
      <div className="bg-[#FFF5E0] ">
        {products.map((product) => {
          return <Card1 product={product} />;
        })}
      </div>
    </>
  );
};

export default Home;
