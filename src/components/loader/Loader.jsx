import React from "react";
import { FadeLoader } from "react-spinners";
import "./Loader.css"

const Loader = () => {
  return (
    <div  className="info-loading" >
      <FadeLoader size={150} color={"#c0c0c0"}
     
      />
    </div>
  );
};

export default Loader;
