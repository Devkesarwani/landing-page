import React, { useState } from "react";
import Button from "./Button";

const Component12 = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email Reegistered!\n" + JSON.stringify(email, null, 2));
  };

  return (
    <div className="bg-slate-200 shadow-inner border-2 border-slate-300 border-solid p-10 mb-8">
      <div className="mb-8">
        <div className="flex justify-center items-center text-2xl font-bold pt-2">
          Join our Mailing List
        </div>
        <div className="flex justify-center items-cemnter mx-4 text-sm font-bold">
          For receiving our news and updates in your inbox directly.
        </div>
        <div>
          <form>
            <div className="flex justify-center items-cemnter mx-4 text-sm font-bold mt-5">
              <input
                type="email"
                name="name"
                placeholder="Your Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border-none outline-none rounded-lg w-72 placeholder-purple-800 text-center px-4 py-2 shadow-slate-400 shadow-md"
                required
              />
              <div className="ml-2 text-white">
                <Button content={"Sign Up"} onClick={handleSubmit} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Component12;
