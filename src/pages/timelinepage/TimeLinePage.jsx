import React, { useContext } from "react";
import { FriendsContext } from "../../context/FriendContext";
import TimeLineCard from "./TimeLineCard";

const TimeLinePage = () => {
  const { callStatus, setCallStatus, callLogo } = useContext(FriendsContext);
  return (
    <div className="w-11/12 mx-auto p-5 space-y-5">
      <h2 className="text-2xl font-bold mb-6 mt-5">Timeline</h2>
      {callStatus.map((status, inx) => (
        <TimeLineCard
          key={inx}
          callLogo={callLogo}
          status={status}
        ></TimeLineCard>
      ))}
    </div>
  );
};

export default TimeLinePage;
