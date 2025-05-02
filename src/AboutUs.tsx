import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  const clickMe = () => {
    console.log("Hello");
    navigate("/news");
    return (
      <>
        About us page
        <button type="button" onClick={clickMe}>
          Click Me
        </button>
      </>
    );
  };
}

export default AboutUs;
