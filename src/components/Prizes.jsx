import React from "react";
import PriceItem from "./prizes/PriceItem";

const Prizes = () => {
  return (
    <>
      <div
        className="flex flex-col items-center w-full gap-12 mt-24"
        id="prizes">
        <h1 className="text-5xl font-semibold text-center text-white titles">
          Prizes
        </h1>
        <h2 className="text-3xl font-bold text-orange-300 ">
          A Grand Prize Pool of ₹30,000
        </h2>
        <div className="grid justify-center max-[800px]:grid-cols-1 grid-cols-3 w-fit ">
          <PriceItem rank={1} />
          <PriceItem rank={2} />
          <PriceItem rank={3} />
          {/* <PriceItem /> */}
        </div>
      </div>
    </>
  );
};

export default Prizes;

//max-[1180px]:grid-cols-1
