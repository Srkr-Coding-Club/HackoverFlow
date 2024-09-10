import React from "react";

const PriceItem = (props) => {
  const ranks = {
    0: "https://www.duhacks.tech/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FTarikul-Islam-Anik%2FAnimated-Fluent-Emojis%2Fmaster%2FEmojis%2FActivities%2FSparkles.png&w=128&q=75",
    1: "https://www.duhacks.tech/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FTarikul-Islam-Anik%2FAnimated-Fluent-Emojis%2Fmaster%2FEmojis%2FActivities%2F1st%2520Place%2520Medal.png&w=256&q=75",
    2: "https://www.duhacks.tech/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FTarikul-Islam-Anik%2FAnimated-Fluent-Emojis%2Fmaster%2FEmojis%2FActivities%2F2nd%2520Place%2520Medal.png&w=256&q=75",
    3: "https://www.duhacks.tech/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FTarikul-Islam-Anik%2FAnimated-Fluent-Emojis%2Fmaster%2FEmojis%2FActivities%2F3rd%2520Place%2520Medal.png&w=256&q=75",
  };

  const iconNum = props.rank || 0;

  const icon = ranks[iconNum];

  return (
    <div
      className={`glassy-div w-[21rem] h-[29rem] max-[1100px]:w-[13.8rem] max-[1100px]:h-[20rem] flex flex-col items-center gap-4 max-[1100px]:p-1 p-1 rounded-3xl relative overflow-hidden m-4`}>
      <img className="w-[50%] mx-auto" src={icon}></img>
      <ul className=" mt-[8%] max-[1100px]:mt-[2%] pl-[10%] text-[1.15rem] max-[1100px]:text-[0.8rem] text-white list-disc flex flex-col gap-2 h-[45%]">
        <li>
          Cash prize of <span className="text-blue-500 ">Rs.5000</span>
        </li>
        <li>
          Wolfram award for a year of Wolfram|One Personal Edition plus a
          one-year subscription to Wolfram|Alpha Pro. The value of each award is
          $375.00.
        </li>
      </ul>
      <button className="absolute w-1/2 p-2 max-[100px]:p1 text-sm text-white bg-black rounded-3xl bottom-4">
        More
      </button>
      <div className="absolute w-[150%] rounded-full aspect-square bg-[#232323] -z-10 translate-y-[-65%]"></div>
    </div>
  );
};

export default PriceItem;

