import React from "react";
import LineHeading from "./MiniComponents/LineHeading";
import SmallDandD from "./MiniComponents/SmallDandD";

const Component7 = () => {
  return (
    <>
      <div className="bg-slate-100 p-10 mb-12">
        <LineHeading
          content={"Our design and"}
          boldContent={"development approach"}
        />
        <div className="ml-20 mx-auto grid grid-cols-2 gap-x-10 gap-y-6">
          <SmallDandD
            source={"https://cdn-icons-gif.flaticon.com/6172/6172512.gif"}
            boxTitle={"UX Driven Engineering"}
            boxContent={
              "Unlike other companies, we are a UX First development company. Projects are driven by designers and they make sure design and experiences translate to code."
            }
          />
          <SmallDandD
            source={"https://cdn-icons-gif.flaticon.com/10826/10826754.gif"}
            boxTitle={"Developing Shared Understanding"}
            boxContent={
              "Unlike other companies, we are a UX First development company. Projects are driven by designers and they make sure design and experiences translate to code."
            }
          />
          <SmallDandD
            source={"https://cdn-icons-gif.flaticon.com/6449/6449707.gif"}
            boxTitle={"Proven Experience and Expertise"}
            boxContent={
              "Unlike other companies, we are a UX First development company. Projects are driven by designers and they make sure design and experiences translate to code."
            }
          />
          <SmallDandD
            source={"https://cdn-icons-gif.flaticon.com/7920/7920891.gif"}
            boxTitle={"Security & Intellectual Property (IP)"}
            boxContent={
              "Unlike other companies, we are a UX First development company. Projects are driven by designers and they make sure design and experiences translate to code."
            }
          />
          <SmallDandD
            source={"https://cdn-icons-gif.flaticon.com/12198/12198806.gif"}
            boxTitle={"Code Reviews"}
            boxContent={
              "Unlike other companies, we are a UX First development company. Projects are driven by designers and they make sure design and experiences translate to code."
            }
          />
          <SmallDandD
            source={"https://cdn-icons-gif.flaticon.com/7920/7920885.gif"}
            boxTitle={"Quality Assurance & Testing"}
            boxContent={
              "Unlike other companies, we are a UX First development company. Projects are driven by designers and they make sure design and experiences translate to code."
            }
          />
        </div>
        <div className="p-5"></div>
      </div>
    </>
  );
};

export default Component7;
