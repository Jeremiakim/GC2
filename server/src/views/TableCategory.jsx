import axios from "axios";
import { useEffect, useState } from "react";
import { urlName } from "../static";
import { Link } from "react-router-dom";

const TableCategory = () => {
  // const { name } = category;
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const access_token = localStorage.getItem("access_token");
    try {
      const { data } = await axios.get(`${urlName}/category`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      // console.log(data.category, "<<<< data categry ");
      setCategories(data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-slate-400">
            <tr>
              <th className="border">No.</th>
              <th className="border">Name</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
              return (
                <tr key={category.id}>
                  <td className="border">{index + 1}</td>
                  <td className="border">{category.name}</td>
                  <td className="border">
                    <Link to="">
                      <button className=" bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900 px- py-1">
                        Edit
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

export default TableCategory;
