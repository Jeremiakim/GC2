const Card2 = ({ product, showDetailProduct }) => {
  const { id, name, description, price, stock, imgUrl } = product;
  return (
    <>
      {showDetailProduct && (
        <div className="card lg:card-side bg-base-100 shadow-inner rounded-lg mx-[2rem] flex flex-row bg-gray-300">
          <div className="w-[40%]">
            <img src={imgUrl} alt="Album" className="h-full object-fill" />
          </div>
          <div className="ml-20 mr-10 h-full w-[60%]">
            <div className="card-body py-16 flex flex-col gap-3">
              <h2 className="card-title font-bold text-5xl">
                T-Shirt Oversize
              </h2>
              <p className="mt-4 overflow-hidden text-justify flex-grow">
                T-shirt oversized Pria, berbahan lembut dan tidak panas. T-shirt
                ini bisa digabungkan untuk tampilan stylish dengan potongan yang
                nyaman dan santai panas.
              </p>
              <div className="badge badge-outline font-bold text-2xl">
                Rp100.000
              </div>
              <div className="badge badge-outline font-bold text-xl text-gray-500">
                Stock : 50
              </div>
              <div className="card-actions justify-end">
                <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-700">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card2;
