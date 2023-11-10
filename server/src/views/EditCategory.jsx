const EditCategory = () => {
  return (
    <>
      <div className="card w-96 flex justify-center bg-base-100 shadow-inner rounded bg-[#dea62f]">
        <form action="" method="" className=" my-10 space-y-4 ">
          <div className=" text-center mb-10">
            <h1 className="text-white font-bold text-2xl">
              Form Edit Category
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
            <div className="mt-8">
              <center>
                <button
                  className="bg-[#936500] text-white p-2 rounded-lg hover:bg-[#272216]"
                  type="submit"
                >
                  Update Category
                </button>
              </center>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCategory;
