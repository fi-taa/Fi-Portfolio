import React from 'react';

const Card = (props) => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="absolute inset-0 bg-cover bg-center mx-16 my-20 ">
        <img
          className="w-full h-full object-cover"
          src={props.image}
          alt="Background"
        />
      </div>
      <div className="absolute left-0 ml-8 text-white bg-black/50 p-3 rounded-md">
        <h1 className="text-2xl font-bold mb-4">web Development</h1>
        {/* <p className="text-gray-300">Card Description</p> */}
      </div>
    </div>
  );
};

export default Card;
