import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-slate-600 pb-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 ml-20">
        {/* Grid 1 */}
        <div className="col-span-1 mt-[40px] w-80">
          <p className="text-lg  hover:text-purple-900 ">
            At Pryagrajxport, we craft digital dreams into stunning realities.
            Our pixels tell stories, our code unlocks possibilities, and our
            creativity knows no bounds. Join us on this journey of limitless
            design and boundless development.
          </p>
        </div>

        {/* Grid 2 */}
        <div className="col-span-1 pl-24">
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="list-none">
            <li className="pb-3 hover:font-extrabold hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-purple-900">
              Home
            </li>
            <li className="pb-3 hover:font-extrabold hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-purple-900">
              Privacy Policy
            </li>
            <li className="pb-3 hover:font-extrabold hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-purple-900">
              Terms & Conditions
            </li>
            <li className="pb-3 hover:font-extrabold hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-purple-900">
              Refund Policy
            </li>
            <li className="pb-3 hover:font-extrabold hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-purple-900">
              Customer Support
            </li>
            <li className="pb-3 hover:font-extrabold hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-purple-900">
              Areas We Serve
            </li>
          </ul>
        </div>

        {/* Grid 3 */}
        <div className="col-span-1 pl-8">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="pb-3 hover:font-extrabold hover:text-purple-900">
            <a href="http://prayagrajxport.com">www.prayagrajxport.com</a>
          </p>
          <p className="pb-3 hover:font-extrabold hover:text-purple-900">
            <a href="tel:+91 6386821819">+91 6386821819</a>
          </p>
          <p className="pb-3 hover:font-extrabold hover:text-purple-900">
            <a href="mailto:sales@prayagxport.com">sales@prayagxport.com</a>
          </p>
        </div>

        {/* Grid 4 */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="list-none">
            <li className="pb-1 hover:cursor-pointer hover:font-extrabold hover:underline hover:underline-offset-8 hover:text-purple-900">
              Web Development
            </li>
            <li className=" pt-36 pl-10">
              <div className="flex space-x-4">
                <a href="http://facebook.com">
                  <FaFacebook
                    className="text-black bg-white border-[1px] border-solid border-slate-400 shadow-md rounded-full "
                    size={25}
                  />
                </a>
                <a href="http://instagram.com">
                  <FaInstagram
                    className="text-black bg-white border-[1px] border-solid border-slate-400 shadow-md rounded-full "
                    size={25}
                  />
                </a>
                <a href="http://twitter.com">
                  <FaTwitter
                    className="text-black bg-white border-[1px] border-solid border-slate-400 shadow-md rounded-full "
                    size={25}
                  />
                </a>
                <a href="http://linkedin.com">
                  <FaLinkedin
                    className="text-black bg-white border-[1px] border-solid border-slate-400 shadow-md rounded-full "
                    size={25}
                  />
                </a>
              </div>
            </li>
          </ul>
          {/* Add icons for services */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
