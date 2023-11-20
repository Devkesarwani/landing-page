import React from "react";

const LineHeading = ({ content, boldContent }) => {
  return (
    <>
      <div className="text-3xl mb-8">
        <div className="flex items-center justify-center">
          <div className="border-1 bg-gradient-to-br from-violet-950 to-blue-400 h-2 w-14 mx-4 mb-5 hover:from-blue-400 hover:to-violet-950" />
        </div>
        <div className="flex justify-center items-cemnter mx-4 font-medium">
          {content}
        </div>
        <div className="flex justify-center items-center font-bold pt-2">{boldContent}</div>
      </div>
    </>
  );
};

export default LineHeading;
