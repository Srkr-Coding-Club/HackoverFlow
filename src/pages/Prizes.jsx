// src/App.js
import React from 'react';
import Card from './PrizeItems';


const cards = [
  { image: '/1st_Place_Medal.webp', text1: 'Cash prize of Rs.5000',text2: "Wolfram award for a year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro. The value of each award is $375.00."},
  { image: '/2nd_Place_Medal.webp', text1: 'Cash prize of Rs.5000',text2: "Wolfram award for a year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro. The value of each award is $375.00."},
  { image: '/3rd_Place_Medal.webp', text1: 'Cash prize of Rs.5000',text2: "Wolfram award for a year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro. The value of each award is $375.00."},
  { image: '/Sparkles.webp', text1: 'Cash prize of Rs.5000',text2: "Wolfram award for a year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro. The value of each award is $375.00."},
];

const Prizes = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900  mx-auto p-4">
        <h1 className='text-white flex items-center justify-center font-bold text-2xl p-8'>CARDS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.slice(0, 3).map((card, index) => (
          <Card key={index} image={card.image} text1={card.text1} text2={card.text2}/>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <Card image={cards[3].image} text1={cards[3].text1} text2={cards[3].text2} />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
