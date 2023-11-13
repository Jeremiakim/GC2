import axios from "axios";
import { Link } from "react-router-dom";
import { urlName } from "../static";

const TableProduct = ({ products, fetchProducts }) => {
  const access_token = localStorage.getItem("access_token");

  const deleteProduct = async (urlName, id) => {
    await axios.delete(`${urlName}/product/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    fetchProducts();
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-slate-400">
            <tr>
              <th className="border">No.</th>
              <th className="border">Name</th>
              <th className="border">Description</th>
              <th className="border">Price</th>
              <th className="border">Stock</th>
              <th className="border">Image Url</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el, index) => {
              // console.log(el, 34);
              return (
                <tr>
                  <td className="border">{index + 1}</td>
                  <td className="border">{el.name}</td>
                  <td className="border">{el.description}</td>
                  <td className="border">{el.price}</td>
                  <td className="border">{el.stock}</td>
                  <td className="border">
                    <img src={el.imgUrl} />
                  </td>
                  <td className="border">
                    <Link to={`/product/${el.id}/edit`}>
                      <button className=" bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900 px-10 py-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      className=" bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900 px-10 py-2"
                      onClick={() => {
                        deleteProduct(urlName, el.id);
                      }}
                    >
                      Delete
                    </button>
                    <Link to={`product/${el.id}/uploadImg`}>
                      <button className=" bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900 px-10 py-2">
                        Edit Image
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableProduct;
