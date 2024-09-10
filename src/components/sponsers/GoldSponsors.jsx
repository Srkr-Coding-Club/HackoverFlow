import React from "react";

import GoldSponsorsItem from "./gold-sponsors/GoldSponsorItem";

const GoldSponsors = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-gray-800 to-gray-900 items-center w-full">
      <h1 className=" bg-[#CA8A045E] border-[#CA8A044D] border-[1px] border-solid text-white text-xl font-semibold py-2 px-12 max-lg:w-1/2 max-[470px]:px-2 w-fit rounded-2xl text-center m-10 ">
        Gold Sponsors
      </h1>
      <div className="flex flex-wrap justify-center ">
        <GoldSponsorsItem
          icon={
            "https://www.duhacks.tech/sponsors_logos/Polygon_Logo-White.svg"
          }
          url={"https://google.com/"}
        />
        <GoldSponsorsItem
          icon={
            "https://www.duhacks.tech/sponsors_logos/Polygon_Logo-White.svg"
          }
          url={"https://google.com/"}
        />
        <GoldSponsorsItem
          icon={
            "https://www.duhacks.tech/sponsors_logos/Polygon_Logo-White.svg"
          }
          url={"https://google.com/"}
        />
        <GoldSponsorsItem
          icon={
            "https://www.duhacks.tech/sponsors_logos/Polygon_Logo-White.svg"
          }
          url={"https://google.com/"}
        />
        <GoldSponsorsItem
          icon={
            "https://www.duhacks.tech/sponsors_logos/Polygon_Logo-White.svg"
          }
          url={"https://google.com/"}
        />
      </div>
    </div>
  );
};

export default GoldSponsors;
