import React from "react";
import { IoIosStar } from "react-icons/io";

const CircleWithRating = ({ imgSource, name, desingation }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-4">
        <img src={imgSource} alt="Profile" className="rounded-full w-28 h-28" />
      </div>
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <IoIosStar key={index} className="text-yellow-500 text-2xl" />
        ))}
      </div>
      <div className="text-lg font-bold text-purple-900 mt-2">{name}</div>
      <div className="text-lg font-medium">{desingation}</div>
    </div>
  );
};

export default CircleWithRating;
