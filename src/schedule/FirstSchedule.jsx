import React from "react";

const FirstSchedule = (props) => {
  const time = props.time;
  const title = props.title;
  const description = props.description;

  return (
    <div className="relative flex items-center w-fit ">
      <div className="absolute z-[5] bg-white border-[12px] h-10 w-10 left-[-10px] top-0 rounded-full border-solid border-[#d946ef] "></div>
      <div className="w-7/12 max-sm:w-[53%] h-full absolute border-l-[#d946ef] border-b-[#d946ef] border-l-[15px] border-b-[15px] rounded-bl-[50px]  "></div>
      <div className="max-sm:max-w-[200px] max-sm:w-full max-sm:my-10 max-sm:ml-10 my-16 ml-16 max-sm:px-4 max-sm:py-5 px-8 py-10 min-w-[300px] max-w-[400px] bg-[#1b1b1e] flex flex-col w-fit max:sm:pr-2 rounded-3xl gap-2 border-[#202023] border-4">
        <h1 className="text-2xl font-bold text-[#d946ef] whitespace-normal ">
          {time}
        </h1>
        <h2 className="text-lg font-medium text-white whitespace-normal ">
          {title}
        </h2>
        <p className="text-white ">{description}</p>
      </div>
    </div>
  );
};

export default FirstSchedule;