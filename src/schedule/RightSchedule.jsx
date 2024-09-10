import React from "react";

const RightSchedule = (props) => {
  const time = props.time;
  const title = props.title;
  const description = props.description;
  const idx = props.idx;

  const bottom = idx * 0.9;

  console.log(idx);

  const last = props.last || false;

  return (
    <>
    <div
      className={`relative flex items-center justify-end w-fit right-[1px] `}
      style={{ bottom: `${bottom}rem` }}>
      <div className="absolute z-[5] bg-white border-[12px] h-10 w-10 right-[-10px] top-[90px] rounded-full border-solid border-[#d946ef] "></div>
      <div
        className={`w-8/12 max-sm:w-[53%] h-full absolute border-[#d946ef] border-[15px]   border-l-0 ${
          last ? "rounded-tr-[50px] border-b-0" : "rounded-r-[50px]"
        } `}></div>
      <div className=" max-sm:max-w-[200px] max-sm:w-full max-sm:mx-10 max-sm:my-10 my-16 mr-16 max-sm:px-4 max-sm:py-5  px-8 py-10 bg-[#1b1b1e] min-w-[300px] max-w-[400px] flex flex-col max-sm:pl-2 rounded-3xl gap-2 max-sm:gap-1 border-[#202023] border-4 items-end">
        <h1 className="text-2xl font-bold text-[#d946ef] whitespace-normal ">
          {time}
        </h1>
        <h2 className="text-lg font-medium text-white whitespace-normal ">
          {title}
        </h2>
        <p className="text-right text-white whitespace-normal ">
          {description}
        </p>
      </div>
    </div>
    </>
  );
};

export default RightSchedule;