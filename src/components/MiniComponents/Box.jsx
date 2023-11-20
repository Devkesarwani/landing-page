// Box.jsx
import React from "react";

const Box = ({ source }) => {
  return (
    <>
      <div className="border-1 h-[330px] w-[550px] rounded-3xl bg-gradient-to-r from-blue-300 from-60% to-purple-600 flex items-center justify-center">
        <div className="border-1 m-2 h-[250px] w-[500px] rounded-3xl bg-white flex items-center justify-center shadow-2xl">
          <div className="border-1 w-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={source}
              className="h-[210px] w-[500px] rounded-3xl transition-transform transform hover:scale-110"
              alt="product-images"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
