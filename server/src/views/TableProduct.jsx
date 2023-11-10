const TableProduct = ({ product, index }) => {
  const { name, description, price, stock, imgUrl } = product;
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
            <tr>
              <td className="border">{index}</td>
              <td className="border">{name}</td>
              <td className="border">{description}</td>
              <td className="border">{price}</td>
              <td className="border">{stock}</td>
              <td className="border">
                <img src={imgUrl} />
              </td>
              <td className="border">
                <a href="">
                  <button className=" bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900 px-10 py-2">
                    See Detail
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableProduct;
