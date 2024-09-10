import React from "react";
import GoldSponsors from "./sponsers/GoldSponsors";
const Sponsors = () => {
  return (
    <div className="flex bg-gradient-to-r from-gray-800 to-gray-900 flex-col items-center w-full ">
      <h1 className="m-20 text-5xl font-semibold text-center text-white titles">
        Sponsors
      </h1>
      <GoldSponsors />
    </div>
  );                    
};

export default Sponsors;
