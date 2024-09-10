import React from "react";

import RightSchedule from "./schedule/RightSchedule";
import LeftSchedule from "./schedule/LeftSchedule";

const Schedule = () => {
  return (
    <>
      <div className="flex bg-gradient-to-r from-gray-800 to-gray-900 flex-col items-center w-full">
        <h1 className="my-20 text-5xl font-semibold text-white titles">
          Schedule
        </h1>
        <div className="w-[30rem] max-sm:w-[20rem] flex flex-col items-center">
          <RightSchedule
            idx={0}
            time={"15th Feb 5:3O PM"}
            title={"Workshops Starts"}
            description={
              " We'll review your application and will let you know. We'll review your application and will let you know."
            }
          />
          <LeftSchedule
            idx={1}
            time={"15th Feb 5:3O PM"}
            title={"Workshops Starts"}
            description={
              " We'll review your application and will let you know. We'll review your application and will let you know."
            }
          />
          <RightSchedule
            idx={2}
            time={"15th Feb 5:3O PM"}
            title={"Workshops Starts"}
            description={
              " We'll review your application and will let you know. We'll review your application and will let you know."
            }
          />
          <LeftSchedule
            isLast={true}
            idx={3}
            time={"15th Feb 5:3O PM"}
            title={"Workshops Starts"}
            description={
              " We'll review your application and will let you know. We'll review your application and will let you know."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Schedule;
