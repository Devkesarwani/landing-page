import React from "react";
import Box from "./MiniComponents/Box";

const BoxesComponent3 = () => {
  return (
    <>
      <div className="absolute grid grid-cols-2 gap-x-60 gap-y-6 ml-28 w-[990px] mb-8">
        <Box
          source={
            "https://blog.tubikstudio.com/wp-content/uploads/2019/09/mail_service_landing_page_tubik.png"
          }
        />
        <Box
          source={
            "https://blog.tubikstudio.com/wp-content/uploads/2019/06/babysitting_landing_page_design_tubik.gif"
          }
        />
        <Box
          source={
            "https://blog.tubikstudio.com/wp-content/uploads/2019/06/landing_page_animation_cryptocurrency_service_tubik.gif"
          }
        />
        <Box
          source={
            "https://blog.tubikstudio.com/wp-content/uploads/2019/12/smartmap-landing_page_design_tubik.png"
          }
        />
      </div>
    </>
  );
};

export default BoxesComponent3;
