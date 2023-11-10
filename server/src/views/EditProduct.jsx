const EditProduct = () => {
  return (
    <>
      <center>
        <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded bg-[#739072]">
          <form action="" method="" className=" my-10 space-y-4 ">
            <div className=" text-center mb-10">
              <h1 className="text-white font-bold text-2xl">
                Form Edit Product
              </h1>
            </div>
            <div className="w-3/4 mx-auto">
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  value=""
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
                  name=""
                  value=""
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Price
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  value=""
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="my-3">
                <label for="" className="text-white font-bold">
                  Stock
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  value=""
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
                  name=""
                  value=""
                  className="rounded px-3 py-1"
                />
              </div>
              <div className="mt-8">
                <center>
                  <button
                    className="bg-[#E1C78F] text-white p-2 rounded-lg hover:bg-[#C1A36F] px-10 py-2"
                    type="submit"
                  >
                    Update Product
                  </button>
                </center>
              </div>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

export default EditProduct;
