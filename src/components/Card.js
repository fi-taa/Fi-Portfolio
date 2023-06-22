import React, { useState } from 'react';

const Card = (props) => {
  const [image, setImage] = useState('/bg1.jpeg');

  const handleClick = () => {
    const imageList = [
        '/bg.jpeg',
        '/bg1.jpeg',
      '/hero1.png',
    ];
  
    const currentIndex = imageList.indexOf(image);
    const nextIndex = (currentIndex + 1) % imageList.length;
    const newImage = imageList[nextIndex];
    setImage(newImage);
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen cursor-pointer "
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-cover bg-center my-32 mx-32  transition-transform duration-300 hover:scale-105">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Background"
        />
      </div>
      <div className="absolute left-0 ml-8 text-white bg-black/60 p-4 rounded-md transition-transform duration-300  hover:scale-125">
        <h1 className="text-2xl font-bold mb-4">{props.title} &rarr;</h1>
        {/* <p className="text-gray-300">Card Description</p> */}
      </div>
    </div>
  );
};

export default Card;
