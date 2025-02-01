import { CirclesWithBar } from "react-loader-spinner";
import "./index.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#000000"
        innerCircleColor="#000000"
        barColor="#000000"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
