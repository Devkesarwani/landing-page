import React, { useState } from "react";
import LineHeading from "./MiniComponents/LineHeading";
import CircleWithRating from "./MiniComponents/CircleWithRating";
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";

const Component10 = () => {
  const names = [
    "Romeena De Silva",
    "Bhavya",
    "Shalini",
    "Imran Khan",
    "Shubham",
  ];
  const designations = [
    "Technical Lead",
    "Supervisor",
    "Human Resource (HR)",
    "Software Engineer",
    "Web Developer Intern",
  ];
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTif4vUe840gKkIifulUYxnTZce5YnLM5vopw&usqp=CAU",
    "https://img.freepik.com/premium-psd/woman-holding-laptop-picture-woman-holding-black-folder_176841-43857.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/smiling-businesswoman-working-her-desk-professional-engaging-ai-generated_414897-410.jpg",
    "https://talentcentral.learning.shl.com/pluginfile.php/358/course/overviewfiles/man-at-computer-SH005-square.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCQQ9h-cixXQD9NO0IqFoAAAvLyVzgZeI9A&usqp=CAU",
  ];

  const testimonial =
    "Without any doubt I recommend Pryagrajxport as one of the best web design and digital marketing agencies. One of the best agencies I ve came across so far. Wouldn t be hesitated to introduce their work to someone else.";

  const [currentIndex, setCurrentIndex] = useState(2);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? names.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <LineHeading
        content={"Why customers love"}
        boldContent={"working with us"}
      />

        <div className="flex items-center justify-center">
        <RiSingleQuotesL className="mb-28 ml-10 text-4xl text-purple-800"/>
        <div className="flex justify-center text-center items-cemnter mx-4 text-slate-400 w-[450px] text-lg font-light">
        
          {testimonial}
          
        </div>
        <RiSingleQuotesR className="mt-24 text-4xl text-purple-800" />
        </div>
        

      <div className="flex items-center justify-center gap-8 pt-6 mb-20">
        <div className="font-thin mr-24">
          <button onClick={handlePrev}>
            <IoArrowBackCircleOutline className="text-purple-800 text-5xl font-thin mb-60" />
          </button>
        </div>
        {names.map((name, index) => (
          <>
            <div>
              <div>
                <div
                  key={index}
                  className={`relative transform transition-transform duration-300 ${
                    index === currentIndex ? "scale-100" : "scale-75 opacity-60"
                  }`}
                >
                  <CircleWithRating
                    name={name}
                    designation={designations[index]}
                    imgSource={images[index]}
                  />
                </div>
              </div>
            </div>
          </>
        ))}
        <div className="font-thin ml-24">
          <button onClick={handleNext}>
            <IoArrowForwardCircleOutline className="text-purple-800 text-5xl font-thin mb-60" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Component10;
