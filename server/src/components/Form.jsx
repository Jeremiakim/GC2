import CustomButton from "./CustomButton";

const Form = ({
  onChange,
  onSubmitAddProduct,
  categories,
  inputAddProduct,
}) => {
  return (
    <>
      <form
        onSubmit={onSubmitAddProduct}
        className=" my-10 space-y-4 "
        autoComplete="off"
      >
        <div className=" text-center mb-10">
          <h1 className="text-white font-bold text-2xl">Form Add Product</h1>
        </div>
        <div className="w-3/4 mx-auto">
          <div className="my-3">
            <label for="" className="text-white font-bold">
              Name
            </label>
            <input
              type="text"
              id=""
              name="name"
              value={inputAddProduct.name}
              onChange={onChange}
              className="rounded px-3 py-1"
            />
          </div>
          <div className="my-3">
            <label for="" className="text-white font-bold">
              Description
            </label>
            <input
              type="text"
              id=""
              name="description"
              value={inputAddProduct.description}
              onChange={onChange}
              className="rounded px-3 py-1"
            />
          </div>
          <div className="my-3">
            <label for="" className="text-white font-bold">
              Price
            </label>
            <input
              type="number"
              id=""
              name="price"
              value={inputAddProduct.price}
              onChange={onChange}
              className="rounded px-3 py-1"
            />
          </div>
          <div className="my-3">
            <label for="" className="text-white font-bold">
              Stock
            </label>
            <input
              type="number"
              id=""
              name="stock"
              value={inputAddProduct.stock}
              onChange={onChange}
              className="rounded px-3 py-1"
            />
          </div>
          <div className="my-3">
            <label for="" className="text-white font-bold">
              Image Url
            </label>
            <input
              type="text"
              id=""
              name="imgUrl"
              value={inputAddProduct.imgUrl}
              onChange={onChange}
              className="rounded px-3 py-1"
            />
          </div>
          <div className="my-3">
            <label for="" className="text-white font-bold">
              Category
            </label>
            <br />
            <select
              name="categoryId"
              className="rounded"
              value={inputAddProduct.categoryId}
              onChange={onChange}
            >
              <option value=""></option>
              {categories.map((el) => {
                // console.log(el.id);
                return (
                  <option key={el.id} value={el.id ? el.id : 0}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-8">
            <center>
              {/* <button
                    className="bg-[#E1C78F] text-white p-2 rounded-lg hover:bg-[#C1A36F] px-10 py-2"
                    type="submit"
                  >
                    Add Product
                  </button> */}
              <CustomButton
                className="bg-[#E1C78F] text-white p-2 rounded-lg hover:bg-[#C1A36F] px-10 py-2"
                type="submit"
              />
            </center>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
