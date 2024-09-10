import React from "react";
import PriceItem from "./prizes/PriceItem";

const Prizes = () => {
  return (
    <>
      <div className="flex bg-gradient-to-r from-gray-800 to-gray-900 flex-col items-center w-full">
        <h1 className="m-24 text-5xl font-semibold text-center text-white titles">Prizes</h1>
        <div className="grid justify-center max-[800px]:grid-cols-1 grid-cols-3 w-fit ">
          <PriceItem rank={1} />
          <PriceItem rank={2} />
          <PriceItem rank={3} />
          <PriceItem />
        </div>
      </div>
    </>
  );
};

export default Prizes;

//max-[1180px]:grid-cols-1