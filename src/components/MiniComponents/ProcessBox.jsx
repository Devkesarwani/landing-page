import React from "react";

const ProcessBox = ({ title, content }) => {
  return (
    <div className=" w-72 h-56 border-[1px] border-purple-800 text-base px-5 pt-6 mt-14 ml-8 rounded-lg">
      <div className=" text-lg font-bold text-purple-900">{title}</div>
      <div className="pt-5 font-normal text-sm">{content}</div>
    </div>
  );
};

export default ProcessBox;
