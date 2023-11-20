import React from "react";
import LineHeading from "./MiniComponents/LineHeading";

const BuildindComponent6 = () => {
  const customClipPath = {
    position: "absolute",
    top: "3000px",
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#f00c93",
    clipPath: "circle(60px at left 500px)",
    opacity: 0.6,
    backdropFilter: "blur(30px)",
  };
  const customClipPath2 = {
    position: "absolute",
    top: "3550px",
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#f00c93",
    clipPath: "circle(60px at right 500px)",
    opacity: 0.6,
    backdropFilter: "blur(30px)",
  };
  const customClipPath3 = {
    position: "absolute",
    top: "4059px",
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#f00c93",
    clipPath: "circle(60px at left 500px)",
    opacity: 0.6,
    backdropFilter: "blur(30px)",
  };

  return (
    <div className=" mb-8">
      <LineHeading content={"Way of building"} boldContent={"Great Software"} />

      {/* First Section */}
      <div className="flex items-center justify-start p-16">
        <div className="mr-36 w-3/6">
          <div>
            {/* Left Content */}
            <div className="font-medium text-2xl mb-5">
              Build the right team to scale.
            </div>
            <p className="text-base pb-6 font-normal">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </p>
            <p className="text-base font-normal">
              Our <span className="text-purple-600">delivery model</span> helps
              you cut costs and deliver within budget.
            </p>
            <div className="flex items-center pt-5 w-[400px]">
              <div className="border-l-4 border-purple-500 h-20" />
              <div className="text-base font-normal ml-4 text-purple-600 italic">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </div>
            </div>

            {/* CEO Info */}
            <div className="pt-4 flex items-center">
              <div style={customClipPath} />
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="CEO"
                className="flex rounded-full w-11 h-12 mr-6 transition-transform transform hover:scale-110"
              />
              <div>
                <div>Jeewa Markram</div>
                <div className="text-slate-500">CEO</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/businessman-presenting-data-analysis-dashboard-tv-meeting-room-concord_31965-115404.jpg?w=740"
            alt="Team Building"
            className="w-[700px] h-[400px] rounded-xl transition-transform transform hover:scale-110"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex items-center justify-start p-16">
        <div>
          {/* Right Image */}
          <div style={customClipPath2} />
          <img
            src="https://img.freepik.com/free-photo/businessman-working-laptop_23-2147839979.jpg?size=626&ext=jpg&ga=GA1.1.739316371.1700307491&semt=ais"
            alt="Team Building"
            className="w-[700px] h-[400px] rounded-xl transition-transform transform hover:scale-110"
          />
        </div>
        <div className="ml-36 w-3/6">
          <div>
            {/* Left Content */}
            <div className="font-medium text-2xl mb-5">
              Build the right team to scale.
            </div>
            <p className="text-base pb-6 font-normal">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </p>
            <p className="text-base font-normal">
              Our <span className="text-purple-600">delivery model</span> helps
              you cut costs and deliver within budget.
            </p>
            <div className="flex items-center pt-5 w-[400px]">
              <div className="border-l-4 border-purple-500 h-20" />
              <div className="text-base font-normal ml-4 text-purple-600 italic">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </div>
            </div>

            {/* CEO Info */}
            <div className="pt-4 flex items-center">
              <img
                src="https://img.freepik.com/free-photo/business-woman-working-with-documents-office_231208-312.jpg"
                alt="CEO"
                className="flex rounded-full w-12 h-12 mr-6 transition-transform transform hover:scale-110"
              />
              <div>
                <div>Jeewa Markram</div>
                <div className="text-slate-500">CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex items-center justify-start p-16">
        <div className="mr-36 w-3/6">
          <div>
            {/* Left Content */}
            <div className="font-medium text-2xl mb-5">
              Build the right team to scale.
            </div>
            <p className="text-base pb-6 font-normal">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </p>
            <p className="text-base font-normal">
              Our <span className="text-purple-600">delivery model</span> helps
              you cut costs and deliver within budget.
            </p>
            <div className="flex items-center pt-5 w-[400px]">
              <div className="border-l-4 border-purple-500 h-20" />
              <div className="text-base font-normal ml-4 text-purple-600 italic">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </div>
            </div>

            {/* CEO Info */}
            <div className="pt-4 flex items-center">
              <div style={customClipPath3} />
              <img
                src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=740&t=st=1700360837~exp=1700361437~hmac=148cf9e4bbe56869db72f9e2239503e10d1b0e894e199e9dc189611a294626ff"
                alt="CEO"
                className="flex rounded-full w-12 h-11 mr-6 transition-transform transform hover:scale-110"
              />
              <div>
                <div>Jeewa Markram</div>
                <div className="text-slate-500">CEO</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div>
          <img
            src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346603.jpg?w=740&t=st=1700360588~exp=1700361188~hmac=6d1c301c2d7882c04604d347f0c31bcffa023ec66241b7cd72e02a30ae7d4f78"
            alt="Team Building"
            className="w-[700px] h-[400px] rounded-xl transition-transform transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildindComponent6;
