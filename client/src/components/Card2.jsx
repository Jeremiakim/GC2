const Card2 = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-inner rounded-lg mx-[2rem] flex flex-row bg-gray-300">
      <div className="w-[40%]">
        <figure>
          <img
            src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461914/sub/goods_461914_sub14.jpg?"
            alt="Album"
            className="h-full w-full rounded-l-lg"
          />
        </figure>
      </div>
      <div className="ml-20 mr-10 h-full w-[60%]">
        <div className="card-body">
          <h2 className="card-title font-bold text-5xl mt-16">
            T-Shirt Oversize
          </h2>
          <p className="mt-4 overflow-hidden text-justify">
            T-shirt oversized Pria, berbahan lembut dan tidak panas. T-shirt ini
            bisa digabungkan untuk tampilan stylish dengan potongan yang nyaman
            dan santai panas. T-shirt ini bisa digabungkan untuk tampilan
            stylish dengan potongan yang nyaman dan santai panas. T-shirt ini
            bisa digabungkan untuk tampilan stylish dengan potongan yang nyaman
            dan santai panas. T-shirt ini bisa digabungkan untuk tampilan
            stylish dengan potongan yang nyaman dan santai.
          </p>
          <div className="badge badge-outline font-bold text-2xl">
            Rp100.000
          </div>
          <div className="badge badge-outline font-bold text-xl mt-52 text-gray-500">
            Stock : 50
          </div>
          <div className="card-actions justify-end mt-38">
            <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-700">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
