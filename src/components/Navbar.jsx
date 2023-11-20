import React from "react";
import Button from "./Button";

const Navbar = () => {
  const customClipPath = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#68BBE3",
    clipPath: "circle(300px at right 300px)",
    opacity: 0.6,
    backdropFilter: "blur(30px)",
  };
  const leftCustomClipPath = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#68BBE3",
    clipPath: "circle(250px at left 300px)",
    opacity: 0.6,
    backdropFilter: "blur(30px)",
  };

  const gradientText = {
    background: "linear-gradient(#ab7dad,#641169)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const gradientText2 = {
    background: "linear-gradient(to top right,#641169,#ab7dad)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const menuItems = [
    "Home",
    "Services",
    "About Us",
    "Work",
    "Contact",
    "Career",
    "Resources",
  ];

  return (
    <>
      <div style={customClipPath} />
      <div style={leftCustomClipPath} />
      <div className="bg-gradient-to-r from-[#15152a] to-[#563c64]">
        <div className="p-8">
          <div className="flex items-center justify-center">
            <div>
              <ul
                className="border rounded-xl p-56 flex space-x-5 content bg-center content-center py-5 bg-gradient-to-r from-blue-200 to-purple-600 text-white"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
                }}
              >
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-purple-900 hover:cursor-pointer hover:font-extrabold hover:underline hover:underline-offset-8"
                  >
                    {item}
                  </li>
                ))}
                <li>
                  <div>
                  <Button content={"Request a proposal"}/>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative flex left-36 pt-4 text-4xl">
          {/* Left side with two text divs */}
          <div className="flex flex-col justify-center text-white w-72">
            <div style={{ fontFamily: "'Inter', sans-serif" }}>
              Great&nbsp;
              <span className="text-4xl font-semibold" style={gradientText}>
                Product
              </span>{" "}
              is{" "}
              <span className="text-4xl font-bold">
                built&nbsp;by&nbsp;great&nbsp;
                <span style={gradientText2}>teams</span>
              </span>
            </div>
            <div
              className="pt-12 text-xl pl-20"
              style={{ fontFamily: "'Italianno', cursive" }}
            >
              You Imagine.{" "}
              <span className="bg-yellow-500 pl-1 pr-2 gap-3 rounded-md">
                We Create
              </span>
            </div>
          </div>

          {/* Right side with two images */}
          <div className="flex justify-end items-center pl-72">
            <div>
              <img
                src="https://www.appexsoftwares.com/wp-content/uploads/2023/03/ezgif.com-gif-maker-3.webp"
                alt="image1"
                className=" w-72 h-96 "
              />
            </div>
            <div className="mt-[-180px]">
              <img
                src="https://www.data.in/assets/images/header-images/product-discovery-workshop.png"
                alt="image2"
                className=" w-52 h-48 top-0"
              />
            </div>
          </div>
        </div>

        {/* web design */}
        <div className="bg-slate-500 items-center justify-center p-[0.5px] mt-5 w-10/12 ml-28" />
        <div className=" ml-28 text-white">
          <div>
            <h1 className=" text-4xl font-bold  pt-6">Web Design</h1>
          </div>
          <div
            className="py-14 text-lg w-[800px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our agency web design studio creates marketing websites and landing
            pages that help to tell brand stories, and increase conversion and
            build trust.
          </div>

          <div className="flex space-x-10">
            <Button content={"Request a proposal"}/>
            <div className="hover:cursor-pointer text-sm pt-2">Contact Us {">"}</div>
          </div>
        </div>
        <div className="p-8" />
      </div>
    </>
  );
};

export default Navbar;
