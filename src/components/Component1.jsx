import React from "react";
import Button from "./Button";
import Heading from "./MiniComponents/Heading";

const Component1 = () => {
  return (
    <>
      <Heading
        headingTitle={"Web Design & Development"}
        headingContent={
          "Client-focused, customer-centric, creating website solutions that deliver tangible business results, Appnovation's web developers helps brands the ever-changing digital landscape."
        }
      />
      <div className="ml-28">
        <Button content={"Let's get started"} />
      </div>
    </>
  );
};

export default Component1;
