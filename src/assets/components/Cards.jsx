import React from 'react';

function Cards({ values, index, handleClick }) {
  return (
    <div className="w-52 bg-white rounded-md overflow-hidden shadow-md">
      <div className="w-full h-32 bg-sky-200">
        <img className="w-full h-full object-cover" src={values.image} alt={values.name} />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{values.name}</h3>
        <h5 className="text-gray-600">{values.profession}</h5>
        <button
          onClick={() => handleClick(index)}
          className={`mt-4 px-3 py-1 text-xs text-white ${
            values.friends ? "bg-green-600" : "bg-blue-500"
          } font-semibold rounded-md cursor-pointer`}
        >
          {values.friends ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default Cards;
