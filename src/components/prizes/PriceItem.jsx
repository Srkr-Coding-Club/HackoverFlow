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

  // New prize amounts for each rank
  const prizes = {
    1: "Rs.15000",
    2: "Rs.9000",
    3: "Rs.6000",
  };

  const prizeAmount = prizes[props.rank] || "Rs.5000"; // Default prize amount if no rank is passed

  // Award descriptions for each rank
  const awards = {
    1: [
      "Cash prize of Rs.15000",
      "Wolfram award for a year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro. The value of each award is $375.00.",
    ],
    2: [
      "Cash prize of Rs.9000",
      "1-year subscription to JetBrains products",
    ],
    3: [
      "Cash prize of Rs.6000",
      "XYZ Hackathon goodies and T-shirt",
    ],
    0: [
      "Participation certificate",
      "Access to exclusive webinars and talks",
    ],
  };

  const awardList = awards[props.rank] || awards[0];

  return (
    <div
      className={`glassy-div w-[21rem] h-[29rem] max-[1100px]:w-[13.8rem] max-[1100px]:h-[20rem] flex flex-col items-center gap-4 max-[1100px]:p-1 p-1 rounded-3xl relative overflow-hidden m-4`}>
      <img className="w-[50%] mx-auto" src={icon}></img>
      <ul className="mt-[8%] max-[1100px]:mt-[2%] pl-[10%] text-[1.15rem] max-[1100px]:text-[0.8rem] text-white list-disc flex flex-col gap-2 h-[45%]">
        {awardList.map((award, index) => (
          <li key={index}>
            {award.includes("Rs.") ? (
              <span className="text-blue-500">{award}</span>
            ) : (
              award
            )}
          </li>
        ))}
      </ul>
      <div className="absolute w-[150%] rounded-full aspect-square bg-[#232323] -z-10 translate-y-[-65%]"></div>
    </div>
  );
};

export default PriceItem;
