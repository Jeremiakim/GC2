import { Link } from "react-router-dom";

const Card1 = ({ product }) => {
  const { id, name, price, stock, imgUrl } = product;
  console.log(id);
  // product.name;

  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="card bg-base-100 bg-orange-50 shadow-xl rounded-md">
          <div className="flex justify-center bg-cover h-[20rem]">
            <img src={imgUrl} alt="T-shirt Oversize" className="rounded-t-lg" />
          </div>
          <div className="card-body m-3">
            <div className="flex justify-between mb-1">
              <div className="badge badge-outline font-bold text-gray-500 text-1xl">
                Male
              </div>
              <div className="badge badge-outline font-bold text-gray-500 text-1xl">
                XL-XXL
              </div>
            </div>
            <div>
              <h1 className="card-title font-bold text-2xl mb-5">{name}</h1>
            </div>
            <div className="badge badge-outline font-bold text-xl">
              Rp{price}
            </div>
          </div>
          <button className="w-full bg-red-500 text-white p-2 rounded-b-lg hover:bg-red-700">
            Add to Cart
          </button>
        </div>
      </Link>
    </>
  );
};

export default Card1;
