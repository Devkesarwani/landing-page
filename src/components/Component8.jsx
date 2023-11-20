import React from "react";
import ProcessBox from "./MiniComponents/ProcessBox";

const Component8 = () => {
  const gradientText2 = {
    background: "linear-gradient(#5A5A5A, #D3D3D3)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <div className="text-3xl mb-8">
      <div
        className="flex justify-center items-cemnter mx-4 font-bold text-8xl"
        style={gradientText2}
      >
        Process
      </div>
      <div className="flex justify-center items-center font-bold text-4xl pt-2">
        A Closer Look At Our Methodology
      </div>
      <div className="grid grid-cols-4 pl-14 pr-14">
        <ProcessBox
          title={"Discovery"}
          content={
            "In this step, we actively learn about the needs and goals of the project and thoroughly discuss varioussolutions and directions to take."
          }
        />
        <ProcessBox
          title={"Design"}
          content={
            "This phase focuses on the creative visual aspect, starting with sketches & wireframes and progressing to the final design of branding or website."
          }
        />
        <ProcessBox
          title={"Developemnt"}
          content={
            "This step involves the technical side, including developing the design of the website on the platform or creating sketches for branding."
          }
        />
        <ProcessBox
          title={"Launch"}
          content={
            "The final step includes completing any necessary revisions, user testing, bug fixes, training, and delivering the product to the client."
          }
        />
      </div>
    </div>
  );
};

export default Component8;
