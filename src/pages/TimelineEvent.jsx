/* eslint-disable no-unused-vars */
import React from 'react';

const TimelineEvent = ({ date, title, description, isLeft }) => (
  <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-8`}>
    <div className="relative w-1/2">
      <div className="p-4 bg-gray-800 rounded-lg">
        <span className="text-purple-400 text-sm">{date}</span>
        <h3 className="text-white text-xl font-bold mt-1">{title}</h3>
        <p className="text-gray-300 mt-1">{description}</p>
      </div>
      <div
        className={`absolute top-4 w-4 h-4 bg-purple-500 rounded-full ${
          isLeft ? 'right-full mr-8' : 'left-full ml-8'
        }`}
      ></div>
    </div>
  </div>
);

export default TimelineEvent;
