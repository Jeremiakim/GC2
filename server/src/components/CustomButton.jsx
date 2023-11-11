import { useNavigate } from "react-router-dom";

const CustomButton = ({ className, type }) => {
  const navigate = useNavigate();
  const buttonName = "";
  const buttonOnClick = "";
  return (
    <>
      <button className={className} type={type}>
        Submit
      </button>
    </>
  );
};

export default CustomButton;
