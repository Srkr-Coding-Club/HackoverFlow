import React, { useState } from "react";
import queryList from "../constants/querylist";

const Query = () => {
  return (
    <div className=" my-40 w-full  flex flex-row max-lg:flex-col max-lg:items-center justify-center gap-10">
      <div className=" w-5/12 max-sm:w-full flex flex-col justify-between max-sm:items-center items-end ">
        <div className="flex flex-col gap-10 max-lg:items-center items-end">
          <lable className="titles w-full text-center font-semibold text-5xl text-white">
            Have a query ?
          </lable>
          <span className=" text-white max-lg:text-center w-5/6  ">
            Join with DUHacks and experience the breeze of hackathon with us.
          </span>
        </div>
        <div className="h-full flex justify-center items-center w-full max-lg:hidden">
          <img
            src="https://www.duhacks.tech/assets/images/mascot.svg"
            className=" h-80 scale-x-[-1]"
          />
        </div>
      </div>
      <div className=" w-5/12 max-lg:w-10/12 ">
        <hr className="h-[1px] border-gray-700 border-0 border-t-[1px] "></hr>
        {queryList.map((query, index) => {
          return (
            <QueryItem
              key={index}
              question={query.question}
              answer={query.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

const QueryItem = (props) => {
  const [showAns, setShoeAns] = useState(false);

  return (
    <>
      <div className=" w-full flex justify-between items-center py-6">
        <lable className=" font-medium text-lg text-white">
          {props.question}
        </lable>
        <span
          className={`material-symbols-outlined ml-4  text-white cursor-pointer flex justify-center transition-all duration-300  ${
            showAns ? "rotate-[-90deg]" : "rotate-[90deg]"
          }`}
          onClick={() => setShoeAns(!showAns)}>
          arrow_back_ios
        </span>
      </div>
      <p className={`text-base text-gray-300 pb-8 ${showAns ? "" : "hidden"} `}>
        {props.answer}
      </p>
      <hr className="h-[1px] border-gray-700 border-0 border-t-[1px]"></hr>
    </>
  );
};

export default Query;
