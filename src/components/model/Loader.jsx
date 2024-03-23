import React from "react";
// import "./loader.css";

const Loader = () => {
  return (
    <div className="absolute top=0 left-0 w-full flex h-full justify-center items-center">
      <div className="w-[10vw] h-[10vw] rounded-full">Loading...</div>
    </div>
  );
};

export default Loader;
