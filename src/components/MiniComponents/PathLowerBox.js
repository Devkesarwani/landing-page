import React from "react";

const PathLowerBox = ({title,content}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-l-4 border-purple-500 h-10 mb-2" />
      <div className="w-72 h-[150px] border-[1px] border-slate-200 text-base pt-4 px-3 rounded-lg mb-3">
        <div className="text-lg font-bold text-black">{title}</div>
        <div className="py-1 font-normal text-[15px] text-slate-600 leading-normal">
          {content}
        </div>
      </div>
    </div>
  );
};

export default PathLowerBox;
