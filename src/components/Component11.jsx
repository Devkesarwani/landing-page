import React from "react";
import LineHeading from "./MiniComponents/LineHeading";
import PathUpperBox from "./MiniComponents/PathUpperBox";
import PathLowerBox from "./MiniComponents/PathLowerBox";

const Component11 = () => {
  return (
    <>
      <LineHeading
        content={"How development"}
        boldContent={"through Pryagrajxport works"}
      />
      <div className="pt-5 mb-20">
        <div className="flex ">
          <div className="left-0 flex ml-[100px] justify-start">
            <PathUpperBox
              title={"#1 Assemble the right team"}
              content={
                "We handle all aspects of vetting and choosing the right team that you don t have the time, expertise, or desire to do."
              }
            />
          </div>
          <div className="left-0 flex ml-[100px] justify-start">
            <PathUpperBox
              title={"#3 Tech architecture"}
              content={
                "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently"
              }
            />
          </div>
          <div className="left-0 flex ml-[100px] justify-start">
            <PathUpperBox
              title={"#5 Code reviews"}
              content={
                "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells"
              }
            />
          </div>
        </div>

        <div>
          <div className="bg-purple-900 items-center justify-center p-[0.5px] w-[1200px] ml-16"></div>
        </div>

        <div className="flex">
          <div className="left-0 flex ml-[150px] justify-start">
            <PathLowerBox
              title={"#2 Sprint planning"}
              content={
                "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.."
              }
            />
          </div>
          <div className="left-0 flex ml-[110px] justify-start">
            <PathLowerBox
              title={"#4 Standups & weekly demos"}
              content={
                "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."
              }
            />
          </div>
          <div className="left-0 flex ml-[90px] justify-start">
            <PathLowerBox
              title={"#6 Iterative delivery"}
              content={
                "We divide the implementation process into several checkpoints rather than a single deadline."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component11;
