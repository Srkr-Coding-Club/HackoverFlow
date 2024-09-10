// src/components/Card.js
import React from 'react';

const Card = ({ image, text1,text2 }) => {
  return (
    <div className="bg-gray-700 shadow-md rounded-lg w-full flex flex-col justify-center items-center overflow-hidden">
      <img src={image} alt="Card Image" className="w-1/3 h-2/3"/>
      <div className="text-white p-4">
        <li>{text1}</li>
        <li>{text2}</li>
      </div>
    </div>
  );
};

export default Card;
