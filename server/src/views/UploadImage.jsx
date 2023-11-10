const UploadImage = () => {
  return (
    <>
      <center>
        <div className="card w-100 flex justify-center bg-base-100 shadow-xl rounded opacity-81 image-full bg-[#739072]">
          <div>
            <img
              src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461914/sub/goods_461914_sub14.jpg?"
              alt="T-shirt Oversize"
              className="rounded-t-lg h-[100%]"
            />
          </div>
          <div className=" my-5 ml-10">
            <h1 className="card-title font-bold text-sm text-white">
              AIRsim Katun T-shirt Oversize (Lengan Half)
            </h1>
            <div className="badge badge-outline font-bold text-sm text-white">
              Price : Rp100.000
            </div>
            <div className="badge badge-outline font-bold text-sm text-white">
              Stock : 50
            </div>
          </div>
          <div className="card-body m-3">
            <div className="flex justify-between mb-1">
              <form action="" method="" className="my-10 space-y-4">
                <center>
                  <button
                    className="bg-[#E1C78F] text-white p-2 rounded-lg hover:bg-[#C1A36F] px-10 py-2 ml-5"
                    type="submit"
                  >
                    Upload Image
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default UploadImage;
