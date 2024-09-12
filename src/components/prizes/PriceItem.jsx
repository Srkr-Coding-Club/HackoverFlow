import React from "react";

const PriceItem = (props) => {
  const ranks = {
    0: "https://www.duhacks.tech/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FTarikul-Islam-Anik%2FAnimated-Fluent-Emojis%2Fmaster%2FEmojis%2FActivities%2FSparkles.png&w=128&q=75",
    1: "/1st_Place_Medal.webp",
    2: "/2nd_Place_Medal.webp",
    3: "/3rd_Place_Medal.webp",
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
      "Check of ₹15,000",
      "First Prize – Memento",
      "Awarded to the team with the most innovative and impactful project.",
    ],
    2: [
      "Check of ₹9,000",
      "Second Prize – Memento",
      ,
      "Given to the second-best team for creativity, technical excellence, and impactful solutions.",
    ],
    3: [
      "Check of ₹6,000",
      "Third Prize – Memento",
      "Awarded to the third-best team for commendable innovation and technical skill.",
    ],
    0: ["Participation certificate", "Access to exclusive webinars and talks"],
  };

  const awardList = awards[props.rank] || awards[0];

  return (
    <div
      className={`glassy-div w-[21rem] h-[29rem] max-[1100px]:w-[13.8rem] max-[1100px]:h-[20rem] flex flex-col items-center gap-4 max-[1100px]:p-1 p-1 rounded-3xl relative overflow-hidden m-4 `}>
      <img className="w-[50%] mx-auto" src={icon}></img>
      <ul className="mt-[8%] max-[1100px]:mt-[2%] pl-[10%] text-[1.15rem] max-[1100px]:text-[0.8rem] text-white list-disc flex justify-center flex-col gap-2 h-[45%]">
        {awardList.map((award, index) => (
          <li key={index}>
            {index == 0 ? (
              <span className="font-semibold text-orange-300 ">{award}</span>
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
