import React from "react";

const TimeLineCard = ({ status, callLogo }) => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="space-y-4 ">
      <div className="flex items-center gap-3 bg-base-100 rounded-md p-4 shadow">
        <div>
          <img src={callLogo} alt="Call" />
        </div>
        <div>
          <p>
            <span className="font-bold">Call</span> with {status.name}
          </p>
          <p>{today}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeLineCard;
