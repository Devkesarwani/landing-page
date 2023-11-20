import React from 'react'

const Heading = ({headingTitle, headingContent}) => {
  return (
    <div className="items-center justify-center">
      <div className=" ml-28 text-black">
        <div className="text-6xl font-extrabold pt-7 h-16 max-w-screen-xl">
          {headingTitle}
        </div>

        <div
          className="py-14 text-xl font-medium text-black w-[880px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {headingContent}
        </div>
      </div>
    </div>
  )
}

export default Heading