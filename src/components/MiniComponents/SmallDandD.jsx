import React from "react";

const SmallDandD = ({ source, boxTitle, boxContent }) => {
  return (
    <div className="text-sm font-normal transition-transform transform hover:scale-110 ">
      <div className="border-[1px] border-purple-900 h-[200px] w-[550px] flex items-center justify-center">
        <div className="border-1 w-[450px] flex flex-row justify-center items-center">
          {/* Left Image */}
          <div className="flex flex-col justify-center items-start pr-9">
            <img
              src={source}
              className="h-12 w-32 rounded-xl"
              alt="images"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center items-start">
            <div className="text-xl font-bold mb-2">{boxTitle}</div>
            <div>{boxContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallDandD;
