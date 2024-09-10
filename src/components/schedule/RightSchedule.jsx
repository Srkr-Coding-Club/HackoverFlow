import React from "react";

import ScheduleContent from "./ScheduleContent";

const RightSchedule = (props) => {
  const idx = props.idx || 0;
  const top = parseFloat((0.7 * idx).toFixed(2)).toString();

  var posStyles = "";

  if (idx == 0) {
    posStyles = "border-t-0 rounded-tl-[0px]";
  }
  
  if (props.isLast) {
    posStyles = " border-b-0 rounded-bl-[0px]";
  }

  return (
    <div
      className="relative flex justify-start w-full"
      style={{ top: `-${top}rem` }}>
      <ScheduleContent
        time={props.time}
        title={props.title}
        description={props.description}
      />
      <div
        className={`absolute left-0 h-full border-r-0 rounded-l-[50px] w-1/2 border-[#d946ef] border-[0.7rem] border-solid ${posStyles}`}></div>
      <div className="h-8 bg-white aspect-square border-solid border-[10px] absolute border-[#d946ef] rounded-full left-[-0.6rem] top-16"></div>
    </div>
  );
};

export default RightSchedule;
