import React from "react";
import ScheduleContent from "./ScheduleContent";

const LeftSchedule = (props) => {
  const idx = props.idx || 0;
  const top = parseFloat((0.7 * idx).toFixed(2)).toString();
  const pos = props.pos;

  var posStyles = "";

  if (idx == 0) {
    posStyles = "border-t-0 rounded-tr-[0px]";
  }

  if (props.isLast) {
    posStyles = " border-b-0 rounded-br-[0px]";
  }

  return (
    <div
      className="relative flex w-full "
      style={{ top: `-${top}rem` }}>
      <ScheduleContent
        isLeft={true}
        time={props.time}
        title={props.title}
        description={props.description}
      />
      <div
        className={`absolute right-0 h-full border-l-0 rounded-r-[50px] w-1/2 border-[#d946ef] border-[0.70rem] border-solid ${posStyles}`}></div>
      <div className="h-8 bg-white aspect-square border-solid border-[10px] absolute border-[#d946ef] rounded-full right-[-0.6rem] top-16"></div>
    </div>
  );
};

export default LeftSchedule;
