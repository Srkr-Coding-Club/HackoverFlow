import React from "react";

const LeftSchedule = (props) => {
  const time = props.time;
  const title = props.title;
  const description = props.description;
  const idx = props.idx;

  const bottom = idx * 0.9;

  const last = props.last || false;

  return (
    <div
      className={`relative flex items-center w-fit `}
      style={{ bottom: `${bottom}rem` }}>
      <div className="absolute z-[5] bg-white border-[12px] h-10 w-10 left-[-10px] top-[90px] rounded-full border-solid border-[#d946ef] "></div>
      <div
        className={`w-8/12 max-sm:w-[53%] h-full absolute border-[#d946ef] border-[15px] border-r-0  ${
          last ? "rounded-tl-[50px] border-b-0" : "rounded-l-[50px]"
        } `}></div>
      <div className=" max-sm:max-w-48 max-sm:w-full max-sm:my-10 max-sm:ml-10 my-16 ml-16 max-sm:px-4 max-sm:py-5 px-8 py-10  min-w-[300px] max-w-[400px] bg-[#1b1b1e] max-sm:pr-2 flex flex-col rounded-3xl gap-2 border-[#202023] border-4">
        <h1 className="text-2xl font-bold text-[#d946ef] whitespace-normal ">
          {time}
        </h1>
        <h2 className="text-lg font-medium text-white whitespace-normal ">
          {title}
        </h2>
        <p className="text-white whitespace-normal ">{description}</p>
      </div>
    </div>
  );
};

export default LeftSchedule;