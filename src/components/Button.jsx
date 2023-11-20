import React from 'react'

const Button = ({content}) => {
  return (
    <button className="text-sm shadow-lg shadow-blue-900/50 px-4 py-2 rounded-md bg-gradient-to-r from-violet-800 via-violet-500 via-70% to-blue-500 to-90% hover:from-blue-500 hover:via-violet-500 hover:to-violet-600">
    {content}
  </button>
  )
}

export default Button