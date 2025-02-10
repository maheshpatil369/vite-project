import React from "react";

function Cards({ text, color }) {
  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-32 bg-sky-200"></div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">Harsh</h3>
        <h5 className="text-x5 ">Profession</h5>
        <button className="px-3 py-1 text-x5 text-white bg-blue-500 font-semibold rounded-2xl"> Add Friend </button>
      </div>
    </div>



  )
}

export default Cards;
