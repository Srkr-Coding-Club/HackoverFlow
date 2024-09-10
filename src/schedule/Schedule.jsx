import React from "react";

import LeftSchedule from "./FirstSchedule";
import RightSchedule from "./RightSchedule";
import FirstSchedule from "./FirstSchedule";

const Schedule = () => {
  return (
    <div id="schedule" className="flex justify-center w-screen ">
      <div className="ml-10 mr-6 w-fit">
        <FirstSchedule
          time="24th Feb 8:3O AM"
          title="Check-in starts"
          description="Starting off with guidance sessions... Starting off with guidance s"
        />
        <RightSchedule
          time="24th Feb 8:3O AM"
          title="Check-in starts"
          description="Starting off with guidance sessions... Starting off with guidance s"
          idx={1}
        />
        <LeftSchedule
          idx={2}
          time="24th Feb 8:3O AM"
          title="Check-in starts"
          description="Starting off with guidance sessions... Starting off with guidance s"
        />
        <RightSchedule
          idx={3}
          last={true}
          time="24th Feb 8:3O AM"
          title="Check-in starts"
          description="Starting off with guidance sessions... Starting off with guidance s"
        />
      </div>
    </div>
  );
};

export default Schedule;