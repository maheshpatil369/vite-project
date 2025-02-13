import React from 'react';

function Cards({ image, name, profession}) {
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-32 bg-sky-200 '>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
        <div className='w-full p-3'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <h5>{Profession}</h5>
            <button className='mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md cursor-pointer'>Add Friend</button>
      </div>
    </div>
  );
}

export default Cards;
